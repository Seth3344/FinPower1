import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const IconComponent = ({ name, color, size }) => {
  const iconPaths = {
    dollarSign: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    trendingUp: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    home: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    creditCard: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  };

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <Path d={iconPaths[name]} />
    </Svg>
  );
};

const questions = [
  {
    id: 'goal',
    question: 'What is your primary financial goal?',
    options: [
      { label: 'Save for retirement', icon: <IconComponent name="dollarSign" color="#3b82f6" size={24} /> },
      { label: 'Buy a home', icon: <IconComponent name="home" color="#3b82f6" size={24} /> },
      { label: 'Pay off debt', icon: <IconComponent name="creditCard" color="#3b82f6" size={24} /> },
      { label: 'Start investing', icon: <IconComponent name="trendingUp" color="#3b82f6" size={24} /> }
    ]
  },
  {
    id: 'knowledge',
    question: 'How would you rate your financial knowledge?',
    options: ['Beginner', 'Intermediate', 'Advanced']
  },
  {
    id: 'income',
    question: 'What is your annual income?',
    type: 'input'
  },
  {
    id: 'savings',
    question: 'How much do you currently have in savings?',
    type: 'input'
  },
  {
    id: 'debt',
    question: 'Do you have any outstanding debt?',
    options: ['Yes', 'No']
  }
];

const Onboarding = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // TODO: Save answers to user profile
      navigation.navigate('Dashboard', { userAnswers: answers });
    }
  };

  const renderQuestion = () => {
    const question = questions[currentQuestion];
    if (question.type === 'input') {
      return (
        <View>
          <Text style={styles.question}>{question.question}</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter amount"
            onSubmitEditing={(event) => handleAnswer(event.nativeEvent.text)}
          />
        </View>
      );
    }
    return (
      <View>
        <Text style={styles.question}>{question.question}</Text>
        <ScrollView>
          {question.options.map((option) => (
            <TouchableOpacity
              key={typeof option === 'string' ? option : option.label}
              style={styles.optionButton}
              onPress={() => handleAnswer(typeof option === 'string' ? option : option.label)}
            >
              {typeof option === 'string' ? (
                <Text style={styles.optionText}>{option}</Text>
              ) : (
                <View style={styles.optionWithIcon}>
                  {option.icon}
                  <Text style={styles.optionText}>{option.label}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's get to know you</Text>
      {renderQuestion()}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${((currentQuestion + 1) / questions.length) * 100}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 16,
  },
  optionButton: {
    backgroundColor: '#3b82f6',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  optionText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  optionWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  progressContainer: {
    height: 6,
    backgroundColor: '#e5e7eb',
    borderRadius: 3,
    marginTop: 20,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#3b82f6',
    borderRadius: 3,
  },
});

export default Onboarding;