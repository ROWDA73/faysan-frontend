import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

export const login = async (credentials) => {
    // Waxaan u direynaa labadaba username iyo email si uusan backend-ku u diidin
    const payload = {
        username: credentials.username,
        email: credentials.username, // Haddiiba uu backend-ku email sugayo
        password: credentials.password
    };
    
    const response = await axios.post(`${API_URL}/login`, payload);
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
    }
    return response.data;
};

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('token');
};