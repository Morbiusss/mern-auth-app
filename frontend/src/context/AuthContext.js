import React, { createContext, useState, useEffect } from 'react';
import { loginUser, registerUser, getCurrentUser, logoutUser } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const currentUser = await getCurrentUser();
                setUser(currentUser);
            } catch (err) {
                console.error(err);
            }
        };
        fetchUser();
    }, []);

    const login = async (email, password) => {
        const userData = await loginUser(email, password);
        setUser(userData.user); // Ensure userData contains the user object
    };

    const register = async (username, email, password) => {
        await registerUser(username, email, password);
    };

    const logout = async () => {
        
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};