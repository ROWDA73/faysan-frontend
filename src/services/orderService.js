import axios from 'axios';

const API_URL = 'http://localhost:8080/api/orders';

// Dirista dalabka cusub ee macmiilka
export const createOrder = async (orderData) => {
    try {
        const response = await axios.post(API_URL, orderData);
        return response.data;
    } catch (error) {
        console.error("Khalad ayaa ka dhacay dirista dalabka:", error);
        throw error;
    }
};