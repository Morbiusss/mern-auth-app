import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import a CSS file for styling

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="homepage">
            <div className="homepage-content">
                <h1 className="homepage-title">Welcome to the MERN Authentication App</h1>
                <p className="homepage-description">
                    This application allows you to register, log in, and manage your resources securely.
                </p>
                <p className="homepage-description">
                    Please navigate to the login or register page to get started.
                </p>
                <div className="homepage-buttons">
                    <button className="homepage-button" onClick={() => navigate('/register')}>
                        Register
                    </button>
                    <button className="homepage-button" onClick={() => navigate('/login')}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
