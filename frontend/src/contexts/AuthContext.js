import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        // Validate token and set user
        setUser({ token }); // Replace with actual user data
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    // Implement login logic here
    // For demo purposes, we'll just set a dummy token
    await AsyncStorage.setItem('userToken', 'dummyToken');
    setUser({ token: 'dummyToken' });
  };

  const logout = async () => {
    await AsyncStorage.removeItem('userToken');
    setUser(null);
  };

  const signup = async (userData) => {
    // Implement signup logic here
    // For demo purposes, we'll just set a dummy token
    await AsyncStorage.setItem('userToken', 'dummyToken');
    setUser({ token: 'dummyToken' });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);