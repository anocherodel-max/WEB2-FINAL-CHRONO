const Teacher = require('../models/teacherModel');
const Student = require('../models/studentModel');
const AuditLog = require('../models/activityLogModel');
const Feedback = require('../models/feedbackModel');
const SystemSettings = require('../models/systemSettingsModel');

// ---------------------------------------------------------------------------
// Helper: extract the client's IP address from the request.
// Handles the X-Forwarded-For header that Vercel and most proxies set.
// ---------------------------------------------------------------------------
function getIpAddress(req) {
    const forwarded = req.headers['x-forwarded-for'];
    if (forwarded) return forwarded.split(',')[0].trim();
    return req.socket?.remoteAddress || req.ip || 'unknown';
}

// ---------------------------------------------------------------------------
// Helper: diff two plain objects and return only the keys that changed.
// Returns { oldValue, newValue } containing only the differing fields.
// ---------------------------------------------------------------------------
function diffObjects(before, after) {
    const oldValue = {};
    const newValue = {};
    const watchedFields = ['name', 'email', 'role'];

    for (const field of watchedFields) {
        if (after[field] !== undefined && String(before[field] ?? '') !== String(after[field] ?? '')) {
            oldValue[field] = before[field];
            newValue[field] = after[field];
        }
    }

    return { oldValue, newValue };
}

