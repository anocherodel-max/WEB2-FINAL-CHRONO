const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const apiRoutes = require('./src/routes/apiRoutes');

dotenv.config();
const app = express();

app.use(cors({
    origin: "http://localhost:3001",
    credentials: true
}));

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/api/v1/debug', (req, res) => {
    res.json({ message: "Server is alive!", dbStatus: mongoose.connection.readyState });
});

app.use('/api/v1', apiRoutes);

const PORT = 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/chronoquest';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log(`✅ MongoDB Connected`);
        app.listen(PORT, () => {
            console.log(`🚀 Server: http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('❌ MongoDB Error:', err.message);
        process.exit(1);
    });