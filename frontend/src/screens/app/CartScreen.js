import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../../contexts/CartContext';
import CartItem from '../../components/CartItem';

const CartScreen = () => {
  const navigation = useNavigation();
  const { items, removeFromCart, updateQuantity, total } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      Alert.alert('Error', 'Your cart is empty');
    } else {
      navigation.navigate('Checkout');
    }
  };

  const renderItem = ({ item }) => (
    <CartItem
      item={item}
      onRemove={() => removeFromCart(item.id)}
      onUpdateQuantity={(quantity) => updateQuantity(item.id, quantity)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={styles.emptyCart}>Your cart is empty</Text>}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  emptyCart: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 10,
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;