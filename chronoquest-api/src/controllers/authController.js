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
        const { name, email, password, userType, classCode, score, levelReached } = req.body;

        // Validate email format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: 'Invalid email format',
                errorCode: 'INVALID_EMAIL_FORMAT'
            });
        }

        // Validate password strength
        if (!password || password.length < 6) {
            return res.status(400).json({
                message: 'Password must be at least 6 characters',
                errorCode: 'PASSWORD_TOO_WEAK'
            });
        }

        // If registering as student
        if (userType === 'student') {
            // Check for existing active students with this email
            const studentExists = await Student.findOne({ email, isDeleted: false });
            if (studentExists) {
                return res.status(400).json({
                    message: 'Email already registered',
                    errorCode: 'EMAIL_ALREADY_EXISTS'
                });
            }

            // Validate classCode
            if (!classCode) {
                return res.status(400).json({
                    message: 'Class code is required for student registration',
                    errorCode: 'CLASS_CODE_REQUIRED'
                });
            }

            const student = await Student.create({
                name,
                email,
                password,
                classCode,
                score: score || 0,
                levelReached: levelReached || 'Era 1: Pre-Colonial',
                isDeleted: false
            });

            await ActivityLog.create({
                userId: student._id,
                userModel: 'Student',
                userRole: 'student',
                action: 'REGISTER',
                resource: 'student',
                status: 'success',
                details: {
                    email: student.email,
                    name: student.name,
                    classCode: student.classCode,
                    timestamp: new Date()
                }
            });

            return res.status(201).json({
                message: 'Student registered successfully',
                _id: student._id,
                name: student.name,
                email: student.email,
                classCode: student.classCode,
                score: student.score,
                levelReached: student.levelReached,
                role: 'student',
                token: generateToken(student._id, 'student')
            });
        }

        // Default: Register as teacher
        const teacherExists = await Teacher.findOne({ email, isDeleted: false });
        if (teacherExists) {
            return res.status(400).json({
                message: 'Email already registered',
                errorCode: 'EMAIL_ALREADY_EXISTS'
            });
        }

        const teacher = await Teacher.create({
            name,
            email,
            password,
            sections: [],
            isDeleted: false
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

        // First check in teachers collection (active only)
        let user = await Teacher.findOne({ email, isDeleted: false });
        let userType = 'teacher';

        // If not found in teachers, check students collection (active only)
        if (!user) {
            user = await Student.findOne({ email, isDeleted: false });
            userType = 'student';
        }

        // If user not found in either collection
        if (!user) {
            return res.status(401).json({
                message: 'Email not registered or account has been deleted',
                errorCode: 'EMAIL_NOT_FOUND'
            });
        }

        // Verify password
        const passwordMatches = await user.matchPassword(password);
        if (!passwordMatches) {
            return res.status(401).json({
                message: 'Incorrect password',
                errorCode: 'INCORRECT_PASSWORD'
            });
        }

        // Update last login
        await user.updateOne({ lastLogin: new Date() });

        await ActivityLog.create({
            userId: user._id,
            userModel: userType === 'teacher' ? 'Teacher' : 'Student',
            userRole: user.role || 'student',
            action: 'LOGIN',
            resource: userType,
            status: 'success'
        });

        res.status(200).json({
            message: 'Login successful',
            token: generateToken(user._id, user.role || userType),
            teacher: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role || userType,
                sections: user.sections || [],
                classCode: user.classCode || null
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.validateToken = async (req, res) => {
    try {
        const user = await Teacher.findOne({ _id: req.user._id, isDeleted: false }).select('-password');
        if (!user) {
            return res.status(401).json({ message: 'User not found or has been deleted' });
        }

        res.status(200).json({
            message: 'Token is valid',
            isValid: true,
            user: user  // ← Return FULL user object with sections
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTeacherProfile = async (req, res) => {
    try {
        const teacher = await Teacher.findOne({ _id: req.user._id, isDeleted: false }).select('-password');
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found or has been deleted' });
        }

        res.status(200).json({ message: 'Profile retrieved', teacher });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateTeacherProfile = async (req, res) => {
    try {
        const { name, email } = req.body;

        // Check if email already exists (excluding current user)
        if (email) {
            const existingTeacher = await Teacher.findOne({
                email,
                _id: { $ne: req.user._id },
                isDeleted: false
            });
            if (existingTeacher) {
                return res.status(400).json({ message: 'Email already in use' });
            }
        }

        const updateData = {};
        if (name) updateData.name = name;
        if (email) updateData.email = email;

        const teacher = await Teacher.findByIdAndUpdate(
            req.user._id,
            updateData,
            { new: true }
        ).select('-password');

        if (!teacher || teacher.isDeleted) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        await ActivityLog.create({
            userId: req.user._id,
            userModel: 'Teacher',
            userRole: req.user.role,
            action: 'UPDATE_PROFILE',
            resource: 'teacher',
            resourceId: req.user._id,
            status: 'success'
        });

        res.status(200).json({ message: 'Profile updated successfully', teacher });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        const teacher = await Teacher.findById(req.user._id);
        if (!teacher) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordCorrect = await teacher.matchPassword(currentPassword);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Current password is incorrect' });
        }

        teacher.password = newPassword;
        await teacher.save();

        await ActivityLog.create({
            userId: req.user._id,
            userModel: 'Teacher',
            userRole: req.user.role,
            action: 'CHANGE_PASSWORD',
            resource: 'teacher',
            status: 'success'
        });

        res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.submitFeedback = async (req, res) => {
    try {
        const { title, description, type, priority } = req.body;

        // Get the teacher's email
        const teacher = await Teacher.findById(req.user._id);
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        const feedback = await Feedback.create({
            title,
            description,
            type,
            priority: priority || 'medium',
            submittedBy: req.user._id,
            email: teacher.email
        });

        res.status(201).json({ message: 'Feedback submitted successfully', feedback });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = exports;