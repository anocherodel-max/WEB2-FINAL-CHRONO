const jwt = require('jsonwebtoken');
const Teacher = require('../models/teacherModel');

exports.protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ message: "Not authorized to access this route" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        req.user = await Teacher.findById(decoded.id);

        if (!req.user) {
            return res.status(404).json({ message: "User not found" });
        }

        next();
    } catch (error) {
        res.status(401).json({ message: "Not authorized to access this route" });
    }
};

exports.adminOnly = async (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({
            message: "Access denied. Admin privileges required.",
            userRole: req.user.role
        });
    }
    next();
};

exports.checkPermission = (requiredPermission) => {
    return async (req, res, next) => {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: "Admin access required" });
        }

        if (req.user.permissions && !req.user.permissions.includes(requiredPermission)) {
            return res.status(403).json({
                message: `Permission denied. Required: ${requiredPermission}`,
                userPermissions: req.user.permissions
            });
        }

        next();
    };
};
