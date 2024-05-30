import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderComponent from './HeaderComponent';
import ButtonComponent_0 from './ButtonComponent_0';
import { navigateToNextScreen } from './navigationHelper';


const UserInfoScreen_fin = ({ navigation }) => {
  const handleNext = () => {
    navigateToNextScreen(navigation, 'UserInfo_fin')
  }
  
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/pyeon.png')} // 로고 이미지 경로
        style={styles.logo}
      />
      <Text style={styles.completionText}>기본 정보 입력이{'\n'}완료 되었어요</Text>
      <Text style={styles.continueText}>다음 단계를 계속 진행해주세요</Text>
      <View style={styles.navContainer}>
        <ButtonComponent_0 title="다음으로" onPress={handleNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 300, 
    height: 300,
    marginBottom: 30,
  },
  completionText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  continueText: {
    fontSize: 15,
    color: '#aaa', // 연한 회색
    textAlign: 'center',
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#5886FE',
    paddingVertical: 15, // 버튼 세로 크기
    paddingHorizontal: 50, // 버튼 가로 크기
    borderRadius: 20, 
  },
  nextButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default UserInfoScreen_fin;

