import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'; // 아이콘 라이브러리 임포트
import { parse } from 'fast-xml-parser';
import { navigateToNextScreen } from './navigationHelper';


import UserInfoScreen_0 from './UserInfoScreen_0';
import UserInfoScreen_1 from './UserInfoScreen_1';
import UserInfoScreen_2 from './UserInfoScreen_2';
import UserInfoScreen_3 from './UserInfoScreen_3';
import UserInfoScreen_4 from './UserInfoScreen_4';
import UserInfoScreen_5 from './UserInfoScreen_5';
import UserInfoScreen_6 from './UserInfoScreen_6';
import UserInfoScreen_fin from './UserInfoScreen_fin.js';


import { MedProvider } from './MedContext';
import { UserInfoProvider } from './UserInfoContext'; 

import LoginScreen from './LoginScreen';
import OtherLogin from './OtherLogin.js';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import MainScreen from './MainScreen';
import AddMed_0 from './AddMed_0.js';
import AddMed_1 from './AddMed_1.js';
import AddMed_2 from './AddMed_2.js';
import MedNote from './MedNote.js';
import MedNote_1 from './MedNote_1.js';
import ChatBot from './ChatBot';
import Monitoring from './Monitoring';
import Modify from './Modify';
import Modify1 from './Modify1';
import Modify2 from './Modify2';
import Modify3 from './Modify3';
import Modify4 from './Modify4';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// 로그인 및 사용자 정보 스택 네비게이터
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name= "OtherLogin" component={OtherLogin} />
      <Stack.Screen name= "SignUp" component={SignUp} />
      <Stack.Screen name= "SignIn" component={SignIn} />
      <Stack.Screen name="UserInfo" component={UserInfoScreen_0} />
      <Stack.Screen name="UserInfo_1" component={UserInfoScreen_1} />
      <Stack.Screen name="UserInfo_2" component={UserInfoScreen_2} />
      <Stack.Screen name="UserInfo_3" component={UserInfoScreen_3} />
      <Stack.Screen name="UserInfo_4" component={UserInfoScreen_4} />
      <Stack.Screen name="UserInfo_5" component={UserInfoScreen_5} />
      <Stack.Screen name="UserInfo_6" component={UserInfoScreen_6} />
      <Stack.Screen name="UserInfo_fin" component={UserInfoScreen_fin} />
    </Stack.Navigator>
  );
}


function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="AddMed_0" component={AddMed_0} />
      <Stack.Screen name="AddMed_1" component={AddMed_1} />
      <Stack.Screen name="AddMed_2" component={AddMed_2} />
      <Stack.Screen name="MedNote" component={MedNote} />
      <Stack.Screen name="MedNote_1" component={MedNote_1} />
      <Stack.Screen name="ChatBot" component={ChatBot} />
      <Stack.Screen name="Monitoring" component={Monitoring} />
      <Stack.Screen name="Modify" component={Modify} />
      <Stack.Screen name="Modify1" component={Modify1} />
      <Stack.Screen name="Modify2" component={Modify2} />
      <Stack.Screen name="Modify3" component={Modify3} />
      <Stack.Screen name="Modify4" component={Modify4} />
    </Stack.Navigator>
  );
}

// 하단 탭 네비게이터
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === '홈') {
            iconName = 'home-outline';
          } else if (route.name === '채팅') {
            iconName = 'chatbubble-outline';
          } else if (route.name === '약 추가하기') {
            iconName = 'add-circle-outline';
          } else if (route.name === '약 알람 설정') {
            iconName = 'alarm-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [{ display: 'flex' }, null],
      })}
    >
      <Tab.Screen name="홈" component={MainStack} />
      <Tab.Screen name="채팅" component={ChatBot} />
      <Tab.Screen name="약 추가하기" component={AddMed_0} />
      <Tab.Screen name="약 알람 설정" component={MedNote} />
    </Tab.Navigator>
  );
}

// 앱 컴포넌트
export default function App() {
  return (
    <MedProvider>
      <UserInfoProvider> 
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={AuthStack} />
            <Stack.Screen name="App" component={MyTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserInfoProvider>
    </MedProvider>
  );
}