import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LayoutDashboard, Users, LogOut, MessageSquare, Settings, ArrowLeft, BookOpen, X } from 'lucide-react';

const AdminSidebar = ({ activeTab, setActiveTab, sidebarOpen, onClose }) => {
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
        <aside className={`sidebar${sidebarOpen ? ' sidebar-open' : ''}`}>

            {/* Close button — only visible on mobile via CSS */}
            <button
                className="sidebar-close-btn"
                onClick={onClose}
                aria-label="Close menu"
            >
                <X size={18} />
            </button>

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