# ChronoQuest — Quick Start Guide

**Last Updated:** April 11, 2026  
**For:** Teachers, Admins, Developers

---

## 🎯 What is ChronoQuest?

A learning platform for **Philippine History** where:
- **Teachers** create online classes and manage students
- **Students** join classes and take assessments
- **Admins** manage everything and view analytics

---

## 🚀 Getting Started (5 Minutes)

### 1. Start the System Locally

**Terminal 1 - Backend:**
```bash
cd chronoquest-api
npm install
npm start
# Output:
# 🚀 ChronoQuest API is running on http://localhost:3000
# 📍 Base endpoint: http://localhost:3000/api/v1
```

**For development with auto-reload:**
```bash
npm run dev  # Uses nodemon, restarts on file changes
```

**Terminal 2 - Frontend:**
```bash
cd chrono-dashboard
npm install
npm start
# Opens: http://localhost:3001
```

**Database:**
- MongoDB must be running (local or cloud)
- Set `MONGO_URI` in `.env` file

---

## 📚 Core Concepts (Know These!)

| Term | Meaning | Example |
|------|---------|---------|
| **Base URL** | API address | `http://localhost:3000/api/v1` |
| **Token** | Authorization key | Get from login endpoint |
| **Class Code** | Student join code | Auto-generated, 6 chars |
| **Section** | A class/group | "Grade 4 - Morning" |
| **Era** | History period | "Era 1: Pre-Colonial" |

---

## 📮 Postman Setup (2 Minutes)

### Step 1: Download & Install
- Go to https://www.postman.com/downloads/
- Install and open

### Step 2: Create Environment
1. Click **Environments** → **Create**
2. Name: `Local`
3. Add these variables:
   ```
   BASE_URL = http://localhost:3000/api/v1
   TEACHER_TOKEN = (empty, fill after login)
   ADMIN_TOKEN = (empty, fill after login)
   STUDENT_TOKEN = (empty, fill after login)
   ```
4. Click **Save**

### Step 3: Select Environment
- Top right corner: Select **Local** from dropdown

---

## 🔐 Authentication (Start Here!)

### Register Teacher
```
POST {{BASE_URL}}/auth/register
Content-Type: application/json

{
  "name": "Mrs. Santos",
  "email": "santos@example.com",
  "password": "Password123"
}
```

**Response:** Includes `token` → **Copy and save to `TEACHER_TOKEN`**

### Login Teacher
```
POST {{BASE_URL}}/auth/login
Content-Type: application/json

{
  "email": "santos@example.com",
  "password": "Password123"
}
```

### Promote Teacher to Admin (Via Postman - Requires Another Admin)
```
PATCH {{BASE_URL}}/admin/users/{TEACHER_ID}/teacher
Authorization: Bearer {{ADMIN_TOKEN}}
Content-Type: application/json

{
  "role": "admin"
}
```

---

## 👨‍🏫 Teacher Operations

### Create a Section (Class)
```
POST {{BASE_URL}}/teacher/add-section
Authorization: Bearer {{TEACHER_TOKEN}}
Content-Type: application/json

{
  "sectionName": "Grade 4 - Morning Class"
}
```

**Save the `classCode` from response** (students need it!)

### Get My Profile
```
GET {{BASE_URL}}/auth/profile
Authorization: Bearer {{TEACHER_TOKEN}}
```

### Archive Section
```
POST {{BASE_URL}}/teacher/archive-section/{classCode}
Authorization: Bearer {{TEACHER_TOKEN}}
```

### Delete Section
```
DELETE {{BASE_URL}}/teacher/delete-section/{classCode}
Authorization: Bearer {{TEACHER_TOKEN}}
```

---

## 👨‍🎓 Student Operations

### Create Student (Recommended - via API)
```
POST {{BASE_URL}}/students
Authorization: Bearer {{TEACHER_TOKEN}}
Content-Type: application/json

{
  "name": "Juan Dela Cruz",
  "email": "juan@example.com",
  "password": "Password123",
  "classCode": "ABC789",
  "score": 0,
  "levelReached": "Era 1: Pre-Colonial"
}
```

**Important:**
- `classCode` must match a section you created
- Use the teacher token from the section's creator
- Email must be unique
- Password must be at least 6 characters
- Password is automatically hashed with bcrypt

### Login Student
```
POST {{BASE_URL}}/auth/login
Content-Type: application/json

{
  "email": "juan@example.com",
  "password": "Password123"
}
```

**Response:** Includes `token` → **Save to `STUDENT_TOKEN`**

---

## 👨‍💼 Admin Operations

