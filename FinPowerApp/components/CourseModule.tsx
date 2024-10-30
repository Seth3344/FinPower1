import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const courseContent = {
  budgeting: [
    {
      title: 'Introduction to Budgeting',
      content: 'Budgeting is the process of creating a plan to spend your money...',
      quiz: [
        {
          question: 'What is the main purpose of budgeting?',
          options: [
            'To restrict spending',
            'To plan and control finances',
            'To increase debt',
            'To avoid saving'
          ],
          correctAnswer: 1
        }
      ]
    },
    // Add more modules here
  ],
  // Add more courses here
};

const CourseModule = ({ route, navigation }) => {
  const { courseId, moduleIndex } = route.params;
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const module = courseContent[courseId][moduleIndex];

  const handleQuizSubmit = () => {
    if (selectedAnswer === module.quiz[0].correctAnswer) {
      alert('Correct! Great job!');
    } else {
      alert('Incorrect. Try again!');
    }
    setShowQuiz(false);
    setSelectedAnswer(null);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{module.title}</Text>
      <Text style={styles.content}>{module.content}</Text>
      {!showQuiz ? (
        <TouchableOpacity style={styles.quizButton} onPress={() => setShowQuiz(true)}>
          <Text style={styles.quizButtonText}>Take Quiz</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.quizContainer}>
          <Text style={styles.quizQuestion}>{module.quiz[0].question}</Text>
          {module.quiz[0].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.quizOption,
                selectedAnswer === index && styles.selectedOption
              ]}
              onPress={() => setSelectedAnswer(index)}
            >
              <Text style={styles.quizOptionText}>{option}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.submitButton} onPress={handleQuizSubmit}>
            <Text style={styles.submitButtonText}>Submit Answer</Text>
          </TouchableOpacity>
        </View>
      )}
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
  content: {
    fontSize: 16,
    marginBottom: 20,
  },
  quizButton: {
    backgroundColor: '#3b82f6',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  quizButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quizContainer: {
    marginTop: 20,
  },
  quizQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  quizOption: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: '#bfdbfe',
  },
  quizOptionText: {
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#10b981',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CourseModule;