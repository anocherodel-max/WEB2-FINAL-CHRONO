const Score = require('../models/scoreModel');

exports.getClassProgress = async (req, res) => {
    try {
        // Find all scores where teacherId matches the logged-in teacher
        const progress = await Score.find({ teacherId: req.user.id })
            .sort({ createdAt: -1 }); // Latest sync first

        res.status(200).json(progress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getStudentPerformance = async (req, res) => {
    try {
        const { studentName } = req.params;
        const performance = await Score.find({
            teacherId: req.user.id,
            studentName: studentName
        });

        res.status(200).json(performance);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};