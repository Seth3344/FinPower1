import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const budgetingMethods = [
  {
    name: '50/30/20 Rule',
    description: 'Allocate 50% of income to needs, 30% to wants, and 20% to savings and debt repayment.',
    whyItWorks: 'Provides a simple, balanced approach to managing money across essential categories.'
  },
  {
    name: 'Zero-Based Budgeting',
    description: 'Assign every dollar of income a specific purpose, bringing the difference to zero.',
    whyItWorks: 'Ensures all income is accounted for, reducing unnecessary spending and maximizing savings.'
  },
  {
    name: 'Envelope System',
    description: 'Divide cash into envelopes for different expense categories.',
    whyItWorks: 'Creates a tangible limit on spending, making it easier to stick to budget constraints.'
  },
  {
    name: 'Pay Yourself First',
    description: 'Prioritize savings by setting aside a portion of income before budgeting for expenses.',
    whyItWorks: 'Ensures savings goals are met consistently, promoting long-term financial health.'
  },
  {
    name: 'Values-Based Budgeting',
    description: 'Align spending with personal values and long-term goals.',
    whyItWorks: 'Creates a meaningful connection between money and personal priorities, increasing motivation to stick to the budget.'
  }
];

const Budget = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Budget Planner</Text>
      <Text style={styles.subtitle}>Different Ways to Budget</Text>
      {budgetingMethods.map((method, index) => (
        <View key={index} style={styles.methodContainer}>
          <Text style={styles.methodName}>{method.name}</Text>
          <Text style={styles.methodDescription}>{method.description}</Text>
          <Text style={styles.methodWhyItWorks}>Why it works: {method.whyItWorks}</Text>
        </View>
      ))}
    </ScrollView>
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
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  methodContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  methodName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  methodDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  methodWhyItWorks: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default Budget;