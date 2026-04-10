const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const apiRoutes = require('./src/routes/apiRoutes');

dotenv.config();
const app = express();

// 1. CORS Configuration
app.use(cors({
    origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        "https://web2finalchronodashboard.vercel.app"
    ],
    credentials: true
}));

app.use(express.json());

// 2. Constants from Env
const MONGO_URI = process.env.MONGO_URI;
const BASE_URI = process.env.BASE_URI || '/api/v1'; // Uses your .env variable

// 3. Connection Middleware (The "Vercel Fix")
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

// 4. Debug Route
app.get(`${BASE_URI}/debug`, (req, res) => {
    res.json({
        message: "Server is responsive",
        dbStatus: mongoose.connection.readyState,
        hasUri: !!MONGO_URI,
        uriStart: MONGO_URI ? MONGO_URI.substring(0, 20) : "Missing"
    });
});

// 5. API Routes
app.use(BASE_URI, apiRoutes);

module.exports = app;