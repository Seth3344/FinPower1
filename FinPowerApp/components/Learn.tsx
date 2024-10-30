import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { BookOpen, DollarSign, Briefcase, CreditCard, TrendingUp, FileText } from 'lucide-react-native';

const courses = [
  {
    id: 'budgeting',
    title: 'Budgeting',
    icon: <DollarSign color="#3b82f6" size={24} />,
    modules: [
      {
        title: 'Introduction to Budgeting',
        content: 'Learn the basics of budgeting and why it\'s crucial for financial success.'
      },
      {
        title: 'Budgeting Methods',
        content: 'Explore different budgeting techniques:',
        methods: [
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
        ]
      },
      {
        title: 'Tools for Tracking Spending',
        content: 'Discover various tools and apps to help you track your expenses and stick to your budget.'
      },
      {
        title: 'Practical Implementation: Building a Personal Budget',
        content: 'Step-by-step guide to creating and maintaining your personal budget.'
      }
    ],
    progress: 0.25
  },
  // ... (other courses remain the same)
];

const Learn = ({ navigation }) => {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [expandedMethod, setExpandedMethod] = useState(null);

  const toggleCourse = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
    setExpandedMethod(null);
  };

  const toggleMethod = (methodName) => {
    setExpandedMethod(expandedMethod === methodName ? null : methodName);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Financial Education Hub</Text>
      {courses.map((course) => (
        <View key={course.id} style={styles.courseContainer}>
          <TouchableOpacity
            style={styles.courseHeader}
            onPress={() => toggleCourse(course.id)}
          >
            {course.icon}
            <View style={styles.courseTitleContainer}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${course.progress * 100}%` }]} />
              </View>
            </View>
          </TouchableOpacity>
          {expandedCourse === course.id && (
            <View style={styles.moduleList}>
              {course.modules.map((module, index) => (
                <View key={index} style={styles.moduleItem}>
                  <Text style={styles.moduleTitle}>{module.title}</Text>
                  <Text style={styles.moduleContent}>{module.content}</Text>
                  {module.methods && (
                    <View style={styles.methodsList}>
                      {module.methods.map((method) => (
                        <View key={method.name} style={styles.methodItem}>
                          <TouchableOpacity
                            style={styles.methodHeader}
                            onPress={() => toggleMethod(method.name)}
                          >
                            <Text style={styles.methodName}>{method.name}</Text>
                          </TouchableOpacity>
                          {expandedMethod === method.name && (
                            <View style={styles.methodDetails}>
                              <Text style={styles.methodDescription}>{method.description}</Text>
                              <Text style={styles.methodWhyItWorks}>Why it works: {method.whyItWorks}</Text>
                            </View>
                          )}
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              ))}
            </View>
          )}
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
    marginBottom: 20,
  },
  courseContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  courseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  courseTitleContainer: {
    flex: 1,
    marginLeft: 12,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: '#e5e7eb',
    borderRadius: 3,
    marginTop: 8,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#3b82f6',
    borderRadius: 3,
  },
  moduleList: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  moduleItem: {
    marginBottom: 16,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  moduleContent: {
    fontSize: 14,
    marginBottom: 8,
  },
  methodsList: {
    marginTop: 8,
  },
  methodItem: {
    marginBottom: 8,
  },
  methodHeader: {
    backgroundColor: '#e5e7eb',
    padding: 8,
    borderRadius: 4,
  },
  methodName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  methodDetails: {
    padding: 8,
    backgroundColor: '#f3f4f6',
  },
  methodDescription: {
    fontSize: 14,
    marginBottom: 4,
  },
  methodWhyItWorks: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default Learn;