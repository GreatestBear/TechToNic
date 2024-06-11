import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  // 창 크기가 변경될 때마다 새로운 창 크기를 설정합니다.
  useEffect(() => {
    const updateDimensions = () => {
      setWindowWidth(Dimensions.get('window').width);
    };
    Dimensions.addEventListener('change', updateDimensions);

    // useEffect 내에서 이벤트 리스너를 반환하여 구독을 제거합니다.
    // return () => {
    //   Dimensions.removeEventListener('change', updateDimensions);
    // };
  }, []);

  const handleLogin = () => {
    console.log('로그인 실행');
    navigation.navigate('SignIn');
  };

  const handleSignUp = () => {
    console.log('회원가입 실행');
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: windowWidth * 0.08, marginTop: windowWidth * 0.04 }]}>부모님의 든든한</Text>
      <Text style={[styles.title, { fontSize: windowWidth * 0.08 }]}>건강 동반자 편안이</Text>
      <Image source={require('./assets/pyeon.png')} style={[styles.logo, { width: windowWidth * 0.9, height: windowWidth * 0.9 }]} />
      <TouchableOpacity onPress={handleLogin} style={[styles.button, { width: windowWidth * 0.9, height: windowWidth * 0.18 }]}>
        <Text style={[styles.buttonText, { fontSize: windowWidth * 0.05 }]}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp} style={[styles.button, { width: windowWidth * 0.9, height: windowWidth * 0.18 }]}>
        <Text style={[styles.buttonText, { fontSize: windowWidth * 0.05 }]}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#5886FE',  // 버튼 색상을 파란색으로 설정
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 30, // 더 둥글게 만들기 위해 borderRadius 값을 늘림
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default LoginScreen;
