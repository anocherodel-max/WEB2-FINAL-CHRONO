import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Archive, Edit2, ChevronLeft, ChevronRight, X, RotateCcw, Trash2 } from 'lucide-react';

const PAGE_SIZE = 10;
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3000/api/v1';

const PERIODS = [
    "Era 1: Pre-Colonial",
    "Era 2: Spanish Colonization",
    "Era 3: Revolutionary",
    "Era 4: American/Japanese",
    "Era 5: Post-war"
];

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
    const [showDeletedUsers, setShowDeletedUsers] = useState(false);
    const [deletedUsers, setDeletedUsers] = useState({ teachers: [], students: [] });
    const [showAddStudentForm, setShowAddStudentForm] = useState(false);
    const [demoStudentForm, setDemoStudentForm] = useState({
        name: '',
        email: '',
        classCode: '',
        score: 0,
        levelReached: 'Era 1: Pre-Colonial',
        password: 'Demo@1234'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    React.useEffect(() => { setTeacherPage(1); setStudentPage(1); }, [searchTerm]);

    const pagedTeachers = filteredTeachers.slice((teacherPage - 1) * PAGE_SIZE, teacherPage * PAGE_SIZE);
    const pagedStudents = filteredStudents.slice((studentPage - 1) * PAGE_SIZE, studentPage * PAGE_SIZE);

    const handleAddDemoStudent = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const token = localStorage.getItem('teacherToken');

            if (demoStudentForm.score < 0 || demoStudentForm.score > 100) {
                toast.error('Score must be between 0 and 100');
                setIsSubmitting(false);
                return;
            }

            await axios.post(
                `${API_BASE}/auth/register`,
                {
                    name: demoStudentForm.name.trim(),
                    email: demoStudentForm.email.trim().toLowerCase(),
                    classCode: demoStudentForm.classCode.trim(),
                    password: demoStudentForm.password,
                    score: parseInt(demoStudentForm.score),
                    levelReached: demoStudentForm.levelReached,
                    userType: 'student'  // Add this line
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            toast.success('Demo student added successfully!');
            setShowAddStudentForm(false);
            setDemoStudentForm({
                name: '',
                email: '',
                classCode: '',
                score: 0,
                levelReached: 'Era 1: Pre-Colonial',
                password: 'Demo@1234'
            });
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to add demo student');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Fetch deleted users
    const handleShowDeletedUsers = async () => {
        try {
            const token = localStorage.getItem('teacherToken');
            const { data } = await axios.get(`${API_BASE}/admin/users/deleted`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setDeletedUsers(data);
            setShowDeletedUsers(true);
        } catch (error) {
            toast.error('Failed to load deleted users');
        }
    };

    // Restore user
    const handleRestoreUser = async (userId, userType) => {
        try {
            const token = localStorage.getItem('teacherToken');
            await axios.post(
                `${API_BASE}/admin/users/restore`,
                { userId, userType },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            toast.success('User restored successfully');
            setShowDeletedUsers(false);
            // Refresh deleted users list
            handleShowDeletedUsers();
        } catch (error) {
            toast.error('Failed to restore user');
        }
    };

    // Archive user with confirmation
    const handleArchiveUserWithConfirm = (userId, userType) => {
        if (!window.confirm("Archive this user?")) return;
        handleDeleteUser(userId, userType);
    };

    // Permanently delete user with confirmation
    const handlePermanentDeleteWithConfirm = (userId, userType) => {
        if (!window.confirm("Permanently delete this user? This action cannot be undone!")) return;
        handleDeleteUser(userId, userType);
    };

    return (
        <div className="space-y-8">
            {/* ── Section header ── */}
            <div className="flex-between">
                <div>
                    <h2 className="page-title">User Management</h2>
                    <p className="page-subtitle">Manage teachers and learners across the platform</p>
                </div>
                <div className="header-actions">
                    <input
                        type="text"
                        placeholder="Search by name, email, or class code..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="form-input-sm"
                        style={{ width: '280px' }}
                    />
                    <button
                        onClick={() => setShowAddStudentForm(!showAddStudentForm)}
                        className="btn-indigo"
                        style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                        {showAddStudentForm ? 'Close' : 'Add Demo Student'}
                    </button>
                    <button
                        onClick={handleShowDeletedUsers}
                        className="btn-indigo"
                        style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                        Archived Users ({deletedUsers.teachers.length + deletedUsers.students.length})
                    </button>
                </div>
            </div>

            {/* ── Archived Users Modal ── */}
            {showDeletedUsers && (
                <div className="card" style={{ backgroundColor: '#fff5f5', borderLeft: '4px solid #dc2626' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h3 style={{ color: '#991b1b', margin: 0, fontWeight: 700 }}>Archived Users</h3>
                        <button
                            onClick={() => setShowDeletedUsers(false)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
                        >
                            <X size={18} color="#991b1b" />
                        </button>
                    </div>

                    {/* Deleted Teachers */}
                    {deletedUsers.teachers.length > 0 && (
                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#991b1b', marginBottom: '8px', fontSize: '0.875rem', fontWeight: 700 }}>Teachers ({deletedUsers.teachers.length})</h4>
                            <div style={{ overflowX: 'auto' }}>
                                <table className="table" style={{ fontSize: '0.875rem' }}>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Deleted</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {deletedUsers.teachers.map(t => (
                                            <tr key={t._id}>
                                                <td className="table-cell-name">{t.name}</td>
                                                <td className="table-cell-sub">{t.email}</td>
                                                <td className="table-cell-sub">{new Date(t.deletedAt).toLocaleDateString()}</td>
                                                <td>
                                                    <div style={{ display: 'flex', gap: '4px' }}>
                                                        <button
                                                            onClick={() => handleRestoreUser(t._id, 'teacher')}
                                                            style={{
                                                                padding: '6px 12px',
                                                                backgroundColor: '#10b981',
                                                                color: 'white',
                                                                border: 'none',
                                                                borderRadius: '6px',
                                                                cursor: 'pointer',
                                                                fontSize: '0.75rem',
                                                                fontWeight: 600,
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '4px'
                                                            }}
                                                        >
                                                            <RotateCcw size={14} /> Restore
                                                        </button>
                                                        <button
                                                            onClick={() => handlePermanentDeleteWithConfirm(t._id, 'teacher')}
                                                            style={{
                                                                padding: '6px 12px',
                                                                backgroundColor: '#dc2626',
                                                                color: 'white',
                                                                border: 'none',
                                                                borderRadius: '6px',
                                                                cursor: 'pointer',
                                                                fontSize: '0.75rem',
                                                                fontWeight: 600,
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '4px'
                                                            }}
                                                        >
                                                            <Trash2 size={14} /> Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Deleted Students */}
                    {deletedUsers.students.length > 0 && (
                        <div>
                            <h4 style={{ color: '#991b1b', marginBottom: '8px', fontSize: '0.875rem', fontWeight: 700 }}>Learners ({deletedUsers.students.length})</h4>
                            <div style={{ overflowX: 'auto' }}>
                                <table className="table" style={{ fontSize: '0.875rem' }}>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Class Code</th>
                                            <th>Deleted</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {deletedUsers.students.map(s => (
                                            <tr key={s._id}>
                                                <td className="table-cell-name">{s.name}</td>
                                                <td className="table-cell-sub">{s.email}</td>
                                                <td className="table-cell-mono">{s.classCode}</td>
                                                <td className="table-cell-sub">{new Date(s.deletedAt).toLocaleDateString()}</td>
                                                <td>
                                                    <div style={{ display: 'flex', gap: '4px' }}>
                                                        <button
                                                            onClick={() => handleRestoreUser(s._id, 'student')}
                                                            style={{
                                                                padding: '6px 12px',
                                                                backgroundColor: '#10b981',
                                                                color: 'white',
                                                                border: 'none',
                                                                borderRadius: '6px',
                                                                cursor: 'pointer',
                                                                fontSize: '0.75rem',
                                                                fontWeight: 600,
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '4px'
                                                            }}
                                                        >
                                                            <RotateCcw size={14} /> Restore
                                                        </button>
                                                        <button
                                                            onClick={() => handlePermanentDeleteWithConfirm(s._id, 'student')}
                                                            style={{
                                                                padding: '6px 12px',
                                                                backgroundColor: '#dc2626',
                                                                color: 'white',
                                                                border: 'none',
                                                                borderRadius: '6px',
                                                                cursor: 'pointer',
                                                                fontSize: '0.75rem',
                                                                fontWeight: 600,
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '4px'
                                                            }}
                                                        >
                                                            <Trash2 size={14} /> Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {deletedUsers.teachers.length === 0 && deletedUsers.students.length === 0 && (
                        <p style={{ textAlign: 'center', color: '#991b1b', padding: '16px' }}>No archived users</p>
                    )}
                </div>
            )}

            {/* ── Demo Student Form ── */}
            {showAddStudentForm && (
                <div className="card demo-form-card">
                    <div className="demo-form-header">
                        <h3 className="demo-form-title">➕ Add Demo Student (Presentation)</h3>
                        <button
                            onClick={() => setShowAddStudentForm(false)}
                            className="btn-close-icon"
                        >
                            <X size={18} color="#64748b" />
                        </button>
                    </div>
                    <form onSubmit={handleAddDemoStudent} className="demo-form-grid">
                        {/* Name */}
                        <div className="demo-form-field">
                            <label className="demo-form-label">Name *</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                value={demoStudentForm.name}
                                onChange={(e) => setDemoStudentForm({ ...demoStudentForm, name: e.target.value })}
                                required
                                className="demo-form-input"
                            />
                        </div>

                        {/* Email */}
                        <div className="demo-form-field">
                            <label className="demo-form-label">Email *</label>
                            <input
                                type="email"
                                placeholder="student@example.com"
                                value={demoStudentForm.email}
                                onChange={(e) => setDemoStudentForm({ ...demoStudentForm, email: e.target.value })}
                                required
                                className="demo-form-input"
                            />
                        </div>

                        {/* Class Code */}
                        <div className="demo-form-field">
                            <label className="demo-form-label">Class Code *</label>
                            <input
                                type="text"
                                placeholder="ABC123"
                                value={demoStudentForm.classCode}
                                onChange={(e) => setDemoStudentForm({ ...demoStudentForm, classCode: e.target.value })}
                                required
                                className="demo-form-input"
                            />
                        </div>

                        {/* Score */}
                        <div className="demo-form-field">
                            <label className="demo-form-label">Score (0-100)</label>
                            <input
                                type="number"
                                min="0"
                                max="100"
                                value={demoStudentForm.score}
                                onChange={(e) => setDemoStudentForm({ ...demoStudentForm, score: e.target.value })}
                                className="demo-form-input"
                            />
                        </div>

                        {/* Level Reached */}
                        <div className="demo-form-field">
                            <label className="demo-form-label">Level Reached</label>
                            <select
                                value={demoStudentForm.levelReached}
                                onChange={(e) => setDemoStudentForm({ ...demoStudentForm, levelReached: e.target.value })}
                                className="demo-form-select"
                            >
                                {PERIODS.map(period => (
                                    <option key={period} value={period}>{period}</option>
                                ))}
                            </select>
                        </div>

                        {/* Password */}
                        <div className="demo-form-field">
                            <label className="demo-form-label">Password</label>
                            <input
                                type="text"
                                value={demoStudentForm.password}
                                onChange={(e) => setDemoStudentForm({ ...demoStudentForm, password: e.target.value })}
                                className="demo-form-input"
                            />
                        </div>

                        {/* Actions */}
                        <div className="demo-form-actions">
                            <button
                                type="button"
                                onClick={() => setShowAddStudentForm(false)}
                                className="btn-cancel"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-submit"
                            >
                                {isSubmitting ? 'Creating...' : 'Create Demo Student'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* ── Teachers table ── */}
            <div className="card">
                <div className="flex-between" style={{ marginBottom: '16px' }}>
                    <h3 className="section-title">
                        Teachers ({filteredTeachers.length}{searchTerm ? ` of ${users.teachers?.length || 0}` : ''})
                    </h3>
                </div>
                <div className="table-wrapper" style={{ overflowY: 'auto', maxHeight: '440px' }}>
                    <table className="table">
                        <thead style={{ position: 'sticky', top: 0, zIndex: 1, background: '#f8fafc' }}>
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
                                <tr><td colSpan={5} style={{ textAlign: 'center', color: '#94a3b8', padding: '24px' }}>No teachers match your search</td></tr>
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
                                            <button onClick={() => handleArchiveUserWithConfirm(t._id, 'teacher')} className="btn-icon btn-icon-yellow" title="Archive"><Archive size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination total={filteredTeachers.length} page={teacherPage} onPage={setTeacherPage} />
            </div>

            {/* ── Learners table ── */}
            <div className="card">
                <div className="flex-between" style={{ marginBottom: '16px' }}>
                    <h3 className="section-title">
                        Learners ({filteredStudents.length}{searchTerm ? ` of ${users.students?.length || 0}` : ''})
                    </h3>
                </div>
                <div className="table-wrapper" style={{ overflowY: 'auto', maxHeight: '440px' }}>
                    <table className="table">
                        <thead style={{ position: 'sticky', top: 0, zIndex: 1, background: '#f8fafc' }}>
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
                                            <button onClick={() => handleArchiveUserWithConfirm(s._id, 'student')} className="btn-icon btn-icon-yellow" title="Archive"><Archive size={16} /></button>
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