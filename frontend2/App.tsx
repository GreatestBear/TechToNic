const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomeIndicator from "./screens/HomeIndicator";
import Rectangle from "./screens/Rectangle";
import Rectangle1 from "./screens/Rectangle1";
import Frame from "./screens/Frame";
import Text1 from "./screens/Text1";
import Group from "./screens/Group";
import Group1 from "./screens/Group1";
import Text2 from "./screens/Text2";
import Group2 from "./screens/Group2";
import Group3 from "./screens/Group3";
import Group4 from "./screens/Group4";
import Group5 from "./screens/Group5";
import Frame1 from "./screens/Frame1";
import Frame2 from "./screens/Frame2";
import Frame3 from "./screens/Frame3";
import Group6 from "./screens/Group6";
import Group7 from "./screens/Group7";
import Group8 from "./screens/Group8";
import Group9 from "./screens/Group9";
import Group10 from "./screens/Group10";
import Group11 from "./screens/Group11";
import Group12 from "./screens/Group12";
import Group13 from "./screens/Group13";
import Group14 from "./screens/Group14";
import Group15 from "./screens/Group15";
import Group16 from "./screens/Group16";
import Group17 from "./screens/Group17";
import Group18 from "./screens/Group18";
import Group19 from "./screens/Group19";
import Group20 from "./screens/Group20";
import Group21 from "./screens/Group21";
import Group22 from "./screens/Group22";
import Group23 from "./screens/Group23";
import Group24 from "./screens/Group24";
import Group25 from "./screens/Group25";
import Group26 from "./screens/Group26";
import Group27 from "./screens/Group27";
import Group28 from "./screens/Group28";
import Group29 from "./screens/Group29";
import Group30 from "./screens/Group30";
import Group31 from "./screens/Group31";
import Group32 from "./screens/Group32";
import Group33 from "./screens/Group33";
import Group34 from "./screens/Group34";
import Group35 from "./screens/Group35";
import Group36 from "./screens/Group36";
import Group37 from "./screens/Group37";
import Text3 from "./screens/Text3";
import Group38 from "./screens/Group38";
import Text4 from "./screens/Text4";
import Rectangle2 from "./screens/Rectangle2";
import Group39 from "./screens/Group39";
import Group40 from "./screens/Group40";
import Rectangle3 from "./screens/Rectangle3";
import Group41 from "./screens/Group41";
import Rectangle4 from "./screens/Rectangle4";
import Rectangle5 from "./screens/Rectangle5";
import Rectangle6 from "./screens/Rectangle6";
import Rectangle7 from "./screens/Rectangle7";
import Group42 from "./screens/Group42";
import Text5 from "./screens/Text5";
import HomeIndicator1 from "./screens/HomeIndicator1";
import Group43 from "./screens/Group43";
import Group44 from "./screens/Group44";
import Frame4 from "./screens/Frame4";
import Frame5 from "./screens/Frame5";
import Frame6 from "./screens/Frame6";
import Frame7 from "./screens/Frame7";
import Frame8 from "./screens/Frame8";
import Frame9 from "./screens/Frame9";
import Frame10 from "./screens/Frame10";
import Frame11 from "./screens/Frame11";
import Frame12 from "./screens/Frame12";
import Frame13 from "./screens/Frame13";
import Frame14 from "./screens/Frame14";
import Frame15 from "./screens/Frame15";
import Frame16 from "./screens/Frame16";
import Frame17 from "./screens/Frame17";
import Frame18 from "./screens/Frame18";
import Frame19 from "./screens/Frame19";
import Frame20 from "./screens/Frame20";
import Frame21 from "./screens/Frame21";
import Frame22 from "./screens/Frame22";
import Frame23 from "./screens/Frame23";
import Frame24 from "./screens/Frame24";
import Frame25 from "./screens/Frame25";
import Frame26 from "./screens/Frame26";
import Frame27 from "./screens/Frame27";
import Frame28 from "./screens/Frame28";
import Frame29 from "./screens/Frame29";
import Frame30 from "./screens/Frame30";
import Frame31 from "./screens/Frame31";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "NotoSansKR-Regular": require("./assets/fonts/NotoSansKR-Regular.otf"),
    "NotoSansKR-Medium": require("./assets/fonts/NotoSansKR-Medium.otf"),
    "NotoSansKR-Bold": require("./assets/fonts/NotoSansKR-Bold.otf"),
    "NotoSansKR-Black": require("./assets/fonts/NotoSansKR-Black.otf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "KolkerBrush-Regular": require("./assets/fonts/KolkerBrush-Regular.ttf"),
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
              name="HomeIndicator"
              component={HomeIndicator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle"
              component={Rectangle}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle1"
              component={Rectangle1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Text1"
              component={Text1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group1"
              component={Group1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Text2"
              component={Text2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group2"
              component={Group2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group3"
              component={Group3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group4"
              component={Group4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group5"
              component={Group5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame2"
              component={Frame2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame3"
              component={Frame3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group6"
              component={Group6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group7"
              component={Group7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group8"
              component={Group8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group9"
              component={Group9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group10"
              component={Group10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group11"
              component={Group11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group12"
              component={Group12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group13"
              component={Group13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group14"
              component={Group14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group15"
              component={Group15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group16"
              component={Group16}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group17"
              component={Group17}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group18"
              component={Group18}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group19"
              component={Group19}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group20"
              component={Group20}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group21"
              component={Group21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group22"
              component={Group22}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group23"
              component={Group23}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group24"
              component={Group24}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group25"
              component={Group25}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group26"
              component={Group26}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group27"
              component={Group27}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group28"
              component={Group28}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group29"
              component={Group29}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group30"
              component={Group30}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group31"
              component={Group31}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group32"
              component={Group32}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group33"
              component={Group33}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group34"
              component={Group34}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group35"
              component={Group35}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group36"
              component={Group36}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group37"
              component={Group37}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Text3"
              component={Text3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group38"
              component={Group38}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Text4"
              component={Text4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle2"
              component={Rectangle2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group39"
              component={Group39}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group40"
              component={Group40}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle3"
              component={Rectangle3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group41"
              component={Group41}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle4"
              component={Rectangle4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle5"
              component={Rectangle5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle6"
              component={Rectangle6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle7"
              component={Rectangle7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group42"
              component={Group42}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Text5"
              component={Text5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeIndicator1"
              component={HomeIndicator1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group43"
              component={Group43}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group44"
              component={Group44}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame4"
              component={Frame4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame5"
              component={Frame5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame6"
              component={Frame6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame7"
              component={Frame7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame8"
              component={Frame8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame9"
              component={Frame9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame10"
              component={Frame10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame11"
              component={Frame11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame12"
              component={Frame12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame13"
              component={Frame13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame14"
              component={Frame14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame15"
              component={Frame15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame16"
              component={Frame16}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame17"
              component={Frame17}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame18"
              component={Frame18}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame19"
              component={Frame19}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame20"
              component={Frame20}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame21"
              component={Frame21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame22"
              component={Frame22}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame23"
              component={Frame23}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame24"
              component={Frame24}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame25"
              component={Frame25}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame26"
              component={Frame26}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame27"
              component={Frame27}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame28"
              component={Frame28}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame29"
              component={Frame29}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame30"
              component={Frame30}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame31"
              component={Frame31}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
