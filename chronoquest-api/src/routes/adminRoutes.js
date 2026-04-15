const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { protect, adminOnly, checkPermission } = require('../middleware/adminMiddleware');


router.use(protect);
router.use(adminOnly);
router.post('/users/restore', protect, adminOnly, adminController.restoreUser);

router.get('/users', adminController.getAllUsers);
router.get('/users/deleted', adminController.getDeletedUsers);
router.post('/users/deactivate', adminController.deactivateUser);
router.post('/users/delete', adminController.deleteUser);
router.patch('/users/:userId/:userType', adminController.updateUser);

router.get('/activity-logs-detailed', adminController.getRecentActivityLogs);
router.get('/analytics', adminController.getSystemAnalytics);

router.get('/feedback', adminController.getAllFeedback);
router.post('/feedback/:id/respond', checkPermission('manage_feedback'), adminController.respondToFeedback);

router.get('/settings', adminController.getSystemSettings);
router.post('/settings', checkPermission('manage_settings'), adminController.updateSystemSetting);

module.exports = router;
