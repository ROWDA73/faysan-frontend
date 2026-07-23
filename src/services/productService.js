import axios from 'axios';

const API_URL = 'http://localhost:8080/api/products';

// Soo qaado dhammaan cadarada
export const getProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Khalad ayaa ka dhacay soo jiidashada xogta:", error);
        return [];
    }
};