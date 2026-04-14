const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { loginLimiter } = require('../middleware/rateLimiter');


router.post('/register', loginLimiter, authController.registerUser || authController.register);
router.post('/login', loginLimiter, authController.loginUser || authController.login);
router.get('/validate', protect, authController.validateToken);
router.get('/profile', protect, authController.getTeacherProfile);
router.put('/profile', protect, authController.updateTeacherProfile || authController.updateProfile);
router.put('/change-password', protect, authController.changePassword);
router.post('/feedback', protect, authController.submitFeedback);

module.exports = router;