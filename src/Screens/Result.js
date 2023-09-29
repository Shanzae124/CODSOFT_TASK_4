import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import questions from '../Data/question';
import AppName from '../Components/AppName';
const Result = ({navigation, route}) => {
  // route.params to get the argument name and score from home and quiz screen on result screen
  const {score} = route.params;
  const {name, questions: selectedQuestions} = route.params;

  return (
    <View style={styles.resultContainer}>
      <View>
        <AppName heading="RESULT" />
      </View>
      <View>
        <Text style={styles.text}>Quiz Finished!</Text>
      </View>
      <View style={styles.container}>
        <Image source={require('../assets/result.jpg')} style={styles.banner} />
      </View>
      <Text style={styles.scoreValue}>
        {name} You scored {score} out of {selectedQuestions.length}
      </Text>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 230,
    width: 260,
    borderRadius: 8,
  },
  resultContainer: {
    backgroundColor: '#96C9DC',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignSelf: 'center',
    width: '50%',
  },
  buttonText: {
    color: '#100C08',
    fontSize: 26,
    fontStyle: 'italic',
    fontWeight: '900',
    alignSelf: 'center',
  },
  scoreValue: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#100C08',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#100C08',
    alignSelf: 'center',
  },
});
