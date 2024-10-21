import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Mock data for orders
const mockOrders = [
  { id: '1', orderNumber: 'ORD001', date: '2023-06-01', status: 'Pending', total: 99.99 },
  { id: '2', orderNumber: 'ORD002', date: '2023-06-02', status: 'Shipped', total: 149.99 },
  { id: '3', orderNumber: 'ORD003', date: '2023-06-03', status: 'Delivered', total: 79.99 },
  // Add more mock orders as needed
];

const OrderManagementScreen = () => {
  const [orders, setOrders] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // In a real app, you would fetch orders from an API here
    setOrders(mockOrders);
  }, []);

  const renderOrderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.orderItem}
      onPress={() => navigation.navigate('OrderDetails', { orderId: item.id })}
    >
      <Text style={styles.orderNumber}>{item.orderNumber}</Text>
      <Text style={styles.orderDate}>{item.date}</Text>
      <Text style={styles.orderStatus}>{item.status}</Text>
      <Text style={styles.orderTotal}>${item.total.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Management</Text>
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.orderList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderList: {
    paddingBottom: 20,
  },
  orderItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderDate: {
    fontSize: 14,
    color: '#666',
  },
  orderStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default OrderManagementScreen;