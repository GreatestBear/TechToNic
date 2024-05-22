import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Alert } from 'react-native';

const UserInfoScreen_5 = ({ navigation }) => {
  const [selectedMedications, setSelectedMedications] = useState([]);
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
    if (selectedMedications.includes(medication)) {
      setSelectedMedications(selectedMedications.filter(m => m !== medication));
    } else {
      setSelectedMedications([...selectedMedications, medication]);
    }
  };

  const handleNext = () => {
    if (selectedMedications.length === 0) {
      Alert.alert('경고', '현재 먹고 있는 약을 선택해주세요!');
      return;
    }
    console.log('Selected Medications: ', selectedMedications);
    navigation.navigate('UserInfo_6', { selectedMedications });
  };

  const handlePrevious = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.title, { fontSize: windowWidth * 0.06 }]}>4 / 5</Text>
      <Text style={[styles.subtitle, { fontSize: windowWidth * 0.05 }]}>현재 먹고 있는 약을 알려주세요</Text>
      {medications.map((medication, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, selectedMedications.includes(medication) ? styles.selectedButton : null, { width: windowWidth * 0.9 }]}
          onPress={() => toggleMedication(medication)}
        >
          <Text style={[styles.buttonText, { fontSize: windowWidth * 0.04 }]}>{medication}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.navContainer}>
        <TouchableOpacity style={[styles.navButton, { width: windowWidth * 0.4 }]} onPress={handlePrevious}>
          <Text style={styles.navButtonText}>이전</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, { width: windowWidth * 0.4 }]} onPress={handleNext}>
          <Text style={styles.navButtonText}>다음</Text>
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

export default UserInfoScreen_5;
