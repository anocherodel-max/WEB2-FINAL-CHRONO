const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../../server');

let mongoServer;
let adminToken;
let teacherToken;
let seededTeacherId;
let seededStudentId;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());

    // Register an admin directly via model so we can set role = 'admin'
    const Teacher = require('../../src/models/teacherModel');
    const jwt = require('jsonwebtoken');

    const admin = await Teacher.create({
        name: 'Admin User',
        email: 'admin@chronoquest.edu',
        password: 'adminpass123',
        role: 'admin',
    });
    adminToken = jwt.sign(
        { id: admin._id, role: 'admin' },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '1d' }
    );

    // Register a regular teacher for comparison / target in delete tests
    const teacher = await Teacher.create({
        name: 'Regular Teacher',
        email: 'teacher@chronoquest.edu',
        password: 'teacherpass123',
        role: 'teacher',
    });
    seededTeacherId = teacher._id.toString();
    teacherToken = jwt.sign(
        { id: teacher._id, role: 'teacher' },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '1d' }
    );

    // Create a student to target in deactivate/delete tests
    const Student = require('../../src/models/studentModel');
    const student = await Student.create({
        name: 'Test Student',
        email: 'student@chronoquest.edu',
        password: 'studentpass123',
        classCode: 'CLASS1',
    });
    seededStudentId = student._id.toString();
}, 30000);

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

// ─── Auth Guard Tests ─────────────────────────────────────────────────────────

describe('Admin Routes - Auth Guards', () => {
    test('GET /api/v1/admin/users - 401 with no token', async () => {
        const res = await request(app).get('/api/v1/admin/users');
        expect(res.statusCode).toBe(401);
    });

    test('GET /api/v1/admin/users - 403 when caller is a regular teacher', async () => {
        const res = await request(app)
            .get('/api/v1/admin/users')
            .set('Authorization', `Bearer ${teacherToken}`);
        expect(res.statusCode).toBe(403);
    });
});

// ─── getAllUsers ──────────────────────────────────────────────────────────────

describe('Admin - GET /api/v1/admin/users', () => {
    test('200 and returns teachers + students arrays', async () => {
        const res = await request(app)
            .get('/api/v1/admin/users')
            .set('Authorization', `Bearer ${adminToken}`);

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('teachers');
        expect(res.body).toHaveProperty('students');
        expect(Array.isArray(res.body.teachers)).toBe(true);
        expect(Array.isArray(res.body.students)).toBe(true);
        expect(res.body).toHaveProperty('totalUsers');
    });

    test('passwords are excluded from the response', async () => {
        const res = await request(app)
            .get('/api/v1/admin/users')
            .set('Authorization', `Bearer ${adminToken}`);

        res.body.teachers.forEach(t => expect(t).not.toHaveProperty('password'));
        res.body.students.forEach(s => expect(s).not.toHaveProperty('password'));
    });
});

// ─── getSystemAnalytics ───────────────────────────────────────────────────────

describe('Admin - GET /api/v1/admin/analytics', () => {
    test('200 and returns platform stats', async () => {
        const res = await request(app)
            .get('/api/v1/admin/analytics')
            .set('Authorization', `Bearer ${adminToken}`);

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('totalTeachers');
        expect(res.body).toHaveProperty('totalStudents');
        expect(res.body).toHaveProperty('totalUsers');
    });
});

// ─── deactivateUser ───────────────────────────────────────────────────────────

describe('Admin - POST /api/v1/admin/users/deactivate', () => {
    test('200 when deactivating a student', async () => {
        const res = await request(app)
            .post('/api/v1/admin/users/deactivate')
            .set('Authorization', `Bearer ${adminToken}`)
            .send({ userId: seededStudentId, userType: 'student' });

        expect(res.statusCode).toBe(200);
        expect(res.body.message).toMatch(/deactivated/i);
    });

    test('200 when deactivating a teacher', async () => {
        const res = await request(app)
            .post('/api/v1/admin/users/deactivate')
            .set('Authorization', `Bearer ${adminToken}`)
            .send({ userId: seededTeacherId, userType: 'teacher' });

        expect(res.statusCode).toBe(200);
    });
});

// ─── deleteUser ───────────────────────────────────────────────────────────────

describe('Admin - POST /api/v1/admin/users/delete', () => {
    test('400 when userType is invalid', async () => {
        const res = await request(app)
            .post('/api/v1/admin/users/delete')
            .set('Authorization', `Bearer ${adminToken}`)
            .send({ userId: seededStudentId, userType: 'invalid' });

        expect(res.statusCode).toBe(400);
        expect(res.body.errorCode).toBe('INVALID_USER_TYPE');
    });

    test('404 when student id does not exist', async () => {
        const fakeId = new mongoose.Types.ObjectId().toString();
        const res = await request(app)
            .post('/api/v1/admin/users/delete')
            .set('Authorization', `Bearer ${adminToken}`)
            .send({ userId: fakeId, userType: 'student' });

        expect(res.statusCode).toBe(404);
    });

    test('200 when deleting a real student', async () => {
        // Create a fresh student so the seeded one stays for other tests
        const Student = require('../../src/models/studentModel');
        const temp = await Student.create({
            name: 'Temp Student',
            email: 'temp@chronoquest.edu',
            password: 'pass1234',
            classCode: 'TEMP01',
        });

        const res = await request(app)
            .post('/api/v1/admin/users/delete')
            .set('Authorization', `Bearer ${adminToken}`)
            .send({ userId: temp._id.toString(), userType: 'student' });

        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('User deleted successfully');
    });

    test('400 when trying to delete the last admin', async () => {
        // The only admin in this in-memory DB is the one we created in beforeAll
        const Teacher = require('../../src/models/teacherModel');
        const admin = await Teacher.findOne({ role: 'admin' });

        const res = await request(app)
            .post('/api/v1/admin/users/delete')
            .set('Authorization', `Bearer ${adminToken}`)
            .send({ userId: admin._id.toString(), userType: 'teacher' });

        expect(res.statusCode).toBe(400);
        expect(res.body.message).toMatch(/last admin/i);
    });
});