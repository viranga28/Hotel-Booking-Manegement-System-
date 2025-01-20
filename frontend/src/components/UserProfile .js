import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const UserProfile = () => {
    const { user, logout } = useContext(AuthContext);

    if (!user) {
        return <div>Please log in.</div>;
    }

    return (
        <div className="user-profile-container">
            <h2>User Profile</h2>
            <p>Welcome, {user.username}!</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default UserProfile;
