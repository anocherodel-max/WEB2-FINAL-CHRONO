const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');
const {
    createQuestion,
    getAllQuestions,
    getQuestionsByTeacher,
    updateQuestion,
    deleteQuestion,
    toggleQuestionStatus,
    getDeletedQuestions,
    restoreQuestion
} = require('../controllers/questionController');


router.post('/', protect, createQuestion);
router.get('/', protect, getAllQuestions);
router.get('/deleted', protect, adminOnly, getDeletedQuestions);
router.get('/teacher/:teacherId', protect, getQuestionsByTeacher);
router.patch('/:questionId', protect, updateQuestion);
router.delete('/:questionId', protect, deleteQuestion);
router.post('/:questionId/restore', protect, adminOnly, restoreQuestion);
router.post('/:questionId/toggle', protect, toggleQuestionStatus);

module.exports = router;
