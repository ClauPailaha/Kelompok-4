import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const List = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  }, []);

  const renderUserCard = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>
          Name: <Text style={styles.content}>{item.name}</Text>
        </Text>
        <Text style={styles.title}>
          Username: <Text style={styles.content}>{item.username}</Text>
        </Text>
        <Text style={styles.title}>
          Email: <Text style={styles.content}>{item.email}</Text>
        </Text>
        <Text style={styles.title}>
          Address:{' '}
          <Text style={styles.content}>
            {item.address.street}, {item.address.suite}, {item.address.city},{' '}
            {item.address.zipcode}
          </Text>
        </Text>
        <Text style={styles.title}>
          Phone: <Text style={styles.content}>{item.phone}</Text>
        </Text>
      </View>
    );
  };
