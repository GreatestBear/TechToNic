import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import ButtonComponent_0 from './ButtonComponent_0';


function Modify({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/pyeon.png')} style={styles.image} />
      <Text style={styles.header}>
        어떤 건강 정보를 <Text style={styles.highlight}>수정</Text>하시겠어요?
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Modify1')}
      >
        <Text style={[styles.buttonText, { fontSize: 16 }]}>기본 정보(키, 몸무게, 흡연/음주 여부)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Modify2')}
      >
        <Text style={[styles.buttonText, { fontSize: 16 }]}>갖고 있는 질환</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Modify3')}
      >
        <Text style={[styles.buttonText, { fontSize: 16 }]}>복용 중인 약</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Modify4')}
      >
        <Text style={[styles.buttonText, { fontSize: 16 }]}>알레르기 정보</Text>
      </TouchableOpacity>
      {/* 뒤로 가기 버튼 */}
      <View style={styles.footer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#6c757d' }]} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>뒤로 가기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor:'#fff',
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: 250,
    height: 250,
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
    backgroundColor: '#5886FE',
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
  footer: {
    width: '100%',
    alignItems: 'center',
    padding: 16,
  },
});

export default Modify;
