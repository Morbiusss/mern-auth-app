import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import ResourceManagementPage from './components/ResourceManagementPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/resources" element={<ResourceManagementPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;