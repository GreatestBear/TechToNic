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
    margin: 5, // 버튼 간격을 위해 추가
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center', // 텍스트 가운데 정렬
  },
});

export default ButtonComponent_0;
