const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const apiRoutes = require('./src/routes/apiRoutes');

dotenv.config();
const app = express();

// 1. IMPROVED CORS (This stops the "Unsafe attempt" errors)
app.use(cors({
    origin: "http://localhost:3001", // Your Frontend Port
    credentials: true
}));

app.use(express.json());

// 2. REQUEST LOGGER (Watch your terminal when you click Login!)
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// 3. ROUTES
app.get('/api/v1/debug', (req, res) => {
    res.json({ message: "Server is alive!", dbStatus: mongoose.connection.readyState });
});

app.get('/api/v1/status', (req, res) => {
    res.json({
        status: 'online',
        server: `http://localhost:${PORT}`,
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
        frontend: 'http://localhost:3001'
    });
});

app.use('/api/v1', apiRoutes);

const PORT = 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/chronoquest';


console.log('\n' + '='.repeat(70));
console.log('ChronoQuest API - Server Startup');
console.log('='.repeat(70));


console.log(`\nEnvironment: ${process.env.NODE_ENV || 'development'}`);
console.log(`Node Version: ${process.version}`);


console.log('\n[MongoDB Connection]');
console.log(`Connecting to: ${MONGO_URI}`);

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log(`Status: Connected\n`);

        app.listen(PORT, () => {

            console.log('[Server Information]');
            console.log(`API Server: http://localhost:${PORT}`);
            console.log(`Debug Endpoint: http://localhost:${PORT}/api/v1/debug`);
            console.log(`Status Endpoint: http://localhost:${PORT}/api/v1/status`);
            console.log(`\n[Frontend]`);
            console.log(`Dashboard: http://localhost:3001`);
            console.log(`\n[Database]`);
            console.log(`Database Name: chronoquest`);
            console.log(`Connection Status: Active\n`);
            console.log('='.repeat(70));
            console.log('Server is ready to accept requests');
            console.log('='.repeat(70) + '\n');
        });
    })
    .catch(err => {
        console.log(`Status: Failed`);
        console.log(`Error: ${err.message}\n`);
        console.log('[Troubleshooting Steps]');
        console.log('1. Verify MongoDB is running: mongosh');
        console.log('2. Check MONGO_URI in .env file');
        console.log('3. Verify connection string format');
        console.log('4. Check MongoDB is listening on port 27017\n');
        console.log('='.repeat(70) + '\n');
        process.exit(1);
    });

// Handle connection events
mongoose.connection.on('disconnected', () => {
    console.warn(`[Warning] MongoDB connection lost at ${new Date().toISOString()}`);
});

mongoose.connection.on('reconnected', () => {
    console.log(`[Info] MongoDB reconnected at ${new Date().toISOString()}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n[Server] Shutting down...');
    mongoose.connection.close();
    process.exit(0);
});