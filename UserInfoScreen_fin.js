import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const UserInfoScreen_fin = ({ navigation }) => {
  const handleNext = () => {
    // 다음 단계로 네비게이션
    navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/pyeon.png')} // 로고 이미지 경로
        style={styles.logo}
      />
      <Text style={styles.completionText}>기본 정보 입력이{'\n'}완료 되었어요</Text>
      <Text style={styles.continueText}>다음 단계를 계속 진행해주세요</Text>
      <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>다음으로</Text>
      </TouchableOpacity>
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
    width: 300, // 로고 크기 조정 (훨씬 크게)
    height: 300, // 로고 크기 조정 (훨씬 크게)
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
    borderRadius: 20, // 더 큰 값을 적용하여 더 부드러운 사각형으로 만듭니다.
  },
  nextButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default UserInfoScreen_fin;

