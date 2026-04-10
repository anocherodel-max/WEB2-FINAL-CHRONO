const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    classCode: { type: String, required: true },
    levelReached: { type: String, required: true },
    score: { type: Number, required: true },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Score', scoreSchema);