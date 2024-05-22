import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Alert } from 'react-native';

const UserInfoScreen_6 = ({ navigation }) => {
  const [hasAllergies, setHasAllergies] = useState(null);
  const [selectedAllergies, setSelectedAllergies] = useState([]);
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

  const allergies = [
    "조개/갑각류", "돼지풀/국화/금잔화/데이지", "황", "소나무껍질", "대두",
    "미역/석류", "우유/유제품", "꽃가루"
  ];

  const handleNext = () => {
    if (hasAllergies === null) {
      Alert.alert('경고', '알레르기의 유무를 선택해주세요!');
      return;
    }

    if (hasAllergies && selectedAllergies.length === 0) {
      Alert.alert('경고', '알레르기를 선택해주세요! 만약 알레르기가 없으시다면 아니요, 없어요를 선택해주세요!');
      return;
    }

    console.log('Selected Allergies: ', selectedAllergies);
    navigation.navigate('UserInfo_fin', { selectedAllergies });
  };

  const handlePrevious = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.title, { fontSize: windowWidth * 0.06 }]}>5 / 5 </Text>
      <Text style={[styles.subtitle, { fontSize: windowWidth * 0.05 }]}>특정 알레르기가 있다면 알려주세요.</Text>
      <View style={styles.choicesContainer}>
        <TouchableOpacity
          style={[styles.button, hasAllergies === false ? styles.selectedButton : null, { width: windowWidth * 0.45 }]}
          onPress={() => setHasAllergies(false)}
        >
          <Text style={[styles.buttonText, { fontSize: windowWidth * 0.04 }]}>아니요, 없어요.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, hasAllergies === true ? styles.selectedButton : null, { width: windowWidth * 0.45 }]}
          onPress={() => setHasAllergies(true)}
        >
          <Text style={[styles.buttonText, { fontSize: windowWidth * 0.04 }]}>네, 있어요.</Text>
        </TouchableOpacity>
      </View>
      {hasAllergies && (
        <React.Fragment>
          {allergies.map((allergy, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.button, selectedAllergies.includes(allergy) ? styles.selectedButton : null, { width: windowWidth * 0.45 }]}
              onPress={() => setSelectedAllergies(selectedAllergies.includes(allergy) ? selectedAllergies.filter(a => a !== allergy) : [...selectedAllergies, allergy])}
            >
              <Text style={[styles.buttonText, { fontSize: windowWidth * 0.04 }]}>{allergy}</Text>
            </TouchableOpacity>
          ))}
        </React.Fragment>
      )}
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navButton} onPress={handlePrevious}>
          <Text style={styles.navButtonText}>이전</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={handleNext}>
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
  choicesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginHorizontal: 5,
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
    padding: 10,
    backgroundColor: '#5886FE',
    borderRadius: 20,
    alignItems: 'center',
    width: '45%',
  },
  navButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default UserInfoScreen_6;
