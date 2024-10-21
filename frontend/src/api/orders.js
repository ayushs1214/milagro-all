import axios from 'axios';

const API_URL = 'https://your-api-url.com/api';

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_URL}/orders`, orderData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getOrders = async () => {
  try {
    const response = await axios.get(`${API_URL}/orders`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getOrderDetails = async (orderId) => {
  try {
    const response = await axios.get(`${API_URL}/orders/${orderId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};