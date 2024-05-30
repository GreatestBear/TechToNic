import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions } from 'react-native';
import HeaderComponent from './HeaderComponent';
import ButtonComponent_0 from './ButtonComponent_0';
import { navigateToNextScreen, navigateToPreviousScreen } from './navigationHelper';

const AddMedScreen = ({ navigation }) => {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const updateDimensions = ({ window }) => {
      setWindowWidth(window.width);
    };

    const subscription = Dimensions.addEventListener('change', updateDimensions);

    return () => {
      subscription?.remove();
    };
  }, []);

  const handlePrevious = () => {
    navigateToPreviousScreen(navigation);
  };

  const handleNext = (screen) => {
    navigateToNextScreen(navigation, screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={require('./assets/Med.png')} 
          style={styles.pillImage}
        />
        <HeaderComponent>복용하고 있는 약을{'\n'}검색해보세요</HeaderComponent>

        <View style={{ marginBottom: 10 }} />
        
        <ButtonComponent_0
          title="사진으로 검색하기"
          onPress={() => console.log('사진으로 검색하기')}
          style={{ width: windowWidth * 0.9, backgroundColor:'#6c757d' }}
        />
        <ButtonComponent_0
          title="제품명/성분명 검색"
          onPress={() => handleNext('AddMed_1')}
          style={{ width: windowWidth * 0.9, backgroundColor:'#6c757d' }}
        />
  
      </View>
      <ButtonComponent_0
        title="이전"
        onPress={handlePrevious}
        style={{ width: windowWidth * 0.9, position: 'absolute', bottom: 20 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  pillImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default AddMedScreen;
