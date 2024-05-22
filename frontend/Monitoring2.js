import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Monitoring2() {
  return (
    <View style={styles.container}>
      <Text> 갖고 있는 질환 </Text>
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

export default Monitoring2;