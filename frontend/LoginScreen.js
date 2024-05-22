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
    return () => {
      Dimensions.removeEventListener('change', updateDimensions);
    };
  }, []);

  const handleKakaoLogin = () => {
    console.log('카카오 로그인 실행');
    navigation.navigate('UserInfo');
  };

  const handleNaverLogin = () => {
    console.log('네이버 로그인 실행');
    navigation.navigate('UserInfo');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: windowWidth * 0.08 }]}>부모님의 든든한</Text>
      <Text style={[styles.title, { fontSize: windowWidth * 0.08 }]}>건강 동반자 편안이</Text>
      <Image source={require('./assets/pyeon.png')} style={[styles.logo, { width: windowWidth * 0.9, height: windowWidth * 0.9 }]} />
      <TouchableOpacity onPress={handleKakaoLogin} style={[styles.button, { width: windowWidth * 0.9, height: windowWidth * 0.18 }]}>
        <Image source={require('./assets/kakao_login.png')} style={[styles.buttonImage, { width: windowWidth * 0.9, height: windowWidth * 0.18 }]} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNaverLogin} style={[styles.button, { width: windowWidth * 0.9, height: windowWidth * 0.18 }]}>
        <Image source={require('./assets/naver_login.png')} style={[styles.buttonImage, { width: windowWidth * 0.9, height: windowWidth * 0.18 }]} />
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
    marginBottom: 20,
  },
  buttonImage: {
    resizeMode: 'contain',
  }
});

export default LoginScreen;
