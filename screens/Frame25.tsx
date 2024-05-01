import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Frame25 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={[styles.statusbar, styles.statusbarPosition]}>
        <Image
          style={[styles.notchIcon, styles.notchIconPosition]}
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
            style={styles.iconMobileSignal}
            contentFit="cover"
            source={require("../assets/icon--mobile-signal.png")}
          />
        </View>
      </View>
      <Text style={styles.text}>기본 건강정보를 알려주세요.</Text>
      <Text style={styles.text1}>
        <Text style={styles.text2}>{`1 / `}</Text>
        <Text style={styles.text3}>4</Text>
      </Text>
      <Text style={[styles.text4, styles.textTypo1]}>
        키와 몸무게를 알려주세요
      </Text>
      <Text style={[styles.text5, styles.textTypo1]}>흡연자이신가요?</Text>
      <View style={[styles.rectangleParent, styles.groupLayout1]}>
        <View style={styles.groupChild} />
        <Text style={styles.text6}>키를 입력해 주세요</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout1]}>
        <View style={styles.groupChild} />
        <Text style={styles.text6}>몸무게를 입력해 주세요</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout1]}>
        <View style={styles.groupChild} />
        <Text style={[styles.text8, styles.textTypo]}>네</Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout1]}>
        <View style={styles.groupChild} />
        <Text style={[styles.text8, styles.textTypo]}>아니오</Text>
      </View>
      <View style={[styles.homeindicator, styles.statusbarPosition]}>
        <View style={[styles.homeIndicator, styles.notchIconPosition]} />
      </View>
      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={() => navigation.navigate("Frame24")}
      >
        <View style={[styles.groupChild1, styles.groupChildBorder]} />
        <Text style={[styles.text10, styles.textTypo]}>이전</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent1, styles.groupChild2Layout]}
        onPress={() => navigation.navigate("Frame23")}
      >
        <View style={[styles.groupChild2, styles.groupChild2Layout]} />
        <Text style={[styles.text10, styles.textTypo]}>다음</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  statusbarPosition: {
    left: 0,
    position: "absolute",
  },
  notchIconPosition: {
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
  textTypo1: {
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    height: 30,
    width: 352,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    left: 19,
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  groupLayout1: {
    height: 63,
    width: 369,
    left: 21,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    top: 17,
    textAlign: "left",
    height: 30,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  groupLayout: {
    width: 173,
    height: 63,
    position: "absolute",
  },
  groupChildBorder: {
    borderColor: Color.colorRoyalblue_100,
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
  },
  groupChild2Layout: {
    width: 174,
    height: 63,
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
    fontWeight: "900",
    fontFamily: FontFamily.notoSansKRBlack,
    height: 20,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    color: Color.labelColorLightPrimary,
    top: 1,
    width: 54,
    left: 0,
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
    left: "50%",
    position: "absolute",
  },
  rightSide: {
    marginLeft: 91,
    top: 19,
    width: 77,
  },
  statusbar: {
    width: 390,
    height: 62,
    overflow: "hidden",
    top: 0,
  },
  text: {
    top: 111,
    height: 30,
    width: 352,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    left: 19,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  text2: {
    color: Color.labelColorLightPrimary,
  },
  text3: {
    color: Color.colorDarkgray_100,
  },
  text1: {
    top: 62,
    textAlign: "left",
    height: 30,
    width: 352,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    left: 19,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  text4: {
    top: 173,
  },
  text5: {
    top: 416,
  },
  groupChild: {
    borderColor: Color.colorDarkgray_100,
    width: 349,
    borderRadius: Border.br_11xl,
    height: 63,
    left: 0,
    top: 0,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  text6: {
    fontSize: FontSize.size_4xl,
    top: 17,
    left: 17,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    height: 30,
    width: 352,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 222,
  },
  rectangleGroup: {
    top: 304,
  },
  text8: {
    left: 17,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    width: 352,
    color: Color.labelColorLightPrimary,
  },
  rectangleContainer: {
    top: 465,
  },
  groupView: {
    top: 547,
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
    bottom: 1,
    height: 34,
  },
  groupChild1: {
    width: 173,
    height: 63,
    position: "absolute",
  },
  text10: {
    left: 65,
    color: Color.colorWhite,
    width: 43,
  },
  groupPressable: {
    left: 10,
    top: 746,
  },
  groupChild2: {
    borderColor: Color.colorRoyalblue_100,
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
  },
  rectangleParent1: {
    left: 207,
    top: 746,
  },
  view: {
    borderColor: Color.labelColorLightPrimary,
    flex: 1,
    width: "100%",
    height: 844,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame25;
