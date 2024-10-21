import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getOrderDetails } from '../../api/orders';

const OrderDetailsScreen = () => {
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const route = useRoute();
  const { orderId } = route.params;

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  const fetchOrderDetails = async () => {
    try {
      const data = await getOrderDetails(orderId);
      setOrder(data);
    } catch (error) {
      console.error('Error fetching order details:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!order) {
    return <Text>Order not found</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Order #{order.id}</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Details</Text>
        <Text>Date: {new Date(order.createdAt).toLocaleString()}</Text>
        <Text>Status: {order.status}</Text>
        <Text>Total: ${order.total.toFixed(2)}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Items</Text>
        {order.items.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Price: ${item.price.toFixed(2)}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipping Address</Text>
        <Text>{order.shippingAddress.address}</Text>
        <Text>{order.shippingAddress.city}, {order.shippingAddress.postalCode}</Text>
        <Text>{order.shippingAddress.country}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
  },
  itemName: {
    fontWeight: 'bold',
  },
});

export default OrderDetailsScreen;