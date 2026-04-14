const Teacher = require('../models/teacherModel');
const Student = require('../models/studentModel');
const Feedback = require('../models/feedbackModel');
const ActivityLog = require('../models/activityLogModel');
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

        const teacher = await Teacher.create({
            name,
            email,
            password,
            sections: []
        });


        await ActivityLog.create({
            userId: teacher._id,
            userModel: 'Teacher',
            userRole: 'teacher',
            action: 'REGISTER',
            resource: 'teacher',
            status: 'success',
            details: {
                email: teacher.email,
                name: teacher.name,
                timestamp: new Date()
            }
        });

        res.status(201).json({
            message: 'User registered successfully',
            _id: teacher._id,
            name: teacher.name,
            email: teacher.email,
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

        // First check in teachers collection
        let user = await Teacher.findOne({ email });
        let userType = 'teacher';

        // If not found in teachers, check students collection
        if (!user) {
            user = await Student.findOne({ email });
            userType = 'student';
        }

        // If user not found in either collection
        if (!user) {
            return res.status(401).json({
                message: 'Email not registered',
                errorCode: 'EMAIL_NOT_FOUND'
            });
        }

        // Verify password
        const passwordMatches = await user.matchPassword(password);
        if (!passwordMatches) {
            return res.status(401).json({
                message: 'Incorrect password',
                errorCode: 'PASSWORD_INCORRECT'
            });
        }

        // Check if user account is active
        if (user.isActive === false) {
            return res.status(401).json({
                message: 'User account deactivated',
                errorCode: 'USER_DEACTIVATED'
            });
        }

        // FIX: Log the login activity
        await ActivityLog.create({
            userId: user._id,
            userModel: userType === 'teacher' ? 'Teacher' : 'Student',
            userRole: userType === 'teacher' ? (user.role || 'teacher') : 'student',
            action: 'LOGIN',
            resource: userType,
            status: 'success',
            details: {
                email: user.email,
                userType: userType,
                timestamp: new Date()
            }
        });

        // Return appropriate response based on user type
        if (userType === 'teacher') {
            return res.json({
                message: 'Login successful',
                _id: user._id,
                name: user.name,
                email: user.email,
                classCode: user.classCode,
                sections: user.sections,
                role: user.role,
                userType: 'teacher',
                token: generateToken(user._id, user.role)
            });
        } else {
            return res.json({
                message: 'Login successful',
                _id: user._id,
                name: user.name,
                email: user.email,
                classCode: user.classCode,
                score: user.score,
                levelReached: user.levelReached,
                userType: 'student',
                token: generateToken(user._id, 'student')
            });
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
            message: 'Profile updated successfully',
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
                message: 'Section deleted successfully',
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

        // FIX: Log the feedback submission activity
        await ActivityLog.create({
            userId: teacherId,
            userModel: 'Teacher',
            userRole: req.user.role || 'teacher',
            action: 'SUBMIT_FEEDBACK',
            resource: 'feedback',
            resourceId: feedback._id,
            status: 'success',
            details: {
                feedbackTitle: title,
                feedbackType: type,
                priority: priority || 'medium',
                timestamp: new Date()
            }
        });

        res.status(201).json({
            message: 'Feedback submitted successfully',
            feedback
        });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting feedback', error: error.message });
    }
};

exports.getTeacherProfile = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.user._id).select('-password');

        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        res.json({
            _id: teacher._id,
            name: teacher.name,
            email: teacher.email,
            sections: teacher.sections,
            role: teacher.role
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching profile', error: error.message });
    }
};

exports.changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        if (!currentPassword || !newPassword) {
            return res.status(400).json({ message: 'Current password and new password are required' });
        }

        if (newPassword.length < 6) {
            return res.status(400).json({ message: 'New password must be at least 6 characters' });
        }

        const teacher = await Teacher.findById(req.user._id);

        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        // Verify current password
        const passwordMatches = await teacher.matchPassword(currentPassword);
        if (!passwordMatches) {
            return res.status(401).json({ message: 'Current password is incorrect' });
        }

        // Update password
        teacher.password = newPassword;
        await teacher.save();

        // Log the password change
        await ActivityLog.create({
            userId: teacher._id,
            userModel: 'Teacher',
            userRole: teacher.role || 'teacher',
            action: 'CHANGE_PASSWORD',
            resource: 'profile',
            status: 'success',
            details: {
                email: teacher.email,
                timestamp: new Date()
            }
        });

        res.json({ message: 'Password changed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error changing password', error: error.message });
    }
};


exports.validateToken = async (req, res) => {
    try {
        res.status(200).json({ valid: true, teacher: req.teacher });
    } catch (error) {
        res.status(401).json({ valid: false });
    }
};