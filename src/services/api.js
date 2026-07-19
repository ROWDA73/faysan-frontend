import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7006/api', // Hubi in API-gaagu uu socdo port 7006
});

export const getProducts = () => api.get('/Products');

export default api;