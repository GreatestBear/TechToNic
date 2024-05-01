import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Frame21 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={styles.statusbar}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
        <View style={[styles.rightSide, styles.rightSidePosition]}>
          <Image
            style={[styles.statusbarBatteryIcon, styles.rightSidePosition]}
            contentFit="cover"
            source={require("../assets/-statusbarbattery.png")}
          />
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.iconMobileSignal, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon--mobile-signal.png")}
          />
        </View>
      </View>
      <View style={styles.homeindicator}>
        <View style={[styles.homeIndicator, styles.iconPosition]} />
      </View>
      <Pressable
        style={styles.buttonImage}
        onPress={() => navigation.navigate("Frame24")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/-.png")}
        />
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/-3.png")}
        />
      </Pressable>
      <Image
        style={styles.icon2}
        contentFit="cover"
        source={require("../assets/--11.png")}
      />
      <Text style={[styles.text, styles.textLayout]}>
        부모님의 든든한  건강 동반자 편안이
      </Text>
      <Text style={[styles.text1, styles.textLayout]}>
        다른 방법으로 로그인
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  textLayout: {
    width: 264,
    lineHeight: 50,
    left: 63,
    height: 78,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    letterSpacing: 0,
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -86,
    width: 172,
    height: 32,
    top: 0,
  },
  time: {
    fontSize: FontSize.calloutBold_size,
    lineHeight: 21,
    fontWeight: "900",
    fontFamily: FontFamily.notoSansKRBlack,
    height: 20,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    letterSpacing: 0,
    left: 0,
    width: 54,
    top: 1,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    marginLeft: -168,
    top: 14,
  },
  statusbarBatteryIcon: {
    marginLeft: 11.3,
    width: 27,
    top: 0,
  },
  wifiIcon: {
    width: 17,
    height: 12,
  },
  iconMobileSignal: {
    marginLeft: -38.7,
    width: 18,
    height: 12,
    top: 1,
  },
  rightSide: {
    marginLeft: 91,
    top: 19,
    width: 77,
  },
  statusbar: {
    left: 2,
    width: 390,
    height: 62,
    top: 1,
    position: "absolute",
    overflow: "hidden",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
  },
  homeindicator: {
    right: 0,
    bottom: -17,
    height: 34,
    left: 0,
    position: "absolute",
  },
  icon: {
    top: 98,
    height: 78,
    borderRadius: Border.br_3xs,
    width: 333,
    left: 0,
    position: "absolute",
  },
  icon1: {
    height: 71,
    borderRadius: Border.br_3xs,
    width: 333,
    left: 0,
    top: 0,
    position: "absolute",
  },
  buttonImage: {
    top: 541,
    left: 29,
    height: 176,
    width: 333,
    position: "absolute",
  },
  icon2: {
    top: 211,
    left: 55,
    width: 284,
    height: 284,
    position: "absolute",
  },
  text: {
    top: 88,
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
  },
  text1: {
    top: 763,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 843,
    overflow: "hidden",
  },
});

export default Frame21;