### Get All Users
```
GET {{BASE_URL}}/admin/users
Authorization: Bearer {{ADMIN_TOKEN}}
```

### Get System Analytics
```
GET {{BASE_URL}}/admin/analytics
Authorization: Bearer {{ADMIN_TOKEN}}
```

### Get Activity Logs
```
GET {{BASE_URL}}/admin/activity-logs-detailed?limit=20
Authorization: Bearer {{ADMIN_TOKEN}}
```

### Deactivate User
```
POST {{BASE_URL}}/admin/users/deactivate
Authorization: Bearer {{ADMIN_TOKEN}}
Content-Type: application/json

{
  "userId": "USER_ID_HERE",
  "userType": "teacher"
}
```

### Delete User
```
POST {{BASE_URL}}/admin/users/delete
Authorization: Bearer {{ADMIN_TOKEN}}
Content-Type: application/json

{
  "userId": "USER_ID_HERE",
  "userType": "teacher"
}
```

**Note:** Admins are stored as teachers with `role: "admin"`. Specify `userType: "teacher"` when deleting an admin. The last admin account cannot be deleted.

---

## ❓ Questions (Quiz Content)

### Create Question
```
POST {{BASE_URL}}/questions
Authorization: Bearer {{TEACHER_TOKEN}}
Content-Type: application/json

{
  "title": "Who was the first president?",
  "description": "Answer explanation here",
  "options": ["option1", "option2", "option3", "option4"],
  "correctAnswer": 0,
  "period": "Revolutionary",
  "difficultyLevel": "Medium",
  "topic": "Presidents"
}
```

**Valid Period Values:**
- `"Pre-colonial"`
- `"Spanish Colonization"`
- `"Revolutionary"`
- `"American/Japanese"`
- `"Post-war"`

---

## 💬 Feedback System

### Submit Feedback
```
POST {{BASE_URL}}/auth/feedback
Authorization: Bearer {{TEACHER_TOKEN}}
Content-Type: application/json

{
  "title": "Bug or suggestion",
  "description": "Details here",
  "type": "bug_report",
  "priority": "high"
}
```

**Types:** `general_feedback`, `bug_report`, `feature_request`, `improvement`

**Priority:** `low`, `medium`, `high`, `critical`

### Respond to Feedback (Admin)
```
POST {{BASE_URL}}/admin/feedback/{feedbackId}/respond
Authorization: Bearer {{ADMIN_TOKEN}}
Content-Type: application/json

{
  "message": "We've fixed this!",
  "status": "resolved"
}
```

---

## 💾 MongoDB Operations

### Install MongoDB Compass
https://www.mongodb.com/products/tools/compass

### Connect
```
mongodb://localhost:27017
```

### Create Teacher Directly
1. Open **teachers** collection
2. Click **+Insert Document**
3. Paste:
```json
{
  "name": "Mr. Reyes",
  "email": "reyes@example.com",
  "password": "$2a$10$nOUIs5kJ7naTuTFkWK1Be.JjReI5/CHF.pWQby7Cm8KqUgzQq6uvy",
  "classCode": "DEF456",
  "role": "teacher",
  "isActive": true,
  "sections": []
}
```

**⚠️ Password must be bcrypt hashed!**
- Generate here: https://bcrypt-generator.com/
- Use "password123" for testing

### Create Student Directly
1. Open **students** collection
2. Click **+Insert Document**
3. Paste:
```json
{
  "name": "Maria Santos",
  "email": "maria@example.com",
  "password": "$2a$10$nOUIs5kJ7naTuTFkWK1Be.JjReI5/CHF.pWQby7Cm8KqUgzQq6uvy",
  "classCode": "ABC789",
  "score": 0,
  "levelReached": "Era 1: Pre-Colonial"
}
```

**Note:** Passwords are automatically hashed with bcrypt when created via API. For direct MongoDB insertion:
- Generate bcrypt hash: https://bcrypt-generator.com/
- Use "password123" for testing

### Promote Teacher to Admin (MongoDB)
1. Find teacher in **teachers** collection
2. Edit and change:
   - `"role": "admin"`
3. Click **Update**

### MongoDB Queries
```javascript
// Find all teachers
db.teachers.find({})

// Find students in a class
db.students.find({ "classCode": "ABC789" })

// Update student score
db.students.updateOne(
  { "email": "juan@example.com" },
  { $set: { "score": 95 } }
)

// Delete a student
db.students.deleteOne({ "email": "juan@example.com" })

// Count students in class
db.students.countDocuments({ "classCode": "ABC789" })
```

---

