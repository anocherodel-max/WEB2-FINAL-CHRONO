# 📮 Postman in VS Code — Complete Guide

**Version:** 1.0  
**Last Updated:** April 12, 2026  
**For:** Testing API endpoints directly in VS Code

---

## 🎯 What is Postman Extension?

Postman is now available **directly in VS Code** — no separate app needed!

**Benefits:**
- ✅ Make API requests without leaving VS Code
- ✅ See responses instantly
- ✅ Save environment variables
- ✅ Test authentication (tokens, bearers)
- ✅ Works with ChronoQuest or any API

---

## 📚 Quick Navigation

| Task | Section | Time |
|------|---------|------|
| 📥 Install extension | [Install Postman](#-install-postman-extension) | 2 min |
| 🌐 Create request | [Make Your First Request](#-make-your-first-request) | 3 min |
| 🔑 Set environment variables | [Use Variables](#-set-environment-variables) | 3 min |
| 🔐 Add authentication | [Add Auth Headers](#-add-authentication-headers) | 2 min |
| 💾 Send JSON body | [Send Request Body](#-send-request-body) | 3 min |
| 📊 View responses | [View Responses](#-view-responses-clearly) | 2 min |
| 🔄 Reuse requests | [Save & Reuse](#-save--reuse-requests) | 3 min |
| 🎯 Test all endpoints | [ChronoQuest Examples](#-chronoquest-api-examples) | 10 min |

**Total Time:** ~30 minutes

---

## 📥 Install Postman Extension

### Step 1️⃣ Open VS Code Extensions

Press **Ctrl + Shift + X** (or **Cmd + Shift + X** on Mac)

You'll see the Extensions sidebar on the left.

---

### Step 2️⃣ Search for Postman

In the search box at the top, type: `postman`

You'll see **"Postman"** by Postman Inc. with the purple icon.

---

### Step 3️⃣ Click Install

1. Click the **Postman** extension
2. Click **Install** button
3. Wait for installation (30 seconds)

✅ **You'll see:** "Installed" badge appears

---

### Step 4️⃣ Open Postman

After installation, you have two options:

**Option A: Use the command palette**
- Press **Ctrl + Shift + P** (or **Cmd + Shift + P**)
- Type `Postman: Open`
- Press **Enter**

**Option B: Click the Postman icon**
- Look in left sidebar (bottom area)
- You'll see a purple Postman icon
- Click it

✅ **Result:** Postman panel opens on the right side!

---

## 🌐 Make Your First Request

### Step 1️⃣ Create a New Request Tab

In the Postman panel:
1. Look for **"+"** button
2. Click it to create new request

---

### Step 2️⃣ Set Method & URL

At the top of request:

1. Click dropdown (shows "GET")
2. Select **GET** (if not already selected)
3. Paste URL: `http://localhost:3000/api/v1/test`
4. Press **Enter**

---

### Step 3️⃣ Send Request

Click the **Send** button (looks like play button ▶️)

---

### Step 4️⃣ View Response

Response appears below in the panel:

```
Status: 200 OK
Body: 
{
  "message": "API is running",
  "timestamp": "2026-04-12T10:30:00Z"
}
```

✅ **Success!** Your first request is done!

---

## 🔑 Set Environment Variables

Variables let you use `{{VARIABLE_NAME}}` instead of typing URLs/tokens repeatedly.

### Step 1️⃣ Open Environment Settings

In Postman panel:
1. Look for **gear icon** ⚙️ (usually top right of panel)
2. Click it → Select **"Environments"** or **"Variables"**

---

### Step 2️⃣ Create/Edit Variables

You should see a section like:

```
VARIABLE NAME          TYPE          VALUE
BASE_URL              string        [empty]
TEACHER_TOKEN         string        [empty]
CLASS_CODE            string        [empty]
```

---

### Step 3️⃣ Add Your Values

For **BASE_URL**:
- Value: `http://localhost:3000/api/v1`

For **TEACHER_TOKEN**:
- Value: (leave empty for now, fill after login)

For **CLASS_CODE**:
- Value: (leave empty for now)

Click **Save** ✅

---

### Step 4️⃣ Use Variables in Requests

Now in any request, use `{{VARIABLE_NAME}}`:

**Example URL:**
```
GET {{BASE_URL}}/auth/profile
```

When you send, it becomes:
```
GET http://localhost:3000/api/v1/auth/profile
```

✅ Postman replaces variables automatically!

---

## 🔐 Add Authentication Headers

### Method 1: Add Header Manually

In request:
1. Click **Headers** tab
2. Click **Add** (or empty row)
3. Add header:
   - **Key:** `Authorization`
   - **Value:** `Bearer {{TEACHER_TOKEN}}`

---

### Method 2: Use Auth Tab (Easier!)

In request:
1. Click **Auth** tab (above Headers)
2. Select **Bearer Token** from dropdown
3. In **Token** field, paste: `{{TEACHER_TOKEN}}`

✅ **Result:** Header is automatically added!

---

## 💾 Send Request Body

### Step 1️⃣ Select Method

Change from **GET** to **POST**:
1. Click method dropdown
2. Select **POST**

---

### Step 2️⃣ Open Body Tab

Click **Body** tab in request

---

### Step 3️⃣ Select Raw JSON

1. Click **raw** radio button  
2. Click dropdown (shows "Text")
3. Select **JSON** from list

---

### Step 4️⃣ Write JSON

In the text area, paste your JSON:

```json
{
  "name": "Mrs. Santos",
  "email": "santos@example.com",
  "password": "Password123"
}
```

---

### Step 5️⃣ Send & Check Response

1. Click **Send**
2. Response appears below
3. Look for status (should be 200 or 201)

✅ **Success!**

---

## 📊 View Responses Clearly

### Response Panel

After sending request:

**Top section shows:**
```
Status: 201 Created
Size: 512 B
Time: 245 ms
```

**Body section shows:**
```json
{
  "message": "User created",
  "token": "eyJhbGciOiJIUzI1..."
}
```

### Copy Response Data

1. Click on **body** text
2. Select text (Ctrl + A)
3. Copy (Ctrl + C)
4. Paste anywhere

### Pretty Print

By default, JSON is formatted nicely. If it's not:
1. Look for **Pretty** button
2. Click it ✅

### Search in Response

1. Ctrl + F (when response is focused)
2. Type search term
3. See matching lines highlighted

---

## 🔄 Save & Reuse Requests

### Save Request to History

Every request is **automatically saved** in history!

1. Click **History** in left sidebar
2. See all your past requests
3. Click any request to reuse it
4. Click **Send** again

---

### Save as Snippet (Optional)

To save a request template:

1. In request, click **Save** button
2. Give it a name: "Register Teacher"
3. Click **Save**
4. Can reuse from **Saved** section

---

## 🎯 ChronoQuest API Examples

Now let's test **your actual API** with real requests!

---

## Example 1: Register Teacher (POST)

### Setup Request

1. Create new request
2. Method: **POST**
3. URL: `{{BASE_URL}}/auth/register`

### Headers Tab

Add header:
- Key: `Content-Type`
- Value: `application/json`

### Body Tab (Raw JSON)

```json
{
  "name": "Mrs. Santos",
  "email": "santos@example.com",
  "password": "Password123"
}
```

### Click Send

**Expected Response (Status 201):**
```json
{
  "message": "Registration successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Mrs. Santos",
    "email": "santos@example.com",
    "classCode": "ABC123",
    "role": "teacher"
  }
}
```

### Save Token to Environment

1. From response, copy the **token** value (long string)
2. Click **Environment/Variables** ⚙️
3. Set `TEACHER_TOKEN` = (paste token)
4. Click **Save**

✅ Now `{{TEACHER_TOKEN}}` is available in all requests!

---

## Example 2: Get Your Profile (GET)

### Setup Request

1. New request
2. Method: **GET**
3. URL: `{{BASE_URL}}/auth/profile`

### Auth Tab

1. Select **Bearer Token**
2. Token: `{{TEACHER_TOKEN}}`

### Click Send

**Expected Response (Status 200):**
```json
{
  "message": "Profile retrieved",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Mrs. Santos",
    "email": "santos@example.com",
    "classCode": "ABC123",
    "role": "teacher",
    "sections": []
  }
}
```

✅ You're logged in!

---

## Example 3: Create a Class (POST)

### Setup Request

1. New request
2. Method: **POST**
3. URL: `{{BASE_URL}}/teacher/add-section`

### Auth Tab

- Bearer Token: `{{TEACHER_TOKEN}}`

### Headers Tab

- `Content-Type: application/json`

### Body Tab (Raw JSON)

```json
{
  "sectionName": "Grade 4 - Morning Class"
}
```

### Click Send

**Expected Response (Status 201):**
```json
{
  "message": "Section created successfully",
  "section": {
    "sectionName": "Grade 4 - Morning Class",
    "classCode": "XYZ789",
    "createdAt": "2026-04-12T10:30:00Z",
    "isArchived": false
  }
}
```

### Save Class Code

1. Copy `classCode` from response (e.g., "XYZ789")
2. Set `CLASS_CODE` = XYZ789 in environment
3. Click **Save**

---

## Example 4: Add a Student (POST)

### Setup Request

1. New request
2. Method: **POST**
3. URL: `{{BASE_URL}}/students`

### Auth Tab

- Bearer Token: `{{TEACHER_TOKEN}}`

### Headers Tab

- `Content-Type: application/json`

### Body Tab (Raw JSON)

```json
{
  "name": "Juan Dela Cruz",
  "email": "juan@example.com",
  "password": "Password123",
  "classCode": "{{CLASS_CODE}}",
  "score": 0,
  "levelReached": "Era 1: Pre-Colonial"
}
```

### Click Send

**Expected Response (Status 201):**
```json
{
  "message": "Student registered successfully",
  "student": {
    "_id": "507f...",
    "name": "Juan Dela Cruz",
    "email": "juan@example.com",
    "classCode": "XYZ789",
    "score": 0,
    "levelReached": "Era 1: Pre-Colonial"
  }
}
```

✅ Student created!

---

## Example 5: Create Question (POST)

### Setup Request

1. New request
2. Method: **POST**
3. URL: `{{BASE_URL}}/questions`

### Auth Tab

- Bearer Token: `{{TEACHER_TOKEN}}`

### Headers Tab

- `Content-Type: application/json`

### Body Tab (Raw JSON)

```json
{
  "title": "Who was the first president of the Philippines?",
  "description": "He led the revolutionary government.",
  "options": [
    "Jose Rizal",
    "Emilio Aguinaldo",
    "Francisco Luna",
    "Andres Bonifacio"
  ],
  "correctAnswer": 1,
  "period": "Revolutionary",
  "difficultyLevel": "Medium",
  "topic": "Presidents"
}
```

### Click Send

**Expected Response (Status 201):**
```json
{
  "message": "Question created successfully",
  "question": {
    "_id": "507f...",
    "title": "Who was the first president...",
    "correctAnswer": 1,
    "createdBy": "teacher-id"
  }
}
```

✅ Question created!

---

## Example 6: Student Login (POST)

### Setup Request

1. New request
2. Method: **POST**
3. URL: `{{BASE_URL}}/auth/login`

### Headers Tab

- `Content-Type: application/json`

### Body Tab (Raw JSON)

```json
{
  "email": "juan@example.com",
  "password": "Password123"
}
```

---

### Click Send

**Expected Response (Status 200):**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1..."
}
```

### Save Student Token

1. Copy token
2. Set `STUDENT_TOKEN` = (paste)
3. Click **Save**

---

## Example 7: Admin - Get All Users (GET)

> ⚠️ **Requires:** Admin account

### Setup Request

1. New request
2. Method: **GET**
3. URL: `{{BASE_URL}}/admin/users`

### Auth Tab

- Bearer Token: `{{ADMIN_TOKEN}}`

### Click Send

**Expected Response (Status 200):**
```json
{
  "message": "Users retrieved successfully",
  "data": {
    "teachers": [
      {
        "_id": "507f...",
        "name": "Mrs. Santos",
        "email": "santos@example.com"
      }
    ],
    "students": [
      {
        "_id": "507f...",
        "name": "Juan Dela Cruz",
        "classCode": "XYZ789"
      }
    ]
  }
}
```

---

## Example 8: Admin - Get Analytics (GET)

### Setup Request

1. New request
2. Method: **GET**
3. URL: `{{BASE_URL}}/admin/analytics`

### Auth Tab

- Bearer Token: `{{ADMIN_TOKEN}}`

### Click Send

**Expected Response:**
```json
{
  "message": "Analytics retrieved successfully",
  "data": {
    "totalTeachers": 5,
    "totalStudents": 25,
    "totalSections": 8,
    "averageStudentsPerSection": 3.1
  }
}
```

---

## Example 9: Submit Feedback (POST)

### Setup Request

1. New request
2. Method: **POST**
3. URL: `{{BASE_URL}}/auth/feedback`

### Auth Tab

- Bearer Token: `{{TEACHER_TOKEN}}`

### Headers Tab

- `Content-Type: application/json`

### Body Tab

```json
{
  "title": "Login button bug on mobile",
  "description": "Cannot login from phone",
  "type": "bug_report",
  "priority": "high"
}
```

### Click Send

**Expected Response:**
```json
{
  "message": "Feedback submitted successfully",
  "feedback": {
    "_id": "507f...",
    "title": "Login button bug on mobile",
    "status": "open"
  }
}
```

---

## Example 10: Update Question (PATCH)

### Setup Request

1. New request
2. Method: **PATCH**
3. URL: `{{BASE_URL}}/questions/QUESTION_ID_HERE`

### Auth Tab

- Bearer Token: `{{TEACHER_TOKEN}}`

### Headers Tab

- `Content-Type: application/json`

### Body Tab

```json
{
  "title": "Who was Emilio Aguinaldo?",
  "difficultyLevel": "Hard"
}
```

### Click Send

**Expected Response:**
```json
{
  "message": "Question updated successfully",
  "question": {
    "_id": "507f...",
    "title": "Who was Emilio Aguinaldo?",
    "difficultyLevel": "Hard"
  }
}
```

---

## 💡 Pro Tips & Tricks

### Tip 1: Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Send request | Ctrl + Enter |
| Open command palette | Ctrl + Shift + P |
| Search in response | Ctrl + F |
| Copy response | Ctrl + C |

---

### Tip 2: Copy cURL Command

Sometimes you need a `curl` command:

1. In request, look for **...** menu
2. Click **"Copy as cURL"**
3. Paste in terminal

Example:
```bash
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Mrs. Santos","email":"santos@example.com","password":"Password123"}'
```

---

### Tip 3: Check Request Before Sending

Before clicking Send:

✅ Method is correct (GET/POST/PATCH/DELETE)  
✅ URL has correct variables replaced  
✅ Auth token is present  
✅ Headers include `Content-Type: application/json`  
✅ Body JSON is valid (no syntax errors)

---

### Tip 4: View Raw Response

Sometimes you need to see the exact response:

1. In response panel, look for tabs
2. Click **"Body"** or **"Raw"** tab
3. See un formatted response

---

### Tip 5: Test Different Status Codes

APIs return different status codes:

| Status | Meaning | When You'll See It |
|--------|---------|-------------------|
| 200 | Success | GET request works |
| 201 | Created | POST creates new resource |
| 400 | Bad Request | Wrong data in body |
| 401 | Unauthorized | Missing/invalid token |
| 404 | Not Found | URL doesn't exist |
| 500 | Server Error | Backend crashed |

---

## ⚡ Quick Reference

### All HTTP Methods in Postman

| Method | When to Use | Example |
|--------|-----------|---------|
| **GET** | Read data | Get profile, list users |
| **POST** | Create data | Register user, create question |
| **PATCH** | Update partially | Change question title |
| **DELETE** | Remove data | Delete question |
| **PUT** | Replace entire data | Update profile |

---

### All ChronoQuest Endpoints

```
🔐 AUTH
  POST   /auth/register               - Create teacher account
  POST   /auth/login                  - Login teacher/student
  GET    /auth/profile                - Get profile
  PUT    /auth/profile                - Update profile
  POST   /auth/feedback               - Submit feedback

👨‍🏫 TEACHER
  POST   /teacher/add-section         - Create class
  POST   /teacher/archive-section/{c} - Hide class
  POST   /teacher/unarchive-section/{c} - Restore class
  DELETE /teacher/delete-section/{c}  - Delete class

❓ QUESTIONS
  POST   /questions                   - Create question
  GET    /questions                   - Get all questions
  GET    /questions/teacher/{id}      - Get my questions
  PATCH  /questions/{id}              - Update question
  DELETE /questions/{id}              - Delete question
  POST   /questions/{id}/toggle       - Toggle active

🔑 ADMIN
  GET    /admin/users                 - List all users
  PATCH  /admin/users/{id}/{type}     - Update user
  POST   /admin/users/deactivate      - Lock user
  POST   /admin/users/delete          - Delete user
  GET    /admin/activity-logs-detailed - View logs
  GET    /admin/analytics             - Stats
  GET    /admin/feedback              - Get feedback
  POST   /admin/feedback/{id}/respond - Reply feedback
```

---

## 🆘 Troubleshooting

### "Cannot GET /"

**Problem:** Request returns error

**Fix:**
1. Check URL is correct
2. Check backend is running (terminal showing port 3000)
3. Check {{BASE_URL}} is replaced properly

---

### "401 Unauthorized"

**Problem:** Token is missing or invalid

**Fix:**
1. Check `Authorization` header present
2. Check token format: `Bearer {{TEACHER_TOKEN}}`
3. Re-login to get fresh token

---

### "Request timeout"

**Problem:** Request takes too long

**Fix:**
1. Check backend is running
2. Check MongoDB is running
3. Check internet connection

---

### "Invalid JSON in body"

**Problem:** Body has syntax error

**Fix:**
1. Make sure quotes are straight: `"name"` not `"name"`
2. No trailing commas in JSON
3. Use JSON formatter to validate

---

### "classCode not found"

**Problem:** Class code doesn't exist

**Fix:**
1. Create class first (POST /teacher/add-section)
2. Copy new classCode
3. Use same classCode for students

---

## 📝 Complete Workflow in VS Code

Start to finish in ~30 minutes:

```
1️⃣ Install Postman extension
   ↓
2️⃣ Create environment with variables
   ↓
3️⃣ POST /auth/register → get token
   ↓
4️⃣ POST /teacher/add-section → get classCode
   ↓
5️⃣ POST /students → create students
   ↓
6️⃣ POST /questions → create quiz questions
   ↓
7️⃣ POST /auth/login (as student)
   ↓
8️⃣ GET /admin/analytics (if admin)
   ↓
✅ System tested!
```

---

## 🎯 Step-by-Step First Time

**Follow this exactly:**

### First: Setup (~5 min)
1. Install Postman extension
2. Create "Local" environment
3. Set BASE_URL variable
4. Create first request (GET {{BASE_URL}}/test)
5. Send → See response

### Second: Register (~5 min)
1. Create POST request
2. URL: {{BASE_URL}}/auth/register
3. Body: name, email, password
4. Send → Copy token
5. Save token to TEACHER_TOKEN

### Third: Create Class (~3 min)
1. Create POST request
2. URL: {{BASE_URL}}/teacher/add-section
3. Auth: Bearer {{TEACHER_TOKEN}}
4. Body: sectionName
5. Send → Copy classCode
6. Save to CLASS_CODE

### Fourth: Add Student (~3 min)
1. Create POST request
2. URL: {{BASE_URL}}/students
3. Auth: Bearer {{TEACHER_TOKEN}}
4. Body: name, email, password, classCode
5. Send → See student created

### Fifth: Test Admin (~3 min)
1. Make yourself admin in MongoDB
2. Create GET request
3. URL: {{BASE_URL}}/admin/users
4. Auth: Bearer {{ADMIN_TOKEN}}
5. Send → See all users

✅ **Total: ~20 minutes, fully tested!**

---

## 📞 Common Commands by Goal

### Goal: Test Login
```
POST {{BASE_URL}}/auth/login
Body: {
  "email": "santos@example.com",
  "password": "Password123"
}
```

### Goal: Get Current User
```
GET {{BASE_URL}}/auth/profile
Auth: Bearer {{TEACHER_TOKEN}}
```

### Goal: Create Class
```
POST {{BASE_URL}}/teacher/add-section
Auth: Bearer {{TEACHER_TOKEN}}
Body: {
  "sectionName": "Grade 4"
}
```

### Goal: Add Student
```
POST {{BASE_URL}}/students
Auth: Bearer {{TEACHER_TOKEN}}
Body: {
  "name": "Juan",
  "email": "juan@example.com",
  "password": "Pass123",
  "classCode": "XYZ789"
}
```

### Goal: Create Quiz Question
```
POST {{BASE_URL}}/questions
Auth: Bearer {{TEACHER_TOKEN}}
Body: {
  "title": "Question here?",
  "options": ["A", "B", "C", "D"],
  "correctAnswer": 0,
  "period": "Revolutionary",
  "difficultyLevel": "Medium"
}
```

### Goal: View System Analytics
```
GET {{BASE_URL}}/admin/analytics
Auth: Bearer {{ADMIN_TOKEN}}
```

---

## ✅ Success Checklist

- [ ] Postman extension installed
- [ ] Environment "Local" created
- [ ] Variables set (BASE_URL, TEACHER_TOKEN, etc.)
- [ ] First request sent (GET /test) → Success
- [ ] Teacher registered → Token saved
- [ ] Class created → ClassCode saved
- [ ] Student added → Verified
- [ ] Question created → Verified
- [ ] Admin access → Analytics viewed
- [ ] All responses show correct status codes
- [ ] 🎉 Ready for production!

---

## 📚 Resources

- **Postman Official Docs:** https://learning.postman.com/
- **Postman VS Code Extension:** https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode
- **REST API Guide:** https://restfulapi.net/
- **JSON Validator:** https://jsonlint.com/

---

**Version:** 1.0  
**Last Updated:** April 12, 2026  
**Status:** ✅ Ready to Use  
**IDE:** VS Code only
