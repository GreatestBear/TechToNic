import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import HeaderComponent from './HeaderComponent'; 
import ButtonComponent_0 from './ButtonComponent_0';

const UserInfoScreen = ({ navigation }) => {
    const submit = () => {
        console.log('다음 화면으로 이동');
        navigation.navigate('UserInfo_1');
    };
    
    
    return (
        <View style={styles.container}>
             <HeaderComponent>소셜 로그인 완료</HeaderComponent>
             <View style={{ marginBottom: 20 }} />
             <ButtonComponent_0 onPress={submit} title="계속하기" />
       </View>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  }
});

export default UserInfoScreen;
