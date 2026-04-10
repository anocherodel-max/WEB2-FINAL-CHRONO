const mongoose = require('mongoose');

const systemSettingsSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true
        // e.g., "max_sections_per_teacher", "max_students_per_section"
    },
    value: mongoose.Schema.Types.Mixed,  // Can be string, number, boolean, etc.
    type: {
        type: String,
        enum: ['string', 'number', 'boolean', 'json'],
        default: 'string'
    },
    description: String,
    category: {
        type: String,
        enum: ['general', 'security', 'performance', 'email', 'features'],
        default: 'general'
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('SystemSettings', systemSettingsSchema);
