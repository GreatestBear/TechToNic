import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from './HeaderComponent'; 
import ButtonComponent_0 from './ButtonComponent_0';
import { navigateToNextScreen, navigateToPreviousScreen } from './navigationHelper';


export default function WelcomeScreen() {
  const navigation = useNavigation();
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  // 창 크기가 변경될 때마다 새로운 창 크기를 설정합니다.
  useEffect(() => {
    const updateDimensions = ({ window }) => {
      setWindowWidth(window.width);
    };

    const subscription = Dimensions.addEventListener('change', updateDimensions);

    return () => {
      subscription?.remove();
    };''
  }, []);

  const handleCheckHealth = () => {
    navigateToNextScreen(navigation, 'UserInfo_1');
  };

  const handleExitApp = () => {
    console.log("메인 화면으로");
    navigateToNextScreen(navigation, 'UserInfo_fin');
  };
    


  return (
    <View style={styles.container}>
      <Image source={require('./assets/pyeon.png')} style={[styles.logo, { width: windowWidth * 0.9, height: windowWidth * 0.9 }]} />
  
      <HeaderComponent>반가워요 사용자님{'\n'}건강 상태를 체크해 볼까요?</HeaderComponent>
      <View style={{ marginBottom: 20 }} />
  
      <ButtonComponent_0 
        title="체크하기" 
        onPress={handleCheckHealth} 
        style={{ width: windowWidth * 0.9,}}
      />

      <ButtonComponent_0 
        title="나중에" 
        onPress={handleExitApp} 
        style={{ width: windowWidth * 0.9, backgroundColor:'#6c757d'}} 
      />

    <View style={{ marginBottom: 10 }} />
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
    backgroundColor: '#5886FE',
    padding: 15,
    borderRadius: 15,
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
  margin: {
    marginBottom: 20,
  },
});