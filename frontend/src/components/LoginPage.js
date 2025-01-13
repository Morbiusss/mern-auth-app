import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './RegisterPage.css'; // Import the same CSS file for styling

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await login(email, password);
            navigate('/profile');
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="register-page">
            <div className="register-page-content">
                <h1 className="register-page-title">Login</h1>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit} className="register-form">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="register-input"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="register-input"
                        required
                    />
                    <button type="submit" className="register-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
