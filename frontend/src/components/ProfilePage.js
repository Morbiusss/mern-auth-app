import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { getUserProfile } from '../services/authService';
import './RegisterPage.css'; // Import the same CSS file for styling

const ProfilePage = () => {
    const { user, logout } = useContext(AuthContext);
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getUserProfile(user.id);
                setProfile(data);
            } catch (err) {
                setError('Failed to load profile');
            }
        };

        if (user && user.id) {
            fetchProfile();
        }
    }, [user]);

    const handleLogout = () => {
        logout(); // Clear the user state
        navigate('/login'); // Redirect to the login page
    };

    const handleNavigateToResources = () => {
        navigate('/resources'); // Redirect to the resources page
    };

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!profile) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="register-page">
            <div className="register-page-content">
                <h1 className="register-page-title">Profile</h1>
                <p><strong>Username:</strong> {profile.username}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                {/* Add more profile details as needed */}
                <button onClick={handleLogout} className="register-button">Logout</button>
                <button onClick={handleNavigateToResources} className="register-button">Go to Resources</button>
            </div>
        </div>
    );
};

export default ProfilePage;