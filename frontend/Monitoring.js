import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import HeaderComponent from './HeaderComponent';
import ButtonComponent_0 from './ButtonComponent_0';
import { navigateToNextScreen, navigateToPreviousScreen } from './navigationHelper';

const Monitoring = ({ navigation }) => {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  // 창 크기가 변경될 때마다 새로운 창 크기를 설정합니다.
  useEffect(() => {
    const updateDimensions = ({ window }) => {
      setWindowWidth(window.width);
    };

    const subscription = Dimensions.addEventListener('change', updateDimensions);

    return () => {
      subscription?.remove();
    };
  }, []);

  const handleNavigation = (screen) => {
    navigateToNextScreen(navigation, screen);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/pyeon.png')} style={styles.image} />
      <HeaderComponent>어떤 건강 정보를 확인하시겠어요?</HeaderComponent>

      <View style={{ marginBottom: 20 }} />
      
      <ButtonComponent_0
        title="기본 정보(키, 몸무게, 흡연/음주 여부)"
        onPress={() => handleNavigation('Monitoring1')}
        style={{ width: windowWidth * 0.8 }}
      />
      <ButtonComponent_0
        title="갖고 있는 질환"
        onPress={() => handleNavigation('Monitoring2')}
        style={{ width: windowWidth * 0.8 }}
      />
      <ButtonComponent_0
        title="복용 중인 약"
        onPress={() => handleNavigation('Monitoring3')}
        style={{ width: windowWidth * 0.8 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'#fff',
  },
  image: {
    width: 300, // 이미지 너비를 300으로 설정
    height: 300, // 이미지 높이를 300으로 설정
  },
});

export default Monitoring;
