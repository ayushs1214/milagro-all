import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/contexts/AuthContext';
import { CartProvider } from './src/contexts/CartContext';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/AuthScreens/LoginScreen';
import SignupScreen from './src/screens/AuthScreens/SignupScreen';
import OTPVerificationScreen from './src/screens/AuthScreens/OTPVerificationScreen';
import ForgotPasswordScreen from './src/screens/AuthScreens/ForgotPasswordScreen';
import ChangePasswordScreen from './src/screens/AuthScreens/ChangePasswordScreen';
import BusinessProfileSetupScreen from './src/screens/ProfileScreens/BusinessProfileSetupScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductDetailsScreen from './src/screens/ProductScreens/ProductDetailsScreen';
import CartScreen from './src/screens/OrderScreens/CartScreen';
import CheckoutScreen from './src/screens/OrderScreens/CheckoutScreen';
import OrderConfirmationScreen from './src/screens/OrderScreens/OrderConfirmationScreen';
import ProfileScreen from './src/screens/ProfileScreens/ProfileScreen';
import EditProfileScreen from './src/screens/ProfileScreens/EditProfileScreen';
import OrderManagementScreen from './src/screens/OrderScreens/OrderManagementScreen';
import OrderDetailsScreen from './src/screens/OrderScreens/OrderDetailsScreen';
import PreReviewScreen from './src/screens/ProductScreens/PreReviewScreen';
import PreOrderScreen from './src/screens/ProductScreens/PreOrderScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
            <Stack.Screen name="BusinessProfileSetup" component={BusinessProfileSetupScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
            <Stack.Screen name="OrderConfirmation" component={OrderConfirmationScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
            <Stack.Screen name="OrderManagement" component={OrderManagementScreen} />
            <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
            <Stack.Screen name="PreReview" component={PreReviewScreen} />
            <Stack.Screen name="PreOrder" component={PreOrderScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </AuthProvider>
  );
}