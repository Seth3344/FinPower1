import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';
import Budget from './components/Budget';
import CreditCards from './components/CreditCards';
import Investments from './components/Investments';
import Learn from './components/Learn';
import CourseModule from './components/CourseModule';

const Stack = createNativeStackNavigator();

const IconComponent = ({ name, color, size }) => {
  const iconPaths = {
    home: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    dollarSign: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    creditCard: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    briefcase: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    bookOpen: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  };

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <Path d={iconPaths[name]} />
    </Svg>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3b82f6',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Onboarding" 
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={({ navigation }) => ({
            headerRight: () => (
              <View style={styles.headerRight}>
                <TouchableOpacity onPress={() => navigation.navigate('Budget')}>
                  <IconComponent name="dollarSign" color="#fff" size={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CreditCards')}>
                  <IconComponent name="creditCard" color="#fff" size={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Investments')}>
                  <IconComponent name="briefcase" color="#fff" size={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Learn')}>
                  <IconComponent name="bookOpen" color="#fff" size={24} />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen name="Budget" component={Budget} />
        <Stack.Screen name="CreditCards" component={CreditCards} />
        <Stack.Screen name="Investments" component={Investments} />
        <Stack.Screen name="Learn" component={Learn} />
        <Stack.Screen name="CourseModule" component={CourseModule} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    width: 120,
    justifyContent: 'space-between',
    marginRight: 10,
  },
});

export default App;