import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Monitoring1() {
  return (
    <View style={styles.container}>
      <Text> 기본 건강 정보 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Monitoring1;
