import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../../contexts/CartContext';

// Mock function to fetch product details
const fetchProductDetails = (id) => {
  // In a real app, this would be an API call
  return {
    id,
    name: `Product ${id}`,
    price: 29.99,
    description: 'This is a sample product description.',
    image: 'https://via.placeholder.com/300',
    moq: 5,
    dealerPrice: 24.99,
  };
};

const ProductDetailsScreen = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const route = useRoute();
  const navigation = useNavigation();
  const { addToCart } = useCart();
  const { productId } = route.params;

  useEffect(() => {
    const productDetails = fetchProductDetails(productId);
    setProduct(productDetails);
    setQuantity(productDetails.moq);
  }, [productId]);

  const handleAddToCart = () => {
    if (quantity < product.moq) {
      Alert.alert('Error', `Minimum order quantity is ${product.moq}`);
      return;
    }
    addToCart({ ...product, quantity });
    Alert.alert('Success', 'Product added to cart');
  };

  if (!product) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>Price: ${product.price.toFixed(2)}</Text>
        <Text style={styles.dealerPrice}>Dealer Price: ${product.dealerPrice.toFixed(2)}</Text>
        <Text style={styles.moq}>Minimum Order Quantity: {product.moq}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => setQuantity(Math.max(product.moq, quantity - 1))}>
            <Ionicons name="remove-circle-outline" size={24} color="#007AFF" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <Ionicons name="add-circle-outline" size={24} color="#007AFF" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 5,
  },
  dealerPrice: {
    fontSize: 16,
    color: 'green',
    marginBottom: 5,
  },
  moq: {
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  addToCartButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetailsScreen;