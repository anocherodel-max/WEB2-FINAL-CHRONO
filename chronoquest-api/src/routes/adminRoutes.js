const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { protect, adminOnly, checkPermission } = require('../middleware/authMiddleware');

router.use(protect);
router.use(adminOnly);

// User management
router.post('/users/restore', adminController.restoreUser);
router.get('/users', adminController.getAllUsers);
router.get('/users/deleted', adminController.getDeletedUsers);
router.post('/users/deactivate', adminController.deactivateUser);
router.post('/users/delete', adminController.deleteUser);
router.patch('/users/:userId/:userType', adminController.updateUser);

// Audit logs — read-only.
// PUT and DELETE are explicitly blocked here. The model itself also refuses
// these operations, but rejecting them at the route level returns a clear 405
// instead of a 500, and makes the intent visible in the routing layer.
router.get('/audit-logs', adminController.getRecentActivityLogs);
// Keep the old path working so the frontend doesn't break before it's updated.
router.get('/activity-logs-detailed', adminController.getRecentActivityLogs);

router.put('/audit-logs', (req, res) => {
    res.status(405).json({ message: 'Audit logs are immutable. PUT is not allowed.' });
});
router.put('/audit-logs/:id', (req, res) => {
    res.status(405).json({ message: 'Audit logs are immutable. PUT is not allowed.' });
});
router.delete('/audit-logs', (req, res) => {
    res.status(405).json({ message: 'Audit logs are immutable. DELETE is not allowed.' });
});
router.delete('/audit-logs/:id', (req, res) => {
    res.status(405).json({ message: 'Audit logs are immutable. DELETE is not allowed.' });
});

// Analytics
router.get('/analytics', adminController.getSystemAnalytics);

// Feedback
router.get('/feedback', adminController.getAllFeedback);
router.post('/feedback/:id/respond', checkPermission('manage_feedback'), adminController.respondToFeedback);

// Settings
router.get('/settings', adminController.getSystemSettings);
router.post('/settings', checkPermission('manage_settings'), adminController.updateSystemSetting);

module.exports = router;