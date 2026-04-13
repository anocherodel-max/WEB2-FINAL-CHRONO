const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../../server');

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('Integration Test: Authentication', () => {
    const mockUser = {
        name: "Test Instructor",
        email: "tester@chronoquest.edu",
        password: "securepassword123"
    };

    test('POST /api/v1/auth/register - Should create a new instructor', async () => {
        const res = await request(app)
            .post('/api/v1/auth/register')
            .send(mockUser);

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('message');
    });

    test('POST /api/v1/auth/login - Should return a JWT token', async () => {
        const res = await request(app)
            .post('/api/v1/auth/login')
            .send({
                email: mockUser.email,
                password: mockUser.password
            });

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('token');
    });
});