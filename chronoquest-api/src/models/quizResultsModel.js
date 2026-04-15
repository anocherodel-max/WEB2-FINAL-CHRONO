const mongoose = require('mongoose');

const quizResultSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
        index: true
    },
    studentName: {
        type: String,
        required: true
    },
    classCode: {
        type: String,
        required: true
    },
    testDate: {
        type: Date,
        default: Date.now
    },
    questionsAsked: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],
    answers: [Number],
    correctAnswersCount: {
        type: Number,
        default: 0
    },
    totalQuestions: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    percentage: {
        type: Number
    },
    levelReached: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: true
    }
}, { timestamps: true });

module.exports = mongoose.model('QuizResult', quizResultSchema);
