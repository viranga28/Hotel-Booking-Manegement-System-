import React, { createContext, useState } from 'react';

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData))
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('user')
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
