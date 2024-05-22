import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  // 창 크기가 변경될 때마다 새로운 창 크기를 설정합니다.
  useEffect(() => {
    const updateDimensions = () => {
      setWindowWidth(Dimensions.get('window').width);
    };
    Dimensions.addEventListener('change', updateDimensions);
    return () => {
      Dimensions.removeEventListener('change', updateDimensions);
    };
  }, []);

  function handleCheckHealth() {
    navigation.navigate('UserInfo_2');
  }

  function handleExitApp() {
    console.log("메인 화면으로"); // 버튼 누른다고 앱 종료는 지원 X -> 메인 화면으로 이동하도록 변경
    navigation.navigate('MainScreen'); // 메인 화면으로 이동하도록 변경
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/pyeon.png')} style={[styles.logo, { width: windowWidth * 0.9, height: windowWidth * 0.9 }]} />
      <Text style={[styles.mainText, { fontSize: windowWidth * 0.08 }]}>
        반가워요 사용자님 
      </Text>
      <Text style={[styles.mainText, { fontSize: windowWidth * 0.08 }]}>
        건강 상태를 체크해 볼까요?
      </Text>
      <TouchableOpacity style={[styles.buttonBlue, { width: windowWidth * 0.7 }]} onPress={handleCheckHealth}>
        <Text style={styles.buttonText}>체크하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonGray, { width: windowWidth * 0.7 }]} onPress={handleExitApp}>
        <Text style={styles.buttonText}>나중에</Text>
      </TouchableOpacity>
      <Text style={styles.estimateText}>예상시간 1분</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  mainText: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonBlue: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10
  },
  buttonGray: {
    backgroundColor: '#6c757d',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  estimateText: {
    fontSize: 16
  },
  logo: {
    marginBottom: 20,
  },
});