const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    userRole: {
        type: String,
        enum: ['teacher', 'student', 'admin'],
        required: true
    },
    action: {
        type: String,
        required: true  // e.g., "LOGIN", "CREATE_SECTION", "DELETE_STUDENT"
    },
    resource: {
        type: String  // e.g., "Section", "Student", "Question"
    },
    resourceId: {
        type: mongoose.Schema.Types.ObjectId
    },
    details: {
        type: Object,
        default: {}  // Store additional context
    },
    ipAddress: String,
    status: {
        type: String,
        enum: ['success', 'failure'],
        default: 'success'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: true
    }
}, { timestamps: false });

module.exports = mongoose.model('ActivityLog', activityLogSchema);
