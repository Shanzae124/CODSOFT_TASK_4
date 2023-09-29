import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';

const Home = ({navigation}) => {
  const [name, setName] = useState('');
  const start = () => {
    if (!name) {
      alert('Please enter your name.');
      return;
    } else navigation.navigate('QuizSelection', {name: name});
  };
  return (
    <KeyboardAvoidingView style={styles.homeContainer}>
      <Text style={styles.headingText}>Quizzlet</Text>
      <View style={styles.container}>
        <Image source={require('../assets/Image.jpg')} style={styles.banner} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Enter Your Name"
          placeholderTextColor={'#100C08'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={start} style={styles.start}>
          <Text style={styles.startText}> Start </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 210,
    width: 270,
    borderRadius: 8,
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#96C9DC',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  startText: {
    color: '#100C08',
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '900',
    textAlign: 'center',
    padding: 10,
  },
  headingText: {
    fontStyle: 'italic',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#100C08',
    lineHeight: 40,
  },

  inputContainer: {
    width: '70%',
  },
  buttonContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '40%',
    marginTop: 8,
  },
  input: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    letterSpacing: 0.5,
    borderColor: '#61A0AF',
    borderWidth: 2,
    padding: 10,
    color: '#100C08',
    borderRadius: 8,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
});
