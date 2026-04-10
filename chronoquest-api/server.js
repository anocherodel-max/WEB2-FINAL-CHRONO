const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const apiRoutes = require('./src/routes/apiRoutes');

dotenv.config();
const app = express();

// 1. Middleware
app.use(cors({
    origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        "https://web2finalchronodashboard.vercel.app"
    ],
    credentials: true
}));

app.use(express.json());

// 2. Logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// 3. Updated Debug Route (Helps us see the URI status)
app.get('/api/v1/debug', (req, res) => {
    res.json({
        message: "Checking connection...",
        dbStatus: mongoose.connection.readyState,
        hasUri: !!process.env.MONGO_URI,
        uriStart: process.env.MONGO_URI ? process.env.MONGO_URI.substring(0, 20) : "Missing"
    });
});

// 4. Routes
app.use('/api/v1', apiRoutes);

// 5. MongoDB Connection Logic
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/chronoquest';

// Optimized for Vercel: Connect without wrapping the app in a .then()
mongoose.connect(MONGO_URI)
    .then(() => console.log(`✅ MongoDB Connected`))
    .catch(err => {
        console.error('❌ MongoDB Error:', err.message);
    });

// 6. Export for Vercel (This replaces the need for app.listen)
module.exports = app;