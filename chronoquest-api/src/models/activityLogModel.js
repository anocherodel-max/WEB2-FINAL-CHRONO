const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
    // Who performed the action
    performedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    performedByRole: {
        type: String,
        enum: ['teacher', 'admin'],
        required: true
    },

    // What action was taken
    action: {
        type: String,
        required: true  // e.g., "UPDATE_USER", "LOGIN", "RESTORE_USER"
    },
    resource: {
        type: String    // e.g., "teacher", "student", "settings"
    },

    // Which document was modified
    targetId: {
        type: mongoose.Schema.Types.ObjectId
    },

    // Snapshot of the data before the change (only changed fields)
    oldValue: {
        type: Object,
        default: null
    },

    // Snapshot of the data after the change (only changed fields)
    newValue: {
        type: Object,
        default: null
    },

    // Extra context that doesn't fit old/new structure
    details: {
        type: Object,
        default: {}
    },

    ipAddress: {
        type: String
    },

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
}, {
    timestamps: false,
    // Disable Mongoose's built-in versioning — immutable records don't need it
    versionKey: false
});

// Immutability enforcement: block updates and deletes at the model level.
// pre('updateOne') etc. catch calls made via Model.updateOne() / findByIdAndUpdate().
// The route-level block in adminRoutes.js is the primary guard; this is a belt-and-suspenders backup.
auditLogSchema.pre(['updateOne', 'findOneAndUpdate', 'findByIdAndUpdate', 'replaceOne'], function () {
    throw new Error('Audit log records are immutable and cannot be modified.');
});

auditLogSchema.pre(['deleteOne', 'findOneAndDelete', 'findByIdAndDelete', 'deleteMany'], function () {
    throw new Error('Audit log records are immutable and cannot be deleted.');
});

module.exports = mongoose.model('AuditLog', auditLogSchema);