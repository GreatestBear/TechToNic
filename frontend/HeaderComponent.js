import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

const HeaderComponent = ({ children, fontSizeMultiplier = 0.08, style }) => {
  return (
    <Text style={[styles.title, { fontSize: windowWidth * fontSizeMultiplier }, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HeaderComponent;
