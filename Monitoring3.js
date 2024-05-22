import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Monitoring3() {
  return (
    <View style={styles.container}>
      <Text> 복용 중인 약 </Text>
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

export default Monitoring3;
