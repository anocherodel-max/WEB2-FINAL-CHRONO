const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../../server');

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
}, 30000);

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('Student Score Sync', () => {
    let validClassCode;

    // Seed a teacher with a known classCode so we can test the happy path
    beforeAll(async () => {
        const Teacher = require('../../src/models/teacherModel');
        const teacher = await Teacher.create({
            name: 'Seed Teacher',
            email: 'seed@chronoquest.edu',
            password: 'password123',
            // classCode lives on sections, not the teacher root —
            // but studentController looks up Teacher.findOne({ classCode })
            // which matches the root classCode field.
            classCode: 'VALID1',
        });
        validClassCode = teacher.classCode;
    });

    test('POST /api/v1/student/sync - 201 when class code is valid', async () => {
        const res = await request(app)
            .post('/api/v1/student/sync')
            .send({
                studentName: 'Jane Doe',
                classCode: validClassCode,
                levelReached: 'Ancient Egypt',
                score: 80,
            });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('message', 'Sync Successful');
        expect(res.body.data).toHaveProperty('studentName', 'Jane Doe');
        expect(res.body.data).toHaveProperty('classCode', validClassCode);
    });

    test('POST /api/v1/student/sync - 404 when class code does not exist', async () => {
        const res = await request(app)
            .post('/api/v1/student/sync')
            .send({
                studentName: 'Ghost Student',
                classCode: 'BADCOD',
                levelReached: 'Era 1',
                score: 50,
            });

        expect(res.statusCode).toBe(404);
        expect(res.body).toHaveProperty('message', 'Invalid Class Code');
    });

    test('POST /api/v1/student/sync - score is stored as provided', async () => {
        const res = await request(app)
            .post('/api/v1/student/sync')
            .send({
                studentName: 'High Scorer',
                classCode: validClassCode,
                levelReached: 'Post-war',
                score: 99,
            });

        expect(res.statusCode).toBe(201);
        expect(res.body.data.score).toBe(99);
    });
});