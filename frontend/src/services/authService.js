import axios from 'axios';

const authService = {
    login: async (username, password) => {
        try {
            const response = await axios.post('/api/auth/login', { username, password });
            return response.data; // Should contain token and user info
        } catch (error) {
            throw error.response.data;
        }
    },
    register: async (username, password) => {
        try {
            const response = await axios.post('/api/auth/register', { username, password });
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
};

export default authService;
