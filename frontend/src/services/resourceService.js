import axios from 'axios';

const API_URL = '/api/resources';

// Create a new resource
export const createResource = async (resourceData, token) => {
    const response = await axios.post(API_URL, resourceData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Get all resources
export const getResources = async (token) => {
    const response = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Update a resource
export const updateResource = async (id, resourceData, token) => {
    const response = await axios.put(`${API_URL}/${id}`, resourceData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Delete a resource
export const deleteResource = async (id, token) => {
    const response = await axios.delete(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};