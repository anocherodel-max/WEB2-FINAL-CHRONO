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