const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    classCode: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0,
        max: 100
    },
    levelReached: {
        type: String,
        default: "Era 1: Prehistoric"
    }
}, { timestamps: true });

// Pre-save hook to clamp score to 100
studentSchema.pre('save', function (next) {
    if (this.score > 100) {
        this.score = 100;
    }
    next();
});

module.exports = mongoose.model('Student', studentSchema);