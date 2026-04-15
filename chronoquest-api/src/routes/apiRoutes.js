const express = require('express');
const router = express.Router();

const Teacher = require('../models/teacherModel');
const Student = require('../models/studentModel');
const { protect } = require('../middleware/authMiddleware');
const generateClassCode = require('../utils/generateCode');

const authRoutes = require('./authRoutes');
const adminRoutes = require('./adminRoutes');
const questionRoutes = require('./questionRoutes');

const studentController = require('../controllers/studentController');


router.get('/test', (req, res) => res.json({ message: "API is working on Port 5000!" }));

router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);
router.use('/questions', questionRoutes);

router.post('/teacher/add-section', protect, async (req, res) => {
    const { sectionName } = req.body;

    if (!sectionName || sectionName.trim() === '') {
        return res.status(400).json({ message: "Section name is required and cannot be empty" });
    }

    // NEW: Validate section name length
    if (sectionName.length > 100) {
        return res.status(400).json({ message: "Section name cannot exceed 100 characters" });
    }

    try {
        const teacherId = req.user._id;
        const teacher = await Teacher.findById(teacherId);

        // NEW: Check for duplicate section name
        const duplicateSection = teacher.sections?.some(s =>
            s.sectionName.toLowerCase() === sectionName.toLowerCase()
        );

        if (duplicateSection) {
            return res.status(409).json({
                message: "A section with this name already exists. Please use a different name.",
                errorCode: 'DUPLICATE_SECTION'
            });
        }

        const newClassCode = generateClassCode();
        const newSection = { sectionName, classCode: newClassCode };

        const updatedTeacher = await Teacher.findByIdAndUpdate(
            teacherId,
            { $push: { sections: newSection } },
            { new: true }
        ).select('-password');

        res.status(201).json({
            message: "Section created successfully",
            section: newSection,
            updatedTeacher: updatedTeacher
        });
    } catch (error) {
        console.error("Add Section Error:", error);
        res.status(500).json({ message: "Server error adding section" });
    }
});

router.delete('/teacher/delete-section/:classCode', protect, async (req, res) => {
    try {
        const { classCode } = req.params;
        const teacherId = req.user._id;

        const updatedTeacher = await Teacher.findByIdAndUpdate(
            teacherId,
            { $pull: { sections: { classCode: classCode } } },
            { new: true }
        ).select('-password');

        res.json({ updatedTeacher, message: "Section removed" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting section" });
    }
});

router.post('/teacher/archive-section/:classCode', protect, async (req, res) => {
    try {
        const { classCode } = req.params;
        const teacherId = req.user._id;

        const teacher = await Teacher.findById(teacherId);

        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        const sectionIndex = teacher.sections.findIndex(s => s.classCode === classCode);

        if (sectionIndex === -1) {
            return res.status(403).json({ message: 'Section not found in your classes' });
        }

        teacher.sections[sectionIndex].isArchived = true;
        teacher.sections[sectionIndex].archivedAt = new Date();

        await teacher.save();

        const updatedTeacher = await Teacher.findById(teacherId).select('-password');
        res.json({ updatedTeacher, message: "Section archived successfully" });
    } catch (error) {
        console.error("Archive Section Error:", error);
        res.status(500).json({ message: "Error archiving section" });
    }
});

router.post('/teacher/unarchive-section/:classCode', protect, async (req, res) => {
    try {
        const { classCode } = req.params;
        const teacherId = req.user._id;

        const teacher = await Teacher.findById(teacherId);

        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        const sectionIndex = teacher.sections.findIndex(s => s.classCode === classCode);

        if (sectionIndex === -1) {
            return res.status(403).json({ message: 'Section not found in your classes' });
        }

        teacher.sections[sectionIndex].isArchived = false;
        teacher.sections[sectionIndex].archivedAt = null;

        await teacher.save();

        const updatedTeacher = await Teacher.findById(teacherId).select('-password');
        res.json({ updatedTeacher, message: "Section restored successfully" });
    } catch (error) {
        console.error("Unarchive Section Error:", error);
        res.status(500).json({ message: "Error restoring section" });
    }
});

router.get('/analytics/overall', protect, async (req, res) => {
    try {
        if (!req.user.sections || req.user.sections.length === 0) {
            return res.json([]);
        }

        const includeArchived = req.query.includeArchived === 'true';

        const activeSections = includeArchived
            ? req.user.sections
            : req.user.sections.filter(s => !s.isArchived);

        if (activeSections.length === 0) {
            return res.json([]);
        }

        const codes = activeSections.map(s => s.classCode);

        const students = await Student.find({
            classCode: { $in: codes }
        }).select('name score classCode levelReached');

        const formattedScores = students.map(s => ({
            studentName: s.name,
            score: s.score || 0,
            classCode: s.classCode,
            levelReached: s.levelReached || "Era 1"
        }));

        res.json(formattedScores);
    } catch (error) {
        console.error("Analytics Error:", error);
        res.status(500).json({ message: "Error fetching analytics data" });
    }
});

router.post('/students', protect, async (req, res) => {
    try {
        const { name, email, password, classCode, score, levelReached } = req.body;

        const teacherSections = req.user.sections.map(s => s.classCode);
        if (!teacherSections.includes(classCode)) {
            return res.status(403).json({ message: 'You can only add students to your own sections' });
        }

        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: 'Student with this email already exists' });
        }

        // Validate score range
        if (score !== undefined && (score < 0 || score > 100)) {
            return res.status(400).json({ message: 'Score must be between 0 and 100' });
        }

        const student = await Student.create({
            name,
            email,
            password,
            classCode,
            score: score || 0,
            levelReached: levelReached || "Era 1: Prehistoric"
        });

        res.status(201).json({
            _id: student._id,
            name: student.name,
            email: student.email,
            classCode: student.classCode,
            score: student.score,
            levelReached: student.levelReached
        });
    } catch (error) {
        console.error("Add Student Error:", error);
        res.status(500).json({ message: "Error adding student" });
    }
});

router.put('/students/:id', protect, async (req, res) => {
    try {
        const { name, email, score, levelReached } = req.body;
        const studentId = req.params.id;

        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        const teacherSections = req.user.sections.map(s => s.classCode);
        if (!teacherSections.includes(student.classCode)) {
            return res.status(403).json({ message: 'You can only update students in your sections' });
        }

        if (name) student.name = name;
        if (email) {
            const emailExists = await Student.findOne({ email, _id: { $ne: studentId } });
            if (emailExists) {
                return res.status(400).json({ message: 'Email already in use' });
            }
            student.email = email;
        }
        if (score !== undefined) {
            const validScore = Math.min(Math.max(score, 0), 100);
            student.score = validScore;
        }
        if (levelReached) student.levelReached = levelReached;

        await student.save();

        res.json({
            _id: student._id,
            name: student.name,
            email: student.email,
            classCode: student.classCode,
            score: student.score,
            levelReached: student.levelReached
        });
    } catch (error) {
        console.error("Update Student Error:", error);
        res.status(500).json({ message: "Error updating student" });
    }
});

router.delete('/students/:id', protect, async (req, res) => {
    try {
        const studentId = req.params.id;

        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        const teacherSections = req.user.sections.map(s => s.classCode);
        if (!teacherSections.includes(student.classCode)) {
            return res.status(403).json({ message: 'You can only delete students in your sections' });
        }

        await Student.findByIdAndDelete(studentId);
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        console.error("Delete Student Error:", error);
        res.status(500).json({ message: "Error deleting student" });
    }
});


router.post('/student/sync', studentController.simulateSync);

module.exports = router;