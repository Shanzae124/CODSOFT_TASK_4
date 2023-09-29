import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AppName from '../Components/AppName';
import questions from '../Data/question';

const Quiz = ({navigation, route}) => {
  // route.params for using the argument of name of home screen on result screen
  const {name, questions: selectedQuestions} = route.params;
  console.log(selectedQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // handling the option press
  const handleOptionPress = option => {
    setShowAnswer(true);
    if (currentQuestion && option === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  // handling the result and navigation
  const handleShowResult = () => {
    navigation.navigate('Result', {
      score: score,
      name: name,
      questions: selectedQuestions,
    });
  };

  // Next button handling
  const handleNextQuestionPress = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setShowAnswer(false);
  };

  // previous button handling
  const handlePreviousQuestionPress = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowAnswer(false);
    }
  };

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View>
        <AppName heading="Quiz" />
      </View>
      {/* displaying Questions and options */}

      <Text style={styles.question}> Q. {currentQuestion.question}</Text>
      {currentQuestion.options.map(option => (
        <TouchableOpacity
          key={option}
          style={styles.option}
          onPress={() => handleOptionPress(option)}>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      {showAnswer && (
        <Text style={styles.answer}>
          The answer is: {currentQuestion.answer}
        </Text>
      )}
      <View style={styles.buttonContainer}>
        {currentQuestionIndex < selectedQuestions.length - 1 && (
          <TouchableOpacity
            style={styles.questionHandle}
            onPress={handleNextQuestionPress}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
        {currentQuestionIndex < selectedQuestions.length - 1 && (
          <TouchableOpacity
            style={styles.questionHandle}
            onPress={handlePreviousQuestionPress}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}
        {currentQuestionIndex === selectedQuestions.length - 1 && (
          <TouchableOpacity
            style={styles.questionHandle}
            onPress={handleShowResult}>
            <Text style={styles.buttonText}>End</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Quiz;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96C9DC',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonText: {
    color: '#100C08',
    fontSize: 24,
    fontWeight: '900',
    alignSelf: 'center',
    lineHeight: 40,
    letterSpacing: 0.5,
  },
  buttonContainer: {
    width: '90%',
    margin: 5,
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    border: 'white',
    marginBottom: 20,
    color: '#100C08',
  },
  option: {
    color: 'black',
    backgroundColor: 'rgba(52, 152, 219, 0.8)',
    margin: 10,
    border: 2,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
  },
  optionText: {
    color: 'black',
    fontSize: 22,
    letterSpacing: 0.5,
    fontWeight: '700',
    lineHeight: 40,
  },
  questionHandle: {
    backgroundColor: '#6cb4ee',
    padding: 8,
    borderRadius: 15,
    marginTop: 8,
    width: '40%',
  },
  answer: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 40,
  },
});
