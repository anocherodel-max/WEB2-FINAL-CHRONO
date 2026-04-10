const Teacher = require('../models/teacherModel');
const Student = require('../models/studentModel');
const ActivityLog = require('../models/activityLogModel');
const Feedback = require('../models/feedbackModel');
const SystemSettings = require('../models/systemSettingsModel');

exports.getAllUsers = async (req, res) => {
    try {
        const teachers = await Teacher.find().select('-password');
        const students = await Student.find().select('-password');

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

exports.deactivateUser = async (req, res) => {
    try {
        const { userId, userType } = req.body;

        if (userType === 'teacher') {
            await Teacher.findByIdAndUpdate(userId, { isActive: false });
            await ActivityLog.create({
                userId: req.user._id,
                userRole: req.user.role,
                action: 'DEACTIVATE_TEACHER',
                resourceId: userId,
                status: 'success'
            });
        } else if (userType === 'student') {
            // For students, we might disable their account or just mark as inactive
            await Student.findByIdAndUpdate(userId, { active: false }, { new: true });
            await ActivityLog.create({
                userId: req.user._id,
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

        if (userType === 'teacher') {
            await Teacher.findByIdAndDelete(userId);
        } else if (userType === 'student') {
            await Student.findByIdAndDelete(userId);
        }

        await ActivityLog.create({
            userId: req.user._id,
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

exports.updateUser = async (req, res) => {
    try {
        // Only super admin can update users
        if (req.user.adminLevel !== 'super_admin') {
            return res.status(403).json({ message: 'Only super admin can update users' });
        }

        const { userId, userType } = req.params;
        const { name, email, role, adminLevel } = req.body;

        if (userType === 'teacher') {
            // Validate email uniqueness if provided
            if (email) {
                const existingTeacher = await Teacher.findOne({ email, _id: { $ne: userId } });
                if (existingTeacher) {
                    return res.status(400).json({ message: 'Email already in use' });
                }
            }

            // Validate role if provided
            if (role && !['teacher', 'admin'].includes(role)) {
                return res.status(400).json({ message: 'Invalid role' });
            }

            // Validate adminLevel if role is being set to admin
            if (role === 'admin' && adminLevel) {
                if (!['super_admin', 'content_admin', 'support_admin'].includes(adminLevel)) {
                    return res.status(400).json({ message: 'Invalid admin level' });
                }
            }

            const updateData = {};
            if (name) updateData.name = name;
            if (email) updateData.email = email;
            if (role) updateData.role = role;
            if (role === 'admin' && adminLevel) updateData.adminLevel = adminLevel;
            if (role === 'teacher') updateData.adminLevel = null; // Clear admin level if downgrading

            const updatedTeacher = await Teacher.findByIdAndUpdate(
                userId,
                updateData,
                { new: true }
            ).select('-password');

            // Log the action
            await ActivityLog.create({
                userId: req.user._id,
                userRole: req.user.role,
                action: 'UPDATE_USER',
                resource: 'teacher',
                resourceId: userId,
                details: { changedFields: Object.keys(updateData) },
                status: 'success'
            });

            res.json({
                message: 'User updated successfully',
                user: updatedTeacher
            });
        } else if (userType === 'student') {
            // Validate email uniqueness if provided
            if (email) {
                const existingStudent = await Student.findOne({ email, _id: { $ne: userId } });
                if (existingStudent) {
                    return res.status(400).json({ message: 'Email already in use' });
                }
            }

            const updateData = {};
            if (name) updateData.name = name;
            if (email) updateData.email = email;

            const updatedStudent = await Student.findByIdAndUpdate(
                userId,
                updateData,
                { new: true }
            ).select('-password');

            // Log the action
            await ActivityLog.create({
                userId: req.user._id,
                userRole: req.user.role,
                action: 'UPDATE_USER',
                resource: 'student',
                resourceId: userId,
                details: { changedFields: Object.keys(updateData) },
                status: 'success'
            });

            res.json({
                message: 'User updated successfully',
                user: updatedStudent
            });
        } else {
            res.status(400).json({ message: 'Invalid user type' });
        }
    } catch (error) {
        console.error('Update User Error:', error);
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};

exports.getUserActivityLogs = async (req, res) => {
    try {
        const { userId } = req.params;
        const logs = await ActivityLog.find({ userId })
            .sort({ createdAt: -1 })
            .limit(100);

        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching activity logs', error: error.message });
    }
};

exports.getAllActivityLogs = async (req, res) => {
    try {
        const { limit = 500, skip = 0 } = req.query;
        const logs = await ActivityLog.find()
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .skip(parseInt(skip));

        const total = await ActivityLog.countDocuments();

        res.json({ logs, total });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching logs', error: error.message });
    }
};

exports.getSystemAnalytics = async (req, res) => {
    try {
        const totalTeachers = await Teacher.countDocuments({ role: 'teacher', isActive: true });
        const totalStudents = await Student.countDocuments();
        const totalSections = await Teacher.aggregate([
            { $match: { isActive: true } },
            { $unwind: '$sections' },
            { $count: 'total' }
        ]);

        const recentUsers = await Teacher.find()
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

        res.json(platformStats);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching analytics', error: error.message });
    }
};

exports.getUsageStats = async (req, res) => {
    try {
        const logs = await ActivityLog.aggregate([
            {
                $group: {
                    _id: '$action',
                    count: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } }
        ]);

        const dailyActivity = await ActivityLog.aggregate([
            {
                $group: {
                    _id: {
                        $dateToString: { format: '%Y-%m-%d', date: '$createdAt' }
                    },
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: -1 } },
            { $limit: 30 }
        ]);

        res.json({ actionStats: logs, dailyActivity });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching usage stats', error: error.message });
    }
};

exports.getAllFeedback = async (req, res) => {
    try {
        const { status, type } = req.query;
        const filter = {};

        if (status) filter.status = status;
        if (type) filter.type = type;

        const feedback = await Feedback.find(filter)
            .populate('submittedBy', 'name email')
            .populate('response.admin', 'name email')
            .sort({ createdAt: -1 });

        res.json(feedback);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedback', error: error.message });
    }
};

exports.respondToFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const { message, status } = req.body;

        const feedback = await Feedback.findByIdAndUpdate(
            id,
            {
                'response.admin': req.user._id,
                'response.message': message,
                'response.respondedAt': new Date(),
                status: status || 'in_progress'
            },
            { new: true }
        ).populate('submittedBy', 'name email')
            .populate('response.admin', 'name email');

        await ActivityLog.create({
            userId: req.user._id,
            userRole: req.user.role,
            action: 'RESPOND_FEEDBACK',
            resourceId: id,
            status: 'success'
        });

        res.json({ message: 'Feedback responded successfully', feedback });
    } catch (error) {
        res.status(500).json({ message: 'Error responding to feedback', error: error.message });
    }
};

exports.getSystemSettings = async (req, res) => {
    try {
        const settings = await SystemSettings.find();
        const settingsObj = {};

        settings.forEach(s => {
            settingsObj[s.key] = {
                value: s.value,
                type: s.type,
                description: s.description,
                category: s.category
            };
        });

        res.json(settingsObj);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching settings', error: error.message });
    }
};

exports.updateSystemSetting = async (req, res) => {
    try {
        const { key, value, type = 'string' } = req.body;

        const setting = await SystemSettings.findOneAndUpdate(
            { key },
            {
                key,
                value,
                type,
                updatedBy: req.user._id,
                updatedAt: new Date()
            },
            { upsert: true, new: true }
        );

        await ActivityLog.create({
            userId: req.user._id,
            userRole: req.user.role,
            action: 'UPDATE_SETTING',
            details: { key, oldValue: setting.value, newValue: value },
            status: 'success'
        });

        res.json({ message: 'Setting updated successfully', setting });
    } catch (error) {
        res.status(500).json({ message: 'Error updating setting', error: error.message });
    }
};

exports.syncScores = async (req, res) => {
    try {
        const Score = require('../models/scoreModel');
        // Sync ALL students (including score: 0) for initial leaderboard population
        const students = await Student.find({});

        if (students.length === 0) {
            return res.json({ message: 'No students to sync', synced: 0 });
        }

        let syncedCount = 0;
        const syncErrors = [];

        for (const student of students) {
            try {
                // Check if score already exists for this student
                const existingScore = await Score.findOne({
                    studentName: student.name,
                    classCode: student.classCode
                });

                if (!existingScore) {
                    // Get teacher data for this student's class
                    const teacher = await Teacher.findOne({
                        sections: { $elemMatch: { classCode: student.classCode } }
                    });

                    if (teacher) {
                        await Score.create({
                            studentName: student.name,
                            classCode: student.classCode,
                            levelReached: student.levelReached,
                            score: Math.min(student.score, 100), // Ensure max 100
                            teacherId: teacher._id
                        });
                        syncedCount++;
                    }
                }
            } catch (error) {
                syncErrors.push(`Failed to sync ${student.name}: ${error.message}`);
            }
        }

        await ActivityLog.create({
            userId: req.user._id,
            userRole: req.user.role,
            action: 'SYNC_SCORES',
            details: { totalAttempted: students.length, successfulSync: syncedCount },
            status: syncErrors.length === 0 ? 'success' : 'partial'
        });

        res.json({
            message: 'Score sync completed',
            synced: syncedCount,
            total: students.length,
            errors: syncErrors.length > 0 ? syncErrors : null
        });
    } catch (error) {
        res.status(500).json({ message: 'Error syncing scores', error: error.message });
    }
};

exports.getRecentActivityLogs = async (req, res) => {
    try {
        const { limit = 50 } = req.query;

        const logs = await ActivityLog.aggregate([
            { $sort: { createdAt: -1 } },
            { $limit: parseInt(limit) },
            {
                $lookup: {
                    from: 'teachers',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'userDetails'
                }
            },
            {
                $lookup: {
                    from: 'students',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'studentDetails'
                }
            },
            {
                $project: {
                    _id: 1,
                    userId: 1,
                    action: 1,
                    resource: 1,
                    resourceId: 1,
                    details: 1,
                    status: 1,
                    createdAt: 1,
                    userName: {
                        $cond: [
                            { $gt: [{ $size: '$userDetails' }, 0] },
                            { $arrayElemAt: ['$userDetails.name', 0] },
                            { $arrayElemAt: ['$studentDetails.name', 0] }
                        ]
                    },
                    userEmail: {
                        $cond: [
                            { $gt: [{ $size: '$userDetails' }, 0] },
                            { $arrayElemAt: ['$userDetails.email', 0] },
                            { $arrayElemAt: ['$studentDetails.email', 0] }
                        ]
                    }
                }
            }
        ]);

        res.json({
            logs,
            total: logs.length,
            timestamp: new Date()
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching activity logs', error: error.message });
    }
};
