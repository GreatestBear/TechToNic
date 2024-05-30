import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Alert } from 'react-native';
import HeaderComponent from './HeaderComponent';
import ButtonComponent_0 from './ButtonComponent_0';
import { useUserInfo } from './UserInfoContext';
import { navigateToNextScreen, navigateToPreviousScreen } from './navigationHelper';


const UserInfoScreen_5 = ({ navigation }) => {
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

  const medications = [
    "갑상건기능저하증약", "갑상선기능항진증약", "고지혈증약", "고혈압약",
    "골다공증약", "당뇨약", "덱스트로메토르판(기침약)", "디곡신(심장약)",
    "마그네슘", "면역억제제", "발기부전치료제", "신경안정제", "아미오다론(심장약)",
    "와파린", "우울증약", "위산분비억제제", "철분", "치매약", "칼슘",
    "테오필린", "트라마돌 함유 진통제", "트립탄계열 편두통약", "파킨슨약",
    "페니실라민", "항경련제", "항생제", "항진균제", "항혈전제",
    "항히스타민제(수면유도제, 알레르기약)", "NSAIDS(소염진통제)", "SAM-E"
  ];

  const toggleMedication = (medication) => {
    const updatedMedications = userInfo.selectedMedications.includes(medication)
      ? userInfo.selectedMedications.filter(m => m !== medication)
      : [...userInfo.selectedMedications, medication];
    
    updateUserInfo('selectedMedications', updatedMedications);
  };
  
  const handleNext = () => {
    if (userInfo.selectedMedications.length === 0) {
      Alert.alert('경고', '현재 먹고 있는 약을 선택해주세요!');
      return;
    }
    console.log('Selected Medications: ', userInfo.selectedMedications);
    navigateToNextScreen(navigation, 'UserInfo_5', { selectedMedications: userInfo.selectedMedications });
  };
  
  const handlePrevious = () => {
    navigateToPreviousScreen(navigation);
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ marginTop: 40 }} />
      <Text style={[styles.title, { fontSize: windowWidth * 0.06 }]}>4 / 5</Text>
      <Text style={[styles.subtitle, { fontSize: windowWidth * 0.07 }]}>현재 먹고 있는 약을 알려주세요</Text>
      {medications.map((medication, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, userInfo.selectedMedications.includes(medication) ? styles.selectedButton : null, { width: windowWidth * 0.9 }]}
          onPress={() => toggleMedication(medication)}
        >
          <Text style={[styles.buttonText, { fontSize: windowWidth * 0.04 }]}>{medication}</Text>
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
    borderRadius: 20,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default UserInfoScreen_5;
