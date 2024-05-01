import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame19 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={styles.statusbar}>
        <Image
          style={[styles.notchIcon, styles.notchIconPosition]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
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
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Frame17")}
      >
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={[styles.text, styles.textTypo1]}>이전</Text>
      </Pressable>
      <View style={styles.homeindicator}>
        <View style={[styles.homeIndicator, styles.notchIconPosition]} />
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Frame31")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text1, styles.textTypo1]}>메인 화면으로</Text>
      </Pressable>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-24.png")}
      />
      <Text style={[styles.text2, styles.textTypo]}>약</Text>
      <View style={styles.child} />
      <View style={[styles.item, styles.itemLayout]} />
      <Text style={[styles.mg, styles.mgPosition]}>{`델미칸 정 40mg
(혈압강하제)`}</Text>
      <Image
        style={[styles.icon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-12.png")}
      />
      <View style={[styles.inner, styles.itemLayout]} />
      <View style={[styles.rectangleView, styles.itemLayout]} />
      <Image
        style={[styles.icon2, styles.mg3Position]}
        contentFit="cover"
        source={require("../assets/-2.png")}
      />
      <View style={[styles.child1, styles.itemLayout]} />
      <Image
        style={[styles.icon3, styles.mg1Position]}
        contentFit="cover"
        source={require("../assets/-13.png")}
      />
      <Text style={[styles.mg1, styles.mg1Position]}>{`소론도 정 60mg
(부신호르몬제)`}</Text>
      <Text style={[styles.mg2, styles.mg2Position]}>{`아마릴 정 2mg
(혈당강하제)`}</Text>
      <Text style={[styles.mg3, styles.mg3Position]}>{`리피칸 정 10mg
(고지혈증제)`}</Text>
      <Image
        style={[styles.icon4, styles.mg2Position]}
        contentFit="cover"
        source={require("../assets/-11.png")}
      />
      <Text style={[styles.text3, styles.textTypo]}>{`현재 복용 중이신 약은
 다음과 같습니다`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  timeFlexBox: {
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 63,
    width: 173,
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 1,
    borderColor: Color.colorRoyalblue_100,
    borderStyle: "solid",
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  textTypo1: {
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    top: 17,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  groupLayout: {
    width: 174,
    height: 63,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  itemLayout: {
    height: 86,
    width: 304,
    borderColor: Color.colorDarkgray_100,
    top: "50%",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  mgPosition: {
    height: 39,
    top: 424,
    position: "absolute",
  },
  iconLayout: {
    width: 87,
    borderRadius: Border.br_xl,
    left: 65,
  },
  mg3Position: {
    top: 642,
    height: 39,
    position: "absolute",
  },
  mg1Position: {
    top: 533,
    height: 39,
    position: "absolute",
  },
  mg2Position: {
    top: 315,
    height: 39,
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
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
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
    top: 14,
    marginLeft: -168,
    height: 21,
    width: 54,
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
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    height: 63,
    width: 173,
    position: "absolute",
  },
  text: {
    width: 43,
    height: 30,
    textAlign: "left",
    left: 65,
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    top: 17,
  },
  rectangleParent: {
    left: 10,
    top: 738,
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
    right: 1,
    bottom: 0,
    left: -1,
    height: 34,
    position: "absolute",
  },
  groupItem: {
    borderWidth: 1,
    borderColor: Color.colorRoyalblue_100,
    borderStyle: "solid",
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  text1: {
    marginLeft: -68.75,
    width: 138,
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    top: 17,
    textAlign: "center",
    left: "50%",
  },
  rectangleGroup: {
    left: 207,
    top: 738,
  },
  icon: {
    top: 79,
    left: 54,
    width: 76,
    height: 72,
    position: "absolute",
  },
  text2: {
    top: 101,
    left: 79,
    fontSize: FontSize.size_21xl,
    width: 228,
    height: 31,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
  },
  child: {
    marginTop: -248,
    width: 340,
    height: 554,
    borderColor: Color.colorDarkgray_100,
    top: "50%",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    marginLeft: -168,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  item: {
    marginTop: -18,
    marginLeft: -149,
    width: 304,
  },
  mg: {
    width: 157,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 28,
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    left: 172,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  icon1: {
    height: 39,
    top: 424,
    position: "absolute",
  },
  inner: {
    marginTop: -127,
    marginLeft: -149,
    width: 304,
  },
  rectangleView: {
    marginTop: 200,
    marginLeft: -150,
  },
  icon2: {
    width: 87,
    borderRadius: Border.br_xl,
    left: 65,
  },
  child1: {
    marginTop: 91,
    marginLeft: -149,
    width: 304,
  },
  icon3: {
    width: 87,
    borderRadius: Border.br_xl,
    left: 65,
  },
  mg1: {
    width: 157,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 28,
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    left: 172,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  mg2: {
    width: 157,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 28,
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    left: 172,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  mg3: {
    width: 157,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 28,
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    left: 172,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  icon4: {
    width: 87,
    borderRadius: Border.br_xl,
    left: 65,
  },
  text3: {
    top: 200,
    left: 81,
    fontSize: FontSize.size_6xl,
    width: 250,
    textAlign: "left",
  },
  view: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame19;
