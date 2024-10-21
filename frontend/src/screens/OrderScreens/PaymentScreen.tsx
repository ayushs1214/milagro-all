import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useCart } from '../../contexts/CartContext';
import { createOrder } from '../../api';

const PaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { items, total, clearCart } = useCart();
  const { shippingDetails } = route.params;

  const handlePayment = async () => {
    try {
      // Here you would typically process the payment
      // For this example, we'll just create the order
      const orderData = {
        items,
        total,
        shippingDetails,
        paymentMethod: 'Credit Card',
      };
      await createOrder(orderData);
      clearCart();
      navigation.navigate('OrderConfirmation');
    } catch (error) {
      Alert.alert('Payment Failed', 'An error occurred while processing your payment. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        value={expiryDate}
        onChangeText={setExpiryDate}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        keyboardType="numeric"
        maxLength={3}
      />
      <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#1F2937',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#3B82F6',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PaymentScreen;