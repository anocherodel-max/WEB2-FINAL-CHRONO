const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');
const {
    createQuestion,
    getAllQuestions,
    getQuestionsByTeacher,
    updateQuestion,
    deleteQuestion,
    toggleQuestionStatus
} = require('../controllers/questionController');


router.post('/', protect, adminOnly, createQuestion);
router.get('/', protect, adminOnly, getAllQuestions);
router.get('/teacher/:teacherId', protect, adminOnly, getQuestionsByTeacher);
router.patch('/:questionId', protect, updateQuestion);
router.delete('/:questionId', protect, deleteQuestion);
router.post('/:questionId/toggle', protect, toggleQuestionStatus);

module.exports = router;
