import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Alert, ScrollView } from 'react-native';
import HeaderComponent from './HeaderComponent';
import ButtonComponent_0 from './ButtonComponent_0';
import { useUserInfo } from './UserInfoContext';
import { navigateToNextScreen, navigateToPreviousScreen } from './navigationHelper';

const Modify1 = ({ navigation }) => {
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
    if (userInfo.height && userInfo.weight && userInfo.age && userInfo.isSmoker !== null) {
      navigateToNextScreen(navigation, 'Modify');
    } else {
      Alert.alert('경고', '모든 정보를 입력해주세요.');
    }
  };

  const handlePrevious = () => {
    navigateToPreviousScreen(navigation);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>

        <Text style={[styles.subtitle, { fontSize: windowWidth * 0.07, textAlign: 'center' }]}>기본 건강 정보를 알려주세요</Text>

        <Text style={[styles.subtitle, { fontSize: windowWidth * 0.06 }]}>키와 몸무게, 나이를 알려주세요</Text>

        <Text style={[styles.subtitle, { fontSize: windowWidth * 0.07 }]}>키를 입력해 주세요</Text>
        <TextInput
          style={[styles.input, { fontSize: windowWidth * 0.07 }]}
          value={userInfo.height}
          onChangeText={(value) => updateUserInfo('height', value)}
          keyboardType="numeric"
        />

        <Text style={[styles.subtitle, { fontSize: windowWidth * 0.07 }]}>몸무게를 입력해 주세요</Text>
        <TextInput
          style={[styles.input, { fontSize: windowWidth * 0.07 }]}
          value={userInfo.weight}
          onChangeText={(value) => updateUserInfo('weight', value)}
          keyboardType="numeric"
        />

        <Text style={[styles.subtitle, { fontSize: windowWidth * 0.07 }]}>만 나이를 입력해 주세요</Text>
        <TextInput
          style={[styles.input, { fontSize: windowWidth * 0.07 }]}
          value={userInfo.age}
          onChangeText={(value) => updateUserInfo('age', value)}
          keyboardType="numeric"
        />

        <Text style={[styles.subtitle, { fontSize: windowWidth * 0.07 }]}>흡연자이신가요?</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.choiceButton, userInfo.isSmoker ? styles.selectedButton : null, { width: windowWidth * 0.9 }]}
            onPress={() => updateUserInfo('isSmoker', true)}
          >
            <Text style={[styles.choiceText, { fontSize: windowWidth * 0.05, textAlign: 'center' }]}>네</Text>
          </TouchableOpacity>

          <View style={{ marginBottom: 20 }} />

          <TouchableOpacity
            style={[styles.choiceButton, userInfo.isSmoker === false ? styles.selectedButton : null, { width: windowWidth * 0.9 }]}
            onPress={() => updateUserInfo('isSmoker', false)}
          >
            <Text style={[styles.choiceText, { fontSize: windowWidth * 0.05, textAlign: 'center' }]}>아니오</Text>
          </TouchableOpacity>
        </View>

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

        <View style={styles.navContainer}>
          <ButtonComponent_0 title="완료하기" onPress={handlePrevious} style={{ width: windowWidth * 0.9 }} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 20, // 더 큰 값을 적용하여 더 부드러운 사각형으로 만듭니다.
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  choiceButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20, // 버튼의 모서리를 둥글게 만듭니다.
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
  },
  navButton: {
    padding: 10,
    backgroundColor: '#5886FE',
    borderRadius: 20, // 버튼의 모서리를 둥글게 만듭니다.
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonText: {
    color: '#fff',
  },

  choiceButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    marginBottom: 20,
  },
});

export default Modify1;
