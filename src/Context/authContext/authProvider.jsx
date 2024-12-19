import { useState, useEffect } from 'react';
import { authContext } from './authContext';

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [isAuth, setAuth] = useState(!!localStorage.getItem('token')); // Simplify initial state
    const [token, setToken] = useState(localStorage.getItem('token') || null); // Simplify initial state

    // Function to save user data and token in localStorage
    const saveUserData = (token, userData) => {
        localStorage.setItem('token', token);
        if (userData) {
            localStorage.setItem('userData', JSON.stringify(userData)); // Save user data
        }
        setAuth(true);
        setToken(token)
    };

    // Function to handle logout
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userData'); // Clear user data as well
        setAuth(false);
        setToken(null)
    };

    // On component mount, verify the presence of the token
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuth(true);
        }
    }, []);

    return (
        <authContext.Provider value={{ isAuth, saveUserData, logout, token }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
