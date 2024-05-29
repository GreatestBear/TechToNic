import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import HeaderComponent from './HeaderComponent';
import ButtonComponent_0 from './ButtonComponent_0';



const UserInfoScreen1 = ({ navigation }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setage] = useState('');
  const [isSmoker, setIsSmoker] = useState(null);
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
    if (height && weight && isSmoker !== null) {
      navigation.navigate('UserInfo_3', { height, weight, isSmoker });
    } else {
      Alert.alert('경고', '모든 정보를 입력해주세요.');
    }
  };

  const handlePrevious = () => {
    navigation.navigate('UserInfo_1');
  };

  return (
    <View style={styles.container}>

      <View style={{ marginTop: 40 }} />
      <HeaderComponent> 1 / 5</HeaderComponent>
      <Text style={[styles.subtitle, { fontSize: windowWidth * 0.07, textAlign: 'center', }]}>기본 건강 정보를 알려주세요</Text>
      <Text style={[styles.subtitle, { fontSize: windowWidth * 0.06 }]}>키와 몸무게, 나이를 알려주세요</Text>

      <Text style={[styles.subtitle, { fontSize: windowWidth * 0.07 }]}>키를 입력해 주세요</Text>
      <TextInput
        style={[styles.input, { fontSize: windowWidth * 0.07 }]}
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />

      <Text style={[styles.subtitle, { fontSize: windowWidth * 0.07 }]}>몸무게를 입력해 주세요</Text>
      <TextInput
        style={[styles.input, { fontSize: windowWidth * 0.07 }]}
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />

      <Text style={[styles.subtitle, { fontSize: windowWidth * 0.07 }]}>만 나이를 입력해 주세요</Text>
      <TextInput
        style={[styles.input, { fontSize: windowWidth * 0.07 }]}
        value={age}
        onChangeText={setage}
        keyboardType="numeric"
      />

      <Text style={[styles.subtitle, { fontSize: windowWidth * 0.07 }]}>흡연자이신가요?</Text>

      <View style={styles.buttonContainer}>
        
        <TouchableOpacity
          style={[styles.choiceButton, isSmoker ? styles.selectedButton : null, { width: windowWidth * 0.9 }]}
          onPress={() => setIsSmoker(true)}
        >
         <Text style={[styles.choiceText, { fontSize: windowWidth * 0.05, textAlign: 'center' }]}>네</Text>
        </TouchableOpacity>

        <View style={{ marginBottom: 20 }} />

        <TouchableOpacity
          style={[styles.choiceButton, isSmoker === false ? styles.selectedButton : null, { width: windowWidth * 0.9 }]}
          onPress={() => setIsSmoker(false)}
        >
          <Text style={[styles.choiceText, { fontSize: windowWidth * 0.05, textAlign: 'center' }]}>아니오</Text>
        </TouchableOpacity>
      </View>

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
});

export default UserInfoScreen1;
