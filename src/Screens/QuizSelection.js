import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import questions from '../Data/question';

//
function getQuestionsByType(type) {
  return questions.filter(question => question.type === type);
}

// random questions logic
function generateRandomQuiz(noOfQuestions) {
  const shuffledQuestions = [...questions]; // Create a copy of the questions array
  for (let i = shuffledQuestions.length - 1; i > 0; i--) {
    // Shuffle the questions using Fisher-Yates algorithm
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledQuestions[i], shuffledQuestions[j]] = [
      shuffledQuestions[j],
      shuffledQuestions[i],
    ];
  }
  return shuffledQuestions.slice(0, noOfQuestions);
}

//
const QuizSelection = ({navigation, route}) => {
  const {name} = route.params;
  const handleOptionPress = type => {
    const selectedQuestions = getQuestionsByType(type);
    navigation.navigate('Quiz', {name: name, questions: selectedQuestions});
  };
  const handleRandomQuizPress = numberOfQuestions => {
    const randomQuizQuestions = generateRandomQuiz(numberOfQuestions);
    navigation.navigate('Quiz', {name, questions: randomQuizQuestions});
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>QUIZ LIST</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => handleOptionPress('Geography')}>
            <Text style={styles.text}>GEOGRAPHY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => handleOptionPress('History')}>
            <Text style={styles.text}>HISTORY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => handleOptionPress('General Knowledge')}>
            <Text style={styles.text}>GENERAL KNOWLEDGE</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOptionPress('Mathematics')}>
          <Text style={styles.text}>MATHEMATICS</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => handleRandomQuizPress(20)}>
            <Text style={styles.text}>RANDOM QUESTIONS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default QuizSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96C9DC',
    justifyContent: 'space-evenly',
  },
  heading: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 36,
    fontWeight: '900',
    color: '#100C08',
  },

  button: {
    padding: 12,
    margin: 8,
    borderRadius: 20,
    backgroundColor: '#6cb4ee',
    alignSelf: 'center',
    width: '90%',
  },
  text: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '600',
    color: 'black',
    lineHeight: 30,
  },
});
