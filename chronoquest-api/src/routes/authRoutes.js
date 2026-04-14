const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', authController.registerUser || authController.register);
router.post('/login', authController.loginUser || authController.login);
router.get('/profile', protect, authController.getTeacherProfile);
router.put('/profile', protect, authController.updateTeacherProfile || authController.updateProfile);
router.put('/change-password', protect, authController.changePassword);
router.post('/feedback', protect, authController.submitFeedback);

module.exports = router;