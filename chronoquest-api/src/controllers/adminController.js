const Teacher = require('../models/teacherModel');
const Student = require('../models/studentModel');
const ActivityLog = require('../models/activityLogModel');
const Feedback = require('../models/feedbackModel');
const SystemSettings = require('../models/systemSettingsModel');

exports.getAllUsers = async (req, res) => {
    try {
        // Filter out deleted users
        const teachers = await Teacher.find({ isDeleted: false }).select('-password');
        const students = await Student.find({ isDeleted: false }).select('-password');

        const formattedTeachers = teachers.map(t => ({
            ...t.toObject(),
            userType: 'teacher',
            totalSections: t.sections?.length || 0
        }));

        const formattedStudents = students.map(s => ({
            ...s.toObject(),
            userType: 'student'
        }));

        res.json({
            message: 'Users retrieved successfully',
            teachers: formattedTeachers,
            students: formattedStudents,
            totalUsers: formattedTeachers.length + formattedStudents.length,
            totalTeachers: formattedTeachers.length,
            totalStudents: formattedStudents.length
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

exports.getDeletedUsers = async (req, res) => {
    try {
        const deletedTeachers = await Teacher.find({ isDeleted: true }).select('-password');
        const deletedStudents = await Student.find({ isDeleted: true }).select('-password');

        const formattedTeachers = deletedTeachers.map(t => ({
            ...t.toObject(),
            userType: 'teacher',
            totalSections: t.sections?.length || 0
        }));

        const formattedStudents = deletedStudents.map(s => ({
            ...s.toObject(),
            userType: 'student'
        }));

        res.json({
            message: 'Deleted users retrieved successfully',
            teachers: formattedTeachers,
            students: formattedStudents,
            total: formattedTeachers.length + formattedStudents.length
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching deleted users', error: error.message });
    }
};

exports.deactivateUser = async (req, res) => {
    try {
        const { userId, userType } = req.body;

        if (userType === 'teacher') {
            await Teacher.findByIdAndUpdate(userId, { isActive: false });
            await ActivityLog.create({
                userId: req.user._id,
                userModel: 'Teacher',
                userRole: req.user.role,
                action: 'DEACTIVATE_TEACHER',
                resourceId: userId,
                status: 'success'
            });
        } else if (userType === 'student') {
            await Student.findByIdAndUpdate(userId, { isActive: false });
            await ActivityLog.create({
                userId: req.user._id,
                userModel: 'Teacher',
                userRole: req.user.role,
                action: 'DEACTIVATE_STUDENT',
                resourceId: userId,
                status: 'success'
            });
        }

        res.json({ message: `User deactivated successfully` });
    } catch (error) {
        res.status(500).json({ message: 'Error deactivating user', error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { userId, userType } = req.body;

        if (!['teacher', 'student'].includes(userType)) {
            return res.status(400).json({
                message: 'Invalid userType. Use "teacher" or "student".',
                errorCode: 'INVALID_USER_TYPE'
            });
        }

        let deletedUser;

        if (userType === 'teacher') {
            const adminCount = await Teacher.countDocuments({ role: 'admin', isDeleted: false });
            const userToDelete = await Teacher.findById(userId);

            if (userToDelete && userToDelete.role === 'admin' && adminCount === 1) {
                return res.status(400).json({ message: 'Cannot delete the last admin account' });
            }

            // SOFT DELETE: Mark as deleted instead of removing
            deletedUser = await Teacher.findByIdAndUpdate(
                userId,
                {
                    isDeleted: true,
                    deletedAt: new Date()
                },
                { new: true }
            );
        } else if (userType === 'student') {
            // SOFT DELETE: Mark as deleted instead of removing
            deletedUser = await Student.findByIdAndUpdate(
                userId,
                {
                    isDeleted: true,
                    deletedAt: new Date()
                },
                { new: true }
            );
        }

        if (!deletedUser) {
            return res.status(404).json({ message: `${userType === 'teacher' ? 'Teacher' : 'Student'} not found` });
        }

        await ActivityLog.create({
            userId: req.user._id,
            userModel: 'Teacher',
            userRole: req.user.role,
            action: 'DELETE_USER',
            resource: userType,
            resourceId: userId,
            status: 'success'
        });

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};

// NEW: Restore a deleted user
exports.restoreUser = async (req, res) => {
    try {
        const { userId, userType } = req.body;

        if (!['teacher', 'student'].includes(userType)) {
            return res.status(400).json({ message: 'Invalid userType' });
        }

        let restoredUser;

        if (userType === 'teacher') {
            restoredUser = await Teacher.findByIdAndUpdate(
                userId,
                {
                    isDeleted: false,
                    deletedAt: null
                },
                { new: true }
            ).select('-password');
        } else if (userType === 'student') {
            restoredUser = await Student.findByIdAndUpdate(
                userId,
                {
                    isDeleted: false,
                    deletedAt: null
                },
                { new: true }
            ).select('-password');
        }

        if (!restoredUser) {
            return res.status(404).json({ message: `${userType === 'teacher' ? 'Teacher' : 'Student'} not found` });
        }

        await ActivityLog.create({
            userId: req.user._id,
            userModel: 'Teacher',
            userRole: req.user.role,
            action: 'RESTORE_USER',
            resource: userType,
            resourceId: userId,
            status: 'success'
        });

        res.json({ message: 'User restored successfully', user: restoredUser });
    } catch (error) {
        res.status(500).json({ message: 'Error restoring user', error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { userId, userType } = req.params;
        const { name, email, role } = req.body;

        if (!['teacher', 'student'].includes(userType)) {
            return res.status(400).json({ message: 'Invalid userType' });
        }

        if (name && (name.trim().length < 2 || name.trim().length > 100)) {
            return res.status(400).json({ message: 'Name must be between 2-100 characters' });
        }

        if (email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        if (userType === 'teacher') {
            if (email) {
                const existingTeacher = await Teacher.findOne({ email, _id: { $ne: userId }, isDeleted: false });
                if (existingTeacher) {
                    return res.status(400).json({ message: 'Email already in use' });
                }
            }

            if (role && !['teacher', 'admin'].includes(role)) {
                return res.status(400).json({ message: 'Invalid role' });
            }

            const updateData = {};
            if (name) updateData.name = name.trim();
            if (email) updateData.email = email.toLowerCase();
            if (role) updateData.role = role;

            const updatedTeacher = await Teacher.findByIdAndUpdate(
                userId,
                updateData,
                { new: true }
            ).select('-password');

            if (!updatedTeacher) {
                return res.status(404).json({ message: 'Teacher not found' });
            }

            await ActivityLog.create({
                userId: req.user._id,
                userModel: 'Teacher',
                userRole: req.user.role,
                action: 'UPDATE_USER',
                resource: 'teacher',
                resourceId: userId,
                details: { changedFields: Object.keys(updateData) },
                status: 'success'
            });

            res.json({ message: 'User updated successfully', user: updatedTeacher });
        } else if (userType === 'student') {
            if (email) {
                const existingStudent = await Student.findOne({ email, _id: { $ne: userId }, isDeleted: false });
                if (existingStudent) {
                    return res.status(400).json({ message: 'Email already in use' });
                }
            }

            const updateData = {};
            if (name) updateData.name = name.trim();
            if (email) updateData.email = email.toLowerCase();

            const updatedStudent = await Student.findByIdAndUpdate(
                userId,
                updateData,
                { new: true }
            ).select('-password');

            if (!updatedStudent) {
                return res.status(404).json({ message: 'Student not found' });
            }

            res.json({ message: 'User updated successfully', user: updatedStudent });
        }
    } catch (error) {
        console.error('Update User Error:', error);
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};

exports.getSystemAnalytics = async (req, res) => {
    try {
        const totalTeachers = await Teacher.countDocuments({ isDeleted: false });
        const totalStudents = await Student.countDocuments({ isDeleted: false });
        const totalSections = await Teacher.aggregate([
            { $match: { isDeleted: false } },
            { $unwind: '$sections' },
            { $count: 'total' }
        ]);

        const recentUsers = await Teacher.find({ isDeleted: false })
            .sort({ createdAt: -1 })
            .limit(10)
            .select('name email createdAt');

        const platformStats = {
            totalTeachers,
            totalStudents,
            totalSections: totalSections[0]?.total || 0,
            totalUsers: totalTeachers + totalStudents,
            avgStudentsPerTeacher: totalTeachers > 0 ? (totalStudents / totalTeachers).toFixed(2) : 0,
            recentUsers
        };

        res.json({
            message: 'System analytics retrieved successfully',
            ...platformStats
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching analytics', error: error.message });
    }
};

exports.getRecentActivityLogs = async (req, res) => {
    try {
        const limit = req.query.limit || 50;
        const logs = await ActivityLog.find()
            .populate('userId', 'name')
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .select('-__v');

        // Transform logs to include userName
        const transformedLogs = logs.map(log => ({
            ...log.toObject(),
            userName: log.userId?.name || 'Unknown'
        }));

        res.json({
            message: 'Activity logs retrieved successfully',
            logs: transformedLogs
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching activity logs', error: error.message });
    }
};

exports.getAllFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.find()
            .populate('submittedBy', 'name email')
            .sort({ createdAt: -1 })
            .select('-__v');

        res.json({
            message: 'Feedback retrieved successfully',
            feedback,
            total: feedback.length
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedback', error: error.message });
    }
};

exports.respondToFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const { response } = req.body;

        const feedback = await Feedback.findByIdAndUpdate(
            id,
            {
                response,
                respondedAt: new Date(),
                respondedBy: req.user._id
            },
            { new: true }
        );

        if (!feedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }

        await ActivityLog.create({
            userId: req.user._id,
            userModel: 'Teacher',
            userRole: req.user.role,
            action: 'RESPOND_FEEDBACK',
            resource: 'feedback',
            resourceId: id,
            status: 'success'
        });

        res.json({ message: 'Feedback response submitted', feedback });
    } catch (error) {
        res.status(500).json({ message: 'Error responding to feedback', error: error.message });
    }
};

exports.getSystemSettings = async (req, res) => {
    try {
        // Find all settings
        let settings = await SystemSettings.find();

        // Convert array to object keyed by setting name
        const settingsObj = {};
        settings.forEach(setting => {
            settingsObj[setting.key] = setting.value;
        });

        // If no settings exist, create defaults
        if (Object.keys(settingsObj).length === 0) {
            const defaults = [
                { key: 'max_learning_groups_per_instructor', value: 10, type: 'number', category: 'security' },
                { key: 'max_learners_per_group', value: 30, type: 'number', category: 'security' }
            ];
            await SystemSettings.insertMany(defaults);
            defaults.forEach(d => {
                settingsObj[d.key] = d.value;
            });
        }

        res.json({
            message: 'System settings retrieved successfully',
            settings: settingsObj
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching settings', error: error.message });
    }
};
exports.updateSystemSetting = async (req, res) => {
    try {
        const { key, value } = req.body;

        let settings = await SystemSettings.findOne();

        if (!settings) {
            settings = new SystemSettings();
        }

        settings[key] = value;
        await settings.save();

        await ActivityLog.create({
            userId: req.user._id,
            userModel: 'Teacher',
            userRole: req.user.role,
            action: 'UPDATE_SETTINGS',
            resource: 'settings',
            resourceId: key,
            status: 'success'
        });

        res.json({
            message: 'Setting updated successfully',
            settings
        });
    } catch (error) {
        res.status(500).json({ message: 'Error updating setting', error: error.message });
    }
};