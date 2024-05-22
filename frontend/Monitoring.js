import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

function Monitoring({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/pyeon.png')} style={styles.image} />
      <Text style={styles.header}>
        어떤 건강 정보를 <Text style={styles.highlight}>확인</Text>하시겠어요?
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Monitoring1')}
      >
        <Text style={[styles.buttonText, { fontSize: 16 }]}>기본 정보(키, 몸무게, 흡연/음주 여부)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Monitoring2')}
      >
        <Text style={[styles.buttonText, { fontSize: 16 }]}>갖고 있는 질환</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Monitoring3')}
      >
        <Text style={[styles.buttonText, { fontSize: 16 }]}>복용 중인 약</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 250, // 이미지 너비를 200으로 설정
    height: 250, // 이미지 높이를 200으로 설정
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  highlight: {
    color: 'blue',
  },
  button: {
    backgroundColor: '#007BFF',  // 버튼 색상을 파란색으로 변경
    padding: 15,
    margin: 10,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Monitoring;


