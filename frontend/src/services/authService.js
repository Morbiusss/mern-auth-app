import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

const registerUser = async (username, email, password) => {
    const response = await axios.post(API_URL + 'register', {
        username,
        email,
        password,
    });
    return response.data;
};

const loginUser = async (email, password) => {
    const response = await axios.post(API_URL + 'login', {
        email,
        password,
    });
    return response.data;
};

const getCurrentUser = async () => {
    const response = await axios.get(API_URL + 'current-user');
    return response.data;
};

const getUserProfile = async (userId) => {
    const response = await axios.get(API_URL + 'profile/' + userId);
    return response.data;
};

const logoutUser = async () => {
    const response = await axios.post(API_URL + 'logout');
    return response.data;
};

export { registerUser, loginUser, getCurrentUser, getUserProfile, logoutUser };