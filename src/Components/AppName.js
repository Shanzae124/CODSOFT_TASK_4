import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AppName = ({heading}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{heading}</Text>
    </View>
  );
};

export default AppName;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontStyle: 'italic',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#100C08',
  },
});
