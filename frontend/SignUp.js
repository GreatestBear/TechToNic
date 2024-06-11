import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';
import axios from 'axios'; // axios 라이브러리 import

const LoginScreen2 = ({ navigation }) => {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 창 크기가 변경될 때마다 새로운 창 크기를 설정합니다.
  useEffect(() => {
    const updateDimensions = () => {
      setWindowWidth(Dimensions.get('window').width);
    };

    const subscription = Dimensions.addEventListener('change', updateDimensions);
    
    return () => {
      subscription?.remove();
    };
  }, []);

  const handleSignUp = () => {
    console.log('회원가입 실행');

    // 아이디와 비밀번호를 서버로 전송
    axios.post('http://your-backend-url/signup', { username, password })
      .then(response => {
        console.log('회원가입 성공:', response.data);
        // 회원가입 성공 시 다음 화면으로 이동
        navigation.navigate('Login3');
      })
      .catch(error => {
        console.error('회원가입 실패: 기존에 존재하는 아이디입니다', error);
        // 회원가입 실패 시 에러 처리
        // 예를 들어, 사용자에게 실패 메시지를 보여줄 수 있습니다.
      });
  };

  const handleComplete = () => {
    // 완료 버튼을 누를 때 회원가입 처리 함수 호출
    handleSignUp();
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: windowWidth * 0.08 }]}>회원가입</Text>
      <TextInput
        style={styles.input}
        placeholder="아이디"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={handleComplete} style={[styles.button, { width: windowWidth * 0.9 }]}>
        <Text style={styles.buttonText}>완료</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.backButton, { width: windowWidth * 0.9 }]} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>뒤로 가기</Text>
      </TouchableOpacity>
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
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#5886FE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10, // 버튼 간 간격 조정
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  backButton: {
    backgroundColor: '#5886FE', // 다른 색상으로 설정
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default LoginScreen2;
