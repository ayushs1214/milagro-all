import axios from 'axios';

const API_URL = 'https://your-api-url.com/api';

export const getProducts = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${API_URL}/products?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getProductDetails = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const searchProducts = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/products/search?q=${query}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};