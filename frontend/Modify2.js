import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Alert } from 'react-native';
import { useUserInfo } from './UserInfoContext'; // UserInfoContext를 가져옵니다.

const Modify2 = ({ navigation }) => {
  const { userInfo, updateUserInfo } = useUserInfo(); // UserInfoContext를 사용합니다.
  const [selectedConditions, setSelectedConditions] = useState(userInfo.selectedConditions || []);
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const updateDimensions = ({ window }) => {
      setWindowWidth(window.width);
    };

    const dimensionChangeListener = Dimensions.addEventListener('change', updateDimensions);

    return () => {
      if (dimensionChangeListener) {
        dimensionChangeListener.remove();
      } else {
        Dimensions.removeChangeListener('change', updateDimensions);
      }
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
    updateUserInfo('selectedConditions', selectedConditions); // 선택된 질환을 UserInfoContext에 업데이트합니다.
    console.log('Selected Conditions: ', selectedConditions);
    navigation.navigate('Modify');
    setTimeout(() => {
      Alert.alert('완료', '건강 정보가 성공적으로 수정되었습니다!');
    }, 500);
  };
  
  const handlePrevious = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.subtitle, { fontSize: windowWidth * 0.05 }]}>수정된 질환들을 모두 선택해주세요.</Text>
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
        <TouchableOpacity style={[styles.navButton, { width: windowWidth * 0.4 }]} onPress={handlePrevious}>
          <Text style={styles.navButtonText}>이전</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, { width: windowWidth * 0.4 }]} onPress={handleNext}>
          <Text style={styles.navButtonText}>완료</Text>
        </TouchableOpacity>
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
    borderRadius: 20,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  navButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#5886FE',
    borderRadius: 20,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default Modify2;
