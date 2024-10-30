import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Wallet, TrendingUp, CreditCard, PiggyBank, BookOpen } from 'lucide-react-native';

const Dashboard = ({ navigation, route }) => {
  const userAnswers = route.params?.userAnswers || {};

  const getRecommendedCourse = () => {
    switch (userAnswers.goal) {
      case 'Save for retirement':
        return 'Retirement Accounts';
      case 'Buy a home':
        return 'Budgeting';
      case 'Pay off debt':
        return 'Loans & Debt Management';
      case 'Start investing':
        return 'Investing';
      default:
        return 'Budgeting';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to FinPower</Text>
      <View style={styles.cardContainer}>
        <DashboardCard icon={<Wallet color="#3b82f6" size={24} />} title="Total Balance" value="$12,345.67" />
        <DashboardCard icon={<TrendingUp color="#3b82f6" size={24} />} title="Monthly Savings" value="$1,234.56" />
        <DashboardCard icon={<CreditCard color="#3b82f6" size={24} />} title="Credit Score" value="750" />
        <DashboardCard icon={<PiggyBank color="#3b82f6" size={24} />} title="Retirement Savings" value="$98,765.43" />
      </View>
      <View style={styles.recommendationContainer}>
        <Text style={styles.subtitle}>Recommended Course</Text>
        <TouchableOpacity
          style={styles.recommendationButton}
          onPress={() => navigation.navigate('Learn')}
        >
          <BookOpen color="#fff" size={24} />
          <Text style={styles.recommendationText}>{getRecommendedCourse()}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.quickActions}>
        <Text style={styles.subtitle}>Quick Actions</Text>
        <View style={styles.buttonContainer}>
          <QuickActionButton text="Set Budget" onPress={() => navigation.navigate('Budget')} />
          <QuickActionButton text="Track Expenses" onPress={() => {/* TODO: Implement expense tracking */}} />
          <QuickActionButton text="Invest" onPress={() => navigation.navigate('Investments')} />
          <QuickActionButton text="Learn" onPress={() => navigation.navigate('Learn')} />
        </View>
      </View>
    </ScrollView>
  );
};

const DashboardCard = ({ icon, title, value }) => (
  <View style={styles.card}>
    <View style={styles.iconContainer}>{icon}</View>
    <View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  </View>
);

const QuickActionButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#e0f2fe',
    borderRadius: 20,
    padding: 8,
    marginRight: 12,
  },
  cardTitle: {
    color: '#6b7280',
    fontSize: 12,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recommendationContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  recommendationButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recommendationText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  quickActions: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    padding: 12,
    width: '48%',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Dashboard;