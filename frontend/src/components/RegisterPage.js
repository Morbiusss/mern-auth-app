import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';
import './RegisterPage.css'; // Import the CSS for styling

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await registerUser(username, email, password);
            navigate('/login');
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <div className="register-page">
            <div className="register-page-content">
                <h1 className="register-page-title">Create an Account</h1>
                <form onSubmit={handleRegister} className="register-form">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="register-input"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="register-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="register-input"
                    />
                    <button type="submit" className="register-button">Register</button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default RegisterPage;
