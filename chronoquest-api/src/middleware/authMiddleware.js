const jwt = require('jsonwebtoken');
const Teacher = require('../models/teacherModel');
const Student = require('../models/studentModel');

exports.protect = async (req, res, next) => {
    if (!process.env.JWT_SECRET) {
        return res.status(500).json({ message: 'Server misconfigured: JWT_SECRET not set' });
    }

    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Try to find as Teacher first, then Student
        let user = await Teacher.findOne({ _id: decoded.id, isDeleted: false }).select('-password');

        if (!user) {
            user = await Student.findOne({ _id: decoded.id, isDeleted: false }).select('-password');
        }

        if (!user) {
            return res.status(401).json({ message: 'User not found or has been deleted' });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: `Not authorized, token failed: ${error.message}` });
    }
};

// Admin-only middleware
exports.adminOnly = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Access denied: Admin privileges required' });
    }
};

// Permission check middleware
exports.checkPermission = (requiredPermission) => {
    return async (req, res, next) => {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Admin access required' });
        }
        next();
    };
};