## 🚀 Deploy to Vercel

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/chronoquest-api.git
git push -u origin main
```

### Step 2: Backend Deployment
1. Go to https://vercel.com
2. Click **New Project** → Import your repo
3. Set **Environment Variables:**
   - `MONGO_URI`: Your MongoDB connection
   - `JWT_SECRET`: Your secret key
   - `NODE_ENV`: `production`
   - `BASE_URI`: `/api/v1`
4. Click **Deploy**
5. Copy the URL (e.g., `https://chronoquest-api-xxx.vercel.app`)

### Step 3: Frontend Deployment
1. Click **New Project** → Import frontend repo
2. Set **Environment Variable:**
   - `REACT_APP_API_BASE`: `https://chronoquest-api-xxx.vercel.app/api/v1`
3. Click **Deploy**

### Step 4: Test
```bash
# Test backend
curl https://chronoquest-api-xxx.vercel.app/api/v1/test

# Test login (replace with your URL)
curl -X POST https://chronoquest-api-xxx.vercel.app/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","password":"Pass123"}'
```

---

## ⚡ Common Tasks (Copy & Paste)

### Task: Create Teacher + Section + Students

**1. Register Teacher**
```
POST {{BASE_URL}}/auth/register
{"name":"Ms. Garcia","email":"garcia@school.edu","password":"Secure123"}
```
Copy `token` → Save to `TEACHER_TOKEN`

**2. Create Section**
```
POST {{BASE_URL}}/teacher/add-section
Authorization: Bearer {{TEACHER_TOKEN}}
{"sectionName":"Grade 4 - Class A"}
```
Copy `classCode` (e.g., "XYZ789")

**3. Register 3 Students**
```
POST {{BASE_URL}}/students
Authorization: Bearer {{TEACHER_TOKEN}}
Content-Type: application/json

{
  "name":"Student 1",
  "email":"student1@example.com",
  "password":"Pass123",
  "classCode":"XYZ789"
}
```
Repeat with different names/emails

**4. Verify**
```
GET {{BASE_URL}}/admin/users
Authorization: Bearer {{ADMIN_TOKEN}}
```

---

## 🆘 Troubleshooting

| Issue | Fix |
|-------|-----|
| "API not responding" | Start backend: `npm run dev` in chronoquest-api |
| "Email already exists" | Use different email or delete in MongoDB |
| "Invalid token" | Re-login to get new token |
| "Password too weak" | Use 6+ characters |
| "classCode not found" | Make sure code matches exactly |
| "Frontend can't connect" | Check `REACT_APP_API_BASE` is correct |
| "MongoDB error" | Start MongoDB service |

---

## 📊 API Endpoints Cheat Sheet

| Action | Method | Endpoint |
|--------|--------|----------|
| Register Teacher | POST | `/auth/register` |
| Login Teacher | POST | `/auth/login` |
| Register Student | POST | `/students` |
| Login Student | POST | `/auth/login` |
| Create Section | POST | `/teacher/add-section` |
| Delete Section | DELETE | `/teacher/delete-section/{code}` |
| Get All Users | GET | `/admin/users` |
| Promote Teacher | PATCH | `/admin/users/{id}/teacher` |
| Get Analytics | GET | `/admin/analytics` |
| Create Question | POST | `/questions` |
| Submit Feedback | POST | `/auth/feedback` |
| Get Feedback | GET | `/admin/feedback` |
| Respond Feedback | POST | `/admin/feedback/{id}/respond` |

---

## 🔑 Key URLs

**Local:**
- Frontend: `http://localhost:3001`
- Backend: `http://localhost:3000/api/v1`
- Database: MongoDB `localhost:27017`

**Production:**
- Frontend: `https://chrono-dashboard-yourname.vercel.app`
- Backend: `https://chronoquest-api-yourname.vercel.app/api/v1`

---

## 📝 Password Hashing

For testing with bcrypt hash `password123`:
```
$2a$10$nOUIs5kJ7naTuTFkWK1Be.JjReI5/CHF.pWQby7Cm8KqUgzQq6uvy
```

Generate your own: https://bcrypt-generator.com/

---

## ✅ Workflow Example

```
1. Register teacher → Get token
2. Create section → Get classCode  
3. Register students with classCode
4. Login to frontend
5. Teacher creates questions
6. Students take assessments
7. Admin views analytics
```

---

## 📞 Need Help?

- **Postman:** https://learning.postman.com/
- **MongoDB:** https://docs.mongodb.com/
- **Express:** https://expressjs.com/
- **React:** https://react.dev/
- **Vercel:** https://vercel.com/docs

---

**Version:** 1.0  
**Last Updated:** April 11, 2026
