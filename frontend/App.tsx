const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone13142 from "./screens/IPhone13142";
import IPhone1314 from "./screens/IPhone1314";
import DarkModeFalse from "./components/DarkModeFalse";
import IPhone13141 from "./screens/IPhone13141";
import IPhone13143 from "./screens/IPhone13143";
import IPhone13144 from "./screens/IPhone13144";
import IPhone13145 from "./screens/IPhone13145";
import IPhone13146 from "./screens/IPhone13146";
import IPhone13147 from "./screens/IPhone13147";
import IPhone13148 from "./screens/IPhone13148";
import IPhone13149 from "./screens/IPhone13149";
import IPhone131410 from "./screens/IPhone131410";
import IPhone131411 from "./screens/IPhone131411";
import IPhone131412 from "./screens/IPhone131412";
import IPhone131413 from "./screens/IPhone131413";
import IPhone131414 from "./screens/IPhone131414";
import IPhone131415 from "./screens/IPhone131415";
import IPhone131416 from "./screens/IPhone131416";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Kodchasan-Regular": require("./assets/fonts/Kodchasan-Regular.ttf"),
    "AnonymousPro-Regular": require("./assets/fonts/AnonymousPro-Regular.ttf"),
    "KolkerBrush-Regular": require("./assets/fonts/KolkerBrush-Regular.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone13142"
              component={IPhone13142}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1314"
              component={IPhone1314}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13141"
              component={IPhone13141}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13143"
              component={IPhone13143}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13144"
              component={IPhone13144}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13145"
              component={IPhone13145}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13146"
              component={IPhone13146}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13147"
              component={IPhone13147}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13148"
              component={IPhone13148}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13149"
              component={IPhone13149}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone131410"
              component={IPhone131410}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone131411"
              component={IPhone131411}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone131412"
              component={IPhone131412}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone131413"
              component={IPhone131413}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone131414"
              component={IPhone131414}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone131415"
              component={IPhone131415}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone131416"
              component={IPhone131416}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
