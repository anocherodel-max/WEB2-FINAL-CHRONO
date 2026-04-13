// chronoquest-api/src/tests/teacher.test.js
const request = require('supertest');
const app = require('../../server');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

beforeAll(async () => {
    // ✅ Spin up an isolated in-memory DB for this test suite
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
}, 30000);

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('Teacher Section Management', () => {
    let token;
    const testEmail = `teacher_${Date.now()}@test.com`;

    beforeAll(async () => {
        // 1. Register the teacher
        await request(app).post('/api/v1/auth/register').send({
            name: "Test Teacher",
            email: testEmail,
            password: "password123"
        });

        // 2. Login to get the token
        const loginRes = await request(app).post('/api/v1/auth/login').send({
            email: testEmail,
            password: "password123"
        });

        token = loginRes.body.token;

        if (!token) {
            throw new Error("Failed to login and retrieve token");
        }
    }, 30000);

    test('POST /api/v1/teacher/add-section - Adds a new class', async () => {
        const res = await request(app)
            .post('/api/v1/teacher/add-section')
            .set('Authorization', `Bearer ${token}`)
            .send({ sectionName: "Science 101" });

        expect(res.statusCode).toBe(201);
        expect(res.body.section).toHaveProperty('classCode');
    }, 10000);

    test('POST /api/v1/teacher/archive-section/:code - Should archive class', async () => {
        const setup = await request(app)
            .post('/api/v1/teacher/add-section')
            .set('Authorization', `Bearer ${token}`)
            .send({ sectionName: "Archive Me" });

        const code = setup.body.section.classCode;

        const res = await request(app)
            .post(`/api/v1/teacher/archive-section/${code}`)
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.message).toContain("archived");
    }, 10000);

    test('DELETE /api/v1/teacher/delete-section/:code - Should delete class', async () => {
        const setup = await request(app)
            .post('/api/v1/teacher/add-section')
            .set('Authorization', `Bearer ${token}`)
            .send({ sectionName: "Delete Me" });

        const code = setup.body.section.classCode;

        const res = await request(app)
            .delete(`/api/v1/teacher/delete-section/${code}`)
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("Section removed");
    }, 10000);
});