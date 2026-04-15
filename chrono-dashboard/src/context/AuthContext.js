import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [teacher, setTeacher] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3000/api/v1';

    useEffect(() => {
        const validateToken = async (token) => {
            try {
                const response = await fetch(`${API_BASE}/auth/validate`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                return response.ok;
            } catch (error) {
                console.error("Token validation error:", error);
                return false;
            }
        };

        const initializeAuth = async () => {
            const savedTeacher = localStorage.getItem('teacherData');
            const token = localStorage.getItem('teacherToken');

            if (savedTeacher && savedTeacher !== "undefined" && token) {
                try {
                    const isValid = await validateToken(token);
                    if (isValid) {
                        try {
                            // Fetch fresh profile on validation
                            const profileRes = await fetch(`${API_BASE}/auth/profile`, {
                                method: 'GET',
                                headers: {
                                    'Authorization': `Bearer ${token}`,
                                    'Content-Type': 'application/json'
                                }
                            });
                            if (profileRes.ok) {
                                const profileData = await profileRes.json();
                                setTeacher(profileData.teacher);
                                localStorage.setItem('teacherData', JSON.stringify(profileData.teacher));
                            } else {
                                // If profile fetch fails, fall back to saved data
                                console.warn("Profile fetch failed, using saved data");
                                setTeacher(JSON.parse(savedTeacher));
                            }
                        } catch (err) {
                            console.error("Profile fetch error:", err);
                            setTeacher(JSON.parse(savedTeacher));
                        }
                    } else {
                        localStorage.removeItem('teacherData');
                        localStorage.removeItem('teacherToken');
                        setTeacher(null);
                    }
                } catch (e) {
                    console.error("Failed to parse teacher data", e);
                    localStorage.removeItem('teacherData');
                    localStorage.removeItem('teacherToken');
                    setTeacher(null);
                }
            }

            setLoading(false);
        };

        initializeAuth();
    }, [API_BASE]);

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