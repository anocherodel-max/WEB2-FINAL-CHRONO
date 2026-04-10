# ChronoQuest System Documentation

## 📋 Table of Contents
1. [System Overview](#system-overview)
2. [Terminology & Key Concepts](#terminology--key-concepts)
3. [Architecture](#architecture)
4. [Current Implementation Status](#current-implementation-status)
5. [Features](#features)
6. [Tech Stack](#tech-stack)
7. [Project Structure](#project-structure)
8. [Key Features & Functionality](#key-features--functionality)
9. [Database Models](#database-models)
10. [API Endpoints](#api-endpoints)
11. [Complete API Reference](#complete-api-reference)
12. [Authentication & Security](#authentication--security)
13. [Database Management](#database-management)
14. [Database Schema Details](#database-schema-details)
15. [Implementation Roadmap](#implementation-roadmap)
16. [Known Limitations](#known-limitations--blockers)
17. [Getting Started](#getting-started)
18. [Project Setup Guide](#project-setup-guide)

---

## 🎯 System Overview

### Project Identity: ChronoQuest

**Full Title**: ChronoQuest: Development of a Mobile Game-Based Learning Application for Teaching Philippine History among Elementary Students in Boac, Marinduque.

**Mission**: ChronoQuest is a dual-platform educational system designed to engage elementary learners in Philippine history through gamification and data-driven learning analytics. The system bridges play and study through localized historical content and real-time instructor feedback.

**Target Context**:
- **Geographic Focus**: Boac, Marinduque, Philippines (including schools in Buliasnin, Bunganay, and Caganhao)
- **Subject**: Philippine History with emphasis on local Marinduque heritage
- **Audience**: Elementary school learners (students)
- **Instructors**: Teachers and educational administrators

### Current Phase
This release provides the **Instructor Portal** (Web Dashboard) and foundational backend infrastructure.
- **Phase 1** ✅ Core infrastructure + instructor dashboard + admin panel (current)
- **Phase 2** Content management system (planning)
- **Phase 3** Mobile game frontend (future)

### System Description

**ChronoQuest** is an educational platform designed for instructors to manage learner progress and learning analytics. Teachers can create multiple learning groups/classes, assign unique class codes to learners, and track their performance across different historical eras.

The system features a premium minimalist design aesthetic with a clean, spacious interface and controlled color accents, optimized for educators who may not be technology experts.

The system consists of two main applications:
- **chrono-dashboard**: React-based Instructor Portal for teachers and administrators (Port 3001)
- **chronoquest-api**: Node.js/Express backend API (Port 3000)

### Historical Framework: The Eras

ChronoQuest organizes Philippine history into five strategic learning eras:
1. **Pre-Colonial Period**: Early Filipino culture, indigenous systems, and Boac's origins
2. **Spanish Colonization**: Christianization, the Galleon Trade, and colonial impact on the island
3. **Revolutionary Period**: The struggle for independence and local heroism
4. **American & Japanese Occupation**: The Commonwealth era and WWII impact on the region
5. **Post-War to Present**: Modern history and contemporary Marinduque

---

## 📚 Terminology & Key Concepts

### Core Terminology
- **Learner**: An elementary school student using the system. In code, may be referenced as "student" in variable names, but displayed as "Learner" in the UI.
- **Instructor**: A teacher or educational staff member managing learners. May be referenced as "teacher" in code, but displayed as "Instructor" in the UI.
- **Learning Group**: A classroom or cohort of learners. In code, may be called "section" or "class".
- **Mission**: A specific learning task or challenge within an era. Replaces generic terms like "question" or "assessment" in learner-facing UI.
- **Eras**: The five historical periods organizing Philippine history content.
- **Instructor Portal**: The web dashboard for teachers and administrators.
- **Learning Analytics**: Data-driven insights into learner performance and engagement.

### Code vs. UI Distinction
Backend logic and variable names use generic terms like "students", "teachers", "sections", "questions". All **displayed UI text** uses ChronoQuest terminology above to maintain pedagogical consistency.

---

## 🏗️ Architecture

### Monorepo Structure
```
CHRONO-API/
├── chrono-dashboard/        (React Frontend - Port 3001)
└── chronoquest-api/         (Express Backend - Port 3000)
```

### Technology Layers
- **Frontend**: React 19 with React Router for navigation
- **Backend**: Express.js with MongoDB for data persistence
- **Authentication**: JWT (JSON Web Tokens) with bcryptjs password hashing
- **Communication**: RESTful API with Axios HTTP client
- **Database**: MongoDB with Mongoose ODM

---

## 📊 Current Implementation Status

### Implementation Overview

| Feature Category | Status | Notes |
|---|---|---|
| **Authentication** | ✅ 100% | Login, register, JWT tokens fully working |
| **Teacher Dashboard** | ✅ 100% | All features operational |
| **Section Management** | ✅ 100% | Create, archive, unarchive, delete sections |
| **Admin Panel** | ✅ 85% | 5 tabs functional; Settings backend limited |
| **User Management** | ✅ 95% | Full CRUD operations; search focus fixed; enhanced feedback display with priorities and admin responses |
| **Question Management** | ✅ 100% | Create, edit, delete questions with filters |
| **Class Results** | ✅ 100% | Gradebook + leaderboard views, CSV export |
| **Feedback System** | ✅ 100% | Submit and view feedback working |
| **Profile Settings** | ✅ 100% | Update name/email, change password |
| **System Settings** | ⚠️ 50% | UI and API functional; persistence limited |
| **Content Management** | ❌ 0% | Phase 2 planned |

### Admin Panel Navigation (5 Tabs)
1. **Dashboard** — Learning analytics with stat cards and recent activity ✅
2. **Users** — Searchable user management (instructors + learners) ✅
3. **Questions** — Full question CRUD with filters and pagination ✅
4. **Feedback** — Instructor support tickets viewer ✅
5. **Settings** — System configuration ⚠️

---

## ✨ Features

### Instructor Features — ✅ FULLY IMPLEMENTED

- ✅ **User Registration & Authentication**
  - Secure email/password authentication
  - JWT-based login with localStorage persistence

- ✅ **Learning Group Management** (Sections)
  - Create multiple learning groups with auto-generated class codes
  - Archive and unarchive sections (archived sections shown separately, collapsible)
  - Delete sections with confirmation
  - Section selector with active/archived separation in dashboard

- ✅ **Dashboard Overview**
  - At-a-glance learner count, mission count, and average score per selected section
  - Copyable section access code display
  - Empty state prompt when no sections exist

- ✅ **Class Results** (Gradebook + Leaderboard merged)
  - Toggle between Gradebook view and Leaderboard view
  - Gradebook: sorted score table with level reached and submission date
  - Leaderboard: ranked table with medal badges (🥇🥈🥉), stats row (participants, avg, highest, median)
  - CSV export of gradebook data
  - Section selector within the results page

- ✅ **Profile Settings**
  - Update instructor name and email
  - Change password (current password verification, minimum 6 characters)
  - Password visibility toggle on all password fields

- ✅ **Send Feedback**
  - Submit feedback with title, description, type (general/bug/feature), and priority
  - Accessible from the instructor sidebar

### Admin Features — ✅ IMPLEMENTED

- ✅ **Admin Panel Interface**
  - Separate sidebar with 5 navigation tabs
  - Back-to-dashboard navigation button
  - Admin name in welcome header
  - Admin Portal shortcut in instructor sidebar (visible to admin-role users only)

- ✅ **User Management**
  - View all instructors and learners in separate searchable tables
  - Search maintains focus (extracted components prevent re-render state loss)
  - Instructors: name, email, classes count, status, edit/deactivate/delete actions
  - Learners: name, email, class code, edit/delete actions (performance removed per requirements)
  - Edit user details (name, email, role, admin level for instructors)
  - Deactivate instructor accounts
  - Delete users permanently
  - Status badges (Active/Inactive)

- ✅ **Learning Analytics Dashboard**
  - Total users, instructors, learners, learning groups stat cards
  - Recent activity feed (last 10 system actions)

- ✅ **Question Management** (accessible from Admin Panel)
  - Create questions with title, historical period, difficulty, 4 options, correct answer
  - Edit and delete questions
  - Filter by period and difficulty
  - Search by topic/title
  - Pagination (10 per page)
  - Color-coded period and difficulty badges

- ✅ **Feedback & Support Viewer**
  - View all instructor feedback submissions with advanced filtering
  - Expanded display with detailed metadata:
    - **Collapsed view**: Title, submitter, creation date, type/status/priority badges, expand button
    - **Expanded view**: Full description, submitter details, creation + last updated dates, attachment count
    - **Priority badges**: Critical/High/Medium/Low severity indicators
    - **Admin response section**: Shows who responded, when, and response message (if replied); "awaiting response" indicator if pending
  - Search by title, description, submitter email/name, type, or status
  - Type badges: bug report (red), feature request (blue), general feedback (amber)
  - Status badges: open, in_progress, resolved, closed
  - Note: Search maintains focus (extracted component prevents re-render state loss)

- ⚠️ **System Settings**
  - Configure max learning groups per instructor and max learners per group
  - UI and API calls functional; persistence depends on backend

---

## 🛠️ Tech Stack

### Frontend (chrono-dashboard)
| Technology | Version | Purpose |
|------------|---------|---------||
| React | 19.2.4 | UI Framework |
| React Router DOM | 7.14.0 | Client-side routing |
| Axios | 1.14.0 | HTTP client for API calls |
| Plain CSS | — | Custom stylesheet (replaces Tailwind) |
| Lucide React | 1.7.0 | Icon library |
| React Hot Toast | 2.6.0 | Toast notifications |
| React Scripts | 5.0.1 | Build tools |

### Backend (chronoquest-api)
| Technology | Version | Purpose |
|------------|---------|---------||
| Express.js | 5.2.1 | Web framework |
| MongoDB | — | NoSQL database |
| Mongoose | 9.4.1 | MongoDB ODM |
| JWT | 9.0.3 | Authentication tokens |
| Bcryptjs | 3.0.3 | Password hashing |
| CORS | 2.8.6 | Cross-origin requests |
| Dotenv | 17.4.0 | Environment variables |
| Nodemon | 3.1.14 | Development auto-reload |

---

## 📁 Project Structure

### Frontend Structure
```
chrono-dashboard/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── AdminSidebar.js              # Admin panel sidebar navigation
│   │   ├── TeacherSidebar.js            # Instructor dashboard sidebar navigation
│   │   └── admin/
│   │       ├── UsersList.js             # User management table component (extracted for search focus)
│   │       └── FeedbackSection.js       # Feedback viewer with expandable cards and detailed metadata
│   ├── pages/
│   │   ├── Dashboard.js                 # Main instructor dashboard
│   │   ├── AdminPanel.js                # Admin control panel (uses UsersList & FeedbackSection)
│   │   ├── LoginPage.js                 # Instructor login
│   │   ├── RegisterPage.js              # Instructor registration
│   │   ├── ProfileSettings.js           # Profile & password management
│   │   ├── ClassResults.js              # Gradebook + Leaderboard merged view
│   │   ├── QuestionManagement.js        # Question CRUD with filters
│   │   └── Leaderboard.js               # Standalone leaderboard (legacy)
│   ├── context/
│   │   └── AuthContext.js               # Authentication state management
│   ├── App.js                           # Main app component with routing
│   ├── App.css                          # App-level styles
│   ├── index.js                         # React entry point
│   └── index.css                        # Global styles (custom CSS, no Tailwind)
├── package.json
└── postcss.config.js
```

### Backend Structure
```
chronoquest-api/
├── src/
│   ├── config/
│   │   └── db.js                    # Database connection
│   ├── controllers/
│   │   ├── authController.js        # Authentication logic (register, login, profile, feedback)
│   │   ├── analyticsController.js   # Analytics operations
│   │   ├── studentController.js     # Student operations
│   │   ├── adminController.js       # Admin panel logic
│   │   ├── leaderboardController.js # Leaderboard and stats
│   │   └── questionController.js    # Question CRUD
│   ├── middleware/
│   │   ├── authMiddleware.js        # JWT protection middleware
│   │   └── adminMiddleware.js       # Admin role verification
│   ├── models/
│   │   ├── teacherModel.js          # Teacher schema with sections array
│   │   ├── studentModel.js          # Student schema
│   │   ├── scoreModel.js            # Score/assessment schema
│   │   ├── activityLogModel.js      # User activity tracking
│   │   ├── questionModel.js         # Quiz questions schema
│   │   ├── feedbackModel.js         # User feedback schema
│   │   └── systemSettingsModel.js   # Platform settings schema
│   ├── routes/
│   │   ├── apiRoutes.js             # Main API router (teacher + analytics + leaderboard + questions)
│   │   ├── authRoutes.js            # Authentication routes
│   │   ├── adminRoutes.js           # Admin endpoints
│   │   ├── leaderboardRoutes.js     # Leaderboard routes
│   │   └── questionRoutes.js        # Question routes
│   └── utils/
│       └── generateCode.js          # Class code generation utility
├── server.js                        # Express app setup & startup
└── package.json
```

---

## 🎮 Key Features & Functionality

### 1. Authentication System

#### Registration Flow
- User provides: `name`, `email`, `password`
- Password is hashed using bcryptjs
- User role defaults to `teacher`
- User data stored in MongoDB

#### Login Flow
- User provides: `email`, `password`
- Password verified against hashed stored password
- JWT token generated on successful login
- Token and teacher data stored in localStorage

#### Protected Routes
- All protected endpoints require JWT token in `Authorization: Bearer <token>` header
- Token verified using authMiddleware
- Invalid/expired tokens return 401 Unauthorized

### 2. Dashboard Interface

#### Layout
- **Sidebar Navigation**: Fixed left sidebar (256px wide)
- **Main Content Area**: Offset by sidebar with generous padding
- **Color Palette**:
  - Background: `#f8fafc` (slate-50)
  - Cards: `#ffffff` with `#e2e8f0` border
  - Primary Text: `#0f172a` (slate-900)
  - Secondary Labels: `#94a3b8` (slate-400)
  - Primary Action: `#059669` (emerald-600)
  - Section Indicator: `#f59e0b` (amber-500)
  - Feedback/Modals: `#4f46e5` (indigo-600)

#### Section Management
- Teacher creates sections with custom names
- Each section gets a unique auto-generated class code
- Active sections displayed as chip buttons in dashboard
- Archived sections hidden behind a collapsible toggle

### 3. Class Results

#### Gradebook View
- Fetches scores from `/analytics/overall`, filtered by selected class code
- Sorted by score (descending)
- Columns: rank, learner name, score badge, level reached, submission date
- CSV export with filename `Results_<SectionName>.csv`

#### Leaderboard View
- Fetches from `/leaderboard/:classCode` and `/leaderboard/:classCode/stats`
- Stats row: participants, average score, highest score, median score
- Medal badges for top 3 ranks (🥇🥈🥉) with color-coded row backgrounds
- Trending-up icon on the top-ranked student

### 4. Question Management

- Accessible from Admin Panel (Questions tab)
- Questions linked to one of 5 historical periods
- Difficulty levels: Easy, Medium, Hard
- 4 answer options with one correct answer (selectable via circle toggle)
- Optional additional notes field
- Search by topic/title, filter by period and difficulty
- Debounced search (300ms)
- Pagination at 10 questions per page
- Color-coded badges for period and difficulty

### 5. Admin Panel

#### Analytics Dashboard
- Loads on admin panel entry (Dashboard tab)
- Shows total users, instructors, learners, and learning groups
- Recent activity feed from usage stats API

#### User Management
- Separate tables for instructors and learners
- Inline search filters both tables simultaneously
- Edit modal: update name, email; for instructors also role and admin level
- Deactivate (instructors only) and delete actions

#### Feedback Viewer
- Lists up to 10 most recent feedback items
- Shows type and status as colored badges

#### System Settings
- Two configurable fields: max learning groups per instructor, max learners per group
- Save and Reset actions

---

## 💾 Database Models

### Teacher Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  classCode: String (unique),
  role: String (default: 'teacher'),
  adminLevel: String,
  isActive: Boolean (default: true),
  sections: [{
    sectionName: String (required),
    classCode: String (required),
    isArchived: Boolean (default: false),
    createdAt: Date
  }],
  timestamps: { createdAt, updatedAt }
}
```

### Student Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  classCode: String (required),
  score: Number (default: 0),
  levelReached: String (default: "Era 1"),
  timestamps: { createdAt, updatedAt }
}
```

### Score Model
```javascript
{
  studentName: String (required),
  classCode: String (required),
  levelReached: String (required),
  score: Number (required),
  teacherId: ObjectId (ref: Teacher, required),
  timestamps: { createdAt, updatedAt }
}
```

### Question Model
```javascript
{
  title: String (required),
  description: String,
  topic: String,
  period: String (enum: PERIODS),
  difficultyLevel: String (enum: ['Easy', 'Medium', 'Hard']),
  options: [String] (length: 4),
  correctAnswer: Number (index into options array),
  createdBy: ObjectId (ref: Teacher),
  timestamps: { createdAt, updatedAt }
}
```

### Feedback Model
```javascript
{
  title: String (required),
  description: String (required),
  type: String (enum: ['bug_report', 'feature_request', 'general_feedback']),
  submittedBy: ObjectId (ref: Teacher, required),
  priority: String (enum: ['low', 'medium', 'high', 'critical']),
  status: String (enum: ['open', 'in_progress', 'resolved', 'closed']),
  response: { admin: ObjectId, message: String, respondedAt: Date },
  timestamps: { createdAt, updatedAt }
}
```

### Activity Log Model
```javascript
{
  userId: ObjectId (ref: Teacher, required),
  userRole: String (enum: ['teacher', 'student', 'admin']),
  action: String,
  resource: String,
  resourceId: ObjectId,
  details: Object,
  ipAddress: String,
  status: String (enum: ['success', 'failure']),
  createdAt: Date
}
```

### System Settings Model
```javascript
{
  key: String (required, unique),
  value: Mixed,
  type: String (enum: ['string', 'number', 'boolean', 'json']),
  description: String,
  category: String (enum: ['general', 'security', 'performance', 'email', 'features']),
  updatedBy: ObjectId (ref: Teacher),
  updatedAt: Date
}
```

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:3000/api/v1
```

### Authentication Endpoints
| Method | Endpoint | Protected | Purpose |
|--------|----------|-----------|---------|
| POST | `/auth/register` | ❌ | Register new instructor |
| POST | `/auth/login` | ❌ | Login, return JWT |
| GET | `/auth/profile` | ✅ | Get current instructor profile |
| PUT | `/auth/profile` | ✅ | Update instructor name/email |
| PUT | `/auth/change-password` | ✅ | Change instructor password |
| POST | `/auth/feedback` | ✅ | Submit instructor feedback |

### Teacher Endpoints
| Method | Endpoint | Protected | Purpose |
|--------|----------|-----------|---------|
| POST | `/teacher/add-section` | ✅ | Create new section |
| DELETE | `/teacher/delete-section/:classCode` | ✅ | Delete section and its scores |
| POST | `/teacher/archive-section/:classCode` | ✅ | Archive a section |
| POST | `/teacher/unarchive-section/:classCode` | ✅ | Restore an archived section |

### Analytics Endpoints
| Method | Endpoint | Protected | Purpose |
|--------|----------|-----------|---------|
| GET | `/analytics/overall` | ✅ | Get all students' scores and levels |

### Leaderboard Endpoints
| Method | Endpoint | Protected | Purpose |
|--------|----------|-----------|---------|
| GET | `/leaderboard/:classCode` | ✅ | Get ranked leaderboard for a class |
| GET | `/leaderboard/:classCode/stats` | ✅ | Get stats (avg, highest, median, participants) |

### Question Endpoints
| Method | Endpoint | Protected | Purpose |
|--------|----------|-----------|---------|
| GET | `/questions` | ✅ | Get paginated questions (filterable by topic, difficulty, period) |
| POST | `/questions` | ✅ | Create a new question |
| PATCH | `/questions/:id` | ✅ | Update a question |
| DELETE | `/questions/:id` | ✅ | Delete a question |

### Admin Endpoints (Admin Role Required)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/admin/users` | Get all instructors and students |
| POST | `/admin/users/deactivate` | Deactivate a user account |
| DELETE | `/admin/users/:userId` | Delete user permanently |
| PATCH | `/admin/users/:userId/:userType` | Update user details |
| GET | `/admin/users/:userId/logs` | Get activity logs for a user |
| GET | `/admin/activity-logs` | Get all system activity logs |
| GET | `/admin/analytics` | Get platform-wide analytics |
| GET | `/admin/usage-stats` | Get usage statistics and action counts |
| GET | `/admin/feedback` | Get all instructor feedback |
| POST | `/admin/feedback/:id/respond` | Respond to a feedback item |
| GET | `/admin/settings` | Get system settings |
| POST | `/admin/settings` | Update a system setting |

### Diagnostic Endpoints
| Method | Endpoint | Protected | Purpose |
|--------|----------|-----------|---------|
| GET | `/debug` | ❌ | Check server status and DB connection |
| GET | `/test` | ❌ | Verify API is running |

---

## 📘 Complete API Reference

### Authentication Endpoints

#### POST `/auth/register`
**Description**: Register a new instructor account
**Headers**: None
**Request Body**:
```json
{
  "name": "John Teacher",
  "email": "john@school.com",
  "password": "securepassword123"
}
```
**Success Response** (201):
```json
{
  "_id": "user_id_here",
  "name": "John Teacher",
  "email": "john@school.com",
  "classCode": "AUTO_GENERATED",
  "sections": [],
  "role": "teacher",
  "token": "jwt_token_here"
}
```
**Error Responses**:
- 400: Teacher already exists (email duplicate)
- 500: Server error

---

#### POST `/auth/login`
**Description**: Login with credentials and receive JWT token
**Headers**: None
**Request Body**:
```json
{
  "email": "john@school.com",
  "password": "securepassword123"
}
```
**Success Response** (200):
```json
{
  "_id": "user_id_here",
  "name": "John Teacher",
  "email": "john@school.com",
  "classCode": "AUTO_GENERATED",
  "sections": [
    {
      "_id": "section_id",
      "sectionName": "Grade 4-A",
      "classCode": "AB12CD",
      "isArchived": false,
      "createdAt": "2026-04-10T10:00:00Z"
    }
  ],
  "role": "teacher",
  "token": "jwt_token_here"
}
```
**Error Responses**:
- 401: Invalid email or password
- 500: Server error

---

#### GET `/auth/profile`
**Description**: Get current logged-in instructor's profile
**Headers**: `Authorization: Bearer <token>` ✅
**Success Response** (200):
```json
{
  "_id": "user_id_here",
  "name": "John Teacher",
  "email": "john@school.com",
  "classCode": "AUTO_GENERATED",
  "sections": [...],
  "role": "teacher"
}
```
**Error Responses**:
- 401: Not authorized (invalid/missing token)
- 404: Teacher not found

---

#### PUT `/auth/profile`
**Description**: Update instructor name and email
**Headers**: `Authorization: Bearer <token>` ✅
**Request Body**:
```json
{
  "name": "Jane Teacher",
  "email": "jane@school.com"
}
```
**Success Response** (200):
```json
{
  "name": "Jane Teacher",
  "email": "jane@school.com",
  ...
}
```

---

#### PUT `/auth/change-password`
**Description**: Change instructor password (requires current password verification)
**Headers**: `Authorization: Bearer <token>` ✅
**Request Body**:
```json
{
  "currentPassword": "oldpassword123",
  "newPassword": "newpassword456"
}
```
**Success Response** (200):
```json
{ "message": "Password changed successfully" }
```
**Error Responses**:
- 400: Current password incorrect
- 400: Password must be at least 6 characters

---

#### POST `/auth/feedback`
**Description**: Submit feedback about the platform
**Headers**: `Authorization: Bearer <token>` ✅
**Request Body**:
```json
{
  "title": "Bug in gradebook export",
  "description": "CSV export truncates long student names",
  "type": "bug_report",
  "priority": "high"
}
```
**Success Response** (201):
```json
{
  "_id": "feedback_id",
  "title": "Bug in gradebook export",
  "submittedBy": "teacher_id",
  "status": "open",
  "createdAt": "2026-04-10T15:30:00Z"
}
```

---

### Teacher/Section Management Endpoints

#### POST `/teacher/add-section`
**Description**: Create a new learning section/class
**Headers**: `Authorization: Bearer <token>` ✅
**Request Body**:
```json
{
  "sectionName": "Grade 4-A History"
}
```
**Success Response** (201):
```json
{
  "updatedTeacher": {
    "_id": "teacher_id",
    "sections": [
      {
        "sectionName": "Grade 4-A History",
        "classCode": "AB12CD",
        "isArchived": false,
        "createdAt": "2026-04-10T10:00:00Z"
      }
    ]
  }
}
```
**Error Responses**:
- 400: Section name is required
- 500: Server error

---

#### DELETE `/teacher/delete-section/:classCode`
**Description**: Permanently delete a section and associated scores
**Headers**: `Authorization: Bearer <token>` ✅
**URL Params**: `:classCode` (string, required) — The class code of the section to delete
**Success Response** (200):
```json
{
  "message": "Section and associated scores deleted",
  "updatedTeacher": { ... }
}
```

---

#### POST `/teacher/archive-section/:classCode`
**Description**: Archive a section (hide from active list, retain data)
**Headers**: `Authorization: Bearer <token>` ✅
**Success Response** (200):
```json
{
  "message": "Section archived successfully",
  "updatedTeacher": { ... }
}
```

---

#### POST `/teacher/unarchive-section/:classCode`
**Description**: Restore an archived section to active view
**Headers**: `Authorization: Bearer <token>` ✅
**Success Response** (200):
```json
{
  "message": "Section unarchived successfully",
  "updatedTeacher": { ... }
}
```

---

### Analytics Endpoints

#### GET `/analytics/overall`
**Description**: Get all students' scores and performance data
**Headers**: `Authorization: Bearer <token>` ✅
**Query Params**: None
**Success Response** (200):
```json
[
  {
    "_id": "score_id",
    "studentName": "Maria Santos",
    "classCode": "AB12CD",
    "levelReached": "Era 2: Spanish Colonization",
    "score": 850,
    "teacherId": "teacher_id",
    "createdAt": "2026-04-10T14:30:00Z"
  },
  ...
]
```

---

### Leaderboard Endpoints

#### GET `/leaderboard/:classCode`
**Description**: Get ranked leaderboard for a specific class (sorted by score, descending)
**Headers**: `Authorization: Bearer <token>` ✅
**URL Params**: `:classCode` (string, required)
**Success Response** (200):
```json
{
  "leaderboard": [
    {
      "rank": 1,
      "studentName": "Maria Santos",
      "score": 950,
      "levelReached": "Era 3: Revolutionary Period",
      "createdAt": "2026-04-10T14:30:00Z",
      "_id": "score_id"
    },
    {
      "rank": 2,
      "studentName": "Juan Dela Cruz",
      "score": 890,
      ...
    }
  ],
  "classCode": "AB12CD",
  "totalStudents": 25
}
```
**Error Responses**:
- 404: Class not found

---

#### GET `/leaderboard/:classCode/stats`
**Description**: Get statistical summary for a class leaderboard
**Headers**: `Authorization: Bearer <token>` ✅
**Success Response** (200):
```json
{
  "stats": {
    "totalParticipants": 25,
    "averageScore": 742.5,
    "highestScore": 980,
    "medianScore": 750,
    "lowestScore": 450
  }
}
```

---

### Question Management Endpoints

#### GET `/questions`
**Description**: Get paginated questions with optional filters
**Headers**: `Authorization: Bearer <token>` ✅
**Query Params**:
- `page` (number, default: 1) — Page number for pagination
- `limit` (number, default: 10) — Items per page
- `period` (string, optional) — Filter by historical period (e.g., "Pre-colonial", "Spanish Colonization")
- `difficulty` (string, optional) — Filter by difficulty ("Easy", "Medium", "Hard")
- `topic` (string, optional) — Search by title/topic (case-insensitive regex)

**Example Request**: `GET /questions?page=1&limit=10&period=Spanish Colonization&difficulty=Medium`

**Success Response** (200):
```json
{
  "questions": [
    {
      "_id": "question_id",
      "title": "What year did the Spanish arrive in the Philippines?",
      "description": "Multiple choice question about Spanish colonization",
      "period": "Spanish Colonization",
      "difficultyLevel": "Easy",
      "options": ["1521", "1565", "1572", "1610"],
      "correctAnswer": 1,
      "isActive": true,
      "createdBy": { "_id": "teacher_id", "name": "Admin" },
      "createdAt": "2026-04-01T10:00:00Z"
    }
  ],
  "pagination": {
    "total": 25,
    "page": 1,
    "limit": 10,
    "pages": 3
  }
}
```

---

#### POST `/questions`
**Description**: Create a new question (Admin only)
**Headers**: `Authorization: Bearer <token>` ✅ + Admin privilege required
**Request Body**:
```json
{
  "title": "What year did the Spanish arrive in the Philippines?",
  "description": "A historically important date",
  "period": "Spanish Colonization",
  "difficultyLevel": "Easy",
  "options": ["1521", "1565", "1572", "1610"],
  "correctAnswer": 1
}
```
**Success Response** (201):
```json
{
  "message": "Question created successfully",
  "question": {
    "_id": "new_question_id",
    ...
  }
}
```

---

#### PATCH `/questions/:questionId`
**Description**: Update a question (Admin or creator)
**Headers**: `Authorization: Bearer <token>` ✅
**Request Body**: Same structure as POST (all fields optional)
**Success Response** (200): Updated question object

---

#### DELETE `/questions/:questionId`
**Description**: Delete a question (Admin or creator)
**Headers**: `Authorization: Bearer <token>` ✅
**Success Response** (200):
```json
{ "message": "Question deleted successfully" }
```

---

### Admin Endpoints (Admin role required)

#### GET `/admin/users`
**Description**: Get all instructors and students in the system
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required
**Success Response** (200):
```json
{
  "teachers": [
    {
      "_id": "teacher_id",
      "name": "John Teacher",
      "email": "john@school.com",
      "role": "teacher",
      "userType": "teacher",
      "totalSections": 3,
      "isActive": true
    }
  ],
  "students": [
    {
      "_id": "student_id",
      "name": "Maria Santos",
      "email": "maria@student.com",
      "classCode": "AB12CD",
      "userType": "student"
    }
  ],
  "totalUsers": 28,
  "totalTeachers": 3,
  "totalStudents": 25
}
```

---

#### POST `/admin/users/deactivate`
**Description**: Deactivate a user account (prevent login)
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required
**Request Body**:
```json
{
  "userId": "user_id",
  "userType": "teacher"
}
```
**Success Response** (200):
```json
{ "message": "User deactivated successfully" }
```

---

#### DELETE `/admin/users/:userId`
**Description**: Permanently delete a user
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required
**Request Body**: 
```json
{
  "userId": "user_id",
  "userType": "teacher"
}
```

---

#### PATCH `/admin/users/:userId/:userType`
**Description**: Update user details (name, email, role, admin level)
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required
**Request Body** (for teacher):
```json
{
  "name": "Jane Doe",
  "email": "jane@school.com",
  "role": "admin",
  "adminLevel": "content_admin"
}
```

---

#### GET `/admin/activity-logs`
**Description**: Get all system activity logs (paginated)
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required
**Success Response** (200):
```json
{
  "logs": [
    {
      "_id": "log_id",
      "userId": "teacher_id",
      "userRole": "teacher",
      "action": "CREATE_SECTION",
      "resource": "Section",
      "resourceId": "section_id",
      "status": "success",
      "createdAt": "2026-04-10T15:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

#### GET `/admin/analytics`
**Description**: Get platform-wide analytics dashboard data
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required
**Success Response** (200):
```json
{
  "totalTeachers": 5,
  "totalStudents": 127,
  "totalSections": 12,
  "totalQuestions": 50,
  "recentActivity": [...]
}
```

---

#### GET `/admin/usage-stats`
**Description**: Get detailed usage statistics
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required

---

#### GET `/admin/feedback`
**Description**: Get all instructor feedback submissions
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required
**Success Response** (200):
```json
{
  "feedback": [
    {
      "_id": "feedback_id",
      "title": "Bug in CSV export",
      "description": "Long student names are truncated",
      "type": "bug_report",
      "priority": "high",
      "status": "open",
      "email": "john@school.com",
      "createdAt": "2026-04-10T14:00:00Z"
    }
  ]
}
```

---

#### GET `/admin/settings`
**Description**: Get all system settings
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required
**Success Response** (200):
```json
{
  "settings": [
    {
      "_id": "setting_id",
      "key": "max_sections_per_teacher",
      "value": 10,
      "type": "number",
      "category": "general"
    }
  ]
}
```

---

#### POST `/admin/settings`
**Description**: Update or create a system setting
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required
**Request Body**:
```json
{
  "key": "max_sections_per_teacher",
  "value": 20,
  "type": "number"
}
```

---

### Diagnostic Endpoints

#### GET `/test`
**Description**: Health check - verify API is running
**Headers**: None
**Success Response** (200):
```json
{ "message": "API is working on Port 5000!" }
```

---

#### GET `/debug`
**Description**: Detailed server status and database connection check
**Headers**: None
**Success Response** (200):
```json
{
  "message": "Server is alive!",
  "dbStatus": 1
}
```
**DB Status Values**:
- 0: disconnected
- 1: connected
- 2: connecting
- 3: disconnecting

---

## 🗄️ Database Schema Comprehensive Details

### Teacher/Instructor Collection

**Collection Name**: `teachers`

**Fields**:
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `_id` | ObjectId | Yes | Auto-generated MongoDB ID |
| `name` | String | Yes | Instructor full name (min: 1, max: 100) |
| `email` | String | Yes | Unique email address (lowercase) |
| `password` | String | Yes | Hashed via bcryptjs (never stored plain) |
| `classCode` | String | Yes | Unique auto-generated code for legacy compatibility |
| `role` | String | No | Enum: 'teacher', 'admin' (default: 'teacher') |
| `adminLevel` | String | No | Enum: 'super_admin', 'content_admin', 'support_admin' (null if not admin) |
| `permissions` | [String] | No | Array of permission strings (e.g., 'manage_users', 'manage_content') |
| `sections` | [Object] | No | Array of section subdocuments (see below) |
| `isActive` | Boolean | No | Account active status (default: true) |
| `lastLogin` | Date | No | Timestamp of last login (initially null) |
| `createdAt` | Date | Yes | Auto-generated timestamp |
| `updatedAt` | Date | Yes | Auto-updated on changes |

**Section Subdocument Structure**:
```javascript
{
  _id: ObjectId,
  sectionName: String (required, max: 100),
  classCode: String (unique, required),
  createdAt: Date (default: now),
  isArchived: Boolean (default: false),
  archivedAt: Date (null if not archived)
}
```

**Indexes**:
- `email` (unique)
- `classCode` (unique)

---

### Student Collection

**Collection Name**: `students`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `_id` | ObjectId | Yes | Auto-generated |
| `name` | String | Yes | Student full name |
| `email` | String | Yes | Unique email (typically from mobile app enrollment) |
| `password` | String | Yes | Hashed password |
| `classCode` | String | Yes | Links to teacher's section code |
| `score` | Number | No | Student's current score (default: 0) |
| `levelReached` | String | No | Current era/level (default: "Era 1: Pre-Colonial Period") |
| `createdAt` | Date | Yes | Auto-generated |
| `updatedAt` | Date | Yes | Auto-updated |

**Indexes**:
- `email` (unique)
- `classCode` (for filtering by section)

---

### Score Collection

**Collection Name**: `scores`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `_id` | ObjectId | Yes | Auto-generated |
| `studentName` | String | Yes | Student's name (captured at submission time) |
| `classCode` | String | Yes | Section identifier |
| `levelReached` | String | Yes | Era reached (e.g., "Era 2: Spanish Colonization") |
| `score` | Number | Yes | Integer score (0-1000 range recommended) |
| `teacherId` | ObjectId | Yes | Reference to Teacher who owns this section |
| `createdAt` | Date | Yes | Submission timestamp |
| `updatedAt` | Date | Yes | Auto-updated |

**Indexes**:
- `teacherId`
- `classCode + teacherId` compound (for section queries)

---

### Question Collection

**Collection Name**: `questions`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `_id` | ObjectId | Yes | Auto-generated |
| `title` | String | Yes | Question text (min: 5, max: 500 chars) |
| `description` | String | No | Extended context (max: 1000 chars) |
| `topic` | String | No | Search/filter field (backward compat with period) |
| `period` | String | Yes | Enum: Pre-colonial, Spanish Colonization, Revolutionary, American/Japanese, Post-war |
| `options` | [String] | Yes | Array of 4 answer choices (exactly 4, all non-empty) |
| `correctAnswer` | Number | Yes | Index of correct option (0-3) |
| `difficultyLevel` | String | No | Enum: Easy, Medium, Hard (default: Medium) |
| `createdBy` | ObjectId | Yes | Reference to Teacher who created question |
| `isActive` | Boolean | No | Question active status (default: true) |
| `createdAt` | Date | Yes | Auto-generated |
| `updatedAt` | Date | Yes | Auto-updated |

**Validation Rules**:
- Options must be array of exactly 4 non-empty strings
- Correct answer must be integer 0-3
- Period must be one of 5 valid eras
- Title minimum 5 characters

**Indexes**:
- `period`
- `difficultyLevel`
- `createdBy`

---

### Feedback Collection

**Collection Name**: `feedback`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `_id` | ObjectId | Yes | Auto-generated |
| `title` | String | Yes | Feedback subject |
| `description` | String | Yes | Detailed message |
| `type` | String | Yes | Enum: bug_report, feature_request, general_feedback |
| `submittedBy` | ObjectId | Yes | Reference to Teacher/User submitting feedback |
| `email` | String | Yes | Email captured from submitter |
| `priority` | String | No | Enum: low, medium, high, critical (default: medium) |
| `status` | String | No | Enum: open, in_progress, resolved, closed (default: open) |
| `attachments` | [String] | No | Array of file URLs |
| `response` | Object | No | Admin response metadata (see below) |
| `createdAt` | Date | Yes | Auto-generated |
| `updatedAt` | Date | Yes | Auto-updated |

**Response Subdocument**:
```javascript
{
  admin: ObjectId (ref to Teacher who responded),
  message: String,
  respondedAt: Date
}
```

---

### Activity Log Collection

**Collection Name**: `activitylogs`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `_id` | ObjectId | Yes | Auto-generated |
| `userId` | ObjectId | Yes | Reference to Teacher/User (indexed) |
| `userRole` | String | Yes | Enum: teacher, student, admin |
| `action` | String | Yes | Action name (e.g., LOGIN, CREATE_SECTION, DELETE_STUDENT) |
| `resource` | String | No | Resource type (e.g., Section, Student, Question) |
| `resourceId` | ObjectId | No | ID of affected resource |
| `details` | Object | No | Additional context JSON (default: {}) |
| `ipAddress` | String | No | Request IP address |
| `status` | String | No | Enum: success, failure (default: success) |
| `createdAt` | Date | Yes | Timestamp (indexed) |

**Indexes**:
- `userId`
- `createdAt`

---

### System Settings Collection

**Collection Name**: `systemsettings`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `_id` | ObjectId | Yes | Auto-generated |
| `key` | String | Yes | Unique setting name (e.g., max_sections_per_teacher) |
| `value` | Mixed | No | Value (String, Number, Boolean, or JSON) |
| `type` | String | No | Enum: string, number, boolean, json (default: string) |
| `description` | String | No | Human-readable description |
| `category` | String | No | Enum: general, security, performance, email, features |
| `updatedBy` | ObjectId | No | Admin who last updated |
| `updatedAt` | Date | No | Last modification timestamp |

**Example Settings**:
- `{ key: "max_sections_per_teacher", value: 10, type: "number" }`
- `{ key: "enable_csv_export", value: true, type: "boolean" }`

---

## 🌱 Database Management

### System Data Status

The system has been initialized with sample data:
- **5 Instructors** (teachers)
- **50 Students** (learners)
- **25 Questions** (5 per historical era, 5 difficulty levels)

This data is **persistent in MongoDB** and available for use immediately.

---

### Syncing Scores to Leaderboard

The leaderboard displays scores from the `Score` collection. If students have completed activities or you want to sync existing scores:

**Admin Endpoint**: `POST /api/v1/admin/sync-scores`

**Description**: Migrates student scores from the Student model to the Score collection for leaderboard display.

**Usage** (via Admin Panel):
1. Login as admin
2. Navigate to Admin Dashboard
3. Click "Sync Scores to Leaderboard" button (auto-called on dashboard load)
4. Leaderboard will now display all student scores

**Manual API Call**:
```bash
curl -X POST http://localhost:3000/api/v1/admin/sync-scores \
  -H "Authorization: Bearer <admin-token>" \
  -H "Content-Type: application/json"
```

**Response**:
```json
{
  "message": "Score sync completed",
  "synced": 35,
  "total": 50,
  "errors": null
}
```

---

### Test Credentials

**Admin Account** (from database):
```
Email: maria.garcia@deped.gov.ph
Password: password123
```

---

### Database Management

**View Sample Data**:
```javascript
// Connect to MongoDB
use chronoquest

// Verify counts
db.teachers.countDocuments()           // 5
db.students.countDocuments()           // >= 35
db.questions.countDocuments()          // >= 24
db.scores.countDocuments()             // Score collection documents

// View a student
db.students.findOne({ name: "Student Name" })

// View activity logs
db.activitylogs.find().limit(10).sort({ createdAt: -1 })
```

**Clear and Reinitialize** (if needed):
```javascript
// Drop collections to reset
db.teachers.deleteMany({})
db.students.deleteMany({})
db.questions.deleteMany({})
db.scores.deleteMany({})
db.activitylogs.deleteMany({})

// Then reseed via Admin → Sync Scores endpoint
```

---

### Troubleshooting Seeding

| Problem | Solution |
|---------|----------|
| `mongoimport: command not found` | Install MongoDB tools;  add to PATH |
| `ECONNREFUSED` | Ensure MongoDB is running (`mongod`) |
| `E11000 duplicate key error` | Clear collection first or use `--mode upsert` |
| Connection refused to Atlas | Check firewall, IP whitelist, connection URI |
| Password authentication failed | Verify credentials and MONGO_URI in .env |

---

### Reset Database to Empty State

```bash
mongo chronoquest
> db.dropDatabase()

# Or delete specific collections
> db.teachers.deleteMany({})
> db.students.deleteMany({})
> db.questions.deleteMany({})
```

Then re-seed with your preferred method.

---

## 🎨 UI/UX Design System

### CSS Architecture
The frontend uses a **custom plain CSS stylesheet** (`index.css`) with semantic class names. Tailwind CSS has been removed. All styling is defined globally in `src/index.css`.

### Class Naming Convention
Classes use simple, descriptive names grouped by component type:
- Layout: `.page`, `.page-centered`, `.main-content`, `.sidebar`
- Cards: `.card`, `.card-lg`, `.stat-card`
- Buttons: `.btn-primary`, `.btn-dark`, `.btn-indigo`, `.btn-emerald`, `.btn-red`, `.btn-ghost`, `.btn-outline`
- Forms: `.form-input`, `.form-input-sm`, `.form-label`, `.form-select`, `.form-textarea`
- Tables: `.table`, `.table-wrapper`, `.table-cell-name`, `.table-cell-sub`
- Badges: `.badge`, `.badge-active`, `.badge-amber`, `.badge-blue`, `.badge-red`
- Alerts: `.alert-error`, `.alert-success`, `.alert-info`
- Modals: `.modal-overlay`, `.modal`, `.modal-lg`, `.modal-md`

### Color Palette
| Color | Hex | Purpose |
|-------|-----|---------|
| Background | `#f8fafc` | Page background |
| Surface | `#ffffff` | Cards and containers |
| Border | `#e2e8f0` | Subtle dividers |
| Primary Text | `#0f172a` | Headers, main content |
| Secondary Text | `#94a3b8` | Labels, hints |
| Action — Dark | `#0f172a` | Primary buttons |
| Action — Indigo | `#4f46e5` | Modals, feedback submit |
| Action — Emerald | `#059669` | Export, success |
| Status — Amber | `#f59e0b` | Active section, score badges |
| Danger | `#dc2626` | Delete, password change |

### Design Principles
1. **Stability**: Flat design, no 3D effects, no scaling on hover
2. **Minimalism**: Controlled whitespace, typography weight over decorative elements
3. **Consistency**: `border-radius: 16px` throughout, unified spacing
4. **Quiet Color**: Mostly slate palette with controlled accents per action type

---

## 🔒 Authentication & Security

### JWT Implementation
- **Token Format**: `Bearer <token>`
- **Token Location**: `Authorization` request header
- **Payload**: User ID, email, role

### Password Security
- Hashed using bcryptjs (default salt rounds: 10)
- Original passwords never stored
- Minimum 6 characters enforced on change password

### Protected Routes
- `protect` middleware verifies JWT on each request
- Returns 401 if token invalid or missing
- Admin routes require `adminMiddleware` role check

### Admin Role
- Users with `role === 'admin'` access admin endpoints
- `adminLevel` field (e.g., `super_admin`, `content_admin`, `support_admin`)
- All admin actions tracked in activity logs

---

## 🗺️ Implementation Roadmap

### Phase 1 ✅ CURRENT (Core Infrastructure)
- ✅ Authentication system (login/register/profile/password change)
- ✅ Instructor dashboard with section management (create, archive, unarchive, delete)
- ✅ Class Results: gradebook and leaderboard views with CSV export
- ✅ Admin panel with 5 functional tabs
- ✅ User management (view, edit, deactivate, delete)
- ✅ Question management with filters and pagination
- ✅ Feedback submit (instructor) and feedback viewer (admin)
- ✅ Learning analytics and usage stats dashboard
- ✅ Activity logging (backend)
- ✅ System settings (UI + API)

### Phase 2 (IN PLANNING — Content Management)
- [ ] Activity Log viewer in admin UI
- [ ] Complete system settings persistence
- [ ] Era and Category management (CRUD in admin)
- [ ] Database population with Philippine history content
- [ ] Admin response to feedback

### Phase 3 (FUTURE — Mobile Game)
- [ ] Mobile game frontend (React Native / Flutter)
- [ ] Game mechanics and mission system
- [ ] Real-time score syncing
- [ ] Gamification (badges, era progression)
- [ ] Student self-join via class code in mobile app

---

## ⚠️ Known Limitations & Blockers

1. **System Settings Persistence**
   - UI and API calls are functional
   - Full persistence depends on backend controller completeness

2. **Activity Log Viewer**
   - Backend captures all actions via `/admin/activity-logs`
   - No UI in admin panel to browse logs yet

3. **Student Web Enrollment**
   - Students cannot join classes through the web dashboard
   - Designed for mobile app enrollment flow
   - Database foundation is ready

4. **Era/Category Content Management**
   - No UI or backend CRUD for eras or categories yet
   - Blocked on Phase 2 design integration with mobile game

5. **Leaderboard.js (Legacy)**
   - `Leaderboard.js` remains in the codebase but is not used in routing
   - `ClassResults.js` now handles both gradebook and leaderboard in a merged view

---

## � Project Setup Guide

### System Requirements

**Minimum Requirements**:
- Node.js: v14.0.0 or higher
- npm: v6.0.0 or higher (or yarn v1.22.0+)
- MongoDB: v4.4.0 or higher
- RAM: 2GB minimum
- Disk Space: 1GB minimum
- OS: Windows 10+, macOS 10.15+, Linux (Ubuntu 18.04+)

**Recommended**:
- Node.js: v18 LTS or higher
- npm: v9.0.0 or higher
- RAM: 4GB+
- SSD storage

---

### Step 1: Clone or Download Repository

```bash
# If you have the files, navigate to the project root
cd CHRONO-API
```

Check the directory structure:
```bash
ls -la
# Should show: chrono-dashboard/ chronoquest-api/ SYSTEM_DOCUMENTATION.md
```

---

### Step 2: MongoDB Setup

#### Option A: Local MongoDB Installation

**Windows**:
1. Download from https://www.mongodb.com/try/download/community
2. Run installer, follow default options
3. Start MongoDB service:
   ```bash
   net start MongoDB
   ```

**macOS**:
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux (Ubuntu)**:
```bash
sudo apt-get install -y mongodb
sudo systemctl start mongodb
```

#### Option B: MongoDB Atlas (Cloud)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster (0.5GB free tier available)
4. Get your connection URI: `mongodb+srv://username:password@cluster.mongodb.net/chronoquest`
5. Whitelist your IP address in Atlas console

#### Verify MongoDB Connection

```bash
mongo
> show dbs
# Should list admin, config, local databases
> exit
```

---

### Step 3: Backend Setup

#### 3.1 Install Dependencies

```bash
cd chronoquest-api
npm install
```

**Expected Output**:
```
added XXX packages in X.XXs
```

**Key dependencies installed**:
- express, express.js framework
- mongoose, MongoDB ODM
- jsonwebtoken, authentication
- bcryptjs, password hashing
- cors, cross-origin support
- dotenv, environment variables
- nodemon, dev auto-reload

#### 3.2 Create .env File

```bash
# In chronoquest-api/ directory
touch .env
```

**File contents (.env)**:
```env
# MongoDB Connection
MONGO_URI=mongodb://127.0.0.1:27017/chronoquest

# Server Port
PORT=3000

# JWT Secret (generate a strong random string)
JWT_SECRET=your_super_secret_key_here_at_least_32_characters_long

# Environment
NODE_ENV=development

# Optional: For production
# NODE_ENV=production
```

**For MongoDB Atlas**, change MONGO_URI:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/chronoquest?retryWrites=true&w=majority
```

#### 3.3 Seed Sample Data (Optional but Recommended)

```bash
# Inside chronoquest-api/ directory

# Option 1: Using Node script (if seedDatabase.js exists)
node seedDatabase.js

# Option 2: Using mongoimport command
cd src/seeds
mongoimport --db chronoquest --collection teachers --file sampleData.json --jsonArray
mongoimport --db chronoquest --collection students --file sampleData.json --jsonArray
mongoimport --db chronoquest --collection questions --file sampleData.json --jsonArray
```

#### 3.4 Start Backend Server

```bash
# Development mode (with auto-reload)
npm run dev

# Or production mode
npm start
```

**Expected Output**:
```
🚀 Server: http://localhost:3000
✅ MongoDB Connected
```

**Troubleshooting**:
| Error | Solution |
|-------|----------|
| `EADDRINUSE: address already in use :::3000` | Port 3000 in use; kill process or change PORT in .env |
| `MongoError: connect ECONNREFUSED` | Ensure MongoDB running; check MONGO_URI |
| `TypeError: Cannot read property 'connect' of undefined` | Check mongoose import; verify dependencies installed |

---

### Step 4: Frontend Setup

#### 4.1 Install Dependencies

```bash
cd chrono-dashboard
npm install
```

#### 4.2 Verify API Configuration

**File**: `src/App.js` or individual page files

Check the API base URL:
```javascript
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3000/api/v1';
```

If you changed the backend port or host, update this URL.

#### 4.3 (Optional) Create .env.local

```bash
# In chrono-dashboard/ directory
echo "REACT_APP_API_BASE=http://localhost:3000/api/v1" > .env.local
```

#### 4.4 Start Frontend Server

```bash
npm start
```

**Expected Output**:
```
Compiled successfully!

You can now view chrono-dashboard in the browser.

  Local:            http://localhost:3001
```

A browser window should auto-open to `http://localhost:3001`.

**Troubleshooting**:
| Error | Solution |
|-------|----------|
| `EADDRINUSE: address already in use :::3001` | Change port: `PORT=3002 npm start` |
| `Module not found` | Run `npm install` again; check `node_modules` |
| `Failed to compile` | Check console for syntax errors; review `src/` files |
| API calls fail (404/CORS) | Ensure backend running; verify API_BASE URL |

---

### Step 5: Test the System

#### 5.1 Register an Instructor

1. Open `http://localhost:3001`
2. Click "Create Account"
3. Fill in details:
   - Full Name: `Test Teacher`
   - Email: `teacher@test.com`
   - Password: `password123`
4. Click "Create Account"
5. You'll be redirected to login

#### 5.2 Login

1. Enter credentials:
   - Email: `teacher@test.com`
   - Password: `password123`
2. Click "Sign In"

**Expected**: Dashboard loads with "No sections yet" message

#### 5.3 Create a Section

1. Click "Create a Learning Group"
2. Enter section name: `Grade 4 History`
3. Confirm
4. Section appears with auto-generated class code

#### 5.4 Test Admin Panel (if seeded with admin user)

1. If you're logged in as admin user (from sampleData.json):
   - Email: `maria.garcia@deped.gov.ph`
   - Password: `TeacherPass123!`
2. Click "Admin Portal" button in sidebar (visible only for admins)
3. View Dashboard tab with analytics
4. Browse Users, Questions, Feedback tabs

---

### Step 6: Verify All Components

**Backend Health Checks**:
```bash
# Test endpoint
curl http://localhost:3000/api/v1/test

# Expected: {"message":"API is working on Port 3000!"}

# Debug endpoint
curl http://localhost:3000/api/v1/debug

# Expected: {"message":"Server is alive!","dbStatus":1}
```

**Confirm All Ports**:
```bash
# Windows
netstat -ano | findstr :3000
netstat -ano | findstr :3001

# macOS/Linux
lsof -i :3000
lsof -i :3001
```

---

### Stopping the Application

#### Stop Frontend
```bash
# In terminal running npm start
Press Ctrl+C
```

#### Stop Backend
```bash
# In terminal running npm run dev / npm start
Press Ctrl+C
```

#### Stop MongoDB (if running locally)
```bash
# Windows
net stop MongoDB

# macOS
brew services stop mongodb-community

# Linux
sudo systemctl stop mongodb
```

---

### Environment Variables Reference

**Backend (.env in chronoquest-api/)**:

| Variable | Default | Required | Purpose |
|----------|---------|----------|---------|
| `MONGO_URI` | `mongodb://127.0.0.1:27017/chronoquest` | Yes | MongoDB connection string |
| `PORT` | 3000 | No | Backend server port |
| `JWT_SECRET` | (none) | Yes | Secret key for JWT signing (min 32 chars) |
| `NODE_ENV` | development | No | Environment (development/production) |

**Frontend**:

| Variable | Default | Required | Purpose |
|----------|---------|----------|---------|
| `REACT_APP_API_BASE` | `http://localhost:3000/api/v1` | No | Backend API URL |
| `PORT` | 3001 | No | Frontend port |

---

### Common Setup Issues & Solutions

**Issue**: `npm: command not found`
- **Solution**: Install Node.js from https://nodejs.org/

**Issue**: `MongoDB not found` or service won't start
- **Solution**: Reinstall MongoDB; ensure data directory has write permissions

**Issue**: CORS errors when frontend calls backend
- **Solution**: Verify `REACT_APP_API_BASE` matches backend address; check CORS config in `server.js`

**Issue**: Can't connect to MongoDB Atlas
- **Solution**: Whitelist your IP in Atlas console (or allow 0.0.0.0); verify password in URI is URL-encoded

**Issue**: Port already in use
- **Solution**: Kill process using port:
  ```bash
  # Windows
  taskkill /PID <PID> /F
  
  # macOS/Linux
  kill -9 <PID>
  ```

---

## �🚀 Getting Started

### Prerequisites
- Node.js v14+
- MongoDB (local or Atlas URI)
- npm or yarn

### Installation

#### Backend Setup
```bash
cd chronoquest-api
npm install
```

#### Frontend Setup
```bash
cd chrono-dashboard
npm install
```

### Configuration

#### Backend (.env file)
```env
MONGO_URI=mongodb://127.0.0.1:27017/chronoquest
PORT=3000
JWT_SECRET=your_secret_key_here_min_32_chars
NODE_ENV=development
```

#### Frontend
- Default API base: `http://localhost:3000/api/v1`
- Default frontend port: `3001`
- Styles: custom CSS in `src/index.css` (no Tailwind, no PostCSS transforms needed for styles)

### Running the Application

#### Start Backend
```bash
cd chronoquest-api
npm run dev        # Development with nodemon
# or
npm start          # Production mode
```
Expected: `🚀 Server: http://localhost:3000`

#### Start Frontend
```bash
cd chrono-dashboard
npm start
```
Expected: Browser opens at `http://localhost:3001`

### Testing the Flow
1. Go to `http://localhost:3001`
2. Register as instructor with name/email/password
3. Login with credentials
4. Create a new section (auto-generates class code)
5. Share class code with learners
6. View Class Results (gradebook + leaderboard) as learners submit scores
7. Access Admin Portal if your account has `role: admin`

---

## 📊 Data Flow

### User Registration Flow
```
Frontend (Register Form)
    ↓
POST /api/v1/auth/register
    ↓
Hash password (bcryptjs)
    ↓
Save to MongoDB
    ↓
Return success message
```

### Login Flow
```
Frontend (Login Form)
    ↓
POST /api/v1/auth/login
    ↓
Find user in DB → Compare passwords
    ↓
Generate JWT token
    ↓
Return token + teacher data
    ↓
Frontend stores in localStorage
```

### Class Results Flow
```
ClassResults mounts
    ↓
Section selected (classCode)
    ↓
Gradebook: GET /analytics/overall → filter by classCode
Leaderboard: GET /leaderboard/:classCode + /stats
    ↓
Render sorted table or ranked list
    ↓
CSV export (gradebook only)
```

---

## 🐛 Error Handling

### Common Error Responses

| Status | Message | Cause |
|--------|---------|-------|
| 400 | Section name is required | Missing section name |
| 401 | Unauthorized | Missing or invalid JWT token |
| 403 | Admin access required | Non-admin accessing admin route |
| 404 | Not found | Endpoint doesn't exist |
| 500 | Server error | Database or server issue |

### Server Logging
- All requests logged with method, URL, and timestamp
- Database connection status logged on startup

---

## 📝 Notes

- **Persistence**: Teacher data persisted in localStorage for session continuation
- **Cache Busting**: Timestamp added to profile requests to prevent stale data
- **Error Recovery**: Automatic cleanup of corrupted localStorage data on load
- **Scalability**: MongoDB Atlas can be used for cloud deployment
- **CSS**: Frontend uses a custom plain CSS file (`index.css`) with semantic class names. Tailwind CSS and PostCSS are no longer used for styles.

---

## 📧 Support & Contact

For issues or questions:
1. Check MongoDB connection status
2. Verify JWT token in localStorage
3. Review server console logs
4. Check CORS configuration
5. Ensure both servers are running on correct ports

---

## 🔄 Recent Updates & Improvements (April 10, 2026)

### Admin Panel Enhancements

#### 1. Search Focus Fix — User Management & Feedback
**Problem**: Search inputs in Admin Panel were losing focus after typing each character, breaking the user experience.
**Root Cause**: Inline component definitions (`UsersList` and `FeedbackSection`) were recreated on every parent state update, causing React to unmount/remount input fields.
**Solution**: Extracted inline components into standalone files that maintain consistent identity across renders.
**Files Changed**: 
- Created [chrono-dashboard/src/components/admin/UsersList.js](chrono-dashboard/src/components/admin/UsersList.js)
- Created [chrono-dashboard/src/components/admin/FeedbackSection.js](chrono-dashboard/src/components/admin/FeedbackSection.js)
- Updated [AdminPanel.js](chrono-dashboard/src/pages/AdminPanel.js) to use extracted components
**Result**: ✅ Search inputs now maintain focus indefinitely; users can type multiple characters without interruption.

#### 2. Enhanced Feedback Panel Display
**Added Features**:
- **Priority Badges**: Visual indicators for feedback urgency (Critical/High/Medium/Low) with color-coded backgrounds
- **Expandable Cards**: Collapsed view shows title, submitter, date, and action badges; expanded view reveals full details
- **Admin Response Section**: Displays who responded, when, and with what message; shows "Awaiting response" indicator when pending
- **metadata**: Last updated timestamp, attachment count indicator
- **Better Status Indicators**: Four-state status badges (open, in_progress, resolved, closed) with distinct styling

**Layout**:
- **Collapsed**: Compact summary (~80px height) with title, badges, and expand button
- **Expanded**: Full details including description, submitter info, timestamps, attachments, and admin response message
- **Search**: Global search maintains focus and filters across title, description, email, type, and status fields

**Implementation**: All styling uses master CSS classes; no Tailwind dependencies remain.

#### 3. User Management Table Simplification
**Removed**: Performance/Score column from Learners table
**Reason**: Performance metrics are better displayed in Class Results (gradebook/leaderboard) with proper context and filtering. User management should focus on account info, not learning analytics.
**Tables Now Display**:
- **Instructors**: Name, Email, Classes Count, Status, Actions
- **Learners**: Name, Email, Class Code, Actions

---

### Component Architecture Improvements
**Files Organized**:
- New directory: `chrono-dashboard/src/components/admin/` for admin-specific extracted components
- Prevents re-render state loss through component extraction pattern
- Improves maintainability and testability
- Enables future admin feature modularization

**Benefits**:
- ✅ Extracted components prevent React lifecycle issues
- ✅ Search inputs maintain focus indefinitely
- ✅ Cleaner codebase with separated concerns
- ✅ Easier to test and debug individual admin features
- ✅ Better performance (components not recreated per render)

---

### Build Verification
**Frontend Build**: ✅ Compiled successfully with zero warnings
- No unused imports or variables
- All dependencies properly managed
- Custom CSS properly linked
- Icons and components correctly exported

---

**Last Updated**: April 10, 2026 — Admin Panel Focus & Feedback Enhancements
**System Status**: Active Development
**Version**: 1.1.0