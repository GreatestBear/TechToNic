import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';


const UserInfoScreen1 = ({ navigation }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [isSmoker, setIsSmoker] = useState(null);
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
      <Text style={[styles.title, { fontSize: windowWidth * 0.06 }]}>1 / 5 </Text>
      <Text style={[styles.title, { fontSize: windowWidth * 0.06 }]}>기본 건강정보를 알려주세요</Text>
      <Text style={[styles.subtitle, { fontSize: windowWidth * 0.05 }]}>키와 몸무게, 나이를 알려주세요</Text>

      <Text style={[styles.label, { fontSize: windowWidth * 0.04 }]}>키를 입력해 주세요</Text>
      <TextInput
        style={[styles.input, { fontSize: windowWidth * 0.04 }]}
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />

      <Text style={[styles.label, { fontSize: windowWidth * 0.04 }]}>몸무게를 입력해주세요</Text>
      <TextInput
        style={[styles.input, { fontSize: windowWidth * 0.04 }]}
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />

      <Text style={[styles.label, { fontSize: windowWidth * 0.04 }]}>흡연자이신가요?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.choiceButton, isSmoker ? styles.selectedButton : null, { width: windowWidth * 0.3 }]}
          onPress={() => setIsSmoker(true)}
        >
          <Text style={[styles.choiceText, { fontSize: windowWidth * 0.04 }]}>네</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.choiceButton, isSmoker === false ? styles.selectedButton : null, { width: windowWidth * 0.3 }]}
          onPress={() => setIsSmoker(false)}
        >
          <Text style={[styles.choiceText, { fontSize: windowWidth * 0.04 }]}>아니오</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navContainer}>
        <TouchableOpacity style={[styles.navButton, { width: windowWidth * 0.4 }]} onPress={handlePrevious}>
          <Text style={styles.navButtonText}>이전</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, { width: windowWidth * 0.4 }]} onPress={handleNext}>
          <Text style={styles.navButtonText}>다음</Text>
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
    flexDirection: 'row',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
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
