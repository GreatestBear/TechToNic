import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import StatusBar1 from "../components/StatusBar1";
import DarkModeFalse from "../components/DarkModeFalse";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone1314 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13142}>
      <StatusBar1 />
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseRight={0}
        darkModeFalseBottom={0}
        darkModeFalseLeft={0}
      />
      <Text style={[styles.text, styles.textLayout]}>{`부모님의 든든한 

건강 동반자`}</Text>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-3.png")}
      />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("IPhone13142")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/-.png")}
        />
      </Pressable>
      <Text style={[styles.text1, styles.textLayout]}>늘편안</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    width: 390,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  text: {
    top: 127,
    left: 2,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.anonymousProRegular,
    height: 80,
  },
  icon: {
    top: 303,
    left: 93,
    borderRadius: Border.br_mini,
    width: 204,
    height: 202,
    position: "absolute",
  },
  icon1: {
    borderRadius: 25,
    height: "100%",
    width: "100%",
  },
  pressable: {
    left: 29,
    top: 580,
    width: 332,
    height: 81,
    position: "absolute",
  },
  text1: {
    top: 237,
    left: 0,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.kolkerBrushRegular,
    height: 56,
    textShadowColor: "#2079fe",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 25,
  },
  iphone13142: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 843,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1314;
