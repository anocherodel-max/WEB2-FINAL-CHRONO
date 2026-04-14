import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { Save, Eye, EyeOff, Lock } from 'lucide-react';

const ProfileSettings = ({ onProfileUpdate }) => {
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
            if (onProfileUpdate) onProfileUpdate();
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