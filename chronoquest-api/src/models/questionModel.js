const mongoose = require('mongoose');

const PERIODS = [
    'Pre-colonial',
    'Spanish Colonization',
    'Revolutionary',
    'American/Japanese',
    'Post-war',
];

const questionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            minlength: 5,
            maxlength: 500
        },
        description: {
            type: String,
            trim: true,
            maxlength: 1000
        },

        topic: {
            type: String,
            trim: true,
            index: true
        },
        period: {
            type: String,
            enum: PERIODS,
            required: true,
            index: true
        },
        options: {
            type: [String],
            validate: {
                validator: (arr) => arr.length === 4 && arr.every(s => s.trim().length > 0),
                message: 'Exactly 4 non-empty options are required'
            },
            required: true
        },

        correctAnswer: {
            type: Number,
            enum: [0, 1, 2, 3],
            required: true,
            default: 0
        },
        difficultyLevel: {
            type: String,
            enum: ['Easy', 'Medium', 'Hard'],
            default: 'Medium',
            required: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Teacher',
            required: true,
            index: true
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);


questionSchema.pre('save', function () {
    if (this.period) this.topic = this.period;
});

questionSchema.index({ createdBy: 1, period: 1 });
questionSchema.index({ createdBy: 1, isActive: 1 });

module.exports = mongoose.model('Question', questionSchema);