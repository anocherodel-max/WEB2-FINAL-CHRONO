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


router.post('/', protect, createQuestion);
router.get('/', protect, getAllQuestions);
router.get('/teacher/:teacherId', protect, getQuestionsByTeacher);
router.patch('/:questionId', protect, updateQuestion);
router.delete('/:questionId', protect, deleteQuestion);
router.post('/:questionId/toggle', protect, toggleQuestionStatus);

module.exports = router;
