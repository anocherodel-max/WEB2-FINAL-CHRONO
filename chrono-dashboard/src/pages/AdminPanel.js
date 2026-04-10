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
    const [editFormData, setEditFormData] = useState({ name: '', email: '', role: 'teacher', adminLevel: '' });

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
        setEditFormData({ name: user.name, email: user.email, role: user.role || 'teacher', adminLevel: user.adminLevel || '' });
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
            setFeedback(data);
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
                                            onChange={(e) => setEditFormData(prev => ({ ...prev, role: e.target.value, adminLevel: e.target.value === 'teacher' ? '' : prev.adminLevel }))}
                                            className="form-select"
                                        >
                                            <option value="teacher">Teacher</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </div>
                                    {editFormData.role === 'admin' && (
                                        <div className="form-group">
                                            <label className="form-label-sm">Admin Level</label>
                                            <select
                                                value={editFormData.adminLevel}
                                                onChange={(e) => setEditFormData(prev => ({ ...prev, adminLevel: e.target.value }))}
                                                className="form-select"
                                            >
                                                <option value="">Select Level</option>
                                                <option value="super_admin">Super Admin</option>
                                                <option value="content_admin">Content Admin</option>
                                                <option value="support_admin">Support Admin</option>
                                            </select>
                                        </div>
                                    )}
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