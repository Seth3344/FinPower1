import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Investments = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Investment Strategies</Text>
      <Text style={styles.text}>Learn about and manage your investments. Coming soon!</Text>
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

export default Investments;