import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Alert } from 'react-native';
import HeaderComponent from './HeaderComponent';
import ButtonComponent_0 from './ButtonComponent_0';
import { useUserInfo } from './UserInfoContext';

const Modify4 = ({ navigation }) => {
  const { userInfo, updateUserInfo } = useUserInfo();
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

  const allergies = [
    "조개/갑각류", "돼지풀/국화/금잔화/데이지", "황", "소나무껍질", "대두",
    "미역/석류", "우유/유제품", "꽃가루"
  ];

  const handleNext = () => {
    if (userInfo.hasAllergies === null) {
      Alert.alert('경고', '알레르기의 유무를 선택해주세요!');
      return;
    }
  
    if (userInfo.hasAllergies && userInfo.selectedAllergies.length === 0) {
      Alert.alert('경고', '알레르기를 선택해주세요! 만약 알레르기가 없으시다면 아니요, 없어요를 선택해주세요!');
      return;
    }
  
    console.log('Selected Allergies: ', userInfo.selectedAllergies);
    navigation.navigate('Modify');
    setTimeout(() => {
      Alert.alert('완료', '건강 정보가 성공적으로 수정되었습니다!');
    }, 500);
  };

  const handlePrevious = () => {
    navigation.goBack();
  };

  const toggleAllergy = (allergy) => {
    const updatedAllergies = userInfo.selectedAllergies.includes(allergy)
      ? userInfo.selectedAllergies.filter(a => a !== allergy)
      : [...userInfo.selectedAllergies, allergy];
    
    updateUserInfo('selectedAllergies', updatedAllergies);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.subtitle, { fontSize: windowWidth * 0.07, textAlign: 'center' }]}>특정 알레르기가 있다면 알려주세요.</Text>
      <View style={styles.choicesContainer}>
        <TouchableOpacity
          style={[styles.choiceButton, userInfo.hasAllergies === false ? styles.selectedButton : null, { width: windowWidth * 0.45 }]}
          onPress={() => updateUserInfo('hasAllergies', false)}
        >
          <Text style={[styles.choiceText, { fontSize: windowWidth * 0.05, textAlign: 'center' }]}>아니요, 없어요.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.choiceButton, userInfo.hasAllergies === true ? styles.selectedButton : null, { width: windowWidth * 0.45 }]}
          onPress={() => updateUserInfo('hasAllergies', true)}
        >
          <Text style={[styles.choiceText, { fontSize: windowWidth * 0.05, textAlign: 'center' }]}>네, 있어요.</Text>
        </TouchableOpacity>
      </View>
      {userInfo.hasAllergies && (
        <React.Fragment>
          {allergies.map((allergy, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.choiceButton, userInfo.selectedAllergies.includes(allergy) ? styles.selectedButton : null, { width: windowWidth * 0.9 }]}
              onPress={() => toggleAllergy(allergy)}
            >
              <Text style={[styles.choiceText, { fontSize: windowWidth * 0.05, textAlign: 'center' }]}>{allergy}</Text>
            </TouchableOpacity>
          ))}
        </React.Fragment>
      )}
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
  choicesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  choiceButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
    alignItems: 'center',
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
    marginTop: 20,
    width: '100%',
  },
});

export default Modify4;
