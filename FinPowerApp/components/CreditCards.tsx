import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreditCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Credit Cards</Text>
      <Text style={styles.text}>Manage your credit cards and learn about responsible credit use. Coming soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default CreditCards;