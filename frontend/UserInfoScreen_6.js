import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Alert } from 'react-native';
import HeaderComponent from './HeaderComponent';
import ButtonComponent_0 from './ButtonComponent_0';
import { useUserInfo } from './UserInfoContext';
import { navigateToNextScreen, navigateToPreviousScreen } from './navigationHelper';

const UserInfoScreen_6 = ({ navigation }) => {
  const { userInfo, updateUserInfo } = useUserInfo();
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
    navigateToNextScreen(navigation, 'UserInfo_6', { selectedAllergies: userInfo.selectedAllergies });
  };
  
  const handlePrevious = () => {
    navigateToPreviousScreen(navigation);
  };


  const toggleAllergy = (allergy) => {
    const updatedAllergies = userInfo.selectedAllergies.includes(allergy)
      ? userInfo.selectedAllergies.filter(a => a !== allergy)
      : [...userInfo.selectedAllergies, allergy];
    
    updateUserInfo('selectedAllergies', updatedAllergies);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ marginTop: 40 }} />
      <HeaderComponent>5 / 5</HeaderComponent>
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

export default UserInfoScreen_6;
