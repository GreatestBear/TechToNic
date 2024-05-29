import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Alert } from 'react-native';
import HeaderComponent from './HeaderComponent';
import ButtonComponent_0 from './ButtonComponent_0';


const UserInfoScreen_4 = ({ navigation }) => {
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  // 창 크기가 변경될 때마다 새로운 창 크기를 설정합니다.
  useEffect(() => {
    const updateDimensions = ({ window }) => {
      setWindowWidth(window.width);
    };

    // 이벤트 리스너를 추가합니다.
    const subscription = Dimensions.addEventListener('change', updateDimensions);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      subscription?.remove();
    };
  }, []);

  const conditions = [
    "간질환", "갑상선기능저하증", "갑상선기능항진증", "고중성지방혈증",
    "고지혈증", "고칼슘혈증", "고혈압", "골관절염", "과민성대장증후군",
    "녹내장", "담낭질환", "당뇨", "두통", "면역과민(아토피체질, 알레르기비염)",
    "부정맥", "비타민B12결핍", "소화기질환(위궤양 등)", "소화기질환(장폐색, 식도협착, 염증성질환 등)",
    "수술전후", "신장결석", "신장질환(신부전 등)", "심부전", "심장질환(협심증, 뇌졸중 등)",
    "염증성장질환", "위장질환(만성설사)", "전립선비대증", "전립선염", 
    "정신질환(우울증, 조울증, 양극성장애 등)", "천식", "COPD", "출혈성질환", "통풍",
    "투석", "하지정맥류&치질"
  ];

  const toggleCondition = (condition) => {
    if (selectedConditions.includes(condition)) {
      setSelectedConditions(selectedConditions.filter(c => c !== condition));
    } else {
      setSelectedConditions([...selectedConditions, condition]);
    }
  };

  const handleNext = () => {
    if (selectedConditions.length === 0) {
      Alert.alert('경고', '가지고 있는 질환을 선택해주세요!');
      return;
    }
    console.log('Selected Conditions: ', selectedConditions);
    navigation.navigate('UserInfo_5', { selectedConditions });
  };

  const handlePrevious = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ marginTop: 40 }} />
      <HeaderComponent>3 / 5</HeaderComponent>
      <Text style={[styles.subtitle, { fontSize: windowWidth * 0.07, textAlign:'center' }]}>가지고 있는 질환을 모두 선택해주세요.</Text>
      {conditions.map((condition, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, selectedConditions.includes(condition) ? styles.selectedButton : null, { width: windowWidth * 0.9 }]}
          onPress={() => toggleCondition(condition)}
        >
          <Text style={[styles.buttonText, { fontSize: windowWidth * 0.04 }]}>{condition}</Text>
        </TouchableOpacity>
      ))}
       <View style={styles.navContainer}>
        <ButtonComponent_0 title="이전" onPress={handlePrevious} style={{ width: windowWidth * 0.4 }} />
        <ButtonComponent_0 title="다음" onPress={handleNext} style={{ width: windowWidth * 0.4 }} />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
    width: '100%',
    marginBottom: 10,
    borderRadius: 20, // 더 큰 값을 적용하여 더 부드러운 사각형으로 만듭니다.
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#5886FE',
  },
  buttonText: {
    color: '#000',
  },
  navContainer: {
    justifyContent: 'center', // 가로축 가운데 정렬
    alignItems: 'center', // 세로축 가운데 정렬
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
  },
  navButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#5886FE',
    borderRadius: 20, // 버튼의 모서리를 둥글게 만듭니다.
    alignItems: 'center',
  },
  navButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default UserInfoScreen_4;
