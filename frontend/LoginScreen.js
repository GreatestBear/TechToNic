import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import HeaderComponent from './HeaderComponent'; 
import { navigateToNextScreen } from './navigationHelper';


const LoginScreen = ({ navigation }) => {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);


  useEffect(() => {
    const updateDimensions = ({ window }) => {
      setWindowWidth(window.width);
    };
    
    const subscription = Dimensions.addEventListener('change', updateDimensions);
    
    return () => {
      subscription?.remove();
    };
  }, []);


  const handleKakaoLogin = () => {
    console.log('카카오 로그인 실행');
    navigateToNextScreen(navigation, 'Login');
  };

  const handleNaverLogin = () => {
    console.log('네이버 로그인 실행');
    navigateToNextScreen(navigation, 'Login');
  };

  const handleOtherLogin = () => {
    console.log('다른 방법으로 로그인하기 실행');
    navigateToNextScreen(navigation, 'Login');
  };

  return (
    <View style={styles.container}>
       <HeaderComponent>부모님의 든든한{'\n'}건강 동반자 편안이</HeaderComponent>

      <Image source={require('./assets/pyeon.png')} style={[styles.logo, { width: windowWidth * 0.9, height: windowWidth * 0.9 }]} />
      
      <TouchableOpacity onPress={handleKakaoLogin} style={[styles.button, { width: windowWidth * 0.9, height: windowWidth * 0.18 }]}>
        <Image source={require('./assets/kakao_login.png')} style={[styles.buttonImage, { width: windowWidth * 0.9, height: windowWidth * 0.18 }]} />
      </TouchableOpacity>
     
      <TouchableOpacity onPress={handleNaverLogin} style={[styles.button, { width: windowWidth * 0.9, height: windowWidth * 0.18 }]}>
        <Image source={require('./assets/naver_login.png')} style={[styles.buttonImage, { width: windowWidth * 0.9, height: windowWidth * 0.18 }]} />
      </TouchableOpacity>
      

      <TouchableOpacity onPress={handleOtherLogin} style={styles.otherLoginButton}>
        <Text style={styles.otherLoginText}>다른 방법으로 로그인하기</Text>
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
  otherLoginText: {
    marginTop: 10,
    color: '#000000'
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
