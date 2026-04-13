This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitignore
chrono-dashboard/package.json
chrono-dashboard/postcss.config.js
chrono-dashboard/public/favicon.ico
chrono-dashboard/public/index.html
chrono-dashboard/public/logo192.png
chrono-dashboard/public/logo512.png
chrono-dashboard/public/manifest.json
chrono-dashboard/public/robots.txt
chrono-dashboard/README.md
chrono-dashboard/src/App.css
chrono-dashboard/src/App.js
chrono-dashboard/src/components/admin/FeedbackSection.js
chrono-dashboard/src/components/admin/UsersList.js
chrono-dashboard/src/components/AdminSidebar.js
chrono-dashboard/src/components/TeacherSidebar.js
chrono-dashboard/src/context/AuthContext.js
chrono-dashboard/src/index.css
chrono-dashboard/src/index.js
chrono-dashboard/src/logo.svg
chrono-dashboard/src/pages/AdminPanel.js
chrono-dashboard/src/pages/ClassResults.js
chrono-dashboard/src/pages/Dashboard.js
chrono-dashboard/src/pages/LoginPage.js
chrono-dashboard/src/pages/ProfileSettings.js
chrono-dashboard/src/pages/QuestionManagement.js
chrono-dashboard/src/pages/RegisterPage.js
chrono-dashboard/src/reportWebVitals.js
chrono-dashboard/src/setupTests.js
chronoquest-api/package.json
chronoquest-api/reports/jest-results.xml
chronoquest-api/server.js
chronoquest-api/src/config/db.js
chronoquest-api/src/controllers/adminController.js
chronoquest-api/src/controllers/analyticsController.js
chronoquest-api/src/controllers/authController.js
chronoquest-api/src/controllers/questionController.js
chronoquest-api/src/controllers/studentController.js
chronoquest-api/src/middleware/adminMiddleware.js
chronoquest-api/src/middleware/authMiddleware.js
chronoquest-api/src/models/activityLogModel.js
chronoquest-api/src/models/feedbackModel.js
chronoquest-api/src/models/questionModel.js
chronoquest-api/src/models/scoreModel.js
chronoquest-api/src/models/studentModel.js
chronoquest-api/src/models/systemSettingsModel.js
chronoquest-api/src/models/teacherModel.js
chronoquest-api/src/routes/adminRoutes.js
chronoquest-api/src/routes/apiRoutes.js
chronoquest-api/src/routes/authRoutes.js
chronoquest-api/src/routes/questionRoutes.js
chronoquest-api/src/tests/admin.test.js
chronoquest-api/src/tests/auth.test.js
chronoquest-api/src/tests/generateCode.test.js
chronoquest-api/src/tests/student.test.js
chronoquest-api/src/tests/teacher.test.js
chronoquest-api/src/utils/generateCode.js
chronoquest-api/vercel.json
```

# Files

## File: .gitignore
```
# --- CHRONOQUEST MASTER GITIGNORE ---

# 1. Dependencies
# Ignore node_modules in root, chrono-dashboard, and chronoquest-api
node_modules/
**/node_modules/
.pnp
.pnp.js

# 2. Security (CRITICAL)
# Protects your MongoDB URI and JWT_SECRET
.env
**/.env
*.env
.env*.local

# 3. Production & Build Artifacts
# Frontend build folders
build/
dist/
out/
# Backend/Next.js artifacts
.next/
bin/
obj/

# 4. Logs & Debugging
npm-debug.log*
yarn-debug.log*
yarn-error.log*
*.log
logs/
pids/
*.pid
*.seed
*.flare

