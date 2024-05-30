import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const ButtonComponent_0 = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5886FE',
    padding: 15,
    borderRadius: 30,
    margin: 5, 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center', 
  },
});

export default ButtonComponent_0;
