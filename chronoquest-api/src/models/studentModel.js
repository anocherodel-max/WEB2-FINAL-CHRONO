const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
        default: "Era 1: Pre-Colonial"
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });


studentSchema.pre('save', async function () {
    // Hash password if modified
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }


    if (this.score > 100) {
        this.score = 100;
    }
});


studentSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Student', studentSchema);