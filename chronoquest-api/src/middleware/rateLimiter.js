const rateLimit = require('express-rate-limit');


const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100, 
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true, 
    legacyHeaders: false, 
});


const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10, 
    message: 'Too many login attempts, please try again after 15 minutes.',
    skipSuccessfulRequests: true, 
    standardHeaders: true,  // ADD THIS — returns rate limit info in headers
    legacyHeaders: false,   // ADD THIS
});

module.exports = { generalLimiter, loginLimiter };