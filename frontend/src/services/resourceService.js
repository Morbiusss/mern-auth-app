import axios from 'axios';

const API_URL = 'http://localhost:5000/api/resources';

export const createResource = async (resourceData) => {
    const response = await axios.post(API_URL, resourceData);
    return response.data;
};

export const getResources = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const updateResource = async (id, resourceData) => {
    const response = await axios.put(`${API_URL}/${id}`, resourceData);
    return response.data;
};

export const deleteResource = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};