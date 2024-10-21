import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Login from './screens/AuthScreens/Login';
import Signup from './screens/AuthScreens/Signup';
import ForgotPass from './screens/AuthScreens/ForgotPass';
import ForgotOtp from './screens/AuthScreens/ForgotOtp';
import Changepassword from './screens/AuthScreens/Changepassword';
import Welcome from './screens/AuthScreens/Welcome';
import Home from './screens/ProductScreens/Home';
import ProductDetailsScreen from './screens/ProductScreens/ProductDetailsScreen';
import CartScreen from './screens/OrderScreens/CartScreen';
import ShippingDeets from './screens/OrderScreens/ShippingDeets';
import Support from './screens/OrderScreens/Support';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-100">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPass />} />
              <Route path="/forgot-otp" element={<ForgotOtp />} />
              <Route path="/change-password" element={<Changepassword />} />
              <Route path="/home" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetailsScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/shipping" element={<ShippingDeets />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;