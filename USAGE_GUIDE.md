# ChronoQuest System Usage Guide

**Created:** April 11, 2026  
**Purpose:** Complete guide to using ChronoQuest with Postman, MongoDB, and Vercel

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [System Overview](#system-overview)
3. [Using Postman for API Testing](#using-postman-for-api-testing)
4. [Using MongoDB for Direct Database Operations](#using-mongodb-for-direct-database-operations)
5. [Deploying to Vercel](#deploying-to-vercel)
6. [Step-by-Step Examples](#step-by-step-examples)
7. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### System Architecture
```
Frontend (React): http://localhost:3001
Backend API: http://localhost:3000/api/v1
Database: MongoDB (local or cloud)
```

### Default Ports
- **Frontend**: 3001
- **Backend**: 3000
- **API Base URL**: `/api/v1`

---

## 🎯 System Overview

### User Types

| User Type | Role | Capabilities |
|-----------|------|--------------|
| **Teacher** | Instructor | Create sections, manage students, view class results |
| **Admin** | Administrator | Manage all users, view analytics, update settings |
| **Student** | Learner | Join class with code, take assessments, view progress |

### Key Concepts

- **Section/Class**: A learning group created by a teacher
- **Class Code**: Unique code students use to join (auto-generated, 6 characters)
- **Score**: 0-100 assessment points
- **Level/Era**: Historical period (Era 1, Era 2, etc.)

---

## 📮 Using Postman for API Testing

### Part 1: Initial Setup

#### Step 1: Install Postman
1. Download from [postman.com](https://www.postman.com/downloads/)
2. Install and launch

#### Step 2: Create a Collection
1. Click **Collections** → **New Collection**
2. Name: `ChronoQuest API`
3. Click **Save**

#### Step 3: Set Environment Variables
1. Click **Environments** → **Create Environment**
2. Name: `ChronoQuest Local`
3. Add variables:
   - `BASE_URL`: `http://localhost:3000/api/v1`
   - `TEACHER_TOKEN`: (leave empty, will be filled after login)
   - `ADMIN_TOKEN`: (leave empty, will be filled after admin login)
   - `STUDENT_TOKEN`: (leave empty, will be filled after student login)

4. Click **Save**

#### Step 4: Select Your Environment
- In the top-right, select **ChronoQuest Local** from the environment dropdown

---

### Part 2: Authentication Endpoints

#### Endpoint 1: Register Teacher

**Request:**
- Method: `POST`
- URL: `{{BASE_URL}}/auth/register`
- Header: `Content-Type: application/json`

**Body (JSON):**
```json
{
  "name": "Mrs. Santos",
  "email": "santos@school.edu",
  "password": "SecurePass123"
}
```

**Response (Success - 201):**
```json
{
  "_id": "6712ab34cd5678ef90123456",
  "name": "Mrs. Santos",
  "email": "santos@school.edu",
  "classCode": "ABC123",
  "sections": [],
  "role": "teacher",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Save the token:**
1. Copy the `token` from response
2. Go to **Environments** → Click **ChronoQuest Local**
3. Paste into `TEACHER_TOKEN` variable
4. Click **Save**

---

#### Endpoint 2: Login Teacher

**Request:**
- Method: `POST`
- URL: `{{BASE_URL}}/auth/login`
- Header: `Content-Type: application/json`

**Body (JSON):**
```json
{
  "email": "santos@school.edu",
  "password": "SecurePass123"
}
```

**Response (Success - 200):**
```json
{
  "_id": "6712ab34cd5678ef90123456",
  "name": "Mrs. Santos",
  "email": "santos@school.edu",
  "classCode": "ABC123",
  "sections": [],
  "role": "teacher",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

#### Endpoint 3: Create Admin (Via MongoDB - See MongoDB Section)

To test admin endpoints, you'll need to:
1. Register a teacher normally
2. Manually update their role in MongoDB to `admin`
3. Use their token for admin endpoints

---

### Part 3: Teacher/Section Management

#### Endpoint 4: Create Section

**Request:**
- Method: `POST`
- URL: `{{BASE_URL}}/teacher/add-section`
- Header: 
  - `Content-Type: application/json`
  - `Authorization: Bearer {{TEACHER_TOKEN}}`

**Body (JSON):**
```json
{
  "sectionName": "Grade 4 - Morning Class"
}
```

**Response (Success - 201):**
```json
{
  "updatedTeacher": {
    "_id": "6712ab34cd5678ef90123456",
    "name": "Mrs. Santos",
    "email": "santos@school.edu",
    "sections": [
      {
        "_id": "6712cd34ef5678ab90123456",
        "sectionName": "Grade 4 - Morning Class",
        "classCode": "XYZ789",
        "createdAt": "2026-04-11T10:30:00.000Z",
        "isArchived": false
      }
    ]
  },
  "newSection": {
    "sectionName": "Grade 4 - Morning Class",
    "classCode": "XYZ789"
  }
}
```

**Save the section classCode** for student enrollment!

---

#### Endpoint 5: Archive Section

**Request:**
- Method: `POST`
- URL: `{{BASE_URL}}/teacher/archive-section/XYZ789`
- Header: `Authorization: Bearer {{TEACHER_TOKEN}}`

**Response (Success - 200):**
```json
{
  "message": "Section archived successfully",
  "teacher": { /* full teacher object */ }
}
```

---

#### Endpoint 6: Delete Section

**Request:**
- Method: `DELETE`
- URL: `{{BASE_URL}}/teacher/delete-section/XYZ789`
- Header: `Authorization: Bearer {{TEACHER_TOKEN}}`

**Response (Success - 200):**
```json
{
  "updatedTeacher": { /* full teacher object */ },
  "message": "Section removed"
}
```

---

### Part 4: Student Management

#### Endpoint 7: Register Student

**Request:**
- Method: `POST`
- URL: `{{BASE_URL}}/auth/register-student`
- Header: `Content-Type: application/json`

**Body (JSON):**
```json
{
  "name": "Juan Dela Cruz",
  "email": "juan@student.edu",
  "password": "StudentPass123",
  "classCode": "XYZ789"
}
```

**Response (Success - 201):**
```json
{
  "_id": "6712ef34ab5678cd90123456",
  "name": "Juan Dela Cruz",
  "email": "juan@student.edu",
  "classCode": "XYZ789",
  "score": 0,
  "levelReached": "Era 1: Prehistoric",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Note:** The `classCode` is the section code the student is joining!

---

#### Endpoint 8: Login Student

**Request:**
- Method: `POST`
- URL: `{{BASE_URL}}/auth/login-student`
- Header: `Content-Type: application/json`

**Body (JSON):**
```json
{
  "email": "juan@student.edu",
  "password": "StudentPass123"
}
```

**Response (Success - 200):**
```json
{
  "_id": "6712ef34ab5678cd90123456",
  "name": "Juan Dela Cruz",
  "email": "juan@student.edu",
  "classCode": "XYZ789",
  "score": 0,
  "levelReached": "Era 1: Prehistoric",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### Part 5: Admin Endpoints

#### Endpoint 9: Get All Users (Admin Only)

**Request:**
- Method: `GET`
- URL: `{{BASE_URL}}/admin/users`
- Header: `Authorization: Bearer {{ADMIN_TOKEN}}`

**Response (Success - 200):**
```json
{
  "teachers": [
    {
      "_id": "6712ab34cd5678ef90123456",
      "name": "Mrs. Santos",
      "email": "santos@school.edu",
      "role": "teacher",
      "isActive": true,
      "sections": [
        {
          "sectionName": "Grade 4 - Morning Class",
          "classCode": "XYZ789"
        }
      ],
      "userType": "teacher",
      "totalSections": 1
    }
  ],
  "students": [
    {
      "_id": "6712ef34ab5678cd90123456",
      "name": "Juan Dela Cruz",
      "email": "juan@student.edu",
      "classCode": "XYZ789",
      "score": 85,
      "levelReached": "Era 2: Spanish",
      "userType": "student"
    }
  ],
  "totalUsers": 2,
  "totalTeachers": 1,
  "totalStudents": 1
}
```

---

#### Endpoint 10: Promote Teacher to Admin

**Request:**
- Method: `PATCH`
- URL: `{{BASE_URL}}/admin/users/6712ab34cd5678ef90123456/teacher`
- Header: 
  - `Content-Type: application/json`
  - `Authorization: Bearer {{ADMIN_TOKEN}}`

**Body (JSON):**
```json
{
  "role": "admin",
  "adminLevel": "super_admin"
}
```

**Admin Levels Available:**
- `super_admin` - Full access to all admin functions
- `content_admin` - Can manage content and settings only
- `support_admin` - Can manage feedback and support only

**Response (Success - 200):**
```json
{
  "message": "User updated successfully",
  "user": {
    "_id": "6712ab34cd5678ef90123456",
    "name": "Mrs. Santos",
    "email": "santos@school.edu",
    "role": "admin",
    "adminLevel": "super_admin",
    "isActive": true
  }
}
```

---

#### Endpoint 11: Get Analytics

**Request:**
- Method: `GET`
- URL: `{{BASE_URL}}/admin/analytics`
- Header: `Authorization: Bearer {{ADMIN_TOKEN}}`

**Response (Success - 200):**
```json
{
  "totalUsers": 5,
  "totalTeachers": 2,
  "totalStudents": 3,
  "totalSections": 3,
  "averageScore": 75.33,
  "recentActivity": [
    {
      "action": "USER_REGISTERED",
      "user": "Juan Dela Cruz",
      "timestamp": "2026-04-11T10:30:00.000Z"
    }
  ]
}
```

---

#### Endpoint 12: Get Activity Logs (Detailed)

**Request:**
- Method: `GET`
- URL: `{{BASE_URL}}/admin/activity-logs-detailed?limit=10`
- Header: `Authorization: Bearer {{ADMIN_TOKEN}}`

**Response (Success - 200):**
```json
[
  {
    "_id": "6712gh34ij5678kl90123456",
    "userId": "6712ab34cd5678ef90123456",
    "userRole": "admin",
    "action": "PROMOTE_USER",
    "resourceId": "6712ef34ab5678cd90123456",
    "status": "success",
    "createdAt": "2026-04-11T10:30:00.000Z",
    "userDetails": {
      "_id": "6712ab34cd5678ef90123456",
      "name": "Mrs. Santos",
      "email": "santos@school.edu"
    }
  }
]
```

---

### Part 6: Question Management

#### Endpoint 13: Create Question

**Request:**
- Method: `POST`
- URL: `{{BASE_URL}}/questions/create`
- Header: 
  - `Content-Type: application/json`
  - `Authorization: Bearer {{TEACHER_TOKEN}}`

**Body (JSON):**
```json
{
  "question": "Who was the first president of the Philippines?",
  "options": [
    "Manuel L. Quezon",
    "Jose P. Laurel",
    "Elpidio Quirino",
    "Ramon Magsaysay"
  ],
  "correctOption": 0,
  "era": "Era 3: Revolutionary Period",
  "difficulty": "Medium",
  "topic": "Philippine Presidents",
  "explanation": "Manuel L. Quezon was the first President of the Commonwealth of the Philippines (1935-1944)"
}
```

**Response (Success - 201):**
```json
{
  "_id": "6712mn34op5678qr90123456",
  "question": "Who was the first president of the Philippines?",
  "options": ["Manuel L. Quezon", "Jose P. Laurel", "Elpidio Quirino", "Ramon Magsaysay"],
  "correctOption": 0,
  "era": "Era 3: Revolutionary Period",
  "difficulty": "Medium",
  "topic": "Philippine Presidents",
  "explanation": "Manuel L. Quezon was the first President of the Commonwealth of the Philippines (1935-1944)",
  "createdBy": "6712ab34cd5678ef90123456",
  "createdAt": "2026-04-11T10:30:00.000Z"
}
```

---

### Part 7: Feedback Management

#### Endpoint 14: Submit Feedback

**Request:**
- Method: `POST`
- URL: `{{BASE_URL}}/auth/submit-feedback`
- Header: 
  - `Content-Type: application/json`
  - `Authorization: Bearer {{TEACHER_TOKEN}}`

**Body (JSON):**
```json
{
  "title": "Bug: Section code not copying",
  "description": "When I click the copy button, the section code doesn't copy to clipboard",
  "type": "bug_report",
  "priority": "high"
}
```

**Feedback Types:**
- `general_feedback` - General suggestions
- `bug_report` - Bug reports
- `feature_request` - Feature requests
- `improvement` - System improvements

**Priority Levels:**
- `low`
- `medium`
- `high`
- `critical`

**Response (Success - 201):**
```json
{
  "_id": "6712st34uv5678wx90123456",
  "title": "Bug: Section code not copying",
  "description": "When I click the copy button, the section code doesn't copy to clipboard",
  "type": "bug_report",
  "priority": "high",
  "submittedBy": "6712ab34cd5678ef90123456",
  "status": "pending",
  "createdAt": "2026-04-11T10:30:00.000Z"
}
```

---

#### Endpoint 15: Respond to Feedback (Admin)

**Request:**
- Method: `POST`
- URL: `{{BASE_URL}}/admin/feedback/6712st34uv5678wx90123456/respond`
- Header: 
  - `Content-Type: application/json`
  - `Authorization: Bearer {{ADMIN_TOKEN}}`

**Body (JSON):**
```json
{
  "message": "Thank you for the report! We've fixed this issue in the latest update.",
  "status": "resolved"
}
```

**Response (Success - 200):**
```json
{
  "message": "Feedback responded successfully",
  "feedback": {
    "_id": "6712st34uv5678wx90123456",
    "title": "Bug: Section code not copying",
    "status": "resolved",
    "response": {
      "admin": "6712yz34ab5678cd90123456",
      "message": "Thank you for the report! We've fixed this issue in the latest update.",
      "respondedAt": "2026-04-11T10:45:00.000Z"
    }
  }
}
```

---

## 💾 Using MongoDB for Direct Database Operations

### Part 1: MongoDB Setup

#### Option A: Local MongoDB

1. **Install MongoDB Community**
   - Download: [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
   - Install and start the service

2. **Use MongoDB Compass** (GUI)
   - Download: [mongodb.com/products/tools/compass](https://www.mongodb.com/products/tools/compass)
   - Connect: `mongodb://localhost:27017`

#### Option B: MongoDB Atlas (Cloud)

1. **Go to** [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. **Create Account** and free cluster
3. **Get Connection String:**
   - Copy from Atlas dashboard
   - Example: `mongodb+srv://user:password@cluster.mongodb.net/chronoquest?retryWrites=true&w=majority`

---

### Part 2: Database Collections Overview

Your MongoDB database has these collections:

| Collection | Purpose | Documents |
|-----------|---------|-----------|
| `teachers` | Teacher/Admin accounts | Teacher profiles with sections |
| `students` | Student accounts | Student learning data |
| `scores` | Assessment results | Individual assessment scores |
| `questions` | Quiz questions | Question bank |
| `feedback` | User feedback | Feedback submissions/responses |
| `activitylogs` | System activity | Audit trail |
| `systemsettings` | Configuration | System settings |

---

### Part 3: Creating Records in MongoDB

#### Example 1: Create a Teacher Directly

**Using MongoDB Compass:**

1. Click **chronoquest** database → **teachers** collection
2. Click **+Insert Document**
3. Paste this JSON:

```json
{
  "name": "Mr. Reyes",
  "email": "reyes@school.edu",
  "password": "$2a$10$...(bcrypt hash)...",
  "classCode": "DEF456",
  "role": "teacher",
  "adminLevel": null,
  "isActive": true,
  "sections": [],
  "createdAt": ISODate("2026-04-11T10:30:00.000Z"),
  "updatedAt": ISODate("2026-04-11T10:30:00.000Z")
}
```

**⚠️ Important:** 
- Password must be bcrypt hashed
- Use an online bcrypt generator for testing: [bcrypt-generator.com](https://bcrypt-generator.com/)
- Example hash for "password123": `$2a$10$nOUIs5kJ7naTuTFkWK1Be.JjReI5/CHF.pWQby7Cm8KqUgzQq6uvy`

---

#### Example 2: Create a Student Directly

**Using MongoDB Compass:**

1. Click **chronoquest** database → **students** collection
2. Click **+Insert Document**
3. Paste this JSON:

```json
{
  "name": "Maria Santos",
  "email": "maria@student.edu",
  "password": "$2a$10$nOUIs5kJ7naTuTFkWK1Be.JjReI5/CHF.pWQby7Cm8KqUgzQq6uvy",
  "classCode": "XYZ789",
  "score": 0,
  "levelReached": "Era 1: Prehistoric",
  "createdAt": ISODate("2026-04-11T10:30:00.000Z"),
  "updatedAt": ISODate("2026-04-11T10:30:00.000Z")
}
```

---

#### Example 3: Promote a Teacher to Admin

**Using MongoDB Compass:**

1. Find the teacher record in **teachers** collection
2. Click the record
3. Edit the document:
   - Change `"role": "teacher"` → `"role": "admin"`
   - Add `"adminLevel": "super_admin"`
   - Update `"updatedAt"` to current timestamp

**Before:**
```json
{
  "_id": ObjectId("6712ab34cd5678ef90123456"),
  "name": "Mrs. Santos",
  "email": "santos@school.edu",
  "role": "teacher",
  "adminLevel": null
}
```

**After:**
```json
{
  "_id": ObjectId("6712ab34cd5678ef90123456"),
  "name": "Mrs. Santos",
  "email": "santos@school.edu",
  "role": "admin",
  "adminLevel": "super_admin"
}
```

4. Click **Update**

---

#### Example 4: Bulk Create Multiple Students

**Using MongoDB Compass:**

1. Click **teachers** collection
2. Click **+Insert Document** (or right-click → Insert Document)
3. Select **Insert Multiple** option
4. Paste this:

```json
[
  {
    "name": "Pedro Gonzales",
    "email": "pedro@student.edu",
    "password": "$2a$10$nOUIs5kJ7naTuTFkWK1Be.JjReI5/CHF.pWQby7Cm8KqUgzQq6uvy",
    "classCode": "XYZ789",
    "score": 45,
    "levelReached": "Era 2: Spanish Colonization",
    "createdAt": ISODate("2026-04-11T10:30:00.000Z"),
    "updatedAt": ISODate("2026-04-11T10:30:00.000Z")
  },
  {
    "name": "Rosa Martinez",
    "email": "rosa@student.edu",
    "password": "$2a$10$nOUIs5kJ7naTuTFkWK1Be.JjReI5/CHF.pWQby7Cm8KqUgzQq6uvy",
    "classCode": "XYZ789",
    "score": 78,
    "levelReached": "Era 3: Revolutionary Period",
    "createdAt": ISODate("2026-04-11T10:30:00.000Z"),
    "updatedAt": ISODate("2026-04-11T10:30:00.000Z")
  }
]
```

---

### Part 4: MongoDB Queries (Advanced)

#### Query 1: Find All Teachers

```javascript
db.teachers.find({})
```

---

#### Query 2: Find Teachers by Role

```javascript
db.teachers.find({ "role": "admin" })
```

---

#### Query 3: Find Students by Class Code

```javascript
db.students.find({ "classCode": "XYZ789" })
```

---

#### Query 4: Find High-Scoring Students

```javascript
db.students.find({ "score": { $gte: 80 } })
```

---

#### Query 5: Update Student Score

```javascript
db.students.updateOne(
  { "email": "juan@student.edu" },
  { $set: { "score": 95, "levelReached": "Era 4: American & Japanese Occupation" } }
)
```

---

#### Query 6: Delete a Student

```javascript
db.students.deleteOne({ "email": "juan@student.edu" })
```

---

#### Query 7: Count Students in a Class

```javascript
db.students.countDocuments({ "classCode": "XYZ789" })
```

---

#### Query 8: Bulk Update Multiple Students

```javascript
db.students.updateMany(
  { "classCode": "XYZ789" },
  { $set: { "score": 100 } }
)
```

---

## 🚀 Deploying to Vercel

### Part 1: Prepare Your Repository

#### Step 1: Create GitHub Repository

1. **Go to** [github.com/new](https://github.com/new)
2. **Create repository** names:
   - Frontend: `chrono-dashboard`
   - Backend: `chronoquest-api` (or use same monorepo)

3. **Push your code:**
   ```bash
   cd c:\Users\PC\Documents\WEBDEV\ 2\ZZZ\CHRONO-API
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/chronoquest-api.git
   git push -u origin main
   ```

---

#### Step 2: Prepare Backend Files

Create `vercel.json` in `chronoquest-api/` root:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

---

### Part 2: Deploy Backend to Vercel

#### Step 1: Connect to Vercel

1. **Go to** [vercel.com](https://vercel.com)
2. **Sign up/Login** with GitHub
3. **Import project** → Select your `chronoquest-api` repository
4. Click **Import**

---

#### Step 2: Configure Environment Variables

1. In Vercel Dashboard, click **Settings** → **Environment Variables**
2. **Add variables:**

| Variable | Value | Example |
|----------|-------|---------|
| `MONGO_URI` | Your MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/chronoquest` |
| `JWT_SECRET` | Your JWT secret key | `your-very-secret-key-change-this` |
| `NODE_ENV` | Environment | `production` |
| `PORT` | Port number (optional) | `3000` |
| `BASE_URI` | API base path | `/api/v1` |

3. Click **Save**

---

#### Step 3: Deploy

1. Click **Deploy**
2. Wait for build to complete
3. **Get your API URL:**
   - Format: `https://chronoquest-api-yourname.vercel.app`
   - Full API URL: `https://chronoquest-api-yourname.vercel.app/api/v1`

---

### Part 3: Deploy Frontend to Vercel

#### Step 1: Create `.env.production`

In `chrono-dashboard/` folder, create `.env.production`:

```env
REACT_APP_API_BASE=https://chronoquest-api-yourname.vercel.app/api/v1
```

---

#### Step 2: Deploy Frontend

1. In Vercel Dashboard, click **New Project**
2. **Import** your `chrono-dashboard` repository
3. **Configure** → Set **Build & Development Settings:**
   - Framework Preset: `Create React App`
   - Build Command: `npm run build`
   - Output Directory: `build`

4. **Environment Variables:**
   - Add: `REACT_APP_API_BASE` = `https://chronoquest-api-yourname.vercel.app/api/v1`

5. Click **Deploy**
6. **Get your frontend URL:**
   - Format: `https://chrono-dashboard-yourname.vercel.app`

---

### Part 4: Verify Deployment

#### Test Backend
```bash
curl https://chronoquest-api-yourname.vercel.app/api/v1/test
# Response: { "message": "API is working!" }
```

#### Test API Call
```bash
curl -X POST https://chronoquest-api-yourname.vercel.app/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Teacher",
    "email": "test@school.edu",
    "password": "TestPass123"
  }'
```

---

## 📝 Step-by-Step Examples

### Complete Workflow: Create Teacher → Create Section → Enroll Students

#### Step 1: Register Teacher (Postman)

1. **Create request:**
   - Method: `POST`
   - URL: `{{BASE_URL}}/auth/register`
   - Body:
   ```json
   {
     "name": "Ms. Gonzales",
     "email": "gonzales@school.edu",
     "password": "SecurePass456"
   }
   ```

2. **Send request**
3. **Result:** Copy the returned `token` → Save to `TEACHER_TOKEN` variable

---

#### Step 2: Create Section (Postman)

1. **Create request:**
   - Method: `POST`
   - URL: `{{BASE_URL}}/teacher/add-section`
   - Header: `Authorization: Bearer {{TEACHER_TOKEN}}`
   - Body:
   ```json
   {
     "sectionName": "Grade 5 - History Class"
   }
   ```

2. **Send request**
3. **Result:** Copy section `classCode` (e.g., "ABC789") → Use for students

---

#### Step 3: Create Multiple Students (Postman)

**Student 1:**
1. Method: `POST`
2. URL: `{{BASE_URL}}/auth/register-student`
3. Body:
   ```json
   {
     "name": "Ana Rodriguez",
     "email": "ana@student.edu",
     "password": "StudentPass123",
     "classCode": "ABC789"
   }
   ```
4. Send

**Student 2:**
1. Method: `POST`
2. URL: `{{BASE_URL}}/auth/register-student`
3. Body:
   ```json
   {
     "name": "Luis Fernandez",
     "email": "luis@student.edu",
     "password": "StudentPass123",
     "classCode": "ABC789"
   }
   ```
4. Send

**Student 3:**
1. Method: `POST`
2. URL: `{{BASE_URL}}/auth/register-student`
3. Body:
   ```json
   {
     "name": "Sofia Aquino",
     "email": "sofia@student.edu",
     "password": "StudentPass123",
     "classCode": "ABC789"
   }
   ```
4. Send

---

#### Step 4: Verify Students Enrolled (Admin)

1. **Get Admin Token** (repeat Step 1 for admin account, or promote via MongoDB)
2. **Create request:**
   - Method: `GET`
   - URL: `{{BASE_URL}}/admin/users`
   - Header: `Authorization: Bearer {{ADMIN_TOKEN}}`

3. **Send request**
4. **Result:** You should see 3 students with `classCode: "ABC789"`

---

### Example: Promote Teacher to Admin

#### Using Postman + API

1. **Get admin's token** (register/login as admin first)
2. **Create request:**
   - Method: `PATCH`
   - URL: `{{BASE_URL}}/admin/users/6712ab34cd5678ef90123456/teacher`
   - Header: `Authorization: Bearer {{ADMIN_TOKEN}}`
   - Body:
   ```json
   {
     "role": "admin",
     "adminLevel": "super_admin"
   }
   ```

3. **Send**
4. **Result:** Teacher is now admin!

---

#### Using MongoDB Compass

1. Open MongoDB Compass
2. Connect to your database
3. Navigate to: `chronoquest` → `teachers`
4. Find teacher by email
5. Edit the record:
   - `"role": "admin"`
   - `"adminLevel": "super_admin"`
6. Click **Update**

---

### Example: Create Questions

**Science Question:**
```json
{
  "question": "What year did Ferdinand Magellan reach the Philippines?",
  "options": [
    "1510",
    "1521",
    "1565",
    "1596"
  ],
  "correctOption": 1,
  "era": "Era 1: Pre-Colonial & Arrival of Europeans",
  "difficulty": "Hard",
  "topic": "Historical Events",
  "explanation": "Ferdinand Magellan arrived in the Philippines on March 16, 1521"
}
```

**Easy Question:**
```json
{
  "question": "The Philippines is located in which region?",
  "options": [
    "Southeast Asia",
    "South Asia",
    "East Asia",
    "Central Asia"
  ],
  "correctOption": 0,
  "era": "Era 1: Basic Geography",
  "difficulty": "Easy",
  "topic": "Geography",
  "explanation": "The Philippines is an archipelago in Southeast Asia"
}
```

---

## 🛠️ Troubleshooting

### Problem: "API is not responding"

**Solution:**
1. Check if backend is running: `npm run dev` in `chronoquest-api/`
2. Verify `BASE_URL` in Postman is correct
3. Check MongoDB connection: See `.env` file for `MONGO_URI`

---

### Problem: "Email already registered"

**Solution:**
1. Use a different email
2. Or delete the user from MongoDB and try again:
   ```javascript
   db.teachers.deleteOne({ email: "test@school.edu" })
   ```

---

### Problem: "Invalid token"

**Solution:**
1. Make sure token is set in Postman environment variable
2. Copy the exact token from login response
3. Tokens expire in 30 days - get a new one if expired

---

### Problem: "Password too weak"

**Solution:**
- Passwords must be at least 6 characters
- Use strong passwords: `SecurePass123!`

---

### Problem: Students don't see sections

**Solution:**
1. Verify `classCode` matches exactly
2. Check section is not archived
3. Query MongoDB:
   ```javascript
   db.students.findOne({ email: "student@email.edu" })
   // Check if classCode matches a section
   ```

---

### Problem: "Feedback not responding" Error

**Solution:**
1. Check admin has `manage_feedback` permission
2. Verify endpoint: `POST /admin/feedback/:id/respond`
3. Include `Authorization` header with admin token

---

### Problem: Vercel Deployment Fails

**Solution:**
1. Check `vercel.json` is correct
2. Verify all environment variables are set
3. Check MongoDB connection string is correct
4. View logs: `vercel logs`

---

### Problem: Frontend Can't Connect to API

**Solution:**
1. Check `REACT_APP_API_BASE` environment variable
2. Verify API URL has no trailing slash
3. Check CORS is enabled on backend
4. View browser console for error details

---

## 📚 Quick Reference

### Default Credentials (After Deployment)

| Item | Value |
|------|-------|
| Frontend URL | `https://chrono-dashboard-yourname.vercel.app` |
| Backend API | `https://chronoquest-api-yourname.vercel.app/api/v1` |
| MongoDB | Your connection string |
| JWT Expiry | 30 days |
| Password Min Length | 6 characters |
| Admin Levels | super_admin, content_admin, support_admin |

---

### API Response Status Codes

| Code | Meaning | Example |
|------|---------|---------|
| **200** | Success | GET request succeeded |
| **201** | Created | User registered successfully |
| **400** | Bad Request | Missing required fields |
| **401** | Unauthorized | Invalid token or credentials |
| **403** | Forbidden | Insufficient permissions |
| **404** | Not Found | User doesn't exist |
| **500** | Server Error | Database connection failed |

---

### Common Error Messages

| Error | Cause | Fix |
|-------|-------|-----|
| `Email already registered` | Email exists | Use different email |
| `Invalid email format` | Bad email | Use valid email format |
| `Password too weak` | <6 characters | Use 6+ character password |
| `Not authorized to access this route` | Missing token | Add Authorization header |
| `Access denied. Admin privileges required` | Not admin | Promote to admin first |
| `Email not registered` | User doesn't exist | Register first |

---

## 📞 Additional Help

- **Framework Docs:** [Express.js](https://expressjs.com/), [React](https://react.dev/), [MongoDB](https://docs.mongodb.com/)
- **Testing Tools:** [Postman Docs](https://learning.postman.com/)
- **Deployment:** [Vercel Docs](https://vercel.com/docs)
- **Authentication:** [JWT Info](https://jwt.io/)

---

**Last Updated:** April 11, 2026  
**Version:** 1.0
