import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LayoutDashboard, BarChart3, LogOut, Settings, MessageSquare, Shield, X } from 'lucide-react';

const TeacherSidebar = ({ activeTab, setActiveTab, sidebarOpen, onClose }) => {
    const { teacher } = useContext(AuthContext);
    const navigate = useNavigate();

    const navBtn = (id) =>
        `sidebar-btn${activeTab === id ? ' active' : ''}`;

    return (
        <aside className={`sidebar${sidebarOpen ? ' sidebar-open' : ''}`}>

            {/* Close button — only visible on mobile via CSS */}
            <button
                className="sidebar-close-btn"
                onClick={onClose}
                aria-label="Close menu"
            >
                <X size={18} />
            </button>

            <h1 className="sidebar-title">Teacher</h1>

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