const Score = require('../models/scoreModel');
const Teacher = require('../models/teacherModel');

exports.simulateSync = async (req, res) => {
    try {
        const { studentName, classCode, levelReached, score } = req.body;

        const teacher = await Teacher.findOne({ classCode });
        if (!teacher) {
            return res.status(404).json({ message: 'Invalid Class Code' });
        }

        const newScore = await Score.create({
            studentName,
            classCode,
            levelReached,
            score,
            teacherId: teacher._id
        });

        res.status(201).json({ message: 'Sync Successful', data: newScore });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};