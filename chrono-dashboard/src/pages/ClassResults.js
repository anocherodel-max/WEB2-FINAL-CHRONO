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