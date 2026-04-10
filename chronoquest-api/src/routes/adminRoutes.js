const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { protect, adminOnly, checkPermission } = require('../middleware/adminMiddleware');

// All admin routes require authentication and admin role
router.use(protect);
router.use(adminOnly);

router.get('/users', adminController.getAllUsers);
router.post('/users/deactivate', adminController.deactivateUser);
router.patch('/users/:userId/:userType', adminController.updateUser);
router.delete('/users/:userId', adminController.deleteUser);
router.get('/users/:userId/logs', adminController.getUserActivityLogs);
router.get('/activity-logs', adminController.getAllActivityLogs);
router.get('/activity-logs-detailed', adminController.getRecentActivityLogs);

router.post('/sync-scores', adminController.syncScores);
router.get('/analytics', adminController.getSystemAnalytics);
router.get('/usage-stats', adminController.getUsageStats);

router.get('/feedback', adminController.getAllFeedback);
router.post('/feedback/:id/respond', checkPermission('manage_feedback'), adminController.respondToFeedback);

router.get('/settings', adminController.getSystemSettings);
router.post('/settings', checkPermission('manage_settings'), adminController.updateSystemSetting);

module.exports = router;
