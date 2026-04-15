# ChronoQuest - Features Documentation & Logic Guide

This document explains how all features work, their underlying logic, and where to find the implementation in the codebase.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Authentication System](#authentication-system)
3. [User Management](#user-management)
4. [Sections/Learning Groups](#sectionslearning-groups)
5. [Questions Management](#questions-management)
6. [Quiz & Assessment System](#quiz--assessment-system)
7. [Analytics & Leaderboard](#analytics--leaderboard)
8. [Feedback System](#feedback-system)
9. [System Settings](#system-settings)
10. [Activity Logging](#activity-logging)
11. [Rate Limiter](#rate-limiter)
12. [Soft Delete & Archive](#soft-delete--archive)
13. [Demo Student Creation](#demo-student-creation)
14. [Frontend Components](#frontend-components)

---

## Architecture Overview

### Technology Stack
- **Backend**: Express.js 5.2.1 (Node.js)
- **Frontend**: React 19.2.4 with React Router 7.14.0
- **Database**: MongoDB with Mongoose 9.4.1
- **Authentication**: JWT (JSON Web Tokens)
- **Hashing**: bcryptjs

### Key Folders
```
chronoquest-api/
├── src/
│   ├── controllers/        # Business logic
│   ├── models/            # Data schemas
│   ├── routes/            # API endpoints
│   ├── middleware/        # Auth, validation
│   └── utils/             # Helpers
chrono-dashboard/
├── src/
│   ├── pages/             # Page components
│   ├── components/        # Reusable components
│   ├── context/           # Global state (Auth)
│   └── pages/admin/       # Admin features
```

---

## Authentication System

### Registration Logic

**Location**: `chronoquest-api/src/controllers/authController.js` - `registerUser()`

**Flow**:
1. User submits name, email, password, and `userType` (teacher/student)
2. Email validation using regex: `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`
3. Password validation: minimum 6 characters
4. Check if email already exists (only active, non-deleted users)
5. If `userType === 'student'`: Create Student document with classCode
6. If `userType !== 'student'`: Create Teacher document with empty sections array
7. Hash password using bcryptjs (happens automatically in model pre-save hook)
8. Generate JWT token (expires in 30 days)
9. Log activity in ActivityLog collection

**Code Location**: Lines 10-130 in authController.js

**Response**:
```json
{
  "message": "Student/Teacher registered successfully",
  "_id": "user_id",
  "name": "User Name",
  "email": "user@example.com",
  "role": "student/teacher",
  "token": "jwt_token_here"
}
```

### Login Logic

**Location**: `chronoquest-api/src/controllers/authController.js` - `loginUser()`

**Flow**:
1. User submits email and password
2. Search for user in Teachers collection first (active only, `isDeleted: false`)
3. If not found, search in Students collection (active only)
4. If user not found: return "Email not registered or account has been deleted"
5. Verify password using bcryptjs `matchPassword()` method
6. Update `lastLogin` timestamp
7. Log LOGIN action in ActivityLog
8. Generate JWT token
9. Return token and user data

**Code Location**: Lines 135-190 in authController.js

**Key Points**:
- Only active users (isDeleted: false) can login
- Soft-deleted accounts are inaccessible
- Login attempts are tracked in activity logs

### Token Management

**JWT Generation**:
```javascript
const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '30d' });
};
```

**Token Storage** (Frontend):
- Stored in `localStorage` as `teacherToken`
- Sent in Authorization header: `Bearer {token}`

**Location**: 
- Backend: `chronoquest-api/src/controllers/authController.js` line 6
- Frontend: Stored in localStorage, retrieved in axios requests

---

## User Management

### Teacher Model

**Location**: `chronoquest-api/src/models/teacherModel.js`

**Fields**:
- `name` (String, required)
- `email` (String, required, unique)
- `password` (String, hashed)
- `role` (String, default: 'teacher')
- `sections` (Array of objects with `classCode`, `sectionName`, `isArchived`)
- `isActive` (Boolean, default: true)
- `isDeleted` (Boolean, default: false, for soft delete)
- `deletedAt` (Date, null by default)
- `lastLogin` (Date)
- `createdAt`, `updatedAt` (Timestamps)

### Student Model

**Location**: `chronoquest-api/src/models/studentModel.js`

**Fields**:
- `name` (String, required)
- `email` (String, required, unique)
- `password` (String, hashed)
- `classCode` (String, required)
- `role` (String, default: 'student')
- `score` (Number, default: 0)
- `levelReached` (String, one of the historical eras)
- `isDeleted` (Boolean, default: false)
- `deletedAt` (Date)
- `createdAt`, `updatedAt` (Timestamps)

### User Management Endpoints

**Location**: `chronoquest-api/src/routes/adminRoutes.js`

**Admin Endpoints**:
- `GET /admin/users/all` - Get all active users
- `GET /admin/users/deleted` - Get archived/deleted users
- `PATCH /admin/users/:userId/teacher` or `/student` - Update user
- `POST /admin/users/delete` - Soft delete (archive) user
- `POST /admin/users/restore` - Restore archived user
- `POST /admin/users/toggle-deactivate` - Deactivate user (stop login)

**Frontend Implementation**:
- `chrono-dashboard/src/pages/AdminPanel.js` - Admin dashboard
- `chrono-dashboard/src/components/admin/UsersList.js` - User management table

---

## Sections/Learning Groups

### Section Model

**Location**: `chronoquest-api/src/models/teacherModel.js` (embedded in Teacher)

**Section Structure**:
```javascript
{
  classCode: "ABC123XYZ",      // Unique class code
  sectionName: "Grade 10",      // User-defined name
  createdAt: Date,
  isArchived: false,            // Archive flag
  deletedAt: null               // Soft delete date
}
```

### Section Management Logic

**Location**: `chronoquest-api/src/controllers/studentController.js` & `chronoquest-api/src/routes/apiRoutes.js`

**Create Section**:
1. Teacher provides `sectionName`
2. Generate unique 8-character `classCode`
3. Add section to teacher's sections array
4. Return section with classCode
**Location**: `studentController.js` - `createSection()`

**Archive Section**:
1. Find teacher and section
2. Set `isArchived: true`
3. Log activity
4. Section no longer appears in active sections
**Location**: `studentController.js` - `archiveSection()`

**Delete Section**:
1. Only archived sections can be deleted
2. Set `deletedAt: new Date()`
3. Section completely removed from teacher's sections array
4. All associated scores are preserved (soft delete pattern)
**Location**: `studentController.js` - `deleteSection()`

**Frontend Display**:
- Active sections: Show Archive button only
- Archived sections: Show Restore and Delete buttons
**Location**: `chrono-dashboard/src/pages/Dashboard.js` lines 255-293

---

## Questions Management

### Question Model

**Location**: `chronoquest-api/src/models/questionModel.js`

**Fields**:
- `title` (String, required, 5-500 chars)
- `description` (String, optional)
- `topic` (String, indexed)
- `period` (String, enum: Pre-colonial, Spanish, Revolutionary, American/Japanese, Post-war)
- `options` (Array of 4 strings)
- `correctAnswer` (Number, 0-3)
- `difficultyLevel` (String: Easy, Medium, Hard)
- `createdBy` (ObjectId, reference to Teacher)
- `isActive` (Boolean, default: true)
- `isDeleted` (Boolean, default: false, for soft delete)
- `deletedAt` (Date)

### Question Management

**Location**: `chronoquest-api/src/controllers/questionController.js`

**Create Question**:
1. Validate: title, topic, period, 4 options, correctAnswer (0-3)
2. Create Question document
3. Set `createdBy` to teacher ID
4. Log CREATE_QUESTION activity
**Code**: Lines 1-45

**Get Questions**:
- Filter: `isDeleted: false` (only active questions)
- Optional filters: topic, difficulty, isActive
- Populate creator name and email
- Pagination support (default 10 per page)
**Code**: Lines 59-87

**Soft Delete Question**:
1. Mark `isDeleted: true`
2. Set `deletedAt: new Date()`
3. Question hidden from normal queries
**Code**: Lines 175-209

**Restore Question**:
1. Find deleted question
2. Set `isDeleted: false`
3. Set `deletedAt: null`
4. Question appears in normal queries again
**Code**: Lines 274-310

**Soft Delete Filtering**:
- All question queries include `isDeleted: false` filter
- Deleted questions only visible to admins in deleted questions section

---

## Quiz & Assessment System

### Student Answers & Scoring

**Location**: `chronoquest-api/src/controllers/studentController.js`

**Submit Quiz Answers**:
1. Student submits answers for a quiz
2. System compares against `correctAnswer` in Question model
3. Calculate score based on correct answers
4. Save scores to database
5. Update student's `score` and `levelReached`

**Quiz Result Model**:
**Location**: `chronoquest-api/src/models/quizResultsModel.js`

**Fields**:
- `studentId` (ObjectId)
- `classCode` (String)
- `totalScore` (Number)
- `questionsAnswered` (Number)
- `correctAnswers` (Number)
- `percentage` (Number)
- `timestamp` (Date)

---

## Analytics & Leaderboard

### Analytics Data

**Location**: `chronoquest-api/src/controllers/analyticsController.js`

**What's Tracked**:
- Student scores per class
- Average performance
- Total assessments per student
- Top performers (leaderboard)

### Leaderboard Logic

**Location**: `chrono-dashboard/src/pages/Dashboard.js` lines 77-105

**Flow**:
1. Fetch all scores for selected section (classCode)
2. Filter scores for current section only
3. Sort by score (descending)
4. Take top 15 students
5. Display with rank, name, and score

**Backend Endpoint**:
- `GET /analytics/overall` - Returns all scores

**Frontend Display**:
```
Rank | Name | ClassCode | Score
  1  | John |   ABC123  |  950
  2  | Jane |   ABC123  |  920
```

---

## Feedback System

### Feedback Model

**Location**: `chronoquest-api/src/models/feedbackModel.js`

**Fields**:
- `title` (String, required)
- `description` (String, required)
- `type` (String: general_feedback, bug_report, feature_request)
- `priority` (String: low, medium, high, critical)
- `submittedBy` (ObjectId, reference to Teacher)
- `email` (String, teacher's email)
- `status` (String: open, resolved)
- `createdAt`, `updatedAt` (Timestamps)

### Submit Feedback

**Location**: `chronoquest-api/src/controllers/authController.js` - `submitFeedback()`

**Flow**:
1. Teacher provides: title, description, type, priority
2. Fetch teacher email from database
3. Create Feedback document
4. Include `submittedBy: teacher._id` and `email`
5. Log FEEDBACK_SUBMITTED activity
6. Return success message

**Code**: Lines 244-265

### View Feedback (Admin)

**Location**: `chronoquest-api/src/controllers/adminController.js` - `getAllFeedback()`

**Features**:
- Populate `submittedBy` to show teacher name and email
- Display who submitted feedback
- Sort by priority and date
- Show status (open/resolved)

---

## System Settings

### Settings Model

**Location**: `chronoquest-api/src/models/systemSettingsModel.js`

**Available Settings**:
- `max_learners_per_group` (Number, default: 30)
- `max_learning_groups_per_teacher` (Number, default: 10)
- System configuration values

### Settings Management

**Location**: `chronoquest-api/src/controllers/adminController.js`

**Get Settings**:
1. Query all settings from database
2. If empty, create defaults
3. Convert array format to object format for frontend
4. Return as key-value pairs
**Code**: Lines 383-410

**Update Settings**:
1. Admin submits setting updates
2. Update/create settings documents
3. Validate numeric values
4. Return updated settings
**Code**: Lines 413-440

**Frontend Settings Panel**:
**Location**: `chrono-dashboard/src/pages/AdminPanel.js` lines 340-365

**UI Components**:
- Settings form with input fields
- Save button with validation
- Success/error toast notifications

---

## Activity Logging

### ActivityLog Model

**Location**: `chronoquest-api/src/models/activityLogModel.js`

**Fields**:
- `userId` (ObjectId, references Teacher or Student)
- `userModel` (String: Teacher, Student)
- `userRole` (String: teacher, student, admin)
- `action` (String: LOGIN, REGISTER, CREATE_QUESTION, DELETE_USER, etc.)
- `resource` (String: question, section, student, teacher)
- `resourceId` (ObjectId)
- `details` (Object, additional context)
- `status` (String: success, failure)
- `ipAddress` (String, optional)
- `createdAt`, `updatedAt` (Timestamps)

### Logged Actions

**What Gets Logged**:
- User login/registration
- Question creation/deletion
- Section creation/archiving
- User deletion/restoration
- Feedback submission
- Settings changes
- Admin actions

### Retrieve Activity Logs

**Location**: `chronoquest-api/src/controllers/adminController.js` - `getRecentActivityLogs()`

**Features**:
1. Populate `userId` to fetch user name
2. Sort by `createdAt` descending (newest first)
3. Return `userName` in transformed response
4. Default limit: 50 logs (configurable)

**Frontend Display**:
**Location**: `chrono-dashboard/src/pages/AdminPanel.js` lines 260-290

**Shows**:
- Username (now populated correctly)
- Action performed
- Resource type
- Timestamp
- Status (success/failure)

---

## Soft Delete & Archive

### Soft Delete Pattern

**Used In**: Teachers, Students, Questions, Sections

**How It Works**:
1. Instead of deleting, set `isDeleted: true`
2. Set `deletedAt: new Date()` to timestamp
3. All queries include `isDeleted: false` filter
4. Deleted data preserved for recovery

**Fields Used**:
```javascript
{
  isDeleted: { type: Boolean, default: false },
  deletedAt: { type: Date, default: null }
}
```

### Archive Features

**Teacher/Student Archive** (Soft Delete):
- User data preserved in database
- User can be restored by admin
- Archived users shown in separate modal
- Cannot login while archived
**Location**: `chrono-dashboard/src/components/admin/UsersList.js` lines 210-270

**Section Archive**:
- Section marked as archived
- Can be restored (unarchived)
- When permanently deleted, section data removed
**Location**: `chrono-dashboard/src/pages/Dashboard.js` lines 255-293

**Question Archive**:
- Questions soft deleted (not shown in normal queries)
- Admin can view deleted questions
- Can be restored
**Location**: `chronoquest-api/src/controllers/questionController.js` lines 245-310

---

## Rate Limiter

### Purpose
Prevent abuse by limiting the number of requests from a single IP address within a time window. Protects against brute force attacks and DOS attempts.

### Implementation

**Location**: `chronoquest-api/src/middleware/rateLimiter.js`

**Package Used**: `express-rate-limit` npm package

### Rate Limiter Types

#### 1. General Limiter
```javascript
const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,  // 15 minutes
    max: 100,                   // Max 100 requests per window
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,      // Return rate limit info in headers
    legacyHeaders: false,       // Don't use legacy headers
});
```

**What It Does**:
- Allows 100 requests per 15-minute window per IP
- Used for general API endpoints
- Helps prevent accidental DOS from buggy clients

**Response When Limit Exceeded** (HTTP 429):
```json
{
  "message": "Too many requests from this IP, please try again later."
}
```

#### 2. Login Limiter
```javascript
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,   // 15 minutes
    max: 5,                      // Max 5 attempts per window
    message: 'Too many login attempts, please try again after 15 minutes.',
    skipSuccessfulRequests: true, // Don't count successful logins
});
```

**What It Does**:
- Allows only 5 login attempts per 15-minute window per IP
- **Important**: Only counts FAILED attempts (skipSuccessfulRequests: true)
- Prevents brute force password attacks
- More restrictive than general limiter

**Key Feature - `skipSuccessfulRequests: true`**:
- If user successfully logs in, counter is NOT incremented
- User can login once then make unlimited requests
- Only repeated failures trigger the limit
- Improves UX for legitimate users

**Response When Limit Exceeded** (HTTP 429):
```json
{
  "message": "Too many login attempts, please try again after 15 minutes."
}
```

### Where Rate Limiters Are Applied

**Location**: `chronoquest-api/src/routes/authRoutes.js`

**Applied To**:
- `POST /auth/register` - Uses `loginLimiter` (5 attempts per 15 min)
- `POST /auth/login` - Uses `loginLimiter` (5 attempts per 15 min)

**Code Example**:
```javascript
router.post('/register', loginLimiter, authController.registerUser);
router.post('/login', loginLimiter, authController.loginUser);
```

### How It Works

1. **Request Received**: User sends request to `/auth/login` or `/auth/register`
2. **IP Check**: Express-rate-limit identifies client IP address
3. **Count Check**: Checks if IP has exceeded the limit in current window
4. **Decision**:
   - If under limit → Request proceeds
   - If over limit → Return 429 Too Many Requests
5. **Increment Counter**:
   - For login: Only increments on FAILED attempt
   - For register: Always increments

### Benefits

| Aspect | Benefit |
|--------|---------|
| **Security** | Prevents brute force attacks on login |
| **Resource Protection** | Reduces server load from repeated requests |
| **Fair Usage** | Ensures all users get fair access |
| **UX** | Doesn't affect legitimate users (skipSuccessfulRequests) |
| **Spam Prevention** | Reduces spam registrations |
| **DDoS Mitigation** | Helps mitigate basic DDoS attacks |

### Client-Side Handling

**Frontend** (`chrono-dashboard/src/pages/LoginPage.js`):

When rate limit is exceeded (HTTP 429), the error response shows:
```
"Too many login attempts, please try again after 15 minutes."
```

**Best Practice**: 
- Display user-friendly message
- Show countdown timer if possible
- Suggest trying again later

### Configuration Options Explained

| Option | Value | Meaning |
|--------|-------|---------|
| `windowMs` | 15 * 60 * 1000 | Time window of 15 minutes (in milliseconds) |
| `max` | 5 (login), 100 (general) | Max requests per IP in window |
| `message` | String | Message shown when limit exceeded |
| `standardHeaders` | true | Include RateLimit-* headers in response |
| `legacyHeaders` | false | Don't use old X-RateLimit-* headers |
| `skipSuccessfulRequests` | true | Don't count successful requests against limit |

### Response Headers

When rate limiting is active, response includes:
```
RateLimit-Limit: 5
RateLimit-Remaining: 2
RateLimit-Reset: 1713289800
```

**Header Meanings**:
- `RateLimit-Limit`: Maximum allowed requests (5)
- `RateLimit-Remaining`: Requests left in this window (2)
- `RateLimit-Reset`: Unix timestamp when window resets

### Security Considerations

**What It Protects Against**:
1. **Brute Force Attacks** - Attacker trying many passwords
2. **Credential Stuffing** - Trying leaked credentials
3. **Spam Registrations** - Bot creating fake accounts
4. **Resource Exhaustion** - Overloading server with requests

**What It Doesn't Protect Against**:
- DDoS from multiple IP addresses
- Attacks with distributed requests
- Legitimate users on same IP (shared network)

**Recommended Enhancements**:
1. **CAPTCHA** - Add after 2-3 failed attempts
2. **Account Lockout** - Lock account temporarily after failures
3. **Email Verification** - Require email confirmation
4. **Device Fingerprinting** - Track device, not just IP
5. **Geo-blocking** - Block unusual locations

### Testing Rate Limiter

**To Test Locally**:

1. **Test General Limiter** (if applied to any endpoint):
```bash
# Make 101+ requests quickly
for i in {1..105}; do curl http://localhost:3000/api/v1/questions; done
```

2. **Test Login Limiter**:
```bash
# Make 6+ failed login attempts
for i in {1..6}; do 
  curl -X POST http://localhost:3000/api/v1/auth/login \
    -H "Content-Type: application/json" \
    -d '{"email":"test@test.com","password":"wrong"}'
done
```

**Expected Result**: 
- After 5 attempts → 429 status with rate limit message
- Try again → Still rate limited until 15 minutes pass

### Monitoring Rate Limits

**In Production**:
- Monitor 429 responses in error logs
- Set up alerts for unusual rate limit triggers
- Check for patterns indicating attacks
- Track legitimate users hitting limits (false positives)

**Log Example**:
```
GET /api/v1/auth/login - 429 Too Many Requests from IP: 192.168.1.100
```

---

## Demo Student Creation

### Purpose
Create sample students for demonstrations/presentations without needing real registrations.

### Implementation

**Location**: `chrono-dashboard/src/components/admin/UsersList.js` lines 73-113

**Flow**:
1. Admin clicks "Add Demo Student" button
2. Opens form with:
   - Name, Email, ClassCode (required)
   - Score (0-100, validated)
   - Level Reached (dropdown of eras)
   - Default password: "Demo@1234"
3. Submit to `/auth/register` with `userType: 'student'`
4. Backend creates Student document
5. Demo student appears in Learners table

**Key Code**:
```javascript
await axios.post(`${API_BASE}/auth/register`, {
    name, email, classCode, password,
    score, levelReached,
    userType: 'student'  // Important: makes it a student
})
```

**Frontend Form**: Lines 290-380 in UsersList.js

---

## Frontend Components

### Authentication Pages

**Login Page**:
**Location**: `chrono-dashboard/src/pages/LoginPage.js`
- Email and password input
- JWT token saved to localStorage
- Redirects to Dashboard on success
- Error handling with toast notifications

**Register Page**:
**Location**: `chrono-dashboard/src/pages/RegisterPage.js`
- User type selection (Teacher/Student)
- Conditional fields based on user type
- Student registration requires class code
- Password strength validation

### Dashboard (Teacher)

**Location**: `chrono-dashboard/src/pages/Dashboard.js`

**Features**:
- Welcome message with teacher name
- Active sections display
- Archive sections toggle
- Quest Code (class code) with copy button
- Leaderboard (top 15 students)
- Statistics: Students, Avg Score, Total Assessments
- Class Results tab
- Settings tab
- Feedback tab

**Key Sections**:
- Lines 43: Profile data fetching
- Lines 67-105: Leaderboard calculation
- Lines 255-293: Section rendering with archive/delete

### Admin Panel

**Location**: `chrono-dashboard/src/pages/AdminPanel.js`

**Features**:
- Dashboard statistics (Total Users, Teachers, Learners)
- User Management tab
- Activity Logs display
- System Settings configuration
- Feedback Management

**Tabs**:
1. Dashboard - Overview stats
2. Users - User management
3. Settings - System configuration
4. Feedback - View/manage feedback

### User Management Table

**Location**: `chrono-dashboard/src/components/admin/UsersList.js`

**Features**:
- Teachers table with Edit, Archive buttons
- Learners table with Edit, Archive buttons
- Search functionality
- Pagination
- Archived Users modal
- Demo Student creation form
- Restore/Delete buttons for archived users

**Buttons & Actions**:
- Edit (blue): Modify user details
- Archive (yellow, active): Archive user with "Archive this user?" confirmation
- Delete (red, archived only): Permanent delete with "Permanently delete this user?" confirmation
- Restore (green, archived): Restore archived user

---

## API Routes Summary

### Auth Routes
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `GET /auth/profile` - Get logged-in user profile
- `POST /auth/feedback` - Submit feedback

### Teacher Routes
- `POST /teacher/add-section` - Create new section
- `POST /teacher/archive-section/:classCode` - Archive section
- `POST /teacher/unarchive-section/:classCode` - Restore section
- `DELETE /teacher/delete-section/:classCode` - Delete section

### Student Routes
- `GET /questions` - Get all active questions
- `POST /submit-quiz` - Submit quiz answers
- `GET /student/results` - Get student results

### Admin Routes
- `GET /admin/users/all` - Get all users
- `GET /admin/users/deleted` - Get archived users
- `POST /admin/users/delete` - Archive user
- `POST /admin/users/restore` - Restore user
- `GET /admin/recent-activity` - Get activity logs
- `GET /admin/settings` - Get system settings
- `POST /admin/settings` - Update settings
- `GET /admin/feedback` - Get all feedback
- `DELETE /admin/users/:id` - Permanently delete user

### Question Routes
- `POST /questions` - Create question
- `GET /questions` - Get all questions
- `PATCH /questions/:id` - Update question
- `DELETE /questions/:id` - Delete question (soft delete)
- `GET /questions/deleted` - Get deleted questions
- `POST /questions/:id/restore` - Restore question

---

## Key Design Patterns Used

### 1. Soft Delete Pattern
- Never truly delete data
- Use `isDeleted` flag and `deletedAt` timestamp
- Filter out deleted items in all queries
- Allows recovery of deleted data

### 2. JWT Authentication
- Generate on login/register
- Store in localStorage on frontend
- Send in Authorization header for protected routes
- Middleware checks validity before accessing resources

### 3. Activity Logging
- Every important action is logged
- Includes user, action type, resource, status
- Helps with audit trail and debugging
- Admin can view all activities

### 4. Soft State (Archive vs Delete)
- Archive = `isArchived: true` (can be restored)
- Delete = `isDeleted: true` (soft delete, can be recovered by admin)
- Users can't login when archived or deleted
- Admins can restore archived/deleted items

### 5. Conditional Rendering
- Active items show Archive button
- Archived items show Restore + Delete buttons
- Demo allows quick testing without registration
- Search and filter for better UX

---

## File Structure Quick Reference

```
chronoquest-api/src/
├── controllers/
│   ├── authController.js      # Login, Register, Feedback
│   ├── questionController.js  # Question CRUD
│   ├── studentController.js   # Sections, Student data
│   ├── adminController.js     # User management, Settings, Activity
│   └── analyticsController.js # Leaderboard, Stats
├── models/
│   ├── teacherModel.js        # Teacher schema
│   ├── studentModel.js        # Student schema
│   ├── questionModel.js       # Question schema
│   ├── activityLogModel.js    # Activity logging
│   ├── feedbackModel.js       # Feedback schema
│   └── systemSettingsModel.js # Settings
├── routes/
│   ├── authRoutes.js
│   ├── questionRoutes.js
│   ├── adminRoutes.js
│   └── apiRoutes.js
└── middleware/
    ├── authMiddleware.js      # JWT verification
    ├── adminMiddleware.js     # Admin check
    └── rateLimiter.js         # Rate limiting (brute force protection)

chrono-dashboard/src/
├── pages/
│   ├── Dashboard.js           # Teacher dashboard
│   ├── AdminPanel.js          # Admin panel
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   └── ClassResults.js
├── components/
│   ├── TeacherSidebar.js      # Navigation sidebar
│   ├── AdminSidebar.js
│   └── admin/
│       ├── UsersList.js       # User management
│       └── FeedbackSection.js
└── context/
    └── AuthContext.js         # Global auth state
```

---

## Debugging Tips

### Common Issues & Solutions

1. **"Unknown" in Activity Logs**
   - Caused by missing user population
   - Fixed in `getRecentActivityLogs()` with `.populate('userId', 'name')`
   - Location: `adminController.js` line 328

2. **Delete Alert Shows Twice**
   - One from `handleArchiveUserWithConfirm()` (Archive button)
   - One from `handleDeleteUser()` (permanent delete)
   - Fixed by removing confirmation from `handleDeleteUser()`
   - Location: `AdminPanel.js` line 92

3. **User Can't Login After Archive**
   - Login queries include `isDeleted: false` filter
   - Archived users have `isDeleted: true`
   - Feature works as designed
   - Location: `authController.js` line 147

4. **Settings Not Loading**
   - Backend returns array, frontend expects object
   - Fixed by converting array to object in `getSystemSettings()`
   - Location: `adminController.js` line 383

---

## Summary of Recent Changes

### Version Updates (Latest Session)

1. **Login Data Bug Fix**: Changed `setTeacher(data)` to `setTeacher(data.teacher)` in Dashboard.js line 43
2. **Demo Student Registration**: Added `userType: 'student'` parameter to properly create students
3. **Feedback Features**: Added email field and priority parameter, enabled admin to see who submitted feedback
4. **System Settings**: Fixed settings retrieval to convert array to object format
5. **Email Validation**: Updated regex to stricter format
6. **Section Button UX**: Delete button only shows for archived sections
7. **Removed Deactivate Button**: Simplified to Archive/Restore/Delete workflow
8. **Changed Label**: "Instructors" → "Teachers" throughout system
9. **Fixed Sidebar**: TeacherSidebar shows "Teacher" instead of "Instructor"
10. **Activity Logs**: Fixed to show actual usernames instead of "Unknown"
11. **Soft Delete for Questions**: Implemented soft delete with restore functionality
12. **Archive Confirmations**: "Archive this user?" for archive, "Permanently delete?" for delete
13. **Rate Limiter Documentation**: Added comprehensive documentation for rate limiting system

---

## Future Enhancement Ideas

1. **Email Notifications** - Send feedback confirmation to teachers
2. **Question Bank** - Shared question library between teachers
3. **Performance Analytics** - Detailed student progress tracking
4. **Automated Backups** - Backup deleted data for recovery
5. **Two-Factor Authentication** - Enhanced security
6. **Bulk User Import** - CSV upload for teacher creation
7. **Question Difficulty Calibration** - AI-based difficulty adjustment
8. **Student Progress Reports** - PDF export of leaderboard and stats

---

**Last Updated**: April 16, 2026
**Documentation Version**: 2.0
