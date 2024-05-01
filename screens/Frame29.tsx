import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Frame29 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <Text style={[styles.text, styles.textTypo]}>{`

가족을 연결해보세요!`}</Text>
      <View style={styles.statusbar}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={[styles.time, styles.timePosition]}>9:41</Text>
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
            style={[styles.iconMobileSignal, styles.timePosition]}
            contentFit="cover"
            source={require("../assets/icon--mobile-signal.png")}
          />
        </View>
      </View>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-15.png")}
      />
      <Text style={[styles.text1, styles.textLayout]}>
        연결할 피보호인이 있으신가요?
      </Text>
      <View style={[styles.rectangleParent, styles.groupLayout1]}>
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={styles.text2}>아니요 없어요.</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout1]}>
        <View style={styles.groupItem} />
        <Text style={styles.text2}>네 있어요.</Text>
      </View>
      <View style={[styles.inner, styles.innerLayout]}>
        <View style={[styles.groupInner, styles.innerLayout]} />
      </View>
      <Text style={styles.text4}>피보호인의 유저 코드를 입력하세요</Text>
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Frame28")}
      >
        <View style={[styles.rectangleView, styles.groupChild1Border]} />
        <Text style={[styles.text5, styles.textLayout]}>이전</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={() => navigation.navigate("Frame30")}
      >
        <View style={[styles.groupChild1, styles.groupLayout]} />
        <Text style={[styles.text5, styles.textLayout]}>다음</Text>
      </Pressable>
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    width: 352,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  timePosition: {
    top: 1,
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  textLayout: {
    height: 30,
    textAlign: "left",
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  groupLayout1: {
    height: 46,
    width: 340,
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  innerLayout: {
    height: 53,
    width: 349,
    position: "absolute",
  },
  rectangleLayout: {
    height: 63,
    width: 173,
    position: "absolute",
  },
  groupChild1Border: {
    backgroundColor: Color.colorRoyalblue_100,
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  groupLayout: {
    width: 174,
    height: 63,
    position: "absolute",
  },
  text: {
    top: 62,
    fontSize: FontSize.size_14xl,
    height: 107,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    width: 352,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    left: 22,
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -86,
    width: 172,
    height: 32,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  time: {
    fontSize: FontSize.calloutBold_size,
    fontWeight: "900",
    fontFamily: FontFamily.notoSansKRBlack,
    height: 20,
    width: 54,
    top: 1,
    left: 0,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
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
    left: "50%",
  },
  rightSide: {
    marginLeft: 91,
    top: 19,
    width: 77,
  },
  statusbar: {
    width: 390,
    height: 62,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    top: 194,
    left: 101,
    width: 181,
    height: 185,
    position: "absolute",
  },
  text1: {
    top: 435,
    left: 28,
    fontSize: FontSize.size_6xl,
    width: 352,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    height: 30,
  },
  groupChild: {
    height: 46,
    width: 340,
    position: "absolute",
  },
  text2: {
    top: 12,
    left: 13,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.notoSansKRRegular,
    width: 264,
    height: 22,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 490,
    left: 22,
    height: 46,
  },
  groupItem: {
    backgroundColor: Color.colorRoyalblue_300,
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    height: 46,
    width: 340,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleGroup: {
    top: 550,
    left: 22,
    height: 46,
  },
  groupInner: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  inner: {
    top: 621,
    left: 19,
  },
  text4: {
    top: 637,
    left: 24,
    fontSize: 22,
    color: Color.colorDarkgray_100,
    width: 340,
    textAlign: "center",
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleView: {
    height: 63,
    width: 173,
    position: "absolute",
  },
  text5: {
    top: 17,
    left: 65,
    fontSize: FontSize.size_4xl,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorWhite,
    width: 43,
  },
  rectangleContainer: {
    left: 9,
    top: 738,
  },
  groupChild1: {
    backgroundColor: Color.colorRoyalblue_100,
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  groupPressable: {
    left: 206,
    top: 738,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeindicator: {
    right: 2,
    bottom: 0,
    left: -2,
    height: 34,
    position: "absolute",
  },
  view: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame29;
