const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const sectionSchema = new mongoose.Schema({
    sectionName: {
        type: String,
        required: true
    },
    classCode: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isArchived: {
        type: Boolean,
        default: false
    },
    archivedAt: {
        type: Date,
        default: null
    }
});

const teacherSchema = new mongoose.Schema({
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
        unique: true,
        required: true
    },
    role: {
        type: String,
        enum: ['teacher', 'admin'],
        default: 'teacher'
    },
    // Allows one teacher to have multiple sections
    sections: [sectionSchema],
    // Admin-specific fields
    permissions: [{
        type: String
        // e.g., 'manage_users', 'manage_content', 'view_analytics', 'manage_feedback'
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    lastLogin: {
        type: Date
    }
}, { timestamps: true });

// --- PASSWORD HASHING LOGIC ---
teacherSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        return;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// --- PASSWORD COMPARISON LOGIC ---
teacherSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Teacher', teacherSchema);