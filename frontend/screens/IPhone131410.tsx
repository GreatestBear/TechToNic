import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import DarkModeFalse from "../components/DarkModeFalse";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone131410 = () => {
  return (
    <View style={styles.iphone131418}>
      <StatusBar1 notchIconTop={0} notchIconLeft={0} />
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/icon1.png")}
      />
      <Image
        style={[styles.settingsIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/settings.png")}
      />
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseRight={0}
        darkModeFalseBottom={0}
        darkModeFalseLeft={0}
      />
      <View style={styles.iphone131418Child} />
      <Text style={[styles.text, styles.textFlexBox]}>
        늘편안: 부모님의 든든한 건강 동반자
      </Text>
      <Text style={[styles.text1, styles.textFlexBox]}>건강정보 추가하기</Text>
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/-22.png")}
      />
      <Image
        style={styles.iphone131418Item}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 52,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  icon: {
    left: 319,
    width: 21,
    height: 23,
  },
  settingsIcon: {
    left: 286,
    width: 30,
    height: 25,
    overflow: "hidden",
  },
  iphone131418Child: {
    top: 89,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.labelColorLightPrimary,
    borderTopWidth: 1,
    width: 391,
    height: 1,
    left: 0,
    position: "absolute",
  },
  text: {
    top: 56,
    fontSize: FontSize.calloutBold_size,
    letterSpacing: 0,
    lineHeight: 21,
    fontFamily: FontFamily.interRegular,
    width: 262,
    height: 33,
    left: 0,
  },
  text1: {
    top: 130,
    left: 65,
    fontSize: FontSize.size_16xl,
    letterSpacing: -0.7,
    lineHeight: 49,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.labelColorLightPrimary,
  },
  icon1: {
    top: 221,
    left: 17,
    width: 74,
    height: 74,
    position: "absolute",
  },
  iphone131418Item: {
    top: 116,
    left: 12,
    borderRadius: Border.br_11xl,
    width: 367,
    height: 78,
    position: "absolute",
  },
  iphone131418: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone131410;
