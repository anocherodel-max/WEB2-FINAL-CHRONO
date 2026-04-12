const Question = require('../models/questionModel');

// @desc    Create a new question
// @access  Private/Admin
exports.createQuestion = async (req, res) => {
    try {
        const { title, description, topic, period, difficultyLevel, options, correctAnswer } = req.body;

        // Validation
        if (!title || !topic || !period || !options || correctAnswer === undefined) {
            return res.status(400).json({
                message: 'Title, topic, period, options, and correctAnswer are required'
            });
        }

        if (options.length !== 4) {
            return res.status(400).json({
                message: 'Exactly 4 options are required'
            });
        }

        const newQuestion = new Question({
            title,
            description,
            topic,
            period,
            difficultyLevel: difficultyLevel || 'Medium',
            options,
            correctAnswer,
            createdBy: req.user._id
        });

        await newQuestion.save();

        res.status(201).json({
            message: 'Question created successfully',
            question: newQuestion
        });
    } catch (error) {
        console.error('Create Question Error:', error);
        res.status(500).json({ message: 'Error creating question', error: error.message });
    }
};

// @desc    Get all questions with optional filters
// @access  Private/Admin
exports.getAllQuestions = async (req, res) => {
    try {
        const { topic, difficulty, isActive, page = 1, limit = 10 } = req.query;

        const filters = {};
        if (topic) filters.topic = { $regex: topic, $options: 'i' };
        if (difficulty) filters.difficultyLevel = difficulty;
        if (isActive !== undefined) filters.isActive = isActive === 'true';

        const skip = (page - 1) * limit;

        const questions = await Question.find(filters)
            .populate('createdBy', 'name email')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Question.countDocuments(filters);

        res.json({
            message: 'Questions retrieved successfully',
            questions,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Get All Questions Error:', error);
        res.status(500).json({ message: 'Error fetching questions' });
    }
};

// @desc    Get questions created by a specific teacher
// @access  Private/Admin
exports.getQuestionsByTeacher = async (req, res) => {
    try {
        const { teacherId } = req.params;
        const { page = 1, limit = 10 } = req.query;

        const skip = (page - 1) * limit;

        const questions = await Question.find({ createdBy: teacherId })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Question.countDocuments({ createdBy: teacherId });

        res.json({
            questions,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Get Questions by Teacher Error:', error);
        res.status(500).json({ message: 'Error fetching teacher questions' });
    }
};

// @desc    Update a question
// @access  Private/Admin
exports.updateQuestion = async (req, res) => {
    try {
        const { questionId } = req.params;
        const { title, description, topic, difficultyLevel, isActive } = req.body;

        const question = await Question.findById(questionId);

        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        // Verify ownership (only creator or admin can edit)
        if (question.createdBy.toString() !== req.user._id && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to update this question' });
        }

        // Update fields
        if (title) question.title = title;
        if (description !== undefined) question.description = description;
        if (topic) question.topic = topic;
        if (difficultyLevel) question.difficultyLevel = difficultyLevel;
        if (isActive !== undefined) question.isActive = isActive;

        await question.save();

        res.json({
            message: 'Question updated successfully',
            question
        });
    } catch (error) {
        console.error('Update Question Error:', error);
        res.status(500).json({ message: 'Error updating question' });
    }
};

// @desc    Delete a question
// @access  Private/Admin
exports.deleteQuestion = async (req, res) => {
    try {
        const { questionId } = req.params;

        const question = await Question.findById(questionId);

        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        // Verify ownership (only creator or admin can delete)
        if (question.createdBy.toString() !== req.user._id && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to delete this question' });
        }

        await Question.findByIdAndDelete(questionId);

        res.json({ message: 'Question deleted successfully' });
    } catch (error) {
        console.error('Delete Question Error:', error);
        res.status(500).json({ message: 'Error deleting question' });
    }
};

// @desc    Toggle question active status
// @access  Private/Admin
exports.toggleQuestionStatus = async (req, res) => {
    try {
        const { questionId } = req.params;

        const question = await Question.findById(questionId);

        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        // Verify ownership
        if (question.createdBy.toString() !== req.user._id && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to modify this question' });
        }

        question.isActive = !question.isActive;
        await question.save();

        res.json({
            message: `Question ${question.isActive ? 'activated' : 'deactivated'} successfully`,
            question
        });
    } catch (error) {
        console.error('Toggle Question Status Error:', error);
        res.status(500).json({ message: 'Error toggling question status' });
    }
};
