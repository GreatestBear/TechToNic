import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';
import HeaderComponent from './HeaderComponent';
import ButtonComponent_0 from './ButtonComponent_0';
import { useUserInfo } from './UserInfoContext';
import { navigateToNextScreen } from './navigationHelper';

const UserInfoScreen_3 = ({ navigation }) => {
  const { userInfo, updateUserInfo } = useUserInfo();
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

  const handleNext = () => {
    if (!userInfo.drinkFrequency || !userInfo.hasDisease) {
      Alert.alert('경고', '음주 빈도와 질병 유무를 모두 선택해주세요.');
      return;
    }

    console.log('음주 빈도: ', userInfo.drinkFrequency);
    console.log('질병 유무: ', userInfo.hasDisease);

    if (userInfo.hasDisease === '없어요') {
      navigateToNextScreen(navigation, 'UserInfo_4', { selectedConditions: [] });
    } else {
      navigateToNextScreen(navigation, 'UserInfo_3', { drinkFrequency: userInfo.drinkFrequency, hasDisease: userInfo.hasDisease });
    }
  };
  
  const handlePrevious = () => {
    navigateToPreviousScreen(navigation);
  };
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 40 }} />
      <HeaderComponent>2 / 5</HeaderComponent>
      <Text style={[styles.subtitle, { fontSize: windowWidth * 0.07, textAlign: 'center' }]}>음주를 자주 하시나요?</Text>
      {['주 4회 이상', '주 3회 이상', '주 2회 이상', '주 1회 이상', '음주하지 않음'].map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.choiceButton, userInfo.drinkFrequency === option && styles.selectedButton, { width: windowWidth * 0.9 }]}
          onPress={() => updateUserInfo('drinkFrequency', option)}
        >
          <Text style={[styles.choiceText, { fontSize: windowWidth * 0.05, textAlign: 'center' }]}>{option}</Text>
        </TouchableOpacity>
      ))}
      <Text style={[styles.subtitle, { fontSize: windowWidth * 0.07, textAlign: 'center' }]}>가지고 있는 질환이 있으신가요?</Text>
      {['없어요', '있어요'].map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.choiceButton, userInfo.hasDisease === option && styles.selectedButton, { width: windowWidth * 0.9 }]}
          onPress={() => updateUserInfo('hasDisease', option)}
        >
          <Text style={[styles.choiceText, { fontSize: windowWidth * 0.05, textAlign: 'center' }]}>{option}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.navContainer}>
        <ButtonComponent_0 title="이전" onPress={handlePrevious} style={{ width: windowWidth * 0.4 }} />
        <ButtonComponent_0 title="다음" onPress={handleNext} style={{ width: windowWidth * 0.4 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  subtitle: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  choiceButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    marginBottom: 10,
  },
  selectedButton: {
    backgroundColor: '#5886FE',
  },
  choiceText: {
    color: '#000',
  },
  navContainer: {
    justifyContent: 'center', // 가로축 가운데 정렬
    alignItems: 'center', // 세로축 가운데 정렬
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default UserInfoScreen_3;
