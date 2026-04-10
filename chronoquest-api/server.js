const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const apiRoutes = require('./src/routes/apiRoutes');

dotenv.config();
const app = express();

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001", "https://web2finalchronodashboard.vercel.app"],
    credentials: true
}));
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

// Middleware to ensure DB is connected before handling any request
app.use(async (req, res, next) => {
    if (mongoose.connection.readyState !== 1) {
        try {
            console.log("⏳ Attempting to connect to MongoDB...");
            await mongoose.connect(MONGO_URI, {
                serverSelectionTimeoutMS: 5000,
            });
            console.log("✅ Connected to MongoDB");
        } catch (err) {
            console.error("❌ Connection Error:", err.message);
        }
    }
    next();
});

app.get('/api/v1/debug', (req, res) => {
    res.json({
        message: "Server is responsive",
        dbStatus: mongoose.connection.readyState,
        hasUri: !!MONGO_URI,
        uriStart: MONGO_URI ? MONGO_URI.substring(0, 20) : "Missing"
    });
});

app.use('/api/v1', apiRoutes);

module.exports = app;