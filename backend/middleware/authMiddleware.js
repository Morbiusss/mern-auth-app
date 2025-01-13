const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

const adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'Admin') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};

module.exports = { authMiddleware, adminMiddleware };