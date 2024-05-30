export const navigateToNextScreen = (navigation, currentScreen, params) => {
  const screenFlow = {
    'Login': 'UserInfo',
    'UserInfo': 'UserInfo_1',
    'UserInfo_1': 'UserInfo_2',
    'UserInfo_2': 'UserInfo_3',
    'UserInfo_3': (userInfo) => userInfo.hasDisease === '없어요' ? 'UserInfo_5' : 'UserInfo_4',
    'UserInfo_4': 'UserInfo_5',
    'UserInfo_5': 'UserInfo_6',
    'UserInfo_6': 'UserInfo_fin',
    'UserInfo_fin': 'App',
    'Main': 'Main',
    'ChatBot': 'ChatBot',
    'AddMed_0': 'AddMed_0',
    'AddMed_1': 'AddMed_1',
    'AddMed_2': 'AddMed_2',
    'MedNote': 'MedNote',
    'Monitoring': 'Monitoring',
    'Monitoring1': 'Monitoring1',
    'Monitoring2': 'Monitoring2',
    'Monitoring3': 'Monitoring3',
  };

  const nextScreen = typeof screenFlow[currentScreen] === 'function'
    ? screenFlow[currentScreen](params)
    : screenFlow[currentScreen];

  if (nextScreen) {
    navigation.navigate(nextScreen, params);
  }
};

export const navigateToPreviousScreen = (navigation) => {
  navigation.goBack();
};
