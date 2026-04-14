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
package.json
postcss.config.js
public/favicon.ico
public/index.html
public/logo192.png
public/logo512.png
public/manifest.json
public/robots.txt
README.md
src/App.css
src/App.js
src/components/admin/FeedbackSection.js
src/components/admin/UsersList.js
src/components/AdminSidebar.js
src/components/TeacherSidebar.js
src/context/AuthContext.js
src/index.css
src/index.js
src/logo.svg
src/pages/AdminPanel.js
src/pages/ClassResults.js
src/pages/Dashboard.js
src/pages/LoginPage.js
src/pages/ProfileSettings.js
src/pages/QuestionManagement.js
src/pages/RegisterPage.js
src/reportWebVitals.js
src/setupTests.js
```

# Files

## File: package.json
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

## File: postcss.config.js
```javascript
module.exports = {
  plugins: {
    autoprefixer: {},
  },
}
```

## File: public/index.html
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

## File: public/manifest.json
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

## File: public/robots.txt
```
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:
```

## File: README.md
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

## File: src/App.css
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

## File: src/App.js
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

## File: src/components/admin/FeedbackSection.js
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

## File: src/components/admin/UsersList.js
```javascript
import React, { useState } from 'react';
import { Trash2, Edit2, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const PAGE_SIZE = 10;

const Pagination = ({ total, page, onPage }) => {
    const pages = Math.ceil(total / PAGE_SIZE);
    if (pages <= 1) return null;
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '6px', marginTop: '16px' }}>
            <button
                onClick={() => onPage(page - 1)}
                disabled={page === 1}
                style={{ padding: '4px 8px', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'none', cursor: page === 1 ? 'not-allowed' : 'pointer', opacity: page === 1 ? 0.4 : 1, display: 'flex', alignItems: 'center' }}
            ><ChevronLeft size={14} /></button>
            {Array.from({ length: pages }, (_, i) => i + 1).map(p => (
                <button
                    key={p}
                    onClick={() => onPage(p)}
                    style={{
                        padding: '4px 10px', border: '1px solid', borderRadius: '8px', cursor: 'pointer',
                        fontWeight: 700, fontSize: '0.75rem',
                        borderColor: p === page ? '#0f172a' : '#e2e8f0',
                        background: p === page ? '#0f172a' : 'none',
                        color: p === page ? '#fff' : '#475569',
                    }}
                >{p}</button>
            ))}
            <button
                onClick={() => onPage(page + 1)}
                disabled={page === pages}
                style={{ padding: '4px 8px', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'none', cursor: page === pages ? 'not-allowed' : 'pointer', opacity: page === pages ? 0.4 : 1, display: 'flex', alignItems: 'center' }}
            ><ChevronRight size={14} /></button>
        </div>
    );
};

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
    const [teacherPage, setTeacherPage] = useState(1);
    const [studentPage, setStudentPage] = useState(1);

    // Reset to page 1 when search changes
    React.useEffect(() => { setTeacherPage(1); setStudentPage(1); }, [searchTerm]);

    const pagedTeachers = filteredTeachers.slice((teacherPage - 1) * PAGE_SIZE, teacherPage * PAGE_SIZE);
    const pagedStudents = filteredStudents.slice((studentPage - 1) * PAGE_SIZE, studentPage * PAGE_SIZE);

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
                            {pagedTeachers.length === 0 ? (
                                <tr><td colSpan={5} style={{ textAlign: 'center', color: '#94a3b8', padding: '24px' }}>No instructors match your search</td></tr>
                            ) : pagedTeachers.map(t => (
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
                <Pagination total={filteredTeachers.length} page={teacherPage} onPage={setTeacherPage} />
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
                            {pagedStudents.length === 0 ? (
                                <tr><td colSpan={4} style={{ textAlign: 'center', color: '#94a3b8', padding: '24px' }}>No learners match your search</td></tr>
                            ) : pagedStudents.map(s => (
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
                <Pagination total={filteredStudents.length} page={studentPage} onPage={setStudentPage} />
            </div>
        </div>
    );
};

export default UsersList;
```

## File: src/components/AdminSidebar.js
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

## File: src/components/TeacherSidebar.js
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

## File: src/context/AuthContext.js
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

## File: src/index.css
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
    overflow: auto;
    height: 100vh;
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
    margin-bottom: 24px;
}

.sidebar-back-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
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
    font-weight: 400;
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
    font-weight: 400;
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
    font-weight: 400;
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
    font-weight: 400;
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
    font-weight: 400;
    color: #0f172a;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s;
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
    padding: 20px;
}

.card-lg {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 28px;
}

.stat-card {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 14px 18px;
}

.stat-card-label {
    font-size: 0.625rem;
    font-weight: 700;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 8px;
}

.stat-card-value {
    font-size: 2rem;
    font-weight: 900;
    color: #0f172a;
}

.stat-card-value-accent {
    font-size: 2rem;
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
    gap: 6px;
    max-height: 380px;
    overflow-y: auto;
}

.leaderboard-item {
    display: grid;
    grid-template-columns: 40px 1fr 60px;
    align-items: center;
    gap: 12px;
    padding: 8px 12px;
    background-color: #f8fafc;
    border-radius: 8px;
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
    margin-bottom: 24px;
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
    gap: 16px;
}

.grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
}

.grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
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
    padding: 16px 20px;
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
    margin-top: 12px;
}

.space-y-6>*+* {
    margin-top: 18px;
}

.space-y-8>*+* {
    margin-top: 24px;
}

.space-y-10>*+* {
    margin-top: 32px;
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

## File: src/index.js
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

## File: src/logo.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/><circle cx="420.9" cy="296.5" r="45.7"/><path d="M520.5 78.1z"/></g></svg>
```

## File: src/pages/AdminPanel.js
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
    const [activityLogPage, setActivityLogPage] = useState(1);
    const LOGS_PER_PAGE = 10;
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
        const totalPages = Math.ceil(activityLogs.length / LOGS_PER_PAGE);
        const pagedLogs = activityLogs.slice((activityLogPage - 1) * LOGS_PER_PAGE, activityLogPage * LOGS_PER_PAGE);

        return (
            <div className="space-y-8">
                <p className="page-subtitle">System-wide overview and statistics</p>
                <div className="grid-4">
                    <StatCard title="Total Users" value={totalUsers} icon={<Users size={20} />} />
                    <StatCard title="Instructors" value={users.teachers?.length || 0} icon={<Users size={20} />} />
                    <StatCard title="Learners" value={users.students?.length || 0} icon={<Users size={20} />} />
                    <StatCard title="Learning Groups" value={analytics?.totalSections || 0} icon={<BookOpen size={20} />} />
                </div>

                {activityLogs.length > 0 && (
                    <div className="card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px' }}>
                            <div>
                                <h3 className="section-title">Recent Activity</h3>
                                <p className="section-subtitle">{activityLogs.length} total log entries</p>
                            </div>
                            <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>
                                Page {activityLogPage} of {totalPages}
                            </span>
                        </div>
                        <div style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: '420px' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead style={{ position: 'sticky', top: 0, background: '#fff', zIndex: 1 }}>
                                    <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                                        {['User', 'Action', 'Resource', 'Timestamp', 'Status', 'Details'].map(h => (
                                            <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 700, color: '#475569', fontSize: '0.8rem' }}>{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {pagedLogs.map(log => (
                                        <tr key={log._id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                            <td style={{ padding: '10px 12px', fontSize: '0.8rem' }}>
                                                <p style={{ fontWeight: 600, color: '#1e293b', margin: 0 }}>{log.userName || 'Unknown'}</p>
                                                <p style={{ color: '#64748b', fontSize: '0.75rem', margin: '2px 0 0 0' }}>{log.userEmail}</p>
                                            </td>
                                            <td style={{ padding: '10px 12px', fontSize: '0.8rem' }}>
                                                <span style={{ backgroundColor: '#e0e7ff', color: '#3730a3', padding: '3px 7px', borderRadius: '4px', fontWeight: 600, whiteSpace: 'nowrap' }}>
                                                    {log.action?.replace(/_/g, ' ')}
                                                </span>
                                            </td>
                                            <td style={{ padding: '10px 12px', fontSize: '0.8rem', color: '#475569' }}>{log.resource || 'N/A'}</td>
                                            <td style={{ padding: '10px 12px', fontSize: '0.8rem', color: '#64748b', whiteSpace: 'nowrap' }}>
                                                {new Date(log.createdAt).toLocaleString()}
                                            </td>
                                            <td style={{ padding: '10px 12px', fontSize: '0.8rem' }}>
                                                <span style={{
                                                    backgroundColor: log.status === 'success' ? '#dcfce7' : '#fee2e2',
                                                    color: log.status === 'success' ? '#166534' : '#991b1b',
                                                    padding: '3px 7px', borderRadius: '4px', fontWeight: 600
                                                }}>
                                                    {log.status?.toUpperCase()}
                                                </span>
                                            </td>
                                            <td style={{ padding: '10px 12px', fontSize: '0.8rem', color: '#64748b', maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                {log.details ? JSON.stringify(log.details).substring(0, 50) + '...' : '-'}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {totalPages > 1 && (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', paddingTop: '16px', borderTop: '1px solid #f1f5f9', marginTop: '4px' }}>
                                <button
                                    onClick={() => setActivityLogPage(p => Math.max(1, p - 1))}
                                    disabled={activityLogPage === 1}
                                    style={{ padding: '6px 14px', borderRadius: '8px', border: '1px solid #e2e8f0', background: activityLogPage === 1 ? '#f8fafc' : '#fff', color: activityLogPage === 1 ? '#cbd5e1' : '#475569', fontWeight: 700, fontSize: '0.75rem', cursor: activityLogPage === 1 ? 'not-allowed' : 'pointer' }}
                                >
                                    ← Prev
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                    <button
                                        key={page}
                                        onClick={() => setActivityLogPage(page)}
                                        style={{ padding: '6px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', background: activityLogPage === page ? '#0f172a' : '#fff', color: activityLogPage === page ? '#fff' : '#475569', fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer' }}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button
                                    onClick={() => setActivityLogPage(p => Math.min(totalPages, p + 1))}
                                    disabled={activityLogPage === totalPages}
                                    style={{ padding: '6px 14px', borderRadius: '8px', border: '1px solid #e2e8f0', background: activityLogPage === totalPages ? '#f8fafc' : '#fff', color: activityLogPage === totalPages ? '#cbd5e1' : '#475569', fontWeight: 700, fontSize: '0.75rem', cursor: activityLogPage === totalPages ? 'not-allowed' : 'pointer' }}
                                >
                                    Next →
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    };



    const SettingsSection = () => (
        <div className="space-y-6">
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

    const tabTitles = {
        dashboard: `Welcome, ${teacher?.name || 'Admin'}`,
        users: 'Users Management',
        questions: 'Questions',
        feedback: 'Feedback',
        settings: 'System Settings',
    };

    return (
        <div className="page">
            <Toaster position="top-right" />
            <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <main className="main-padded" style={{ marginLeft: '256px' }}>
                <div style={{ padding: '32px 40px' }}>
                    <header className="page-header">
                        <h2 className="page-title">{tabTitles[activeTab] || 'Admin Panel'}</h2>
                    </header>

                    {loading && <div style={{ textAlign: 'center', color: '#94a3b8', fontWeight: 700, marginBottom: '16px' }}>Loading...</div>}
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
                </div>
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

## File: src/pages/ClassResults.js
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

## File: src/pages/Dashboard.js
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

                        <div className="space-y-4" style={{ marginBottom: '20px' }}>
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

                        <div className="grid-2" style={{ alignItems: 'start', gap: '16px' }}>
                            {/* LEFT COLUMN */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
                                <div className="stat-card">
                                    <p className="stat-card-label">Learners</p>
                                    <p className="stat-card-value">{summary.totalStudents}</p>
                                </div>
                                <div className="stat-card">
                                    <p className="stat-card-label">Average Score</p>
                                    <p className="stat-card-value">{summary.avgScore}</p>
                                </div>
                            </div>

                            {/* RIGHT COLUMN - Leaderboard */}
                            <div className="card" style={{ padding: '20px' }}>
                                <div className="card-header" style={{ marginBottom: '12px', paddingBottom: '10px' }}>
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
                                        <p className="no-results" style={{ padding: '16px' }}>No student data yet</p>
                                    )}
                                </div>
                            </div>
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

## File: src/pages/LoginPage.js
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

## File: src/pages/ProfileSettings.js
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

## File: src/pages/QuestionManagement.js
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

## File: src/pages/RegisterPage.js
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

## File: src/reportWebVitals.js
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

## File: src/setupTests.js
```javascript
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
```