# 5. Editor & OS Specific
.vscode/
.idea/
.DS_Store
Thumbs.db
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# 6. Testing
coverage/
*.lcov
```

## File: chrono-dashboard/package.json
```json
{
  "name": "chrono-dashboard",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/dom": "^10.4.1",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.2",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.14.0",
    "lucide-react": "^1.7.0",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-hot-toast": "^2.6.0",
    "react-router-dom": "^7.14.0",
    "react-scripts": "5.0.1",
    "recharts": "^3.8.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "set PORT=3001 && react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

## File: chrono-dashboard/postcss.config.js
```javascript
module.exports = {
  plugins: {
    autoprefixer: {},
  },
}
```

## File: chrono-dashboard/public/index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```

## File: chrono-dashboard/public/manifest.json
```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

## File: chrono-dashboard/public/robots.txt
```
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:
```

## File: chrono-dashboard/README.md
```markdown
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
```

## File: chrono-dashboard/src/App.css
```css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Archive Feature Styles */
.archived-section-btn {
  opacity: 0.7;
  background-color: rgba(71, 85, 105, 0.05);
}

.archived-section-btn:hover {
  opacity: 0.9;
}
```

## File: chrono-dashboard/src/App.js
```javascript
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
```

## File: chrono-dashboard/src/components/admin/FeedbackSection.js
```javascript
import React from 'react';
import { MessageSquare, ChevronDown, ChevronUp, CheckCircle, Clock, FileText } from 'lucide-react';

const FeedbackSection = ({
    feedbackSearch,
    setFeedbackSearch,
    filteredFeedback,
    feedback,
    expandedFeedback,
    setExpandedFeedback
}) => {
    const getPriorityColor = (priority) => {
        const colors = {
            critical: 'badge-critical',
            high: 'badge-high',
            medium: 'badge-medium',
            low: 'badge-low'
        };
        return colors[priority] || 'badge-default';
    };

    const getPriorityLabel = (priority) => {
        return priority ? priority.charAt(0).toUpperCase() + priority.slice(1) : 'Normal';
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const formatDateTime = (date) => {
        return new Date(date).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="space-y-8">
            <div className="flex-between">
                <div>
                    <h2 className="page-title">Feedback & Support</h2>
                    <p className="page-subtitle">Instructor feedback and support tickets</p>
                </div>
                <input
                    type="text"
                    placeholder="Search feedback..."
                    value={feedbackSearch}
                    onChange={(e) => setFeedbackSearch(e.target.value)}
                    className="form-input-sm"
                    style={{ width: '240px' }}
                />
            </div>

            <div className="card">
                <h3 className="section-title" style={{ marginBottom: '24px' }}>
                    Tickets ({filteredFeedback.length}{feedbackSearch ? ` of ${feedback.length}` : ''})
                </h3>
                <div className="space-y-4">
                    {filteredFeedback.length === 0 ? (
                        <div className="empty-state">
                            <MessageSquare className="empty-state-icon" size={48} />
                            <p className="empty-state-text">No feedback found</p>
                        </div>
                    ) : filteredFeedback.map(fb => {
                        const isExpanded = expandedFeedback === fb._id;
                        const hasResponse = fb.response && fb.response.respondedAt;
                        const hasAttachments = fb.attachments && fb.attachments.length > 0;

                        return (
                            <div
                                key={fb._id}
                                className="feedback-item"
                                style={{
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    transition: 'all 0.2s ease-in-out'
                                }}
                            >
                                {/* Header - Always Visible */}
                                <div
                                    style={{
                                        padding: '16px',
                                        backgroundColor: '#f8fafc',
                                        borderBottom: isExpanded ? '1px solid #e2e8f0' : 'none',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.2s ease'
                                    }}
                                    onClick={() => setExpandedFeedback(isExpanded ? null : fb._id)}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                    {fb.title}
                                                </h4>
                                                {hasResponse && (
                                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 600, color: '#059669', backgroundColor: '#d1fae5', padding: '2px 8px', borderRadius: '4px', flexShrink: 0 }}>
                                                        <CheckCircle size={12} /> Responded
                                                    </span>
                                                )}
                                            </div>
                                            <p style={{ fontSize: '0.875rem', color: '#64748b', margin: '0 0 8px 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                {fb.submittedBy?.name || fb.submittedBy?.email || '—'} • {formatDate(fb.createdAt)}
                                            </p>
                                        </div>

                                        {/* Badge Section */}
                                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                                            {fb.priority && (
                                                <span className={`badge ${getPriorityColor(fb.priority)}`} style={{ fontSize: '0.75rem' }}>
                                                    {getPriorityLabel(fb.priority)}
                                                </span>
                                            )}
                                            <span className={`badge ${fb.type === 'bug_report' ? 'badge-red' : fb.type === 'feature_request' ? 'badge-blue' : 'badge-amber'}`} style={{ fontSize: '0.75rem' }}>
                                                {fb.type?.replace(/_/g, ' ').charAt(0).toUpperCase() + fb.type?.replace(/_/g, ' ').slice(1) || 'Feedback'}
                                            </span>
                                            <span className={`badge ${fb.status === 'open' ? 'badge-open' : fb.status === 'in_progress' ? 'badge-warning' : 'badge-resolved'}`} style={{ fontSize: '0.75rem' }}>
                                                {fb.status?.replace(/_/g, ' ').toUpperCase()}
                                            </span>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setExpandedFeedback(isExpanded ? null : fb._id);
                                                }}
                                                style={{
                                                    background: 'none',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    color: '#64748b',
                                                    padding: '4px',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    flexShrink: 0
                                                }}
                                            >
                                                {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                {isExpanded && (
                                    <div style={{ padding: '16px', backgroundColor: '#fafbfc' }}>
                                        {/* Full Description */}
                                        <div style={{ marginBottom: '16px' }}>
                                            <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Description:</p>
                                            <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                                                {fb.description}
                                            </p>
                                        </div>

                                        {/* Metadata Row */}
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #e2e8f0' }}>
                                            <div>
                                                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>Submitted By</p>
                                                <p style={{ fontSize: '0.875rem', color: '#1e293b', margin: 0 }}>{fb.submittedBy?.name || '—'}</p>
                                                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '2px 0 0 0' }}>{fb.submittedBy?.email || '—'}</p>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>Created</p>
                                                <p style={{ fontSize: '0.875rem', color: '#1e293b', margin: 0 }}>{formatDate(fb.createdAt)}</p>
                                            </div>
                                            {fb.updatedAt && fb.updatedAt !== fb.createdAt && (
                                                <div>
                                                    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>Last Updated</p>
                                                    <p style={{ fontSize: '0.875rem', color: '#1e293b', margin: 0 }}>{formatDate(fb.updatedAt)}</p>
                                                </div>
                                            )}
                                            {hasAttachments && (
                                                <div>
                                                    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>Attachments</p>
                                                    <p style={{ fontSize: '0.875rem', color: '#1e293b', margin: 0, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                        <FileText size={14} /> {fb.attachments.length} file{fb.attachments.length !== 1 ? 's' : ''}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Admin Response */}
                                        {hasResponse ? (
                                            <div
                                                style={{
                                                    backgroundColor: '#f0fdf4',
                                                    border: '1px solid #d1fae5',
                                                    borderRadius: '6px',
                                                    padding: '12px',
                                                    marginTop: '12px'
                                                }}
                                            >
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                                    <CheckCircle size={16} style={{ color: '#059669' }} />
                                                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#059669', margin: 0 }}>
                                                        Response from {fb.response.admin?.name || 'Admin'}
                                                    </p>
                                                </div>
                                                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '4px 0', fontStyle: 'italic' }}>
                                                    {formatDateTime(fb.response.respondedAt)}
                                                </p>
                                                <p style={{ fontSize: '0.875rem', color: '#047857', lineHeight: '1.5', marginTop: '8px', marginBottom: 0 }}>
                                                    {fb.response.message}
                                                </p>
                                            </div>
                                        ) : (
                                            <div
                                                style={{
                                                    backgroundColor: '#fef3c7',
                                                    border: '1px solid #fcd34d',
                                                    borderRadius: '6px',
                                                    padding: '12px',
                                                    marginTop: '12px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px'
                                                }}
                                            >
                                                <Clock size={16} style={{ color: '#d97706' }} />
                                                <p style={{ fontSize: '0.875rem', color: '#92400e', margin: 0 }}>
                                                    Awaiting response
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FeedbackSection;
```

## File: chrono-dashboard/src/components/admin/UsersList.js
```javascript
import React from 'react';
import { Trash2, Edit2, AlertCircle } from 'lucide-react';

const UsersList = ({
    searchTerm,
    setSearchTerm,
    users,
    filteredTeachers,
    filteredStudents,
    handleEditUser,
    handleDeactivateUser,
    handleDeleteUser
}) => {
    return (
        <div className="space-y-8">
            <div className="flex-between">
                <h2 className="page-title">User Management</h2>
                <input
                    type="text"
                    placeholder="Search by name, email, or class code..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-input-sm"
                    style={{ width: '280px' }}
                />
            </div>

            <div className="card">
                <h3 className="section-title" style={{ marginBottom: '24px' }}>
                    Instructors ({filteredTeachers.length}{searchTerm ? ` of ${users.teachers?.length || 0}` : ''})
                </h3>
                <div className="table-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Classes</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTeachers.length === 0 ? (
                                <tr><td colSpan={5} style={{ textAlign: 'center', color: '#94a3b8', padding: '24px' }}>No instructors match your search</td></tr>
                            ) : filteredTeachers.map(t => (
                                <tr key={t._id}>
                                    <td className="table-cell-name">{t.name}</td>
                                    <td className="table-cell-sub">{t.email}</td>
                                    <td className="table-cell-sub">{t.totalSections}</td>
                                    <td>
                                        <span className={`badge ${t.isActive ? 'badge-active' : 'badge-inactive'}`}>
                                            {t.isActive ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="table-actions">
                                            <button onClick={() => handleEditUser(t, 'teacher')} className="btn-icon btn-icon-blue" title="Edit"><Edit2 size={16} /></button>
                                            <button onClick={() => handleDeactivateUser(t._id, 'teacher')} className="btn-icon btn-icon-yellow" title="Deactivate"><AlertCircle size={16} /></button>
                                            <button onClick={() => handleDeleteUser(t._id, 'teacher')} className="btn-icon btn-icon-red" title="Delete"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card">
                <h3 className="section-title" style={{ marginBottom: '24px' }}>
                    Learners ({filteredStudents.length}{searchTerm ? ` of ${users.students?.length || 0}` : ''})
                </h3>
                <div className="table-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Class Code</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.length === 0 ? (
                                <tr><td colSpan={4} style={{ textAlign: 'center', color: '#94a3b8', padding: '24px' }}>No learners match your search</td></tr>
                            ) : filteredStudents.map(s => (
                                <tr key={s._id}>
                                    <td className="table-cell-name">{s.name}</td>
                                    <td className="table-cell-sub">{s.email}</td>
                                    <td className="table-cell-mono">{s.classCode}</td>
                                    <td>
                                        <div className="table-actions">
                                            <button onClick={() => handleEditUser(s, 'student')} className="btn-icon btn-icon-blue" title="Edit"><Edit2 size={16} /></button>
                                            <button onClick={() => handleDeleteUser(s._id, 'student')} className="btn-icon btn-icon-red" title="Delete"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UsersList;
```

## File: chrono-dashboard/src/components/AdminSidebar.js
```javascript
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LayoutDashboard, Users, LogOut, MessageSquare, Settings, ArrowLeft, BookOpen } from 'lucide-react';

const AdminSidebar = ({ activeTab, setActiveTab }) => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const menuItems = [
        { id: 'dashboard', name: 'Dashboard', icon: <LayoutDashboard size={16} /> },
        { id: 'users', name: 'Users Management', icon: <Users size={16} /> },
        { id: 'questions', name: 'Questions', icon: <BookOpen size={16} /> },
        { id: 'feedback', name: 'Feedback', icon: <MessageSquare size={16} /> },
        { id: 'settings', name: 'Settings', icon: <Settings size={16} /> },
    ];

    const navBtn = (id) =>
        `sidebar-btn${activeTab === id ? ' active' : ''}`;

    return (
        <aside className="sidebar">
            <button onClick={() => navigate('/dashboard')} className="sidebar-back-btn">
                <ArrowLeft size={14} />
                <span>Back</span>
            </button>

            <h1 className="sidebar-title">Admin</h1>

            <nav className="sidebar-nav">
                <div>
                    <p className="sidebar-section-label">Main</p>
                    <div className="sidebar-nav-group">
                        {menuItems.slice(0, 2).map(item => (
                            <button key={item.id} onClick={() => setActiveTab(item.id)} className={navBtn(item.id)}>
                                {item.icon} {item.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="sidebar-section-label">Content</p>
                    <div className="sidebar-nav-group">
                        {menuItems.slice(2, 3).map(item => (
                            <button key={item.id} onClick={() => setActiveTab(item.id)} className={navBtn(item.id)}>
                                {item.icon} {item.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="sidebar-section-label">Communication</p>
                    <div className="sidebar-nav-group">
                        {menuItems.slice(3, 4).map(item => (
                            <button key={item.id} onClick={() => setActiveTab(item.id)} className={navBtn(item.id)}>
                                {item.icon} {item.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="sidebar-section-label">System</p>
                    <div className="sidebar-nav-group">
                        {menuItems.slice(4).map(item => (
                            <button key={item.id} onClick={() => setActiveTab(item.id)} className={navBtn(item.id)}>
                                {item.icon} {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            <button onClick={logout} className="sidebar-logout-btn">
                <LogOut size={16} /> Sign Out
            </button>
        </aside>
    );
};

export default AdminSidebar;
```

## File: chrono-dashboard/src/components/TeacherSidebar.js
```javascript
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LayoutDashboard, BarChart3, LogOut, Settings, MessageSquare, Shield } from 'lucide-react';

const TeacherSidebar = ({ activeTab, setActiveTab }) => {
    const { teacher } = useContext(AuthContext);
    const navigate = useNavigate();

    const navBtn = (id) =>
        `sidebar-btn${activeTab === id ? ' active' : ''}`;

    return (
        <aside className="sidebar">
            <h1 className="sidebar-title">Instructor</h1>

            <nav className="sidebar-nav">
                <div>
                    <p className="sidebar-section-label">Main</p>
                    <div className="sidebar-nav-group">
                        <button onClick={() => setActiveTab('overview')} className={navBtn('overview')}>
                            <LayoutDashboard size={16} /> Overview
                        </button>
                        <button onClick={() => setActiveTab('results')} className={navBtn('results')}>
                            <BarChart3 size={16} /> Class Results
                        </button>
                    </div>
                </div>

                <div>
                    <p className="sidebar-section-label">Account</p>
                    <div className="sidebar-nav-group">
                        <button onClick={() => setActiveTab('settings')} className={navBtn('settings')}>
                            <Settings size={16} /> Profile Settings
                        </button>
                        <button onClick={() => setActiveTab('feedback')} className={navBtn('feedback')}>
                            <MessageSquare size={16} /> Send Feedback
                        </button>
                    </div>
                </div>

                {teacher?.role === 'admin' && (
                    <div>
                        <p className="sidebar-section-label">Administration</p>
                        <div className="sidebar-nav-group">
                            <button onClick={() => navigate('/admin')} className="sidebar-btn-admin">
                                <Shield size={16} /> Admin Portal
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            <button
                onClick={() => { localStorage.clear(); window.location.href = '/login'; }}
                className="sidebar-logout-btn"
            >
                <LogOut size={16} /> Sign Out
            </button>
        </aside>
    );
};

export default TeacherSidebar;
```

## File: chrono-dashboard/src/context/AuthContext.js
```javascript
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [teacher, setTeacher] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedTeacher = localStorage.getItem('teacherData');
        const token = localStorage.getItem('teacherToken');

        if (savedTeacher && savedTeacher !== "undefined" && token) {
            try {
                setTeacher(JSON.parse(savedTeacher));
            } catch (e) {
                console.error("Failed to parse teacher data", e);
                localStorage.removeItem('teacherData');
            }
        }

        setLoading(false);
    }, []);

    const login = (data, token) => {
        if (!data || !token) return;
        localStorage.setItem('teacherToken', token);
        localStorage.setItem('teacherData', JSON.stringify(data));
        setTeacher(data);
    };

    const logout = () => {
        localStorage.removeItem('teacherToken');
        localStorage.removeItem('teacherData');
        setTeacher(null);
        window.location.href = '/';
    };

    return (
        <AuthContext.Provider value={{ teacher, setTeacher, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
```

## File: chrono-dashboard/src/index.css
```css
/* ========================================
   CHRONOQUEST GLOBAL STYLES
   Replaces Tailwind CSS
   ======================================== */

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,
body,
#root {
    height: 100%;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f8fafc;
    color: #0f172a;
    -webkit-font-smoothing: antialiased;
}

/* ========================================
   LAYOUT
   ======================================== */

.page {
    min-height: 100vh;
    background-color: #f8fafc;
    color: #0f172a;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.page-centered {
    min-height: 100vh;
    background-color: #f8fafc;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
}

.main-content {
    margin-left: 256px;
}

.main-padded {
    margin-left: 256px;
    padding: 48px;
}

.content-area {
    padding: 48px;
}

/* ========================================
   SIDEBAR
   ======================================== */

.sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 256px;
    background-color: #ffffff;
    border-right: 1px solid #e2e8f0;
    display: flex;
    flex-direction: column;
    z-index: 40;
    padding: 24px;
}

.sidebar-title {
    font-size: 1.5rem;
    font-weight: 900;
    color: #0f172a;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    margin-bottom: 40px;
}

.sidebar-back-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 32px;
    color: #94a3b8;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s;
}

.sidebar-back-btn:hover {
    color: #475569;
}

.sidebar-nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.sidebar-section-label {
    font-size: 0.5625rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #94a3b8;
    margin-bottom: 12px;
    padding: 0 8px;
}

.sidebar-nav-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.sidebar-btn {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 16px;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: background-color 0.2s, color 0.2s;
    background: none;
    border: none;
    cursor: pointer;
    color: #94a3b8;
}

.sidebar-btn:hover {
    color: #475569;
}

.sidebar-btn.active {
    background-color: #0f172a;
    color: #ffffff;
}

.sidebar-btn-admin {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 16px;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #059669;
    background: none;
    border: 1px solid #a7f3d0;
    cursor: pointer;
    transition: background-color 0.2s;
}

.sidebar-btn-admin:hover {
    background-color: #ecfdf5;
}

.sidebar-logout-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    color: #cbd5e1;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: color 0.2s, background-color 0.2s;
    border-radius: 16px;
    border-top: 1px solid #e2e8f0;
    margin-top: auto;
    padding-top: 24px;
    background: none;
    border: none;
    cursor: pointer;
    border-top: 1px solid #e2e8f0;
}

.sidebar-logout-btn:hover {
    color: #64748b;
    background-color: #f8fafc;
}

/* ========================================
   AUTH PAGES (Login / Register)
   ======================================== */

.auth-wrapper {
    width: 100%;
    max-width: 420px;
}

.auth-brand {
    text-align: center;
    margin-bottom: 64px;
}

.auth-brand-title {
    font-size: 3rem;
    font-weight: 900;
    color: #0f172a;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    margin-bottom: 8px;
}

.auth-brand-subtitle {
    color: #94a3b8;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
}

.auth-card {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 40px;
}

.auth-card-title {
    font-size: 1.5rem;
    font-weight: 900;
    color: #0f172a;
    margin-bottom: 40px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: -0.05em;
}

.auth-footer {
    margin-top: 40px;
    padding-top: 40px;
    border-top: 1px solid #f1f5f9;
    text-align: center;
}

.auth-footer-text {
    color: #94a3b8;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.auth-footer-link {
    color: #0f172a;
    font-weight: 900;
    text-decoration: none;
}

.auth-footer-link:hover {
    color: #334155;
}

.auth-security-note {
    margin-top: 40px;
    text-align: center;
}

.auth-security-text {
    font-size: 0.5625rem;
    font-weight: 700;
    color: #cbd5e1;
    text-transform: uppercase;
    letter-spacing: 0.2em;
}

/* ========================================
   FORMS
   ======================================== */

.form-stack {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-label {
    display: block;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #94a3b8;
    margin-bottom: 16px;
}

.form-label-sm {
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #475569;
    margin-bottom: 8px;
}

.form-input {
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 16px 24px;
    font-weight: 600;
    color: #0f172a;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s;
}

.form-input:focus {
    border-color: #94a3b8;
}

.form-input:invalid {
    border-color: #ef4444;
}

.form-input-error {
    border-color: #ef4444 !important;
}

.form-error-text {
    color: #ef4444;
    font-size: 0.75rem;
    font-weight: 600;
    margin-top: 8px;
    display: block;
}

.form-input::placeholder {
    color: #cbd5e1;
}

.form-input-sm {
    width: 100%;
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 8px 16px;
    font-weight: 600;
    color: #334155;
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.2s;
}

.form-input-sm:focus {
    border-color: #94a3b8;
}

.form-input-sm::placeholder {
    color: #94a3b8;
}

.form-input-number {
    padding: 8px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.875rem;
    outline: none;
    width: 96px;
}

.form-input-number:focus {
    border-color: #94a3b8;
}

.form-input-number:disabled {
    background-color: #f1f5f9;
    cursor: not-allowed;
}

.form-select {
    width: 100%;
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 12px 16px;
    font-weight: 600;
    color: #334155;
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.2s;
}

.form-select:focus {
    border-color: #94a3b8;
}

.form-select-lg {
    width: 100%;
    padding: 12px 20px;
    border: 2px solid #f1f5f9;
    border-radius: 12px;
    font-weight: 600;
    color: #334155;
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.2s;
    background-color: #ffffff;
}

.form-select-lg:focus {
    border-color: #4f46e5;
}

.form-textarea {
    width: 100%;
    padding: 12px 20px;
    border: 2px solid #f1f5f9;
    border-radius: 12px;
    font-weight: 600;
    color: #334155;
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.2s;
    resize: none;
    background-color: #ffffff;
}

.form-textarea:focus {
    border-color: #4f46e5;
}

.form-textarea::placeholder {
    color: #cbd5e1;
}

.form-textarea-sm {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    font-weight: 600;
    color: #1e293b;
    font-size: 0.875rem;
    background-color: #f8fafc;
    outline: none;
    resize: none;
}

.form-textarea-sm:focus {
    box-shadow: 0 0 0 2px #cbd5e1;
}

.input-password-wrapper {
    position: relative;
}

.input-password-wrapper .form-input {
    padding-right: 48px;
}

.input-password-wrapper .form-input-sm {
    padding-right: 48px;
}

.password-toggle {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #94a3b8;
    transition: color 0.2s;
    display: flex;
    align-items: center;
}

.password-toggle:hover {
    color: #475569;
}

/* ========================================
   BUTTONS
   ======================================== */

.btn-primary {
    width: 100%;
    background-color: #0f172a;
    color: #ffffff;
    font-weight: 900;
    padding: 16px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: background-color 0.2s;
    margin-top: 32px;
}

.btn-primary:hover {
    background-color: #1e293b;
}

.btn-primary:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.btn-dark {
    background-color: #0f172a;
    color: #ffffff;
    font-weight: 900;
    padding: 12px 24px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: background-color 0.2s;
}

.btn-dark:hover {
    background-color: #1e293b;
}

.btn-dark:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.btn-indigo {
    background-color: #4f46e5;
    color: #ffffff;
    font-weight: 900;
    padding: 16px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: background-color 0.2s, transform 0.1s;
    box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.3);
}

.btn-indigo:hover {
    background-color: #4338ca;
}

.btn-indigo:active {
    transform: scale(0.97);
}

.btn-indigo:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-indigo-full {
    width: 100%;
    background-color: #4f46e5;
    color: #ffffff;
    font-weight: 900;
    padding: 16px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: background-color 0.2s, transform 0.1s;
    box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.3);
}

.btn-indigo-full:hover {
    background-color: #4338ca;
}

.btn-indigo-full:active {
    transform: scale(0.97);
}

.btn-indigo-full:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-emerald {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #059669;
    color: #ffffff;
    font-weight: 900;
    padding: 10px 20px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: background-color 0.2s;
}

.btn-emerald:hover {
    background-color: #047857;
}

.btn-red {
    background-color: #dc2626;
    color: #ffffff;
    font-weight: 900;
    padding: 12px 40px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
}

.btn-red:hover {
    background-color: #b91c1c;
}

.btn-red:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.btn-ghost {
    background: none;
    border: none;
    color: #94a3b8;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: color 0.2s;
    padding: 0;
}

.btn-ghost:hover {
    color: #475569;
}

.btn-outline {
    background: none;
    border: 1px solid #e2e8f0;
    color: #475569;
    font-weight: 900;
    padding: 12px 24px;
    border-radius: 16px;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: background-color 0.2s;
}

.btn-outline:hover {
    background-color: #f8fafc;
}

.btn-outline-dark {
    border: 1px solid #334155;
    background: none;
    padding: 12px 24px;
    border-radius: 16px;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    color: #334155;
    transition: background-color 0.2s;
}

.btn-outline-dark:hover {
    background-color: #f1f5f9;
}

.btn-outline-dark:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-save {
    background-color: #0f172a;
    color: #ffffff;
    font-weight: 900;
    padding: 12px 40px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
}

.btn-save:hover {
    background-color: #1e293b;
}

.btn-save:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.btn-icon {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s, color 0.2s;
}

.btn-icon-blue {
    color: #2563eb;
}

.btn-icon-blue:hover {
    color: #1d4ed8;
    background-color: #eff6ff;
}

.btn-icon-yellow {
    color: #ca8a04;
}

.btn-icon-yellow:hover {
    color: #a16207;
    background-color: #fefce8;
}

.btn-icon-red {
    color: #dc2626;
}

.btn-icon-red:hover {
    color: #b91c1c;
    background-color: #fef2f2;
}

.btn-icon-slate {
    color: #94a3b8;
}

.btn-icon-slate:hover {
    color: #334155;
    background-color: #f1f5f9;
}

/* ========================================
   CARDS
   ======================================== */

.card {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 32px;
}

.card-lg {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 40px;
}

.stat-card {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 32px;
}

.stat-card-label {
    font-size: 0.625rem;
    font-weight: 700;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 12px;
}

.stat-card-value {
    font-size: 2.5rem;
    font-weight: 900;
    color: #0f172a;
}

.stat-card-value-accent {
    font-size: 2.5rem;
    font-weight: 900;
}

.stat-card-icon-row {
    display: flex;
    align-items: flex-end;
    gap: 16px;
}

/* ========================================
   LEADERBOARD
   ======================================== */

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e2e8f0;
}

.card-title {
    font-size: 1rem;
    font-weight: 900;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: -0.02em;
}

.leaderboard-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-height: 600px;
    overflow-y: auto;
}

.leaderboard-item {
    display: grid;
    grid-template-columns: 40px 1fr 60px;
    align-items: center;
    gap: 16px;
    padding: 12px 16px;
    background-color: #f8fafc;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    transition: background-color 0.2s, border-color 0.2s;
}

.leaderboard-item:hover {
    background-color: #f1f5f9;
    border-color: #cbd5e1;
}

.leaderboard-rank {
    font-size: 1.25rem;
    font-weight: 900;
    color: #0f172a;
    text-align: center;
}

.leaderboard-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
}

.leaderboard-name {
    font-size: 0.875rem;
    font-weight: 700;
    color: #0f172a;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.leaderboard-code {
    font-size: 0.75rem;
    color: #94a3b8;
    font-weight: 600;
}

.leaderboard-score {
    font-size: 1rem;
    font-weight: 900;
    color: #2563eb;
    text-align: right;
}

/* ========================================
   PAGE HEADERS
   ======================================== */

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;
}

.page-title {
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: -0.05em;
    color: #0f172a;
    text-transform: uppercase;
}

.page-subtitle {
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #94a3b8;
    margin-top: 8px;
}

.section-title {
    font-size: 1.25rem;
    font-weight: 900;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: -0.02em;
}

.section-subtitle {
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #94a3b8;
    margin-top: 4px;
}

/* ========================================
   GRID LAYOUTS
   ======================================== */

.grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

.grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

@media (max-width: 768px) {

    .grid-3,
    .grid-4 {
        grid-template-columns: 1fr;
    }

    .grid-2 {
        grid-template-columns: 1fr;
    }
}

/* ========================================
   TABLES
   ======================================== */

.table-wrapper {
    overflow-x: auto;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
}

.table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

.table thead {
    background-color: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
}

.table th {
    padding: 16px 32px;
    font-weight: 700;
    font-size: 0.625rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.15em;
}

.table th-right {
    padding: 16px 32px;
    font-weight: 700;
    font-size: 0.625rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    text-align: right;
}

.table tbody tr {
    border-bottom: 1px solid #f1f5f9;
    transition: background-color 0.15s;
}

.table tbody tr:hover {
    background-color: #f8fafc;
}

.table td {
    padding: 20px 32px;
}

.table td-right {
    padding: 20px 32px;
    text-align: right;
}

.table-cell-name {
    font-weight: 700;
    color: #0f172a;
}

.table-cell-sub {
    font-size: 0.875rem;
    color: #475569;
}

.table-cell-mono {
    font-family: monospace;
    font-size: 0.875rem;
    font-weight: 700;
    color: #475569;
}

.table-cell-meta {
    font-size: 0.75rem;
    color: #64748b;
    font-weight: 600;
}

.table-actions {
    display: flex;
    gap: 8px;
    align-items: center;
}

/* ========================================
   BADGES / PILLS
   ======================================== */

.badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 700;
}

.badge-active {
    background-color: #d1fae5;
    color: #065f46;
}

.badge-inactive {
    background-color: #fee2e2;
    color: #991b1b;
}

.badge-amber {
    background-color: #fef3c7;
    color: #92400e;
}

.badge-blue {
    background-color: #dbeafe;
    color: #1e40af;
}

.badge-red {
    background-color: #fee2e2;
    color: #991b1b;
}

.badge-emerald {
    background-color: #d1fae5;
    color: #065f46;
}

.badge-open {
    background-color: #fef3c7;
    color: #92400e;
}

.badge-resolved {
    background-color: #d1fae5;
    color: #065f46;
}

/* ========================================
   ALERTS
   ======================================== */

.alert-error {
    background-color: #fef2f2;
    border: 1px solid #fecaca;
    color: #b91c1c;
    padding: 12px 16px;
    border-radius: 16px;
    font-size: 0.875rem;
    font-weight: 600;
}

.alert-success {
    background-color: #f0fdf4;
    border: 1px solid #bbf7d0;
    color: #15803d;
    padding: 12px 16px;
    border-radius: 16px;
    font-size: 0.875rem;
    font-weight: 600;
}

.alert-info {
    background-color: #eff6ff;
    border: 1px solid #bfdbfe;
    padding: 24px;
    border-radius: 16px;
    color: #475569;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.6;
}

/* ========================================
   MODALS
   ======================================== */

.modal-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(4px);
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
}

.modal {
    background-color: #ffffff;
    border-radius: 40px;
    padding: 40px;
    width: 100%;
    max-width: 448px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.modal-lg {
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 640px;
    max-height: 90vh;
    overflow-y: auto;
}

.modal-md {
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 32px;
    width: 100%;
    max-width: 448px;
}

.modal-title {
    font-size: 1.5rem;
    font-weight: 900;
    color: #1e293b;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
}

.modal-subtitle {
    color: #64748b;
    font-size: 0.875rem;
    font-weight: 700;
    margin-bottom: 24px;
}

.modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 32px;
    border-bottom: 1px solid #f1f5f9;
}

.modal-body {
    padding: 24px 32px;
}

.modal-input {
    width: 100%;
    padding: 16px 20px;
    border-radius: 12px;
    border: 2px solid #f1f5f9;
    margin-bottom: 32px;
    outline: none;
    font-weight: 900;
    color: #334155;
    font-size: 1rem;
    transition: border-color 0.2s;
}

.modal-input:focus {
    border-color: #4f46e5;
}

.modal-input::placeholder {
    color: #cbd5e1;
}

.modal-actions {
    display: flex;
    gap: 16px;
}

/* ========================================
   SECTION SELECTOR (Dashboard)
   ======================================== */

.section-panel {
    background-color: #ffffff;
    padding: 16px;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
}

.section-panel-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
}

.section-panel-label {
    font-size: 0.75rem;
    font-weight: 700;
    color: #475569;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.section-panel-count {
    font-size: 0.75rem;
    font-weight: 700;
    color: #94a3b8;
}

.section-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.section-chip {
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: #f8fafc;
    border-radius: 16px;
    padding: 4px;
    border: 1px solid #e2e8f0;
    transition: border-color 0.2s;
}

.section-chip:hover {
    border-color: #cbd5e1;
}

.section-chip-btn {
    padding: 8px 16px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: none;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
    color: #64748b;
}

.section-chip-btn:hover {
    color: #334155;
}

.section-chip-btn.active {
    background-color: #f59e0b;
    color: #ffffff;
}

.section-chip-archived .section-chip-btn {
    color: #94a3b8;
}

.section-chip-icon-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    color: #cbd5e1;
    transition: color 0.2s, opacity 0.2s;
    opacity: 0;
    display: flex;
}

.section-chip:hover .section-chip-icon-btn {
    opacity: 1;
}

.section-chip-icon-btn:hover {
    color: #475569;
}

.section-chip-icon-btn-danger:hover {
    color: #ef4444;
}

.archived-toggle-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    cursor: pointer;
    margin-bottom: 12px;
}

.archived-toggle-btn:hover {
    opacity: 0.7;
}

.archived-toggle-label {
    font-size: 0.75rem;
    font-weight: 700;
    color: #475569;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    gap: 8px;
}

.archive-chevron {
    color: #94a3b8;
    transition: transform 0.2s;
}

.archive-chevron.open {
    transform: rotate(180deg);
}

/* ========================================
   ACCESS CODE DISPLAY
   ======================================== */

.access-code-card {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 16px;
    border: 1px solid #fde68a;
}

.access-code-label {
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #94a3b8;
    margin-bottom: 16px;
}

.access-code-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.access-code-text {
    font-size: 3rem;
    font-family: monospace;
    font-weight: 900;
    color: #0f172a;
    letter-spacing: 0.1em;
}

.access-code-copy-btn {
    width: 48px;
    height: 48px;
    background-color: #ffffff;
    border: 1px solid #fcd34d;
    border-radius: 16px;
    color: #0f172a;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
    font-weight: 700;
}

.access-code-copy-btn:hover {
    background-color: #fffbeb;
}

/* ========================================
   EMPTY STATE
   ======================================== */

.empty-state {
    padding: 96px 0;
    text-align: center;
}

.empty-state-icon {
    color: #e2e8f0;
    margin: 0 auto 16px;
}

.empty-state-text {
    color: #94a3b8;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.875rem;
}

.empty-state-sub {
    color: #cbd5e1;
    font-size: 0.75rem;
    margin-top: 4px;
}

/* ========================================
   CLASS RESULTS / LEADERBOARD
   ======================================== */

.view-toggle {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 4px;
    gap: 4px;
}

.view-toggle-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: none;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
    color: #94a3b8;
}

.view-toggle-btn:hover {
    color: #475569;
}

.view-toggle-btn.active {
    background-color: #0f172a;
    color: #ffffff;
}

.rank-row-gold {
    background-color: #fefce8;
    border-color: #fde68a;
}

.rank-row-silver {
    background-color: #f8fafc;
    border-color: #e2e8f0;
}

.rank-row-bronze {
    background-color: #fff7ed;
    border-color: #fed7aa;
}

.rank-row-default {
    background-color: #ffffff;
    border-color: #f1f5f9;
}

.rank-badge {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 900;
}

.rank-badge-gold {
    background-color: #fef3c7;
    color: #92400e;
}

.rank-badge-silver {
    background-color: #e2e8f0;
    color: #334155;
}

.rank-badge-bronze {
    background-color: #fed7aa;
    color: #9a3412;
}

.rank-badge-default {
    background-color: #f1f5f9;
    color: #64748b;
}

/* ========================================
   QUESTION MANAGEMENT
   ======================================== */

.filter-bar {
    background-color: #ffffff;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    padding: 16px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.difficulty-badge-easy {
    background-color: #d1fae5;
    color: #065f46;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.difficulty-badge-medium {
    background-color: #fef3c7;
    color: #92400e;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.difficulty-badge-hard {
    background-color: #fee2e2;
    color: #991b1b;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.difficulty-badge-default {
    background-color: #f1f5f9;
    color: #475569;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.period-badge-precolonial {
    background-color: #f5f0eb;
    color: #57534e;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.period-badge-spanish {
    background-color: #fefce8;
    color: #854d0e;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.period-badge-revolutionary {
    background-color: #fff7ed;
    color: #9a3412;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.period-badge-american {
    background-color: #eff6ff;
    color: #1e40af;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.period-badge-postwar {
    background-color: #faf5ff;
    color: #6b21a8;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.period-badge-default {
    background-color: #f1f5f9;
    color: #475569;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.option-row {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.75rem;
}

.option-row-correct {
    color: #059669;
    font-weight: 900;
}

.option-row-default {
    color: #94a3b8;
    font-weight: 600;
}

.option-label {
    width: 16px;
    flex-shrink: 0;
}

.option-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 120px;
}

.question-answer-option {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 12px;
    border: 1px solid;
    transition: border-color 0.2s, background-color 0.2s;
}

.question-answer-option.selected {
    border-color: #6ee7b7;
    background-color: #f0fdf4;
}

.question-answer-option.unselected {
    border-color: #e2e8f0;
    background-color: #f8fafc;
}

.option-selector-btn {
    flex-shrink: 0;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s;
}

.option-selector-btn.selected {
    color: #059669;
}

.option-selector-btn.unselected {
    color: #cbd5e1;
}

.option-selector-btn.unselected:hover {
    color: #64748b;
}

.option-prefix {
    flex-shrink: 0;
    width: 24px;
    font-size: 0.75rem;
    font-weight: 900;
    text-transform: uppercase;
}

.option-prefix.selected {
    color: #059669;
}

.option-prefix.unselected {
    color: #94a3b8;
}

.option-text-input {
    flex: 1;
    background: transparent;
    font-size: 0.875rem;
    font-weight: 600;
    color: #1e293b;
    border: none;
    outline: none;
}

.option-text-input::placeholder {
    color: #94a3b8;
}

.option-correct-label {
    flex-shrink: 0;
    font-size: 0.75rem;
    font-weight: 900;
    color: #059669;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.pagination {
    display: flex;
    justify-content: center;
    gap: 8px;
}

.pagination-btn {
    padding: 8px 16px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
}

.pagination-btn.active {
    background-color: #0f172a;
    color: #ffffff;
    border: none;
}

.pagination-btn.inactive {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    color: #64748b;
}

.pagination-btn.inactive:hover {
    border-color: #94a3b8;
}

/* ========================================
   ADMIN PANEL - FEEDBACK
   ======================================== */

.feedback-item {
    padding: 20px;
    border: 1px solid #f1f5f9;
    border-radius: 16px;
    transition: background-color 0.15s;
}

.feedback-item:hover {
    background-color: #f8fafc;
}

.feedback-item-body {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
}

.feedback-item-title {
    font-weight: 900;
    color: #0f172a;
}

.feedback-item-desc {
    font-size: 0.875rem;
    color: #475569;
    margin-top: 8px;
}

.feedback-item-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 12px;
}

.feedback-item-badges {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
}

/* ========================================
   ADMIN SETTINGS
   ======================================== */

.settings-row {
    padding: 20px;
    background-color: #f8fafc;
    border: 1px solid #f1f5f9;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: border-color 0.2s;
}

.settings-row:hover {
    border-color: #e2e8f0;
}

.settings-row-label {
    font-weight: 600;
    color: #334155;
    margin-bottom: 4px;
}

.settings-row-desc {
    font-size: 0.75rem;
    color: #94a3b8;
}

/* ========================================
   PROFILE SETTINGS
   ======================================== */

.profile-section-icon {
    padding: 12px;
    border-radius: 16px;
    margin-right: 12px;
}

.profile-section-icon-default {
    background-color: #f1f5f9;
}

.profile-section-icon-danger {
    background-color: #fef2f2;
}

/* ========================================
   UTILITY
   ======================================== */

.divider {
    border: none;
    border-top: 1px solid #f1f5f9;
    margin: 24px 0;
}

.flex-row {
    display: flex;
    align-items: center;
}

.flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-end {
    display: flex;
    justify-content: flex-end;
}

.flex-gap-2 {
    display: flex;
    gap: 8px;
}

.flex-gap-3 {
    display: flex;
    gap: 12px;
}

.flex-gap-4 {
    display: flex;
    gap: 16px;
}

.space-y-4>*+* {
    margin-top: 16px;
}

.space-y-6>*+* {
    margin-top: 24px;
}

.space-y-8>*+* {
    margin-top: 32px;
}

.space-y-10>*+* {
    margin-top: 40px;
}

.mt-2 {
    margin-top: 8px;
}

.mt-4 {
    margin-top: 16px;
}

.mt-6 {
    margin-top: 24px;
}

.text-sm {
    font-size: 0.875rem;
}

.text-xs {
    font-size: 0.75rem;
}

.text-slate-400 {
    color: #94a3b8;
}

.text-slate-500 {
    color: #64748b;
}

.text-slate-600 {
    color: #475569;
}

.text-slate-900 {
    color: #0f172a;
}

.text-emerald-500 {
    color: #10b981;
}

.font-semibold {
    font-weight: 600;
}

.font-bold {
    font-weight: 700;
}

.font-black {
    font-weight: 900;
}

.italic {
    font-style: italic;
}

.no-results {
    padding: 12px 16px;
    font-size: 0.75rem;
    font-weight: 700;
    color: #94a3b8;
    font-style: italic;
}

.section-header-icon-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 32px;
}
```

## File: chrono-dashboard/src/index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
```

## File: chrono-dashboard/src/logo.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/><circle cx="420.9" cy="296.5" r="45.7"/><path d="M520.5 78.1z"/></g></svg>
```

## File: chrono-dashboard/src/pages/ClassResults.js
```javascript
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { BarChart3, Download, ChevronRight } from 'lucide-react';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3000/api/v1';

const ClassResults = ({ sections = [], selectedSection = '', onSectionSelect = () => { } }) => {
    const [activeSection, setActiveSection] = useState(selectedSection);

    const [scores, setScores] = useState([]);
    const [gbLoading, setGbLoading] = useState(false);
    const [gbError, setGbError] = useState('');

    const fetchGradebook = useCallback(async (classCode) => {
        if (!classCode) return;
        setGbLoading(true);
        setGbError('');
        try {
            const token = localStorage.getItem('teacherToken');
            const { data } = await axios.get(`${API_BASE}/analytics/overall`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setScores(data.filter(s => s.classCode === classCode));
        } catch (err) {
            setGbError(err.response?.data?.message || 'Error fetching gradebook');
        } finally {
            setGbLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!activeSection) return;
        fetchGradebook(activeSection);
    }, [activeSection, fetchGradebook]);

    const handleSectionChange = (classCode) => {
        setActiveSection(classCode);
        onSectionSelect(classCode);
    };

    const downloadCSV = () => {
        if (scores.length === 0) return;
        const sectionName = sections.find(s => s.classCode === activeSection)?.sectionName || activeSection;
        const headers = ['Rank', 'Student Name', 'Score', 'Level Reached', 'Submitted'];
        const sorted = [...scores].sort((a, b) => b.score - a.score);
        const rows = sorted.map((s, i) => [
            i + 1,
            `"${s.studentName}"`,
            s.score,
            `"${s.levelReached || ''}"`,
            new Date(s.createdAt).toLocaleDateString(),
        ]);
        const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', `Results_${sectionName}.csv`);
        link.click();
    };

    const currentSectionName =
        sections.find(s => s.classCode === activeSection)?.sectionName || 'Selected Class';

    const EmptyState = ({ icon: Icon, message, sub }) => (
        <div className="empty-state">
            <Icon className="empty-state-icon" size={56} />
            <p className="empty-state-text">{message}</p>
            {sub && <p className="empty-state-sub">{sub}</p>}
        </div>
    );

    return (
        <div className="content-area space-y-8">
            <header className="flex-between">
                <h2 className="page-title">Class Results</h2>
            </header>

            {sections.length > 0 ? (
                <div className="section-panel">
                    <div className="section-chips">
                        {sections.map(sec => (
                            <button
                                key={sec.classCode}
                                onClick={() => handleSectionChange(sec.classCode)}
                                className={`section-chip-btn${activeSection === sec.classCode ? ' active' : ''}`}
                                style={{ background: activeSection === sec.classCode ? '' : '#f8fafc' }}
                            >
                                {sec.sectionName}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="card" style={{ textAlign: 'center' }}>
                    <p className="empty-state-text">No sections yet — create one from the Overview tab</p>
                </div>
            )}

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ padding: '32px', borderBottom: '1px solid #f1f5f9' }} className="flex-between">
                    <div>
                        <h3 className="section-title">Learning Progress</h3>
                        <p className="section-subtitle">
                            {activeSection
                                ? <>Performance for <strong>{currentSectionName}</strong></>
                                : 'Select a class above'
                            }
                        </p>
                    </div>
                    {scores.length > 0 && (
                        <button onClick={downloadCSV} className="btn-emerald">
                            <Download size={14} /> Export CSV
                        </button>
                    )}
                </div>

                {gbLoading ? (
                    <EmptyState icon={BarChart3} message="Loading..." />
                ) : gbError ? (
                    <div style={{ margin: '24px' }} className="alert-error">{gbError}</div>
                ) : !activeSection ? (
                    <EmptyState icon={BarChart3} message="Select a class to view grades" />
                ) : scores.length === 0 ? (
                    <EmptyState icon={BarChart3} message="No learner data found" sub="Scores will appear as students complete assessments" />
                ) : (
                    <div className="table-wrapper" style={{ border: 'none', borderRadius: 0 }}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Learner Name</th>
                                    <th>Score</th>
                                    <th>Level Reached</th>
                                    <th>Submitted</th>
                                    <th style={{ textAlign: 'right' }}>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...scores].sort((a, b) => b.score - a.score).map((s, i) => (
                                    <tr key={i}>
                                        <td className="table-cell-meta">{i + 1}</td>
                                        <td className="table-cell-name">{s.studentName}</td>
                                        <td><span className="badge badge-amber">{s.score}</span></td>
                                        <td className="table-cell-sub">{s.levelReached || '—'}</td>
                                        <td className="table-cell-meta">{s.createdAt ? new Date(s.createdAt).toLocaleDateString() : '—'}</td>
                                        <td style={{ textAlign: 'right' }}>
                                            <ChevronRight size={18} style={{ color: '#cbd5e1', display: 'inline' }} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClassResults;
```

## File: chrono-dashboard/src/pages/QuestionManagement.js
```javascript
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Plus, Edit2, Trash2, X, CheckCircle, Circle } from 'lucide-react';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3000/api/v1';

const PERIODS = [
    'Pre-colonial',
    'Spanish Colonization',
    'Revolutionary',
    'American/Japanese',
    'Post-war',
];

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

const EMPTY_FORM = {
    title: '',
    description: '',
    topic: '',
    period: '',
    difficultyLevel: 'Medium',
    options: ['', '', '', ''],
    correctAnswer: 0,
};

const getDifficultyClass = (level) => {
    switch (level) {
        case 'Easy': return 'difficulty-badge-easy';
        case 'Medium': return 'difficulty-badge-medium';
        case 'Hard': return 'difficulty-badge-hard';
        default: return 'difficulty-badge-default';
    }
};

const getPeriodClass = (period) => {
    const map = {
        'Pre-colonial': 'period-badge-precolonial',
        'Spanish Colonization': 'period-badge-spanish',
        'Revolutionary': 'period-badge-revolutionary',
        'American/Japanese': 'period-badge-american',
        'Post-war': 'period-badge-postwar',
    };
    return map[period] || 'period-badge-default';
};

const QuestionManagement = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterDifficulty, setFilterDifficulty] = useState('');
    const [filterPeriod, setFilterPeriod] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState(EMPTY_FORM);

    const fetchQuestions = useCallback(async (pageNum = 1) => {
        setLoading(true);
        setError('');
        try {
            const params = new URLSearchParams();
            if (searchTerm) params.append('topic', searchTerm);
            if (filterDifficulty) params.append('difficulty', filterDifficulty);
            if (filterPeriod) params.append('period', filterPeriod);
            params.append('page', pageNum);
            params.append('limit', 10);

            const token = localStorage.getItem('teacherToken');
            const { data } = await axios.get(
                `${API_BASE}/questions?${params.toString()}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setQuestions(data.questions);
            setTotalPages(data.pagination.pages);
            setPage(pageNum);
        } catch (err) {
            setError(err.response?.data?.message || 'Error fetching questions');
        } finally {
            setLoading(false);
        }
    }, [searchTerm, filterDifficulty, filterPeriod]);

    useEffect(() => {
        const timer = setTimeout(() => fetchQuestions(1), 300);
        return () => clearTimeout(timer);
    }, [searchTerm, filterDifficulty, filterPeriod, fetchQuestions]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleOptionChange = (index, value) => {
        setFormData(prev => {
            const options = [...prev.options];
            options[index] = value;
            return { ...prev, options };
        });
    };

    const handleCorrectAnswer = (index) => {
        setFormData(prev => ({ ...prev, correctAnswer: index }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!formData.title.trim()) return setError('Question title is required');
        if (!formData.period) return setError('Please select a historical period');
        if (formData.options.some(o => !o.trim())) return setError('All 4 answer options are required');

        try {
            const token = localStorage.getItem('teacherToken');
            const payload = { ...formData, topic: formData.period };

            if (editingId) {
                await axios.patch(`${API_BASE}/questions/${editingId}`, payload, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setSuccess('Question updated successfully');
            } else {
                await axios.post(`${API_BASE}/questions`, payload, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setSuccess('Question created successfully');
            }
            closeModal();
            fetchQuestions(page);
        } catch (err) {
            setError(err.response?.data?.message || 'Error saving question');
        }
    };

    const handleEdit = (question) => {
        setFormData({
            title: question.title || '',
            description: question.description || '',
            topic: question.topic || '',
            period: question.period || question.topic || '',
            difficultyLevel: question.difficultyLevel || 'Medium',
            options: question.options?.length === 4 ? question.options : ['', '', '', ''],
            correctAnswer: question.correctAnswer ?? 0,
        });
        setEditingId(question._id);
        setModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this question?')) return;
        try {
            const token = localStorage.getItem('teacherToken');
            await axios.delete(`${API_BASE}/questions/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setSuccess('Question deleted successfully');
            fetchQuestions(page);
        } catch (err) {
            setError(err.response?.data?.message || 'Error deleting question');
        }
    };

    const handleNewQuestion = () => {
        setFormData(EMPTY_FORM);
        setEditingId(null);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setEditingId(null);
        setFormData(EMPTY_FORM);
        setError('');
    };

    return (
        <div className="content-area space-y-8">
            <header className="flex-between">
                <h2 className="page-title">Question Management</h2>
                <button onClick={handleNewQuestion} className="btn-dark" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Plus size={16} /> New Question
                </button>
            </header>

            {error && <div className="alert-error">{error}</div>}
            {success && <div className="alert-success">{success}</div>}

            <div className="filter-bar">
                <input
                    type="text"
                    placeholder="Search by topic or title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-input-sm"
                    style={{ flex: 1, minWidth: '180px' }}
                />
                <select value={filterPeriod} onChange={(e) => setFilterPeriod(e.target.value)} className="form-select">
                    <option value="">All Periods</option>
                    {PERIODS.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
                <select value={filterDifficulty} onChange={(e) => setFilterDifficulty(e.target.value)} className="form-select">
                    <option value="">All Difficulties</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                {loading ? (
                    <div className="empty-state"><p className="empty-state-text">Loading...</p></div>
                ) : questions.length === 0 ? (
                    <div className="empty-state"><p className="empty-state-text">No questions found</p></div>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table className="table" style={{ minWidth: 'unset', width: '100%' }}>
                            <thead>
                                <tr>
                                    <th style={{ width: '45%' }}>Question</th>
                                    <th style={{ width: '20%' }}>Period</th>
                                    <th style={{ width: '15%' }}>Difficulty</th>
                                    <th style={{ width: '12%' }}>Created By</th>
                                    <th style={{ width: '8%', textAlign: 'center' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {questions.map((question) => (
                                    <tr key={question._id}>
                                        <td>
                                            <p className="table-cell-name" style={{ fontSize: '0.875rem' }}>{question.title}</p>
                                            {question.description && (
                                                <p className="table-cell-meta" style={{ marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '320px' }}>
                                                    {question.description}
                                                </p>
                                            )}
                                        </td>
                                        <td>
                                            <span className={getPeriodClass(question.period || question.topic)}>
                                                {question.period || question.topic}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={getDifficultyClass(question.difficultyLevel)}>
                                                {question.difficultyLevel}
                                            </span>
                                        </td>
                                        <td className="table-cell-sub">{question.createdBy?.name}</td>
                                        <td>
                                            <div className="table-actions" style={{ justifyContent: 'center' }}>
                                                <button onClick={() => handleEdit(question)} className="btn-icon btn-icon-slate" title="Edit">
                                                    <Edit2 size={15} />
                                                </button>
                                                <button onClick={() => handleDelete(question._id)} className="btn-icon btn-icon-red" title="Delete">
                                                    <Trash2 size={15} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {totalPages > 1 && (
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                        <button
                            key={p}
                            onClick={() => fetchQuestions(p)}
                            className={`pagination-btn ${p === page ? 'active' : 'inactive'}`}
                        >
                            {p}
                        </button>
                    ))}
                </div>
            )}

            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal-lg">
                        <div className="modal-header">
                            <h2 className="section-title">{editingId ? 'Edit Question' : 'New Question'}</h2>
                            <button onClick={closeModal} className="btn-icon btn-icon-slate">
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="modal-body space-y-6" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
                            {error && <div className="alert-error">{error}</div>}

                            <div className="form-group">
                                <label className="form-label">
                                    Question <span style={{ color: '#f87171' }}>*</span>
                                </label>
                                <textarea
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    rows={2}
                                    className="form-textarea-sm"
                                    placeholder="Type your question here..."
                                />
                            </div>

                            <div className="grid-2">
                                <div className="form-group">
                                    <label className="form-label">
                                        Historical Period <span style={{ color: '#f87171' }}>*</span>
                                    </label>
                                    <select name="period" value={formData.period} onChange={handleInputChange} className="form-select">
                                        <option value="">Select period...</option>
                                        {PERIODS.map(p => <option key={p} value={p}>{p}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Difficulty</label>
                                    <select name="difficultyLevel" value={formData.difficultyLevel} onChange={handleInputChange} className="form-select">
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Answer Options <span style={{ color: '#f87171' }}>*</span>
                                    <span style={{ marginLeft: '8px', color: '#94a3b8', fontWeight: 600, textTransform: 'none', letterSpacing: 'normal' }}>
                                        — click the circle to mark the correct answer
                                    </span>
                                </label>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {formData.options.map((opt, i) => {
                                        const isCorrect = formData.correctAnswer === i;
                                        return (
                                            <div key={i} className={`question-answer-option ${isCorrect ? 'selected' : 'unselected'}`}>
                                                <button
                                                    type="button"
                                                    onClick={() => handleCorrectAnswer(i)}
                                                    className={`option-selector-btn ${isCorrect ? 'selected' : 'unselected'}`}
                                                    title="Mark as correct answer"
                                                >
                                                    {isCorrect ? <CheckCircle size={20} /> : <Circle size={20} />}
                                                </button>
                                                <span className={`option-prefix ${isCorrect ? 'selected' : 'unselected'}`}>
                                                    {OPTION_LABELS[i]}.
                                                </span>
                                                <input
                                                    type="text"
                                                    value={opt}
                                                    onChange={(e) => handleOptionChange(i, e.target.value)}
                                                    className="option-text-input"
                                                    placeholder={`Option ${OPTION_LABELS[i]}...`}
                                                />
                                                {isCorrect && <span className="option-correct-label">Correct</span>}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Additional Notes <span style={{ color: '#94a3b8', fontWeight: 600, textTransform: 'none', letterSpacing: 'normal' }}>(optional)</span>
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows={2}
                                    className="form-textarea-sm"
                                    placeholder="Any extra context or explanation..."
                                />
                            </div>

                            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', paddingTop: '8px' }}>
                                <button type="button" onClick={closeModal} className="btn-outline">Cancel</button>
                                <button type="submit" className="btn-dark">
                                    {editingId ? 'Update Question' : 'Create Question'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuestionManagement;
```

## File: chrono-dashboard/src/reportWebVitals.js
```javascript
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
```

## File: chrono-dashboard/src/setupTests.js
```javascript
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
```

## File: chronoquest-api/src/config/db.js
```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
```

## File: chronoquest-api/src/controllers/studentController.js
```javascript
const Score = require('../models/scoreModel');
const Teacher = require('../models/teacherModel');

exports.simulateSync = async (req, res) => {
    try {
        const { studentName, classCode, levelReached, score } = req.body;

        const teacher = await Teacher.findOne({ classCode });
        if (!teacher) {
            return res.status(404).json({ message: 'Invalid Class Code' });
        }

        const newScore = await Score.create({
            studentName,
            classCode,
            levelReached,
            score,
            teacherId: teacher._id
        });

        res.status(201).json({ message: 'Sync Successful', data: newScore });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
```

## File: chronoquest-api/src/middleware/authMiddleware.js
```javascript
const jwt = require('jsonwebtoken');
const Teacher = require('../models/teacherModel');

exports.protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await Teacher.findById(decoded.id).select('-password');

        if (!req.user) {
            return res.status(401).json({ message: 'User not found' });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: `Not authorized, token failed: ${error.message}` });
    }
};

// Admin-only middleware
exports.adminOnly = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Access denied: Admin privileges required' });
    }
};
```

## File: chronoquest-api/src/models/activityLogModel.js
```javascript
const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    userRole: {
        type: String,
        enum: ['teacher', 'student', 'admin'],
        required: true
    },
    action: {
        type: String,
        required: true  // e.g., "LOGIN", "CREATE_SECTION", "DELETE_STUDENT"
    },
    resource: {
        type: String  // e.g., "Section", "Student", "Question"
    },
    resourceId: {
        type: mongoose.Schema.Types.ObjectId
    },
    details: {
        type: Object,
        default: {}  // Store additional context
    },
    ipAddress: String,
    status: {
        type: String,
        enum: ['success', 'failure'],
        default: 'success'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: true
    }
}, { timestamps: false });

module.exports = mongoose.model('ActivityLog', activityLogSchema);
```

## File: chronoquest-api/src/models/scoreModel.js
```javascript
const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    classCode: { type: String, required: true },
    levelReached: { type: String, required: true },
    score: { type: Number, required: true },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Score', scoreSchema);
```

## File: chronoquest-api/src/routes/authRoutes.js
```javascript
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', authController.registerUser || authController.register);
router.post('/login', authController.loginUser || authController.login);
router.put('/profile', protect, authController.updateTeacherProfile || authController.updateProfile);
router.post('/feedback', protect, authController.submitFeedback);

module.exports = router;
```

## File: chronoquest-api/src/tests/admin.test.js
```javascript
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
```

## File: chronoquest-api/src/tests/auth.test.js
```javascript
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
```

## File: chronoquest-api/src/tests/generateCode.test.js
```javascript
const generateClassCode = require('../utils/generateCode');

describe('Unit Test: generateClassCode', () => {
    test('should generate a string of exactly 6 characters', () => {
        const code = generateClassCode();
        expect(code).toHaveLength(6);
    });

    test('should only contain alphanumeric characters', () => {
        const code = generateClassCode();
        expect(code).toMatch(/^[A-Z0-9]+$/);
    });
});
```

## File: chronoquest-api/src/tests/student.test.js
```javascript
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
```

## File: chronoquest-api/src/tests/teacher.test.js
```javascript
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
```

## File: chronoquest-api/src/utils/generateCode.js
```javascript
const generateClassCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const codeLength = 6;

    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
};

module.exports = generateClassCode;
```

## File: chrono-dashboard/src/pages/Dashboard.js
```javascript
import React, { useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import TeacherSidebar from '../components/TeacherSidebar';
import ProfileSettings from './ProfileSettings';
import ClassResults from './ClassResults';
import toast, { Toaster } from 'react-hot-toast';
import { BarChart3, Trash, Copy, Archive, RotateCcw } from 'lucide-react';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3000/api/v1';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const { teacher, setTeacher } = useContext(AuthContext);
    const [selectedSection, setSelectedSection] = useState("");
    const [newSectionName, setNewSectionName] = useState("");
    const [summary, setSummary] = useState({ totalStudents: 0, avgScore: 0, totalAssessments: 0 });
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [showArchived, setShowArchived] = useState(false);

    const [feedbackTitle, setFeedbackTitle] = useState("");
    const [feedbackDescription, setFeedbackDescription] = useState("");
    const [feedbackType, setFeedbackType] = useState("general_feedback");
    const [feedbackPriority, setFeedbackPriority] = useState("medium");
    const [feedbackLoading, setFeedbackLoading] = useState(false);

    const fetchTeacherProfile = useCallback(async () => {
        const token = localStorage.getItem('teacherToken');
        if (!token) return;
        try {
            const { data } = await axios.get(`${API_BASE}/auth/profile?t=${Date.now()}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setTeacher(data);
        } catch (err) {
            console.error("Session expired or sync failed");
        }
    }, [setTeacher]);

    useEffect(() => {
        if (teacher?.sections?.length > 0) {
            const activeSections = teacher.sections.filter(s => !s.isArchived);
            const sectionExists = teacher.sections.some(s => s.classCode === selectedSection);
            if (!selectedSection || !sectionExists) {
                const initialSection = activeSections.length > 0
                    ? activeSections[0].classCode
                    : teacher.sections[0].classCode;
                setSelectedSection(initialSection);
            }
        } else {
            setSelectedSection("");
        }
    }, [teacher, selectedSection]);

    const fetchSummary = useCallback(async () => {
        if (!selectedSection) {
            setSummary({ totalStudents: 0, avgScore: 0, totalAssessments: 0 });
            setLeaderboardData([]);
            return;
        }
        try {
            const token = localStorage.getItem('teacherToken');
            const headers = { Authorization: `Bearer ${token}` };
            const [scoresRes, questRes] = await Promise.all([
                axios.get(`${API_BASE}/analytics/overall`, { headers }),
                axios.get(`${API_BASE}/questions`, { headers })
            ]);
            const filtered = scoresRes.data.filter(s => s.classCode === selectedSection);

            const sortedStudents = filtered
                .sort((a, b) => (b.score || 0) - (a.score || 0))
                .slice(0, 15)
                .map((student, index) => ({
                    rank: index + 1,
                    name: student.studentName || 'Unknown',
                    classCode: student.classCode,
                    score: student.score || 0
                }));

            setSummary({
                totalStudents: filtered.length,
                avgScore: filtered.length > 0
                    ? (filtered.reduce((acc, curr) => acc + (curr.score || 0), 0) / filtered.length).toFixed(1)
                    : 0,
                totalAssessments: questRes.data.length
            });
            setLeaderboardData(sortedStudents);
        } catch (err) {
            console.error("Summary fetch error");
        }
    }, [selectedSection]);

    useEffect(() => { fetchTeacherProfile(); }, [fetchTeacherProfile]);
    useEffect(() => { fetchSummary(); }, [fetchSummary]);
    useEffect(() => {
        if (teacher) localStorage.setItem('teacherData', JSON.stringify(teacher));
    }, [teacher]);

    const handleDeleteSection = async (classCode, e) => {
        e.stopPropagation();
        if (!window.confirm("Are you sure? This will permanently delete the section and its scores.")) return;
        try {
            const token = localStorage.getItem('teacherToken');
            const { data } = await axios.delete(`${API_BASE}/teacher/delete-section/${classCode}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success("Section removed successfully");
            if (data.updatedTeacher) setTeacher(data.updatedTeacher);
            else fetchTeacherProfile();
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed to delete section");
        }
    };

    const handleArchiveSection = async (classCode, e) => {
        e.stopPropagation();
        try {
            const token = localStorage.getItem('teacherToken');
            const { data } = await axios.post(`${API_BASE}/teacher/archive-section/${classCode}`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success("Section archived successfully");
            if (data.updatedTeacher) setTeacher(data.updatedTeacher);
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed to archive section");
        }
    };

    const handleUnarchiveSection = async (classCode, e) => {
        e.stopPropagation();
        try {
            const token = localStorage.getItem('teacherToken');
            const { data } = await axios.post(`${API_BASE}/teacher/unarchive-section/${classCode}`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success("Section restored successfully");
            if (data.updatedTeacher) setTeacher(data.updatedTeacher);
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed to restore section");
        }
    };

    const handleAddSection = async () => {
        if (!newSectionName.trim()) return toast.error("Enter section name");
        try {
            const token = localStorage.getItem('teacherToken');
            const { data } = await axios.post(`${API_BASE}/teacher/add-section`,
                { sectionName: newSectionName },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setTeacher(data.updatedTeacher);
            setSelectedSection(data.newSection.classCode);
            setModalOpen(false);
            setNewSectionName("");
            toast.success("Section created");
        } catch (err) { toast.error("Failed to create section"); }
    };

    const handleSubmitFeedback = async () => {
        if (!feedbackTitle.trim() || !feedbackDescription.trim()) {
            return toast.error("Title and description are required");
        }
        setFeedbackLoading(true);
        try {
            const token = localStorage.getItem('teacherToken');
            await axios.post(`${API_BASE}/auth/feedback`, {
                title: feedbackTitle,
                description: feedbackDescription,
                type: feedbackType,
                priority: feedbackPriority
            }, { headers: { Authorization: `Bearer ${token}` } });
            toast.success("Feedback submitted successfully!");
            setFeedbackTitle("");
            setFeedbackDescription("");
            setFeedbackType("general_feedback");
            setFeedbackPriority("medium");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to submit feedback");
        } finally {
            setFeedbackLoading(false);
        }
    };

    const activeSections = teacher?.sections?.filter(s => !s.isArchived) || [];
    const archivedSections = teacher?.sections?.filter(s => s.isArchived) || [];

    return (
        <div className="page">
            <Toaster position="top-right" />
            <TeacherSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <main className="main-content">

                {activeTab === 'overview' && (
                    <div className="content-area">
                        <header className="page-header">
                            <h2 className="page-title">Welcome, {teacher?.name || 'Instructor'}</h2>
                            <button onClick={() => setModalOpen(true)} className="btn-dark">
                                New Section
                            </button>
                        </header>

                        <div className="space-y-4" style={{ marginBottom: '40px' }}>
                            <div className="section-panel">
                                <div className="section-panel-header">
                                    <p className="section-panel-label">Active Classes</p>
                                    <span className="section-panel-count">({activeSections.length})</span>
                                </div>
                                <div className="section-chips">
                                    {activeSections.length > 0 ? activeSections.map(sec => (
                                        <div key={sec.classCode} className="section-chip">
                                            <button
                                                onClick={() => setSelectedSection(sec.classCode)}
                                                className={`section-chip-btn${selectedSection === sec.classCode ? ' active' : ''}`}
                                            >
                                                {sec.sectionName}
                                            </button>
                                            <button onClick={(e) => handleArchiveSection(sec.classCode, e)} title="Archive" className="section-chip-icon-btn">
                                                <Archive size={14} />
                                            </button>
                                            <button onClick={(e) => handleDeleteSection(sec.classCode, e)} title="Delete" className="section-chip-icon-btn section-chip-icon-btn-danger">
                                                <Trash size={14} />
                                            </button>
                                        </div>
                                    )) : (
                                        <p className="no-results">No active sections created yet.</p>
                                    )}
                                </div>
                            </div>

                            {archivedSections.length > 0 && (
                                <div className="section-panel">
                                    <button onClick={() => setShowArchived(!showArchived)} className="archived-toggle-btn">
                                        <span className="archived-toggle-label">
                                            <Archive size={16} /> Archived Classes
                                        </span>
                                        <span className="section-panel-count">({archivedSections.length})</span>
                                        <span className={`archive-chevron${showArchived ? ' open' : ''}`}>▼</span>
                                    </button>
                                    {showArchived && (
                                        <div className="section-chips">
                                            {archivedSections.map(sec => (
                                                <div key={sec.classCode} className="section-chip section-chip-archived">
                                                    <button onClick={() => setSelectedSection(sec.classCode)} className="section-chip-btn">
                                                        {sec.sectionName}
                                                    </button>
                                                    <button onClick={(e) => handleUnarchiveSection(sec.classCode, e)} title="Restore" className="section-chip-icon-btn">
                                                        <RotateCcw size={14} />
                                                    </button>
                                                    <button onClick={(e) => handleDeleteSection(sec.classCode, e)} title="Delete" className="section-chip-icon-btn section-chip-icon-btn-danger">
                                                        <Trash size={14} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="space-y-10">
                            <div className="grid-2">
                                <div>
                                    <div className="space-y-6">
                                        <div className="stat-card">
                                            <p className="stat-card-label">Learners</p>
                                            <p className="stat-card-value">{summary.totalStudents}</p>
                                        </div>
                                        <div className="stat-card">
                                            <p className="stat-card-label">Average Score</p>
                                            <p className="stat-card-value">{summary.avgScore}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Top 15 Learners</h3>
                                    </div>
                                    <div className="leaderboard-list">
                                        {leaderboardData.length > 0 ? (
                                            leaderboardData.map((student) => (
                                                <div key={student.classCode + student.name} className="leaderboard-item">
                                                    <div className="leaderboard-rank">{student.rank}</div>
                                                    <div className="leaderboard-info">
                                                        <p className="leaderboard-name">{student.name}</p>
                                                        <p className="leaderboard-code">{student.classCode}</p>
                                                    </div>
                                                    <div className="leaderboard-score">{student.score}</div>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="no-results" style={{ padding: '24px' }}>No student data yet</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {selectedSection && (
                                <div className="access-code-card">
                                    <p className="access-code-label">Section Access Code</p>
                                    <div className="access-code-row">
                                        <p className="access-code-text">{selectedSection}</p>
                                        <button
                                            onClick={() => { navigator.clipboard.writeText(selectedSection); toast.success("Copied!"); }}
                                            className="access-code-copy-btn"
                                        >
                                            <Copy size={20} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'results' && (
                    <ClassResults
                        sections={activeSections}
                        selectedSection={selectedSection}
                        onSectionSelect={setSelectedSection}
                    />
                )}

                {activeTab === 'settings' && (
                    <div className="content-area">
                        <ProfileSettings />
                    </div>
                )}

                {activeTab === 'feedback' && (
                    <div className="content-area space-y-8">
                        <div>
                            <h2 className="page-title">Send Feedback</h2>
                            <p className="page-subtitle">Help us improve by sharing your thoughts</p>
                        </div>

                        <div className="card">
                            <div className="space-y-6">
                                <div className="form-group">
                                    <label className="form-label-sm">Title *</label>
                                    <input
                                        type="text"
                                        className="form-input-sm"
                                        placeholder="Brief title of your feedback"
                                        value={feedbackTitle}
                                        onChange={(e) => setFeedbackTitle(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label-sm">Description *</label>
                                    <textarea
                                        className="form-textarea"
                                        placeholder="Detailed description of your feedback"
                                        rows="4"
                                        value={feedbackDescription}
                                        onChange={(e) => setFeedbackDescription(e.target.value)}
                                    />
                                </div>
                                <div className="grid-2">
                                    <div className="form-group">
                                        <label className="form-label-sm">Type</label>
                                        <select className="form-select-lg" value={feedbackType} onChange={(e) => setFeedbackType(e.target.value)}>
                                            <option value="general_feedback">General Feedback</option>
                                            <option value="bug_report">Bug Report</option>
                                            <option value="feature_request">Feature Request</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label-sm">Priority</label>
                                        <select className="form-select-lg" value={feedbackPriority} onChange={(e) => setFeedbackPriority(e.target.value)}>
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                            <option value="critical">Critical</option>
                                        </select>
                                    </div>
                                </div>
                                <button onClick={handleSubmitFeedback} disabled={feedbackLoading} className="btn-indigo-full">
                                    {feedbackLoading ? "Submitting..." : "Submit Feedback"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'overview' && !selectedSection && activeSections.length === 0 && (
                    <div className="content-area" style={{ paddingTop: 0 }}>
                        <div className="empty-state">
                            <BarChart3 className="empty-state-icon" size={56} />
                            <p className="empty-state-text">Create your first section to get started</p>
                        </div>
                    </div>
                )}
            </main>

            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3 className="modal-title">New Section</h3>
                        <p className="modal-subtitle">Give your classroom a unique identifier.</p>
                        <input
                            type="text"
                            className="modal-input"
                            placeholder="e.g. Grade 10 - Rizal"
                            value={newSectionName}
                            onChange={(e) => setNewSectionName(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAddSection()}
                        />
                        <div className="modal-actions">
                            <button onClick={() => setModalOpen(false)} className="btn-ghost" style={{ flex: 1 }}>Cancel</button>
                            <button onClick={handleAddSection} className="btn-indigo" style={{ flex: 2 }}>
                                Create Section
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
```

## File: chrono-dashboard/src/pages/LoginPage.js
```javascript
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '' });

    const { login, teacher } = useContext(AuthContext);
    const navigate = useNavigate();

    // Setup the API URL based on environment (Vercel vs Local)
    const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3000/api/v1';

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors = { email: '', password: '' };
        let isValid = true;

        if (!email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!validateEmail(email.trim())) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }

        if (!password) {
            newErrors.password = 'Password is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    useEffect(() => {
        if (teacher) navigate('/dashboard');
    }, [teacher, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrors({ email: '', password: '' });

        if (!validateForm()) {
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        try {
            const payload = {
                email: email.trim().toLowerCase(),
                password: password
            };

            // UPDATED: Now uses the dynamic API_BASE variable
            const response = await axios.post(`${API_BASE}/auth/login`, payload);

            const data = response.data;
            if (data.token && (data.teacher || data.name)) {
                const teacherData = data.teacher || data;
                login(teacherData, data.token);
                toast.success("Login Successful!");
                navigate('/dashboard');
            }
        } catch (error) {
            console.error("Login Error:", error.response?.data);
            const errorCode = error.response?.data?.errorCode;
            let errorMessage = "Invalid email or password.";

            if (errorCode === 'EMAIL_NOT_FOUND') {
                errorMessage = "Email not registered. Please create an account.";
            } else if (errorCode === 'PASSWORD_INCORRECT') {
                errorMessage = "Incorrect password. Please try again.";
            } else if (errorCode === 'INVALID_EMAIL_FORMAT') {
                errorMessage = "Invalid email format.";
            } else {
                errorMessage = error.response?.data?.message || "Login failed. Please try again.";
            }
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="page-centered">
            <Toaster position="top-right" />

            <div className="auth-wrapper">
                <div className="auth-brand">
                    <h1 className="auth-brand-title">ChronoQuest</h1>
                    <p className="auth-brand-subtitle">Instructor Portal</p>
                </div>

                <div className="auth-card">
                    <h2 className="auth-card-title">Sign In</h2>

                    <form onSubmit={handleLogin} className="form-stack">
                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                placeholder="your.email@school.com"
                                className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setErrors({ ...errors, email: '' });
                                }}
                                required
                            />
                            {errors.email && <span className="form-error-text">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <div className="input-password-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    placeholder="Enter your password"
                                    className={`form-input ${errors.password ? 'form-input-error' : ''}`}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setErrors({ ...errors, password: '' });
                                    }}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="password-toggle"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.password && <span className="form-error-text">{errors.password}</span>}
                        </div>

                        <button type="submit" disabled={isLoading} className="btn-primary">
                            {isLoading ? "Authenticating..." : "Sign In"}
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p className="auth-footer-text">
                            New instructor?{' '}
                            <Link to="/register" className="auth-footer-link">Create Account</Link>
                        </p>
                    </div>
                </div>

                <div className="auth-security-note">
                    <p className="auth-security-text">Secure & Encrypted</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
```

## File: chrono-dashboard/src/pages/ProfileSettings.js
```javascript
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { Save, Eye, EyeOff, Lock } from 'lucide-react';

const ProfileSettings = () => {
    const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3000/api/v1';
    const { teacher, setTeacher } = useContext(AuthContext);

    const [name, setName] = useState(teacher?.name || '');
    const [email, setEmail] = useState(teacher?.email || '');
    const [accountLoading, setAccountLoading] = useState(false);

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordLoading, setPasswordLoading] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const token = localStorage.getItem('teacherToken');

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setAccountLoading(true);
        try {
            const { data } = await axios.put(`${API_BASE}/auth/profile`,
                { name, email },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            const updatedTeacher = { ...teacher, name: data.name, email: data.email };
            setTeacher(updatedTeacher);
            localStorage.setItem('teacherData', JSON.stringify(updatedTeacher));
            toast.success("Account information updated.");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to update profile.");
        } finally {
            setAccountLoading(false);
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            toast.error("New passwords do not match.");
            return;
        }
        if (newPassword.length < 6) {
            toast.error("Password must be at least 6 characters long.");
            return;
        }
        setPasswordLoading(true);
        try {
            await axios.put(`${API_BASE}/auth/change-password`,
                { currentPassword, newPassword },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
            toast.success("Password changed successfully.");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to change password.");
        } finally {
            setPasswordLoading(false);
        }
    };

    return (
        <div style={{ width: '100%', paddingTop: '48px', paddingBottom: '48px', paddingLeft: '24px', paddingRight: '24px' }}>
            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
                <div style={{ marginBottom: '48px' }}>
                    <h1 className="page-title">Profile Settings</h1>
                    <p className="page-subtitle">Manage your account information and security preferences.</p>
                </div>

                <div className="space-y-8">
                    <div className="card">
                        <div className="section-header-icon-row">
                            <div className="profile-section-icon profile-section-icon-default">
                                <Lock size={20} style={{ color: '#475569' }} />
                            </div>
                            <div>
                                <h2 className="section-title">Account Information</h2>
                                <p className="section-subtitle">Update your professional identity</p>
                            </div>
                        </div>

                        <form onSubmit={handleUpdateProfile} className="space-y-6">
                            <div className="grid-2">
                                <div className="form-group">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-input"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="divider" style={{ paddingTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
                                <button type="submit" disabled={accountLoading} className="btn-save">
                                    <Save size={16} />
                                    {accountLoading ? "Saving..." : "Save Changes"}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="card">
                        <div className="section-header-icon-row">
                            <div className="profile-section-icon profile-section-icon-danger">
                                <Lock size={20} style={{ color: '#dc2626' }} />
                            </div>
                            <div>
                                <h2 className="section-title">Security</h2>
                                <p className="section-subtitle">Change your password regularly for security</p>
                            </div>
                        </div>

                        <form onSubmit={handleChangePassword} className="space-y-6">
                            <div className="form-group">
                                <label className="form-label">Current Password</label>
                                <div className="input-password-wrapper">
                                    <input
                                        type={showCurrentPassword ? "text" : "password"}
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        className="form-input"
                                        required
                                    />
                                    <button type="button" onClick={() => setShowCurrentPassword(!showCurrentPassword)} className="password-toggle">
                                        {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div className="grid-2">
                                <div className="form-group">
                                    <label className="form-label">New Password</label>
                                    <div className="input-password-wrapper">
                                        <input
                                            type={showNewPassword ? "text" : "password"}
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            className="form-input"
                                            required
                                        />
                                        <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="password-toggle">
                                            {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Confirm Password</label>
                                    <div className="input-password-wrapper">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="form-input"
                                            required
                                        />
                                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="password-toggle">
                                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div style={{ paddingTop: '24px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'flex-end' }}>
                                <button type="submit" disabled={passwordLoading} className="btn-red">
                                    <Lock size={16} />
                                    {passwordLoading ? "Updating..." : "Change Password"}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="alert-info">
                        <span style={{ color: '#2563eb' }}>Security Note:</span> All changes are automatically encrypted and securely stored in the ChronoQuest system. Your account security is monitored continuously. Never share your password with anyone, including administrators.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;
```

## File: chrono-dashboard/src/pages/RegisterPage.js
```javascript
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';

const RegisterPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const navigate = useNavigate();

    // UPDATED: Dynamic API URL based on environment (Vercel vs Local)
    const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3000/api/v1';

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors = { name: '', email: '', password: '', confirmPassword: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!validateEmail(formData.email.trim())) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
            isValid = false;
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setErrors({ name: '', email: '', password: '', confirmPassword: '' });

        if (!validateForm()) {
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        try {
            // UPDATED: Now uses the API_BASE variable instead of a hardcoded string
            await axios.post(`${API_BASE}/auth/register`, {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });

            toast.success("Account created successfully! Please login.");
            setTimeout(() => navigate('/login'), 1500);
        } catch (error) {
            console.error("Register Error:", error.response?.data);
            const errorCode = error.response?.data?.errorCode;
            let errorMessage = "Registration failed.";

            if (errorCode === 'EMAIL_ALREADY_EXISTS') {
                errorMessage = "Email already registered. Please login instead.";
            } else if (errorCode === 'INVALID_EMAIL_FORMAT') {
                errorMessage = "Invalid email format.";
            } else if (errorCode === 'PASSWORD_TOO_WEAK') {
                errorMessage = "Password must be at least 6 characters.";
            } else {
                errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
            }
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="page-centered">
            <Toaster position="top-right" />

            <div className="auth-wrapper">
                <div className="auth-brand">
                    <h1 className="auth-brand-title">ChronoQuest</h1>
                    <p className="auth-brand-subtitle">Instructor Portal</p>
                </div>

                <div className="auth-card">
                    <h2 className="auth-card-title">Create Account</h2>

                    <form onSubmit={handleRegister} className="form-stack">
                        <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                value={formData.name}
                                className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                                onChange={(e) => {
                                    setFormData({ ...formData, name: e.target.value });
                                    setErrors({ ...errors, name: '' });
                                }}
                                required
                            />
                            {errors.name && <span className="form-error-text">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                placeholder="your.email@school.com"
                                value={formData.email}
                                className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                                onChange={(e) => {
                                    setFormData({ ...formData, email: e.target.value });
                                    setErrors({ ...errors, email: '' });
                                }}
                                required
                            />
                            {errors.email && <span className="form-error-text">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <div className="input-password-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a password (min. 6 characters)"
                                    value={formData.password}
                                    className={`form-input ${errors.password ? 'form-input-error' : ''}`}
                                    onChange={(e) => {
                                        setFormData({ ...formData, password: e.target.value });
                                        setErrors({ ...errors, password: '' });
                                    }}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="password-toggle"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.password && <span className="form-error-text">{errors.password}</span>}
                        </div>

                        <div className="form-group">
                            <label className="form-label">Confirm Password</label>
                            <div className="input-password-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Confirm your password"
                                    value={formData.confirmPassword}
                                    className={`form-input ${errors.confirmPassword ? 'form-input-error' : ''}`}
                                    onChange={(e) => {
                                        setFormData({ ...formData, confirmPassword: e.target.value });
                                        setErrors({ ...errors, confirmPassword: '' });
                                    }}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="password-toggle"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.confirmPassword && <span className="form-error-text">{errors.confirmPassword}</span>}
                        </div>

                        <button type="submit" disabled={isLoading} className="btn-primary">
                            {isLoading ? "Creating Account..." : "Create Account"}
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p className="auth-footer-text">
                            Already have an account?{' '}
                            <Link to="/login" className="auth-footer-link">Sign In</Link>
                        </p>
                    </div>
                </div>

                <div className="auth-security-note">
                    <p className="auth-security-text">Secure & Encrypted</p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
```

## File: chronoquest-api/src/controllers/analyticsController.js
```javascript
const Score = require('../models/scoreModel');

exports.getClassProgress = async (req, res) => {
    try {
        // Find all scores where teacherId matches the logged-in teacher
        const progress = await Score.find({ teacherId: req.user.id })
            .sort({ createdAt: -1 }); // Latest sync first

        res.status(200).json({
            message: 'Class progress retrieved successfully',
            progress
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getStudentPerformance = async (req, res) => {
    try {
        const { studentName } = req.params;
        const performance = await Score.find({
            teacherId: req.user.id,
            studentName: studentName
        });

        res.status(200).json({
            message: 'Student performance retrieved successfully',
            performance
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
```

## File: chronoquest-api/src/middleware/adminMiddleware.js
```javascript
const jwt = require('jsonwebtoken');
const Teacher = require('../models/teacherModel');

exports.protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ message: "Not authorized to access this route" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        req.user = await Teacher.findById(decoded.id);

        if (!req.user) {
            return res.status(404).json({ message: "User not found" });
        }

        next();
    } catch (error) {
        res.status(401).json({ message: "Not authorized to access this route" });
    }
};

exports.adminOnly = async (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({
            message: "Access denied. Admin privileges required.",
            userRole: req.user.role
        });
    }
    next();
};

exports.checkPermission = (requiredPermission) => {
    return async (req, res, next) => {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: "Admin access required" });
        }

        // All admins have full permissions
        next();
    };
};
```

## File: chronoquest-api/src/models/feedbackModel.js
```javascript
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['bug_report', 'feature_request', 'general_feedback'],
        required: true
    },
    submittedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    email: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high', 'critical'],
        default: 'medium'
    },
    status: {
        type: String,
        enum: ['open', 'in_progress', 'resolved', 'closed'],
        default: 'open'
    },
    attachments: [String],
    response: {
        admin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Teacher'
        },
        message: String,
        respondedAt: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
```

## File: chronoquest-api/src/models/systemSettingsModel.js
```javascript
const mongoose = require('mongoose');

const systemSettingsSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true

    },
    value: mongoose.Schema.Types.Mixed,

    type: {
        type: String,
        enum: ['string', 'number', 'boolean', 'json'],
        default: 'string'
    },
    description: String,
    category: {
        type: String,
        enum: ['general', 'security', 'performance', 'email', 'features'],
        default: 'general'
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('SystemSettings', systemSettingsSchema);
```

## File: chronoquest-api/src/routes/questionRoutes.js
```javascript
const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');
const {
    createQuestion,
    getAllQuestions,
    getQuestionsByTeacher,
    updateQuestion,
    deleteQuestion,
    toggleQuestionStatus
} = require('../controllers/questionController');


router.post('/', protect, createQuestion);
router.get('/', protect, getAllQuestions);
router.get('/teacher/:teacherId', protect, getQuestionsByTeacher);
router.patch('/:questionId', protect, updateQuestion);
router.delete('/:questionId', protect, deleteQuestion);
router.post('/:questionId/toggle', protect, toggleQuestionStatus);

module.exports = router;
```

## File: chronoquest-api/vercel.json
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

## File: chronoquest-api/src/controllers/authController.js
```javascript
const Teacher = require('../models/teacherModel');
const Student = require('../models/studentModel');
const Feedback = require('../models/feedbackModel');
const jwt = require('jsonwebtoken');

// Helper to generate JWT
const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: 'Invalid email format',
                errorCode: 'INVALID_EMAIL_FORMAT'
            });
        }

        const teacherExists = await Teacher.findOne({ email });
        if (teacherExists) {
            return res.status(400).json({
                message: 'Email already registered',
                errorCode: 'EMAIL_ALREADY_EXISTS'
            });
        }

        // Validate password strength
        if (!password || password.length < 6) {
            return res.status(400).json({
                message: 'Password must be at least 6 characters',
                errorCode: 'PASSWORD_TOO_WEAK'
            });
        }

        const teacher = await Teacher.create({
            name,
            email,
            password,
            sections: []
        });

        res.status(201).json({
            message: 'User registered successfully',
            _id: teacher._id,
            name: teacher.name,
            email: teacher.email,
            sections: teacher.sections,
            role: 'teacher',
            token: generateToken(teacher._id, 'teacher')
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // First check in teachers collection
        let user = await Teacher.findOne({ email });
        let userType = 'teacher';

        // If not found in teachers, check students collection
        if (!user) {
            user = await Student.findOne({ email });
            userType = 'student';
        }

        // If user not found in either collection
        if (!user) {
            return res.status(401).json({
                message: 'Email not registered',
                errorCode: 'EMAIL_NOT_FOUND'
            });
        }

        // Verify password
        const passwordMatches = await user.matchPassword(password);
        if (!passwordMatches) {
            return res.status(401).json({
                message: 'Incorrect password',
                errorCode: 'PASSWORD_INCORRECT'
            });
        }

        // Check if user account is active
        if (user.isActive === false) {
            return res.status(401).json({
                message: 'User account deactivated',
                errorCode: 'USER_DEACTIVATED'
            });
        }

        // Return appropriate response based on user type
        if (userType === 'teacher') {
            return res.json({
                message: 'Login successful',
                _id: user._id,
                name: user.name,
                email: user.email,
                classCode: user.classCode,
                sections: user.sections,
                role: user.role,
                userType: 'teacher',
                token: generateToken(user._id, user.role)
            });
        } else {
            return res.json({
                message: 'Login successful',
                _id: user._id,
                name: user.name,
                email: user.email,
                classCode: user.classCode,
                score: user.score,
                levelReached: user.levelReached,
                userType: 'student',
                token: generateToken(user._id, 'student')
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateTeacherProfile = async (req, res) => {
    try {
        const { name, email } = req.body;
        const teacher = await Teacher.findById(req.user._id);

        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        if (name) teacher.name = name;
        if (email) {
            const emailExists = await Teacher.findOne({ email, _id: { $ne: req.user._id } });
            if (emailExists) {
                return res.status(400).json({ message: 'Email already in use' });
            }
            teacher.email = email;
        }

        await teacher.save();

        res.json({
            message: 'Profile updated successfully',
            _id: teacher._id,
            name: teacher.name,
            email: teacher.email,
            classCode: teacher.classCode,
            sections: teacher.sections,
            role: 'teacher'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.deleteSection = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.user._id);
        if (teacher) {
            // Filter using classCode (or whatever identifier you send from frontend)
            teacher.sections = teacher.sections.filter(
                (section) => section.classCode !== req.params.sectionId
            );

            await teacher.save();

            // Return the updated teacher object so the frontend can sync
            res.json({
                message: 'Section deleted successfully',
                _id: teacher._id,
                name: teacher.name,
                email: teacher.email,
                classCode: teacher.classCode,
                sections: teacher.sections,
                role: 'teacher'
            });
        } else {
            res.status(404).json({ message: 'Teacher not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.submitFeedback = async (req, res) => {
    try {
        const { title, description, type, priority } = req.body;
        const teacherId = req.user._id;

        if (!title || !description || !type) {
            return res.status(400).json({ message: 'Title, description, and type are required' });
        }

        const teacher = await Teacher.findById(teacherId).select('email');
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        const feedback = await Feedback.create({
            title,
            description,
            type,
            submittedBy: teacherId,
            email: teacher.email,
            priority: priority || 'medium',
            status: 'open'
        });

        res.status(201).json({
            message: 'Feedback submitted successfully',
            feedback
        });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting feedback', error: error.message });
    }
};
```

## File: chronoquest-api/src/controllers/questionController.js
```javascript
const Question = require('../models/questionModel');

// @desc    Create a new question
// @access  Private/Admin
exports.createQuestion = async (req, res) => {
    try {
        const { title, description, topic, period, difficultyLevel, options, correctAnswer } = req.body;

        // Validation
        if (!title || !topic || !period || !options || correctAnswer === undefined) {
            return res.status(400).json({
                message: 'Title, topic, period, options, and correctAnswer are required'
            });
        }

        if (options.length !== 4) {
            return res.status(400).json({
                message: 'Exactly 4 options are required'
            });
        }

        const newQuestion = new Question({
            title,
            description,
            topic,
            period,
            difficultyLevel: difficultyLevel || 'Medium',
            options,
            correctAnswer,
            createdBy: req.user._id
        });

        await newQuestion.save();

        res.status(201).json({
            message: 'Question created successfully',
            question: newQuestion
        });
    } catch (error) {
        console.error('Create Question Error:', error);
        res.status(500).json({ message: 'Error creating question', error: error.message });
    }
};

// @desc    Get all questions with optional filters
// @access  Private/Admin
exports.getAllQuestions = async (req, res) => {
    try {
        const { topic, difficulty, isActive, page = 1, limit = 10 } = req.query;

        const filters = {};
        if (topic) filters.topic = { $regex: topic, $options: 'i' };
        if (difficulty) filters.difficultyLevel = difficulty;
        if (isActive !== undefined) filters.isActive = isActive === 'true';

        const skip = (page - 1) * limit;

        const questions = await Question.find(filters)
            .populate('createdBy', 'name email')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Question.countDocuments(filters);

        res.json({
            message: 'Questions retrieved successfully',
            questions,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Get All Questions Error:', error);
        res.status(500).json({ message: 'Error fetching questions' });
    }
};

// @desc    Get questions created by a specific teacher
// @access  Private/Admin
exports.getQuestionsByTeacher = async (req, res) => {
    try {
        const { teacherId } = req.params;
        const { page = 1, limit = 10 } = req.query;

        const skip = (page - 1) * limit;

        const questions = await Question.find({ createdBy: teacherId })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Question.countDocuments({ createdBy: teacherId });

        res.json({
            questions,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Get Questions by Teacher Error:', error);
        res.status(500).json({ message: 'Error fetching teacher questions' });
    }
};

// @desc    Update a question
// @access  Private/Admin
exports.updateQuestion = async (req, res) => {
    try {
        const { questionId } = req.params;
        const { title, description, topic, difficultyLevel, isActive } = req.body;

        const question = await Question.findById(questionId);

        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        // Verify ownership (only creator or admin can edit)
        if (question.createdBy.toString() !== req.user._id && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to update this question' });
        }

        // Update fields
        if (title) question.title = title;
        if (description !== undefined) question.description = description;
        if (topic) question.topic = topic;
        if (difficultyLevel) question.difficultyLevel = difficultyLevel;
        if (isActive !== undefined) question.isActive = isActive;

        await question.save();

        res.json({
            message: 'Question updated successfully',
            question
        });
    } catch (error) {
        console.error('Update Question Error:', error);
        res.status(500).json({ message: 'Error updating question' });
    }
};

// @desc    Delete a question
// @access  Private/Admin
exports.deleteQuestion = async (req, res) => {
    try {
        const { questionId } = req.params;

        const question = await Question.findById(questionId);

        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        // Verify ownership (only creator or admin can delete)
        if (question.createdBy.toString() !== req.user._id && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to delete this question' });
        }

        await Question.findByIdAndDelete(questionId);

        res.json({ message: 'Question deleted successfully' });
    } catch (error) {
        console.error('Delete Question Error:', error);
        res.status(500).json({ message: 'Error deleting question' });
    }
};

// @desc    Toggle question active status
// @access  Private/Admin
exports.toggleQuestionStatus = async (req, res) => {
    try {
        const { questionId } = req.params;

        const question = await Question.findById(questionId);

        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        // Verify ownership
        if (question.createdBy.toString() !== req.user._id && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to modify this question' });
        }

        question.isActive = !question.isActive;
        await question.save();

        res.json({
            message: `Question ${question.isActive ? 'activated' : 'deactivated'} successfully`,
            question
        });
    } catch (error) {
        console.error('Toggle Question Status Error:', error);
        res.status(500).json({ message: 'Error toggling question status' });
    }
};
```

## File: chronoquest-api/src/models/questionModel.js
```javascript
const mongoose = require('mongoose');

const PERIODS = [
    'Pre-colonial',
    'Spanish Colonization',
    'Revolutionary',
    'American/Japanese',
    'Post-war',
];

const questionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            minlength: 5,
            maxlength: 500
        },
        description: {
            type: String,
            trim: true,
            maxlength: 1000
        },

        topic: {
            type: String,
            trim: true,
            index: true
        },
        period: {
            type: String,
            enum: PERIODS,
            required: true,
            index: true
        },
        options: {
            type: [String],
            validate: {
                validator: (arr) => arr.length === 4 && arr.every(s => s.trim().length > 0),
                message: 'Exactly 4 non-empty options are required'
            },
            required: true
        },

        correctAnswer: {
            type: Number,
            enum: [0, 1, 2, 3],
            required: true,
            default: 0
        },
        difficultyLevel: {
            type: String,
            enum: ['Easy', 'Medium', 'Hard'],
            default: 'Medium',
            required: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Teacher',
            required: true,
            index: true
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);


questionSchema.pre('save', function () {
    if (this.period) this.topic = this.period;
});

questionSchema.index({ createdBy: 1, period: 1 });
questionSchema.index({ createdBy: 1, isActive: 1 });

module.exports = mongoose.model('Question', questionSchema);
```

## File: chronoquest-api/src/models/studentModel.js
```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    classCode: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0,
        max: 100
    },
    levelReached: {
        type: String,
        default: "Era 1: Pre-Colonial"
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });


studentSchema.pre('save', async function () {
    // Hash password if modified
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }


    if (this.score > 100) {
        this.score = 100;
    }
});


studentSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Student', studentSchema);
```

## File: chronoquest-api/src/routes/adminRoutes.js
```javascript
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { protect, adminOnly, checkPermission } = require('../middleware/adminMiddleware');


router.use(protect);
router.use(adminOnly);

router.get('/users', adminController.getAllUsers);
router.post('/users/deactivate', adminController.deactivateUser);
router.post('/users/delete', adminController.deleteUser);
router.patch('/users/:userId/:userType', adminController.updateUser);
router.get('/users/:userId/logs', adminController.getUserActivityLogs);
router.get('/activity-logs', adminController.getAllActivityLogs);
router.get('/activity-logs-detailed', adminController.getRecentActivityLogs);

router.post('/sync-scores', adminController.syncScores);
router.get('/analytics', adminController.getSystemAnalytics);
router.get('/usage-stats', adminController.getUsageStats);

router.get('/feedback', adminController.getAllFeedback);
router.post('/feedback/:id/respond', checkPermission('manage_feedback'), adminController.respondToFeedback);

router.get('/settings', adminController.getSystemSettings);
router.post('/settings', checkPermission('manage_settings'), adminController.updateSystemSetting);

module.exports = router;
```

## File: chronoquest-api/src/routes/apiRoutes.js
```javascript
const express = require('express');
const router = express.Router();

const Teacher = require('../models/teacherModel');
const Student = require('../models/studentModel');
const { protect } = require('../middleware/authMiddleware');
const generateClassCode = require('../utils/generateCode');

const authRoutes = require('./authRoutes');
const adminRoutes = require('./adminRoutes');
const questionRoutes = require('./questionRoutes');

const studentController = require('../controllers/studentController');


router.get('/test', (req, res) => res.json({ message: "API is working on Port 5000!" }));

router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);
router.use('/questions', questionRoutes);

router.post('/teacher/add-section', protect, async (req, res) => {
    const { sectionName } = req.body;

    if (!sectionName) {
        return res.status(400).json({ message: "Section name is required" });
    }

    try {
        const teacherId = req.user._id;
        const newClassCode = generateClassCode();

        const newSection = {
            sectionName,
            classCode: newClassCode
        };

        const updatedTeacher = await Teacher.findByIdAndUpdate(
            teacherId,
            { $push: { sections: newSection } },
            { new: true }
        ).select('-password');

        res.status(201).json({
            message: "Section created successfully",
            section: newSection
        });
    } catch (error) {
        console.error("Add Section Error:", error);
        res.status(500).json({ message: "Server error adding section" });
    }
});

router.delete('/teacher/delete-section/:classCode', protect, async (req, res) => {
    try {
        const { classCode } = req.params;
        const teacherId = req.user._id;

        const updatedTeacher = await Teacher.findByIdAndUpdate(
            teacherId,
            { $pull: { sections: { classCode: classCode } } },
            { new: true }
        ).select('-password');

        res.json({ updatedTeacher, message: "Section removed" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting section" });
    }
});

router.post('/teacher/archive-section/:classCode', protect, async (req, res) => {
    try {
        const { classCode } = req.params;
        const teacherId = req.user._id;

        const teacher = await Teacher.findById(teacherId);

        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        const sectionIndex = teacher.sections.findIndex(s => s.classCode === classCode);

        if (sectionIndex === -1) {
            return res.status(403).json({ message: 'Section not found in your classes' });
        }

        teacher.sections[sectionIndex].isArchived = true;
        teacher.sections[sectionIndex].archivedAt = new Date();

        await teacher.save();

        const updatedTeacher = await Teacher.findById(teacherId).select('-password');
        res.json({ updatedTeacher, message: "Section archived successfully" });
    } catch (error) {
        console.error("Archive Section Error:", error);
        res.status(500).json({ message: "Error archiving section" });
    }
});

router.post('/teacher/unarchive-section/:classCode', protect, async (req, res) => {
    try {
        const { classCode } = req.params;
        const teacherId = req.user._id;

        const teacher = await Teacher.findById(teacherId);

        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        const sectionIndex = teacher.sections.findIndex(s => s.classCode === classCode);

        if (sectionIndex === -1) {
            return res.status(403).json({ message: 'Section not found in your classes' });
        }

        teacher.sections[sectionIndex].isArchived = false;
        teacher.sections[sectionIndex].archivedAt = null;

        await teacher.save();

        const updatedTeacher = await Teacher.findById(teacherId).select('-password');
        res.json({ updatedTeacher, message: "Section restored successfully" });
    } catch (error) {
        console.error("Unarchive Section Error:", error);
        res.status(500).json({ message: "Error restoring section" });
    }
});

router.get('/analytics/overall', protect, async (req, res) => {
    try {
        if (!req.user.sections || req.user.sections.length === 0) {
            return res.json([]);
        }

        const includeArchived = req.query.includeArchived === 'true';

        const activeSections = includeArchived
            ? req.user.sections
            : req.user.sections.filter(s => !s.isArchived);

        if (activeSections.length === 0) {
            return res.json([]);
        }

        const codes = activeSections.map(s => s.classCode);

        const students = await Student.find({
            classCode: { $in: codes }
        }).select('name score classCode levelReached');

        const formattedScores = students.map(s => ({
            studentName: s.name,
            score: s.score || 0,
            classCode: s.classCode,
            levelReached: s.levelReached || "Era 1"
        }));

        res.json(formattedScores);
    } catch (error) {
        console.error("Analytics Error:", error);
        res.status(500).json({ message: "Error fetching analytics data" });
    }
});

router.post('/students', protect, async (req, res) => {
    try {
        const { name, email, password, classCode, score, levelReached } = req.body;

        const teacherSections = req.user.sections.map(s => s.classCode);
        if (!teacherSections.includes(classCode)) {
            return res.status(403).json({ message: 'You can only add students to your own sections' });
        }

        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: 'Student with this email already exists' });
        }

        // Validate score range
        if (score !== undefined && (score < 0 || score > 100)) {
            return res.status(400).json({ message: 'Score must be between 0 and 100' });
        }

        const student = await Student.create({
            name,
            email,
            password,
            classCode,
            score: score || 0,
            levelReached: levelReached || "Era 1: Prehistoric"
        });

        res.status(201).json({
            _id: student._id,
            name: student.name,
            email: student.email,
            classCode: student.classCode,
            score: student.score,
            levelReached: student.levelReached
        });
    } catch (error) {
        console.error("Add Student Error:", error);
        res.status(500).json({ message: "Error adding student" });
    }
});

router.put('/students/:id', protect, async (req, res) => {
    try {
        const { name, email, score, levelReached } = req.body;
        const studentId = req.params.id;

        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        const teacherSections = req.user.sections.map(s => s.classCode);
        if (!teacherSections.includes(student.classCode)) {
            return res.status(403).json({ message: 'You can only update students in your sections' });
        }

        if (name) student.name = name;
        if (email) {
            const emailExists = await Student.findOne({ email, _id: { $ne: studentId } });
            if (emailExists) {
                return res.status(400).json({ message: 'Email already in use' });
            }
            student.email = email;
        }
        if (score !== undefined) {
            const validScore = Math.min(Math.max(score, 0), 100);
            student.score = validScore;
        }
        if (levelReached) student.levelReached = levelReached;

        await student.save();

        res.json({
            _id: student._id,
            name: student.name,
            email: student.email,
            classCode: student.classCode,
            score: student.score,
            levelReached: student.levelReached
        });
    } catch (error) {
        console.error("Update Student Error:", error);
        res.status(500).json({ message: "Error updating student" });
    }
});

router.delete('/students/:id', protect, async (req, res) => {
    try {
        const studentId = req.params.id;

        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        const teacherSections = req.user.sections.map(s => s.classCode);
        if (!teacherSections.includes(student.classCode)) {
            return res.status(403).json({ message: 'You can only delete students in your sections' });
        }

        await Student.findByIdAndDelete(studentId);
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        console.error("Delete Student Error:", error);
        res.status(500).json({ message: "Error deleting student" });
    }
});


router.post('/student/sync', studentController.simulateSync);

module.exports = router;
```

## File: chrono-dashboard/src/pages/AdminPanel.js
```javascript
import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import AdminSidebar from '../components/AdminSidebar';
import QuestionManagement from './QuestionManagement';
import UsersList from '../components/admin/UsersList';
import FeedbackSection from '../components/admin/FeedbackSection';
import toast, { Toaster } from 'react-hot-toast';
import { Users, BookOpen, Lock } from 'lucide-react';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3000/api/v1';

const StatCard = ({ title, value, icon }) => (
    <div className="stat-card">
        <p className="stat-card-label">{title}</p>
        <div className="stat-card-icon-row">
            <div className="text-slate-900">{icon}</div>
            <p className="stat-card-value">{value}</p>
        </div>
    </div>
);

const AdminPanel = () => {
    const { teacher, logout } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [loading, setLoading] = useState(false);

    const [users, setUsers] = useState({ teachers: [], students: [] });
    const [searchTerm, setSearchTerm] = useState('');

    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [editingUserType, setEditingUserType] = useState(null);
    const [editFormData, setEditFormData] = useState({ name: '', email: '', role: 'teacher' });

    const [analytics, setAnalytics] = useState(null);
    const [activityLogs, setActivityLogs] = useState([]);
    const [feedback, setFeedback] = useState([]);
    const [feedbackSearch, setFeedbackSearch] = useState('');
    const [expandedFeedback, setExpandedFeedback] = useState(null);

    const [settingsForm, setSettingsForm] = useState({
        max_learning_groups_per_instructor: '',
        max_learners_per_group: ''
    });
    const [settingsSaving, setSettingsSaving] = useState(false);

    const token = localStorage.getItem('teacherToken');
    const headers = useMemo(() => ({ Authorization: `Bearer ${token}` }), [token]);

    useEffect(() => {
        if (teacher && teacher.role !== 'admin') {
            toast.error('Admin access required');
            logout();
        }
    }, [teacher, logout]);

    const fetchAllUsers = useCallback(async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`${API_BASE}/admin/users`, { headers });
            setUsers(data);
            toast.success('Users loaded');
        } catch (error) {
            toast.error('Failed to load users');
        }
        setLoading(false);
    }, [headers]);

    const handleDeactivateUser = async (userId, userType) => {
        if (window.confirm('Are you sure you want to deactivate this user?')) {
            try {
                await axios.post(`${API_BASE}/admin/users/deactivate`, { userId, userType }, { headers });
                toast.success('User deactivated');
                fetchAllUsers();
            } catch (error) {
                toast.error('Failed to deactivate user');
            }
        }
    };

    const handleDeleteUser = async (userId, userType) => {
        if (window.confirm('Confirm deletion? This action cannot be undone!')) {
            try {
                await axios.delete(`${API_BASE}/admin/users/${userId}`, { headers, data: { userId, userType } });
                toast.success('User deleted');
                fetchAllUsers();
            } catch (error) {
                toast.error('Failed to delete user');
            }
        }
    };

    const handleEditUser = (user, userType) => {
        setEditingUser(user);
        setEditingUserType(userType);
        setEditFormData({ name: user.name, email: user.email, role: user.role || 'teacher' });
        setEditModalOpen(true);
    };

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`${API_BASE}/admin/users/${editingUser._id}/${editingUserType}`, editFormData, { headers });
            toast.success('User updated successfully');
            setEditModalOpen(false);
            fetchAllUsers();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to update user');
        }
    };

    const fetchAnalytics = useCallback(async () => {
        setLoading(true);
        try {
            const [analyticsRes, activityRes] = await Promise.all([
                axios.get(`${API_BASE}/admin/analytics`, { headers }),
                axios.get(`${API_BASE}/admin/activity-logs-detailed?limit=50`, { headers })
            ]);
            setAnalytics(analyticsRes.data);
            setActivityLogs(activityRes.data.logs || []);
        } catch (error) {
            toast.error('Failed to load analytics');
        }
        setLoading(false);
    }, [headers]);

    const fetchFeedback = useCallback(async () => {
        try {
            const { data } = await axios.get(`${API_BASE}/admin/feedback`, { headers });
            setFeedback(data.feedback || []);
        } catch (error) {
            toast.error('Failed to load feedback');
        }
    }, [headers]);

    const fetchSettings = useCallback(async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`${API_BASE}/admin/settings`, { headers });
            setSettingsForm(prev => ({
                ...prev,
                max_learning_groups_per_instructor: data.max_learning_groups_per_instructor?.value || 5,
                max_learners_per_group: data.max_learners_per_group?.value || 50
            }));
        } catch (error) {
            toast.error('Failed to load settings');
        }
        setLoading(false);
    }, [headers]);

    const handleSaveSettings = async () => {
        setSettingsSaving(true);
        try {
            await axios.post(`${API_BASE}/admin/settings`, {
                key: 'max_learning_groups_per_instructor',
                value: parseInt(settingsForm.max_learning_groups_per_instructor),
                type: 'number',
                category: 'security'
            }, { headers });
            await axios.post(`${API_BASE}/admin/settings`, {
                key: 'max_learners_per_group',
                value: parseInt(settingsForm.max_learners_per_group),
                type: 'number',
                category: 'security'
            }, { headers });
            toast.success('Settings saved successfully');
            fetchSettings();
        } catch (error) {
            toast.error('Failed to save settings');
        }
        setSettingsSaving(false);
    };

    useEffect(() => {
        if (activeTab === 'users') fetchAllUsers();
        else if (activeTab === 'dashboard') { fetchAnalytics(); fetchAllUsers(); }
        else if (activeTab === 'feedback') fetchFeedback();
        else if (activeTab === 'settings') fetchSettings();
    }, [activeTab, fetchAllUsers, fetchAnalytics, fetchFeedback, fetchSettings]);

    // Search filters — computed outside sub-components so they react to state changes
    const filteredTeachers = users.teachers?.filter(t =>
        t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.email.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    const filteredStudents = users.students?.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (s.classCode || '').toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    const filteredFeedback = feedback.filter(fb => {
        if (!feedbackSearch) return true;
        const q = feedbackSearch.toLowerCase();
        return (
            fb.title?.toLowerCase().includes(q) ||
            fb.description?.toLowerCase().includes(q) ||
            fb.submittedBy?.email?.toLowerCase().includes(q) ||
            fb.submittedBy?.name?.toLowerCase().includes(q) ||
            fb.type?.toLowerCase().includes(q) ||
            fb.status?.toLowerCase().includes(q)
        );
    });



    const AnalyticsDashboard = () => {
        const totalUsers = (users.teachers?.length || 0) + (users.students?.length || 0);
        return (
            <div className="space-y-10">
                <div>
                    <h2 className="page-title">Learning Analytics</h2>
                    <p className="page-subtitle">System-wide overview and statistics</p>
                </div>
                <div className="grid-4">
                    <StatCard title="Total Users" value={totalUsers} icon={<Users size={24} />} />
                    <StatCard title="Instructors" value={users.teachers?.length || 0} icon={<Users size={24} />} />
                    <StatCard title="Learners" value={users.students?.length || 0} icon={<Users size={24} />} />
                    <StatCard title="Learning Groups" value={analytics?.totalSections || 0} icon={<BookOpen size={24} />} />
                </div>

                {activityLogs.length > 0 && (
                    <div className="card">
                        <div style={{ marginBottom: '24px' }}>
                            <h3 className="section-title">Recent Activity</h3>
                            <p className="section-subtitle">Last 50 system activities</p>
                        </div>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                                        {['User', 'Action', 'Resource', 'Timestamp', 'Status', 'Details'].map(h => (
                                            <th key={h} style={{ padding: '12px', textAlign: 'left', fontWeight: 700, color: '#475569', fontSize: '0.875rem' }}>{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {activityLogs.map(log => (
                                        <tr key={log._id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                            <td style={{ padding: '12px', fontSize: '0.875rem' }}>
                                                <p style={{ fontWeight: 600, color: '#1e293b', margin: 0 }}>{log.userName || 'Unknown'}</p>
                                                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: '4px 0 0 0' }}>{log.userEmail}</p>
                                            </td>
                                            <td style={{ padding: '12px', fontSize: '0.875rem' }}>
                                                <span style={{ backgroundColor: '#e0e7ff', color: '#3730a3', padding: '4px 8px', borderRadius: '4px', fontWeight: 600 }}>
                                                    {log.action?.replace(/_/g, ' ')}
                                                </span>
                                            </td>
                                            <td style={{ padding: '12px', fontSize: '0.875rem', color: '#475569' }}>{log.resource || 'N/A'}</td>
                                            <td style={{ padding: '12px', fontSize: '0.875rem', color: '#64748b', whiteSpace: 'nowrap' }}>
                                                {new Date(log.createdAt).toLocaleString()}
                                            </td>
                                            <td style={{ padding: '12px', fontSize: '0.875rem' }}>
                                                <span style={{
                                                    backgroundColor: log.status === 'success' ? '#dcfce7' : '#fee2e2',
                                                    color: log.status === 'success' ? '#166534' : '#991b1b',
                                                    padding: '4px 8px', borderRadius: '4px', fontWeight: 600
                                                }}>
                                                    {log.status?.toUpperCase()}
                                                </span>
                                            </td>
                                            <td style={{ padding: '12px', fontSize: '0.875rem', color: '#64748b', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                {log.details ? JSON.stringify(log.details).substring(0, 50) + '...' : '-'}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        );
    };



    const SettingsSection = () => (
        <div className="space-y-8">
            <h2 className="page-title">System Settings</h2>
            <div className="card">
                <h3 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <Lock size={20} style={{ color: '#475569' }} /> Security Settings
                </h3>
                {loading ? (
                    <div style={{ textAlign: 'center', color: '#94a3b8', fontWeight: 600 }}>Loading settings...</div>
                ) : (
                    <div className="space-y-6">
                        <div className="settings-row">
                            <div style={{ flex: 1 }}>
                                <p className="settings-row-label">Max Learning Groups Per Instructor</p>
                                <p className="settings-row-desc">Maximum number of learning groups an instructor can create</p>
                            </div>
                            <input
                                type="number"
                                value={settingsForm.max_learning_groups_per_instructor}
                                onChange={(e) => setSettingsForm(prev => ({ ...prev, max_learning_groups_per_instructor: e.target.value }))}
                                disabled={settingsSaving}
                                className="form-input-number"
                            />
                        </div>
                        <div className="settings-row">
                            <div style={{ flex: 1 }}>
                                <p className="settings-row-label">Max Learners Per Learning Group</p>
                                <p className="settings-row-desc">Maximum number of learners that can join a learning group</p>
                            </div>
                            <input
                                type="number"
                                value={settingsForm.max_learners_per_group}
                                onChange={(e) => setSettingsForm(prev => ({ ...prev, max_learners_per_group: e.target.value }))}
                                disabled={settingsSaving}
                                className="form-input-number"
                            />
                        </div>
                        <div className="flex-gap-3" style={{ paddingTop: '16px' }}>
                            <button onClick={handleSaveSettings} disabled={settingsSaving} className="btn-dark">
                                {settingsSaving ? 'Saving...' : 'Save Settings'}
                            </button>
                            <button onClick={fetchSettings} disabled={settingsSaving} className="btn-outline-dark">
                                Reset
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="page">
            <Toaster position="top-right" />
            <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <main className="main-padded">
                <header className="page-header">
                    <h2 className="page-title">Welcome, {teacher?.name || 'Admin'}</h2>
                </header>

                {loading && <div style={{ textAlign: 'center', color: '#94a3b8', fontWeight: 700 }}>Loading...</div>}
                {activeTab === 'dashboard' && <AnalyticsDashboard />}
                {activeTab === 'users' && (
                    <UsersList
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        users={users}
                        filteredTeachers={filteredTeachers}
                        filteredStudents={filteredStudents}
                        handleEditUser={handleEditUser}
                        handleDeactivateUser={handleDeactivateUser}
                        handleDeleteUser={handleDeleteUser}
                    />
                )}
                {activeTab === 'questions' && <QuestionManagement />}
                {activeTab === 'feedback' && (
                    <FeedbackSection
                        feedbackSearch={feedbackSearch}
                        setFeedbackSearch={setFeedbackSearch}
                        filteredFeedback={filteredFeedback}
                        feedback={feedback}
                        expandedFeedback={expandedFeedback}
                        setExpandedFeedback={setExpandedFeedback}
                    />
                )}
                {activeTab === 'settings' && <SettingsSection />}
            </main>

            {editModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-md">
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '24px' }}>Edit User</h3>
                        <form onSubmit={handleUpdateUser} className="space-y-6">
                            <div className="form-group">
                                <label className="form-label-sm">Name</label>
                                <input
                                    type="text"
                                    value={editFormData.name}
                                    onChange={(e) => setEditFormData(prev => ({ ...prev, name: e.target.value }))}
                                    className="form-input-sm"
                                    placeholder="User name"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label-sm">Email</label>
                                <input
                                    type="email"
                                    value={editFormData.email}
                                    onChange={(e) => setEditFormData(prev => ({ ...prev, email: e.target.value }))}
                                    className="form-input-sm"
                                    placeholder="user@example.com"
                                />
                            </div>
                            {editingUserType === 'teacher' && (
                                <>
                                    <div className="form-group">
                                        <label className="form-label-sm">Role</label>
                                        <select
                                            value={editFormData.role}
                                            onChange={(e) => setEditFormData(prev => ({ ...prev, role: e.target.value }))}
                                            className="form-select"
                                        >
                                            <option value="teacher">Teacher</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </div>
                                </>
                            )}
                            <div className="flex-gap-3 flex-end" style={{ paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
                                <button type="button" onClick={() => setEditModalOpen(false)} className="btn-outline">Cancel</button>
                                <button type="submit" className="btn-indigo">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPanel;
```

## File: chronoquest-api/package.json
```json
{
  "name": "chronoquest-api",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "test:ci": "jest --forceExit",
    "dev": "nodemon server.js",
    "test": "jest --watchAll --verbose"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "dependencies": {
    "bcryptjs": "^3.0.3",
    "cors": "^2.8.6",
    "dotenv": "^17.4.0",
    "express": "^5.2.1",
    "express-rate-limit": "^8.3.2",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^9.4.1"
  },
  "devDependencies": {
    "jest": "^30.3.0",
    "jest-junit": "^16.0.0",
    "mongodb-memory-server": "^11.0.1",
    "nodemon": "^3.1.14",
    "supertest": "^7.2.2",
    "tslib": "^2.8.1"
  },
  "jest": {
    "reporters": [
      "default",
      [
        "jest-junit",
        {
          "outputDirectory": "reports",
          "outputName": "jest-results.xml"
        }
      ]
    ]
  }
}
```

## File: chronoquest-api/reports/jest-results.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<testsuites name="jest tests" tests="21" failures="19" errors="0" time="12.668">
  <testsuite name="Admin Routes - Auth Guards" errors="0" failures="11" skipped="0" timestamp="2026-04-13T13:36:37" time="6.858" tests="11">
    <testcase classname="Admin Routes - Auth Guards GET /api/v1/admin/users - 401 with no token" name="Admin Routes - Auth Guards GET /api/v1/admin/users - 401 with no token" time="0.007">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\admin.test.js:14:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
    </testcase>
    <testcase classname="Admin Routes - Auth Guards GET /api/v1/admin/users - 403 when caller is a regular teacher" name="Admin Routes - Auth Guards GET /api/v1/admin/users - 403 when caller is a regular teacher" time="0">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\admin.test.js:14:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
    </testcase>
    <testcase classname="Admin - GET /api/v1/admin/users 200 and returns teachers + students arrays" name="Admin - GET /api/v1/admin/users 200 and returns teachers + students arrays" time="0">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\admin.test.js:14:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
    </testcase>
    <testcase classname="Admin - GET /api/v1/admin/users passwords are excluded from the response" name="Admin - GET /api/v1/admin/users passwords are excluded from the response" time="0.001">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\admin.test.js:14:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
    </testcase>
    <testcase classname="Admin - GET /api/v1/admin/analytics 200 and returns platform stats" name="Admin - GET /api/v1/admin/analytics 200 and returns platform stats" time="0">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\admin.test.js:14:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
    </testcase>
    <testcase classname="Admin - POST /api/v1/admin/users/deactivate 200 when deactivating a student" name="Admin - POST /api/v1/admin/users/deactivate 200 when deactivating a student" time="0.001">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\admin.test.js:14:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
    </testcase>
    <testcase classname="Admin - POST /api/v1/admin/users/deactivate 200 when deactivating a teacher" name="Admin - POST /api/v1/admin/users/deactivate 200 when deactivating a teacher" time="0">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\admin.test.js:14:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
    </testcase>
    <testcase classname="Admin - POST /api/v1/admin/users/delete 400 when userType is invalid" name="Admin - POST /api/v1/admin/users/delete 400 when userType is invalid" time="0">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\admin.test.js:14:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
    </testcase>
    <testcase classname="Admin - POST /api/v1/admin/users/delete 404 when student id does not exist" name="Admin - POST /api/v1/admin/users/delete 404 when student id does not exist" time="0">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\admin.test.js:14:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
    </testcase>
    <testcase classname="Admin - POST /api/v1/admin/users/delete 200 when deleting a real student" name="Admin - POST /api/v1/admin/users/delete 200 when deleting a real student" time="0">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\admin.test.js:14:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
    </testcase>
    <testcase classname="Admin - POST /api/v1/admin/users/delete 400 when trying to delete the last admin" name="Admin - POST /api/v1/admin/users/delete 400 when trying to delete the last admin" time="0">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\admin.test.js:14:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
    </testcase>
  </testsuite>
  <testsuite name="Student Score Sync" errors="0" failures="3" skipped="0" timestamp="2026-04-13T13:36:37" time="7.229" tests="3">
    <testcase classname="Student Score Sync POST /api/v1/student/sync - 201 when class code is valid" name="Student Score Sync POST /api/v1/student/sync - 201 when class code is valid" time="0.006">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\student.test.js:10:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
      <failure>MongoServerError: E11000 duplicate key error collection: chronoquest.teachers index: email_1 dup key: { email: &quot;seed@chronoquest.edu&quot; }
    at InsertOneOperation.handleOk (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongodb\src\operations\insert.ts:79:13)
    at tryOperation (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongodb\src\operations\execute_operation.ts:295:26)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)
    at executeOperation (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongodb\src\operations\execute_operation.ts:123:12)
    at Collection.insertOne (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongodb\src\collection.ts:294:12)
    at model.$__save (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\model.js:428:16)
    at model.save (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\model.js:667:5)
    at model.create (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\model.js:2754:5)
    at Object.&lt;anonymous&gt; (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\student.test.js:24:25)</failure>
    </testcase>
    <testcase classname="Student Score Sync POST /api/v1/student/sync - 404 when class code does not exist" name="Student Score Sync POST /api/v1/student/sync - 404 when class code does not exist" time="0.001">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\student.test.js:10:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
      <failure>MongoServerError: E11000 duplicate key error collection: chronoquest.teachers index: email_1 dup key: { email: &quot;seed@chronoquest.edu&quot; }
    at InsertOneOperation.handleOk (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongodb\src\operations\insert.ts:79:13)
    at tryOperation (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongodb\src\operations\execute_operation.ts:295:26)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)
    at executeOperation (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongodb\src\operations\execute_operation.ts:123:12)
    at Collection.insertOne (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongodb\src\collection.ts:294:12)
    at model.$__save (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\model.js:428:16)
    at model.save (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\model.js:667:5)
    at model.create (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\model.js:2754:5)
    at Object.&lt;anonymous&gt; (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\student.test.js:24:25)</failure>
    </testcase>
    <testcase classname="Student Score Sync POST /api/v1/student/sync - score is stored as provided" name="Student Score Sync POST /api/v1/student/sync - score is stored as provided" time="0">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\student.test.js:10:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
      <failure>MongoServerError: E11000 duplicate key error collection: chronoquest.teachers index: email_1 dup key: { email: &quot;seed@chronoquest.edu&quot; }
    at InsertOneOperation.handleOk (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongodb\src\operations\insert.ts:79:13)
    at tryOperation (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongodb\src\operations\execute_operation.ts:295:26)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)
    at executeOperation (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongodb\src\operations\execute_operation.ts:123:12)
    at Collection.insertOne (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongodb\src\collection.ts:294:12)
    at model.$__save (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\model.js:428:16)
    at model.save (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\model.js:667:5)
    at model.create (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\model.js:2754:5)
    at Object.&lt;anonymous&gt; (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\student.test.js:24:25)</failure>
    </testcase>
  </testsuite>
  <testsuite name="Integration Test: Authentication" errors="0" failures="2" skipped="0" timestamp="2026-04-13T13:36:45" time="3.069" tests="2">
    <testcase classname="Integration Test: Authentication POST /api/v1/auth/register - Should create a new instructor" name="Integration Test: Authentication POST /api/v1/auth/register - Should create a new instructor" time="0.001">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\auth.test.js:11:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
    </testcase>
    <testcase classname="Integration Test: Authentication POST /api/v1/auth/login - Should return a JWT token" name="Integration Test: Authentication POST /api/v1/auth/login - Should return a JWT token" time="0.001">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\auth.test.js:11:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
    </testcase>
  </testsuite>
  <testsuite name="Unit Test: generateClassCode" errors="0" failures="0" skipped="0" timestamp="2026-04-13T13:36:49" time="0.093" tests="2">
    <testcase classname="Unit Test: generateClassCode should generate a string of exactly 6 characters" name="Unit Test: generateClassCode should generate a string of exactly 6 characters" time="0.005">
    </testcase>
    <testcase classname="Unit Test: generateClassCode should only contain alphanumeric characters" name="Unit Test: generateClassCode should only contain alphanumeric characters" time="0.005">
    </testcase>
  </testsuite>
  <testsuite name="Teacher Section Management" errors="0" failures="3" skipped="0" timestamp="2026-04-13T13:36:45" time="4.081" tests="3">
    <testcase classname="Teacher Section Management POST /api/v1/teacher/add-section - Adds a new class" name="Teacher Section Management POST /api/v1/teacher/add-section - Adds a new class" time="0">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\teacher.test.js:13:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
    </testcase>
    <testcase classname="Teacher Section Management POST /api/v1/teacher/archive-section/:code - Should archive class" name="Teacher Section Management POST /api/v1/teacher/archive-section/:code - Should archive class" time="0">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\teacher.test.js:13:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
    </testcase>
    <testcase classname="Teacher Section Management DELETE /api/v1/teacher/delete-section/:code - Should delete class" name="Teacher Section Management DELETE /api/v1/teacher/delete-section/:code - Should delete class" time="0">
      <failure>MongooseError: Can&apos;t call `openUri()` on an active connection with different connection strings. Make sure you aren&apos;t calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections
    at NativeConnection.createClient (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\drivers\node-mongodb-native\connection.js:248:13)
    at NativeConnection.openUri (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\connection.js:1086:34)
    at Mongoose.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\node_modules\mongoose\lib\mongoose.js:475:15)
    at Object.connect (C:\Users\PC\Documents\WEBDEV 2\ZZZ\CHRONO-API\chronoquest-api\src\tests\teacher.test.js:13:20)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)</failure>
    </testcase>
  </testsuite>
</testsuites>
```

## File: chronoquest-api/src/controllers/adminController.js
```javascript
const Teacher = require('../models/teacherModel');
const Student = require('../models/studentModel');
const ActivityLog = require('../models/activityLogModel');
const Feedback = require('../models/feedbackModel');
const SystemSettings = require('../models/systemSettingsModel');

exports.getAllUsers = async (req, res) => {
    try {
        const teachers = await Teacher.find().select('-password');
        const students = await Student.find().select('-password');

        const formattedTeachers = teachers.map(t => ({
            ...t.toObject(),
            userType: 'teacher',
            totalSections: t.sections?.length || 0
        }));

        const formattedStudents = students.map(s => ({
            ...s.toObject(),
            userType: 'student'
        }));

        res.json({
            message: 'Users retrieved successfully',
            teachers: formattedTeachers,
            students: formattedStudents,
            totalUsers: formattedTeachers.length + formattedStudents.length,
            totalTeachers: formattedTeachers.length,
            totalStudents: formattedStudents.length
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

exports.deactivateUser = async (req, res) => {
    try {
        const { userId, userType } = req.body;

        if (userType === 'teacher') {
            await Teacher.findByIdAndUpdate(userId, { isActive: false });
            await ActivityLog.create({
                userId: req.user._id,
                userRole: req.user.role,
                action: 'DEACTIVATE_TEACHER',
                resourceId: userId,
                status: 'success'
            });
        } else if (userType === 'student') {
            await Student.findByIdAndUpdate(userId, { isActive: false });
            await ActivityLog.create({
                userId: req.user._id,
                userRole: req.user.role,
                action: 'DEACTIVATE_STUDENT',
                resourceId: userId,
                status: 'success'
            });
        }

        res.json({ message: `User deactivated successfully` });
    } catch (error) {
        res.status(500).json({ message: 'Error deactivating user', error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { userId, userType } = req.body;

        // Validate userType
        if (!['teacher', 'student'].includes(userType)) {
            return res.status(400).json({
                message: 'Invalid userType. Use "teacher" or "student". Note: admins are teachers with role="admin"',
                errorCode: 'INVALID_USER_TYPE'
            });
        }

        let deletedUser;

        if (userType === 'teacher') {
            // Check if this is the last admin
            const adminCount = await Teacher.countDocuments({ role: 'admin' });
            const userToDelete = await Teacher.findById(userId);

            if (userToDelete && userToDelete.role === 'admin' && adminCount === 1) {
                return res.status(400).json({ message: 'Cannot delete the last admin account' });
            }

            deletedUser = await Teacher.findByIdAndDelete(userId);
        } else if (userType === 'student') {
            deletedUser = await Student.findByIdAndDelete(userId);
        }

        // Check if user was actually found and deleted
        if (!deletedUser) {
            return res.status(404).json({ message: `${userType === 'teacher' ? 'Teacher' : 'Student'} not found` });
        }

        await ActivityLog.create({
            userId: req.user._id,
            userRole: req.user.role,
            action: 'DELETE_USER',
            resource: userType,
            resourceId: userId,
            status: 'success'
        });

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { userId, userType } = req.params;
        const { name, email, role } = req.body;

        if (userType === 'teacher') {
            // Validate email uniqueness if provided
            if (email) {
                const existingTeacher = await Teacher.findOne({ email, _id: { $ne: userId } });
                if (existingTeacher) {
                    return res.status(400).json({ message: 'Email already in use' });
                }
            }

            // Validate role if provided
            if (role && !['teacher', 'admin'].includes(role)) {
                return res.status(400).json({ message: 'Invalid role' });
            }

            const updateData = {};
            if (name) updateData.name = name;
            if (email) updateData.email = email;
            if (role) updateData.role = role;

            const updatedTeacher = await Teacher.findByIdAndUpdate(
                userId,
                updateData,
                { new: true }
            ).select('-password');

            // Log the action
            await ActivityLog.create({
                userId: req.user._id,
                userRole: req.user.role,
                action: 'UPDATE_USER',
                resource: 'teacher',
                resourceId: userId,
                details: { changedFields: Object.keys(updateData) },
                status: 'success'
            });

            res.json({
                message: 'User updated successfully',
                user: updatedTeacher
            });
        } else if (userType === 'student') {
            // Validate email uniqueness if provided
            if (email) {
                const existingStudent = await Student.findOne({ email, _id: { $ne: userId } });
                if (existingStudent) {
                    return res.status(400).json({ message: 'Email already in use' });
                }
            }

            const updateData = {};
            if (name) updateData.name = name;
            if (email) updateData.email = email;

            const updatedStudent = await Student.findByIdAndUpdate(
                userId,
                updateData,
                { new: true }
            ).select('-password');

            // Log the action
            await ActivityLog.create({
                userId: req.user._id,
                userRole: req.user.role,
                action: 'UPDATE_USER',
                resource: 'student',
                resourceId: userId,
                details: { changedFields: Object.keys(updateData) },
                status: 'success'
            });

            res.json({
                message: 'User updated successfully',
                user: updatedStudent
            });
        } else {
            res.status(400).json({ message: 'Invalid user type' });
        }
    } catch (error) {
        console.error('Update User Error:', error);
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};

exports.getUserActivityLogs = async (req, res) => {
    try {
        const { userId } = req.params;
        const logs = await ActivityLog.find({ userId })
            .sort({ createdAt: -1 })
            .limit(100);

        res.json({
            message: 'User activity logs retrieved successfully',
            logs
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching activity logs', error: error.message });
    }
};

exports.getAllActivityLogs = async (req, res) => {
    try {
        const { limit = 500, skip = 0 } = req.query;
        const logs = await ActivityLog.find()
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .skip(parseInt(skip));

        const total = await ActivityLog.countDocuments();

        res.json({
            message: 'All activity logs retrieved successfully',
            logs,
            total
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching logs', error: error.message });
    }
};

exports.getSystemAnalytics = async (req, res) => {
    try {
        const totalTeachers = await Teacher.countDocuments();
        const totalStudents = await Student.countDocuments();
        const totalSections = await Teacher.aggregate([
            { $unwind: '$sections' },
            { $count: 'total' }
        ]);

        const recentUsers = await Teacher.find()
            .sort({ createdAt: -1 })
            .limit(10)
            .select('name email createdAt');

        const platformStats = {
            totalTeachers,
            totalStudents,
            totalSections: totalSections[0]?.total || 0,
            totalUsers: totalTeachers + totalStudents,
            avgStudentsPerTeacher: totalTeachers > 0 ? (totalStudents / totalTeachers).toFixed(2) : 0,
            recentUsers
        };

        res.json({
            message: 'System analytics retrieved successfully',
            ...platformStats
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching analytics', error: error.message });
    }
};

exports.getUsageStats = async (req, res) => {
    try {
        const logs = await ActivityLog.aggregate([
            {
                $group: {
                    _id: '$action',
                    count: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } }
        ]);

        const dailyActivity = await ActivityLog.aggregate([
            {
                $group: {
                    _id: {
                        $dateToString: { format: '%Y-%m-%d', date: '$createdAt' }
                    },
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: -1 } },
            { $limit: 30 }
        ]);

        res.json({
            message: 'Usage stats retrieved successfully',
            actionStats: logs,
            dailyActivity
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching usage stats', error: error.message });
    }
};

exports.getAllFeedback = async (req, res) => {
    try {
        const { status, type } = req.query;
        const filter = {};

        if (status) filter.status = status;
        if (type) filter.type = type;

        const feedback = await Feedback.find(filter)
            .populate('submittedBy', 'name email')
            .populate('response.admin', 'name email')
            .sort({ createdAt: -1 });

        res.json({
            message: 'Feedback retrieved successfully',
            feedback
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedback', error: error.message });
    }
};

exports.respondToFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const { message, status } = req.body;

        const feedback = await Feedback.findByIdAndUpdate(
            id,
            {
                'response.admin': req.user._id,
                'response.message': message,
                'response.respondedAt': new Date(),
                status: status || 'in_progress'
            },
            { new: true }
        ).populate('submittedBy', 'name email')
            .populate('response.admin', 'name email');

        await ActivityLog.create({
            userId: req.user._id,
            userRole: req.user.role,
            action: 'RESPOND_FEEDBACK',
            resourceId: id,
            status: 'success'
        });

        res.json({ message: 'Feedback responded successfully', feedback });
    } catch (error) {
        res.status(500).json({ message: 'Error responding to feedback', error: error.message });
    }
};

exports.getSystemSettings = async (req, res) => {
    try {
        const settings = await SystemSettings.find();
        const settingsObj = {};

        settings.forEach(s => {
            settingsObj[s.key] = {
                value: s.value,
                type: s.type,
                description: s.description,
                category: s.category
            };
        });

        res.json(settingsObj);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching settings', error: error.message });
    }
};

exports.updateSystemSetting = async (req, res) => {
    try {
        const { key, value, type = 'string' } = req.body;

        const setting = await SystemSettings.findOneAndUpdate(
            { key },
            {
                key,
                value,
                type,
                updatedBy: req.user._id,
                updatedAt: new Date()
            },
            { upsert: true, new: true }
        );

        await ActivityLog.create({
            userId: req.user._id,
            userRole: req.user.role,
            action: 'UPDATE_SETTING',
            details: { key, oldValue: setting.value, newValue: value },
            status: 'success'
        });

        res.json({ message: 'Setting updated successfully', setting });
    } catch (error) {
        res.status(500).json({ message: 'Error updating setting', error: error.message });
    }
};

exports.syncScores = async (req, res) => {
    try {
        const Score = require('../models/scoreModel');
        // Sync ALL students (including score: 0) for initial leaderboard population
        const students = await Student.find({});

        if (students.length === 0) {
            return res.json({ message: 'No students to sync', synced: 0 });
        }

        let syncedCount = 0;
        const syncErrors = [];

        for (const student of students) {
            try {
                // Check if score already exists for this student
                const existingScore = await Score.findOne({
                    studentName: student.name,
                    classCode: student.classCode
                });

                if (!existingScore) {
                    // Get teacher data for this student's class
                    const teacher = await Teacher.findOne({
                        sections: { $elemMatch: { classCode: student.classCode } }
                    });

                    if (teacher) {
                        await Score.create({
                            studentName: student.name,
                            classCode: student.classCode,
                            levelReached: student.levelReached,
                            score: Math.min(student.score, 100), // Ensure max 100
                            teacherId: teacher._id
                        });
                        syncedCount++;
                    }
                }
            } catch (error) {
                syncErrors.push(`Failed to sync ${student.name}: ${error.message}`);
            }
        }

        await ActivityLog.create({
            userId: req.user._id,
            userRole: req.user.role,
            action: 'SYNC_SCORES',
            details: { totalAttempted: students.length, successfulSync: syncedCount },
            status: syncErrors.length === 0 ? 'success' : 'partial'
        });

        res.json({
            message: 'Score sync completed',
            synced: syncedCount,
            total: students.length,
            errors: syncErrors.length > 0 ? syncErrors : null
        });
    } catch (error) {
        res.status(500).json({ message: 'Error syncing scores', error: error.message });
    }
};

exports.getRecentActivityLogs = async (req, res) => {
    try {
        const { limit = 50 } = req.query;

        const logs = await ActivityLog.aggregate([
            { $sort: { createdAt: -1 } },
            { $limit: parseInt(limit) },
            {
                $lookup: {
                    from: 'teachers',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'userDetails'
                }
            },
            {
                $lookup: {
                    from: 'students',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'studentDetails'
                }
            },
            {
                $project: {
                    _id: 1,
                    userId: 1,
                    action: 1,
                    resource: 1,
                    resourceId: 1,
                    details: 1,
                    status: 1,
                    createdAt: 1,
                    userName: {
                        $cond: [
                            { $gt: [{ $size: '$userDetails' }, 0] },
                            { $arrayElemAt: ['$userDetails.name', 0] },
                            { $arrayElemAt: ['$studentDetails.name', 0] }
                        ]
                    },
                    userEmail: {
                        $cond: [
                            { $gt: [{ $size: '$userDetails' }, 0] },
                            { $arrayElemAt: ['$userDetails.email', 0] },
                            { $arrayElemAt: ['$studentDetails.email', 0] }
                        ]
                    }
                }
            }
        ]);

        res.json({
            logs,
            total: logs.length,
            timestamp: new Date()
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching activity logs', error: error.message });
    }
};
```

## File: chronoquest-api/src/models/teacherModel.js
```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const sectionSchema = new mongoose.Schema({
    sectionName: {
        type: String,
        required: true
    },
    classCode: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isArchived: {
        type: Boolean,
        default: false
    },
    archivedAt: {
        type: Date,
        default: null
    }
});

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    classCode: {
        type: String,
        sparse: true,
        default: null
    },
    role: {
        type: String,
        enum: ['teacher', 'admin'],
        default: 'teacher'
    },

    sections: [sectionSchema],

    permissions: [{
        type: String


    }],
    isActive: {
        type: Boolean,
        default: true
    },
    lastLogin: {
        type: Date
    }
}, { timestamps: true });

// --- PASSWORD HASHING LOGIC ---
teacherSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        return;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// --- PASSWORD COMPARISON LOGIC ---
teacherSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Teacher', teacherSchema);
```

## File: chronoquest-api/server.js
```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const apiRoutes = require('./src/routes/apiRoutes');

dotenv.config();
const app = express();

// 1. IMPROVED CORS (This stops the "Unsafe attempt" errors)
app.use(cors({
    origin: [
        "http://localhost:3001",
        "https://web2finalchronodashboard.vercel.app"
    ],
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

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/chronoquest';

const PORT = 3000;

module.exports = app;

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
```
