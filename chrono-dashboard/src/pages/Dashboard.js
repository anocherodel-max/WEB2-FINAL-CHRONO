import React, { useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import TeacherSidebar from '../components/TeacherSidebar';
import ProfileSettings from './ProfileSettings';
import ClassResults from './ClassResults';
import toast, { Toaster } from 'react-hot-toast';
import { BarChart3, Trash, Copy, Archive, RotateCcw, Menu, Star, PlusCircle, Trophy, Users, Swords } from 'lucide-react';

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
    const [sidebarOpen, setSidebarOpen] = useState(false); // ← mobile sidebar toggle

    const [feedbackTitle, setFeedbackTitle] = useState("");
    const [feedbackDescription, setFeedbackDescription] = useState("");
    const [feedbackType, setFeedbackType] = useState("general_feedback");
    const [feedbackPriority, setFeedbackPriority] = useState("medium");
    const [feedbackLoading, setFeedbackLoading] = useState(false);

    // Close sidebar when switching tabs on mobile
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSidebarOpen(false);
    };

    const fetchTeacherProfile = useCallback(async () => {
        const token = localStorage.getItem('teacherToken');
        if (!token) return;
        try {
            const { data } = await axios.get(`${API_BASE}/auth/profile?t=${Date.now()}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setTeacher(data.teacher);
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

    useEffect(() => {
        if (activeTab === 'overview') {
            fetchTeacherProfile();
        }
    }, [activeTab, fetchTeacherProfile]);
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
            setSelectedSection(data.section.classCode);
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

            {/* ── Mobile hamburger button ── */}
            <button
                className="mobile-menu-btn"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open menu"
            >
                <Menu size={20} />
            </button>

            {/* ── Backdrop overlay (mobile only) ── */}
            <div
                className={`sidebar-overlay${sidebarOpen ? ' sidebar-open' : ''}`}
                onClick={() => setSidebarOpen(false)}
            />

            <TeacherSidebar
                activeTab={activeTab}
                setActiveTab={handleTabChange}
                sidebarOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <main className="main-content">

                {activeTab === 'overview' && (
                    <div className="content-area">
                        <header className="page-header">
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Star size={22} style={{ color: 'var(--color-sun-main)', fill: 'var(--color-sun-main)' }} />
                                    <h2 className="page-title">Welcome, {teacher?.name || 'Instructor'}!</h2>
                                </div>
                                <p className="page-subtitle">Quest Board — Active Missions</p>
                            </div>
                            <button onClick={() => setModalOpen(true)} className="btn-dark"
                                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <PlusCircle size={16} />
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
                                        <p className="access-code-label">&#9670; Quest Code</p>
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
                                    <p className="stat-card-label">Adventurers</p>
                                    <div className="stat-card-icon-row">
                                        <Users size={20} style={{ color: 'var(--color-ink-muted)' }} />
                                        <p className="stat-card-value">{summary.totalStudents}</p>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <p className="stat-card-label">Avg XP Score</p>
                                    <div className="stat-card-icon-row">
                                        <Swords size={20} style={{ color: 'var(--color-sun-dark)' }} />
                                        <p className="stat-card-value-accent">{summary.avgScore}</p>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN - Leaderboard */}
                            <div className="card" style={{ padding: '20px' }}>
                                <div className="card-header" style={{ marginBottom: '12px', paddingBottom: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Trophy size={18} style={{ color: 'var(--color-sun-main)' }} />
                                        <h3 className="card-title">Hall of Heroes</h3>
                                    </div>
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
                        <ProfileSettings onProfileUpdate={fetchTeacherProfile} />
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