const Teacher = require('../models/teacherModel');
const Feedback = require('../models/feedbackModel');
const jwt = require('jsonwebtoken');

// Helper to generate JWT
const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: 'Invalid email format',
                errorCode: 'INVALID_EMAIL_FORMAT'
            });
        }

        const teacherExists = await Teacher.findOne({ email });
        if (teacherExists) {
            return res.status(400).json({
                message: 'Email already registered',
                errorCode: 'EMAIL_ALREADY_EXISTS'
            });
        }

        // Validate password strength
        if (!password || password.length < 6) {
            return res.status(400).json({
                message: 'Password must be at least 6 characters',
                errorCode: 'PASSWORD_TOO_WEAK'
            });
        }

        const generatedCode = Math.random().toString(36).substring(2, 8).toUpperCase();

        const teacher = await Teacher.create({
            name,
            email,
            password,
            classCode: generatedCode,
            sections: []
        });

        res.status(201).json({
            _id: teacher._id,
            name: teacher.name,
            email: teacher.email,
            classCode: teacher.classCode,
            sections: teacher.sections,
            role: 'teacher',
            token: generateToken(teacher._id, 'teacher')
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: 'Invalid email format',
                errorCode: 'INVALID_EMAIL_FORMAT'
            });
        }

        const teacher = await Teacher.findOne({ email });

        if (!teacher) {
            return res.status(401).json({
                message: 'Email not registered',
                errorCode: 'EMAIL_NOT_FOUND'
            });
        }

        const passwordMatches = await teacher.matchPassword(password);
        if (!passwordMatches) {
            return res.status(401).json({
                message: 'Incorrect password',
                errorCode: 'PASSWORD_INCORRECT'
            });
        }

        return res.json({
            _id: teacher._id,
            name: teacher.name,
            email: teacher.email,
            classCode: teacher.classCode,
            sections: teacher.sections,
            role: teacher.role,
            token: generateToken(teacher._id, teacher.role)
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTeacherProfile = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.user._id);
        if (teacher) {
            res.json({
                _id: teacher._id,
                name: teacher.name,
                email: teacher.email,
                classCode: teacher.classCode,
                sections: teacher.sections,
                role: teacher.role
            });
        } else {
            res.status(404).json({ message: 'Teacher not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateTeacherProfile = async (req, res) => {
    try {
        const { name, email } = req.body;
        const teacher = await Teacher.findById(req.user._id);

        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        if (name) teacher.name = name;
        if (email) {
            const emailExists = await Teacher.findOne({ email, _id: { $ne: req.user._id } });
            if (emailExists) {
                return res.status(400).json({ message: 'Email already in use' });
            }
            teacher.email = email;
        }

        await teacher.save();

        res.json({
            _id: teacher._id,
            name: teacher.name,
            email: teacher.email,
            classCode: teacher.classCode,
            sections: teacher.sections,
            role: 'teacher'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.deleteSection = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.user._id);
        if (teacher) {
            // Filter using classCode (or whatever identifier you send from frontend)
            teacher.sections = teacher.sections.filter(
                (section) => section.classCode !== req.params.sectionId
            );

            await teacher.save();

            // Return the updated teacher object so the frontend can sync
            res.json({
                _id: teacher._id,
                name: teacher.name,
                email: teacher.email,
                classCode: teacher.classCode,
                sections: teacher.sections,
                role: 'teacher'
            });
        } else {
            res.status(404).json({ message: 'Teacher not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.submitFeedback = async (req, res) => {
    try {
        const { title, description, type, priority } = req.body;
        const teacherId = req.user._id;

        if (!title || !description || !type) {
            return res.status(400).json({ message: 'Title, description, and type are required' });
        }

        const teacher = await Teacher.findById(teacherId).select('email');
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        const feedback = await Feedback.create({
            title,
            description,
            type,
            submittedBy: teacherId,
            email: teacher.email,
            priority: priority || 'medium',
            status: 'open'
        });

        res.status(201).json({
            message: 'Feedback submitted successfully',
            feedback
        });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting feedback', error: error.message });
    }
};