// ---------------------------------------------------------------------------
// GET /admin/users
// ---------------------------------------------------------------------------
exports.getAllUsers = async (req, res) => {
    try {
        const teachers = await Teacher.find({ isDeleted: false }).select('-password').lean();
        const students = await Student.find({ isDeleted: false }).select('-password').lean();
        res.json({ message: 'Users retrieved successfully', teachers, students });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

// ---------------------------------------------------------------------------
// GET /admin/users/deleted
// ---------------------------------------------------------------------------
exports.getDeletedUsers = async (req, res) => {
    try {
        const teachers = await Teacher.find({ isDeleted: true }).select('-password').lean();
        const students = await Student.find({ isDeleted: true }).select('-password').lean();
        res.json({ message: 'Deleted users retrieved', teachers, students });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching deleted users', error: error.message });
    }
};

// ---------------------------------------------------------------------------
// POST /admin/users/deactivate
// ---------------------------------------------------------------------------
exports.deactivateUser = async (req, res) => {
    try {
        const { userId, userType } = req.body;

        if (!['teacher', 'student'].includes(userType)) {
            return res.status(400).json({ message: 'Invalid userType' });
        }

        const Model = userType === 'teacher' ? Teacher : Student;
        const user = await Model.findByIdAndUpdate(
            userId,
            { isActive: false },
            { new: true }
        ).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await AuditLog.create({
            performedBy: req.user._id,
            performedByRole: req.user.role,
            action: 'DEACTIVATE_USER',
            resource: userType,
            targetId: userId,
            ipAddress: getIpAddress(req),
            status: 'success'
        });

        res.json({ message: 'User deactivated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error deactivating user', error: error.message });
    }
};

// ---------------------------------------------------------------------------
// POST /admin/users/delete  (soft delete)
// ---------------------------------------------------------------------------
exports.deleteUser = async (req, res) => {
    try {
        const { userId, userType } = req.body;

        if (!['teacher', 'student'].includes(userType)) {
            return res.status(400).json({ message: 'Invalid userType' });
        }

        if (userType === 'teacher') {
            const adminCount = await Teacher.countDocuments({ role: 'admin', isDeleted: false });
            const targetTeacher = await Teacher.findById(userId);
            if (targetTeacher?.role === 'admin' && adminCount <= 1) {
                return res.status(400).json({ message: 'Cannot delete the last admin account' });
            }
        }

        const Model = userType === 'teacher' ? Teacher : Student;
        const user = await Model.findByIdAndUpdate(
            userId,
            { isDeleted: true, deletedAt: new Date(), isActive: false },
            { new: true }
        ).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await AuditLog.create({
            performedBy: req.user._id,
            performedByRole: req.user.role,
            action: 'DELETE_USER',
            resource: userType,
            targetId: userId,
            ipAddress: getIpAddress(req),
            status: 'success'
        });

        res.json({ message: 'User deleted successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};

// ---------------------------------------------------------------------------
// POST /admin/users/restore
// ---------------------------------------------------------------------------
exports.restoreUser = async (req, res) => {
    try {
        const { userId, userType } = req.body;

        if (!['teacher', 'student'].includes(userType)) {
            return res.status(400).json({ message: 'Invalid userType' });
        }

        const Model = userType === 'teacher' ? Teacher : Student;
        const restoredUser = await Model.findByIdAndUpdate(
            userId,
            { isDeleted: false, deletedAt: null, isActive: true },
            { new: true }
        ).select('-password');

        if (!restoredUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        await AuditLog.create({
            performedBy: req.user._id,
            performedByRole: req.user.role,
            action: 'RESTORE_USER',
            resource: userType,
            targetId: userId,
            ipAddress: getIpAddress(req),
            status: 'success'
        });

        res.json({ message: 'User restored successfully', user: restoredUser });
    } catch (error) {
        res.status(500).json({ message: 'Error restoring user', error: error.message });
    }
};

// ---------------------------------------------------------------------------
// PATCH /admin/users/:userId/:userType
// Full audit trail: captures only fields that actually changed.
// Security: admins cannot change their own role or email.
// ---------------------------------------------------------------------------
exports.updateUser = async (req, res) => {
    try {
        const { userId, userType } = req.params;
        const { name, email, role } = req.body;

        if (!['teacher', 'student'].includes(userType)) {
            return res.status(400).json({ message: 'Invalid userType' });
        }

        // --- Self-escalation guard ---
        // An admin cannot change their own role or email. This prevents a
        // compromised account from silently granting itself new privileges or
        // switching to an unmonitored email address.
        const isSelf = String(req.user._id) === String(userId);
        if (isSelf) {
            if (role && role !== req.user.role) {
                return res.status(403).json({
                    message: 'Admins cannot change their own role. Ask another admin to do it.'
                });
            }
            if (email && email.toLowerCase() !== req.user.email) {
                return res.status(403).json({
                    message: 'Admins cannot change their own email. Ask another admin to do it.'
                });
            }
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

            // Step 1: Fetch the current document before making any changes.
            const oldDoc = await Teacher.findById(userId).select('name email role').lean();
            if (!oldDoc) {
                return res.status(404).json({ message: 'Teacher not found' });
            }

            // Step 2: Build the update payload with only the provided fields.
            const updateData = {};
            if (name) updateData.name = name.trim();
            if (email) updateData.email = email.toLowerCase();
            if (role) updateData.role = role;

            const updatedTeacher = await Teacher.findByIdAndUpdate(
                userId,
                updateData,
                { new: true }
            ).select('-password');

            // Step 3: Compute the diff — only log fields that actually changed.
            const { oldValue, newValue } = diffObjects(oldDoc, updateData);
            const hasChanges = Object.keys(oldValue).length > 0;

            if (hasChanges) {
                await AuditLog.create({
                    performedBy: req.user._id,
                    performedByRole: req.user.role,
                    action: 'UPDATE_USER',
                    resource: 'teacher',
                    targetId: userId,
                    oldValue,
                    newValue,
                    ipAddress: getIpAddress(req),
                    status: 'success'
                });
            }

            return res.json({ message: 'User updated successfully', user: updatedTeacher });
        }

        if (userType === 'student') {
            if (email) {
                const existingStudent = await Student.findOne({ email, _id: { $ne: userId }, isDeleted: false });
                if (existingStudent) {
                    return res.status(400).json({ message: 'Email already in use' });
                }
            }

            // Step 1: Fetch current document.
            const oldDoc = await Student.findById(userId).select('name email').lean();
            if (!oldDoc) {
                return res.status(404).json({ message: 'Student not found' });
            }

            const updateData = {};
            if (name) updateData.name = name.trim();
            if (email) updateData.email = email.toLowerCase();

            const updatedStudent = await Student.findByIdAndUpdate(
                userId,
                updateData,
                { new: true }
            ).select('-password');

            // Step 2: Diff and log.
            const { oldValue, newValue } = diffObjects(oldDoc, updateData);
            const hasChanges = Object.keys(oldValue).length > 0;

            if (hasChanges) {
                await AuditLog.create({
                    performedBy: req.user._id,
                    performedByRole: req.user.role,
                    action: 'UPDATE_USER',
                    resource: 'student',
                    targetId: userId,
                    oldValue,
                    newValue,
                    ipAddress: getIpAddress(req),
                    status: 'success'
                });
            }

            return res.json({ message: 'User updated successfully', user: updatedStudent });
        }
    } catch (error) {
        console.error('Update User Error:', error);
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};

// ---------------------------------------------------------------------------
// GET /admin/analytics
// ---------------------------------------------------------------------------
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

        res.json({
            message: 'System analytics retrieved successfully',
            totalTeachers,
            totalStudents,
            totalSections: totalSections[0]?.total || 0,
            totalUsers: totalTeachers + totalStudents,
            avgStudentsPerTeacher: totalTeachers > 0 ? (totalStudents / totalTeachers).toFixed(2) : 0,
            recentUsers
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching analytics', error: error.message });
    }
};

// ---------------------------------------------------------------------------
// GET /admin/activity-logs-detailed
// Now queries AuditLog instead of the old ActivityLog collection.
// ---------------------------------------------------------------------------
exports.getRecentActivityLogs = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 50;
        const logs = await AuditLog.find()
            .populate('performedBy', 'name email')
            .sort({ createdAt: -1 })
            .limit(limit)
            .select('-__v')
            .lean();

        res.json({
            message: 'Audit logs retrieved successfully',
            logs
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching audit logs', error: error.message });
    }
};

// ---------------------------------------------------------------------------
// GET /admin/feedback
// ---------------------------------------------------------------------------
exports.getAllFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.find()
            .populate('submittedBy', 'name email')
            .sort({ createdAt: -1 })
            .select('-__v');

        res.json({ message: 'Feedback retrieved successfully', feedback, total: feedback.length });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedback', error: error.message });
    }
};

// ---------------------------------------------------------------------------
// POST /admin/feedback/:id/respond
// ---------------------------------------------------------------------------
exports.respondToFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const { response } = req.body;

        const feedback = await Feedback.findByIdAndUpdate(
            id,
            { response, respondedAt: new Date(), respondedBy: req.user._id },
            { new: true }
        );

        if (!feedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }

        await AuditLog.create({
            performedBy: req.user._id,
            performedByRole: req.user.role,
            action: 'RESPOND_FEEDBACK',
            resource: 'feedback',
            targetId: id,
            ipAddress: getIpAddress(req),
            status: 'success'
        });

        res.json({ message: 'Feedback response submitted', feedback });
    } catch (error) {
        res.status(500).json({ message: 'Error responding to feedback', error: error.message });
    }
};

// ---------------------------------------------------------------------------
// GET /admin/settings
// ---------------------------------------------------------------------------
exports.getSystemSettings = async (req, res) => {
    try {
        let settings = await SystemSettings.find();
        const settingsObj = {};
        settings.forEach(setting => { settingsObj[setting.key] = setting.value; });

        if (Object.keys(settingsObj).length === 0) {
            const defaults = [
                { key: 'max_learning_groups_per_instructor', value: 10, type: 'number', category: 'security' },
                { key: 'max_learners_per_group', value: 30, type: 'number', category: 'security' }
            ];
            await SystemSettings.insertMany(defaults);
            defaults.forEach(d => { settingsObj[d.key] = d.value; });
        }

        res.json({ message: 'System settings retrieved successfully', settings: settingsObj });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching settings', error: error.message });
    }
};

// ---------------------------------------------------------------------------
// POST /admin/settings
// ---------------------------------------------------------------------------
exports.updateSystemSetting = async (req, res) => {
    try {
        const { key, value } = req.body;

        const settings = await SystemSettings.findOneAndUpdate(
            { key },
            { value, updatedBy: req.user._id, updatedAt: new Date() },
            { new: true, upsert: true, runValidators: true }
        );

        await AuditLog.create({
            performedBy: req.user._id,
            performedByRole: req.user.role,
            action: 'UPDATE_SETTINGS',
            resource: 'settings',
            details: { key, value },
            ipAddress: getIpAddress(req),
            status: 'success'
        });

        res.json({ message: 'Setting updated successfully', settings });
    } catch (error) {
        res.status(500).json({ message: 'Error updating setting', error: error.message });
    }
};