import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// Add a request interceptor to include the token in the headers
API.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API calls
export const login = (email: string, password: string) => API.post('/api/auth/login', { email, password });
export const signup = (userData: any) => API.post('/api/auth/signup', userData);
export const forgotPassword = (email: string) => API.post('/api/auth/forgot-password', { email });
export const resetPassword = (token: string, newPassword: string) => API.post('/api/auth/reset-password', { token, newPassword });

// Product API calls
export const fetchProducts = () => API.get('/api/products');
export const fetchProductDetails = (id: string) => API.get(`/api/products/${id}`);

// Order API calls
export const createOrder = (orderData: any) => API.post('/api/orders', orderData);
export const fetchOrders = () => API.get('/api/orders');

// Support API calls
export const submitSupportRequest = (supportData: any) => API.post('/api/support', supportData);

export default API;