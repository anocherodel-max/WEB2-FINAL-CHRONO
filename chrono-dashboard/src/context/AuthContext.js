import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [teacher, setTeacher] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedTeacher = localStorage.getItem('teacherData');
        const token = localStorage.getItem('teacherToken');

        if (savedTeacher && savedTeacher !== "undefined" && token) {
            try {
                setTeacher(JSON.parse(savedTeacher));
            } catch (e) {
                console.error("Failed to parse teacher data", e);
                localStorage.removeItem('teacherData');
            }
        }

        setLoading(false);
    }, []);

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