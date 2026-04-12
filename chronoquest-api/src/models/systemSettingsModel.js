const mongoose = require('mongoose');

const systemSettingsSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true

    },
    value: mongoose.Schema.Types.Mixed,

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
