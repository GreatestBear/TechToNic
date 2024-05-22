import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';

const UserInfoScreen_3 = ({ navigation }) => {
  const [drinkFrequency, setDrinkFrequency] = useState('');
  const [hasDisease, setHasDisease] = useState('');
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

  const handleNext = () => {
    if (!drinkFrequency || !hasDisease) {
      Alert.alert('경고', '음주 빈도와 질병 유무를 모두 선택해주세요.');
      return;
    }

    console.log('음주 빈도: ', drinkFrequency);
    console.log('질병 유무: ', hasDisease);

    if (hasDisease === '없어요') {
      navigation.navigate('UserInfo_5', { selectedConditions: [] });
    } else {
      navigation.navigate('UserInfo_4', { drinkFrequency, hasDisease });
    }
  };

  const handlePrevious = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: windowWidth * 0.06 }]}>2 / 5 </Text>
      <Text style={[styles.subtitle, { fontSize: windowWidth * 0.05 }]}>음주를 자주 하시나요?</Text>
      {['주 4회 이상', '주 3회 이상', '주 2회 이상', '주 1회 이상', '음주하지 않음'].map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, drinkFrequency === option && styles.selectedButton, { width: windowWidth * 0.8 }]}
          onPress={() => setDrinkFrequency(option)}
        >
          <Text style={[styles.buttonText, { fontSize: windowWidth * 0.04 }]}>{option}</Text>
        </TouchableOpacity>
      ))}
      <Text style={[styles.question, { fontSize: windowWidth * 0.05 }]}>가지고 있는 질환이 있으신가요?</Text>
      {['없어요', '있어요'].map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, hasDisease === option && styles.selectedButton, { width: windowWidth * 0.8 }]}
          onPress={() => setHasDisease(option)}
        >
          <Text style={[styles.buttonText, { fontSize: windowWidth * 0.04 }]}>{option}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.navContainer}>
        <TouchableOpacity style={[styles.navButton, { width: windowWidth * 0.3 }]} onPress={handlePrevious}>
          <Text style={[styles.navButtonText, { fontSize: windowWidth * 0.04 }]}>이전</Text>
        </TouchableOpacity>
        <View style={{ width: 20 }} />
        <TouchableOpacity style={[styles.navButton, { width: windowWidth * 0.3 }]} onPress={handleNext}>
          <Text style={[styles.navButtonText, { fontSize: windowWidth * 0.04 }]}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  selectedButton: {
    backgroundColor: '#5886FE',
  },
  buttonText: {
    color: '#000',
  },
  question: {
    fontWeight: 'bold',
    marginVertical: 20,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  navButton: {
    padding: 10,
    backgroundColor: '#5886FE',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonText: {
    color: '#fff',
  }
});

export default UserInfoScreen_3;
