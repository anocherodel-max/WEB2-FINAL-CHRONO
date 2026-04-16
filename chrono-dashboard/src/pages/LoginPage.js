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
            if (data.token && (data.user || data.teacher || data.name)) {
                const teacherData = data.user || data.teacher || data;
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