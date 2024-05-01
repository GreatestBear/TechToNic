import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame7 = () => {
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
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Frame6")}
      >
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={styles.text}>이전</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Frame31")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={styles.text1}>메인 화면으로</Text>
      </Pressable>
      <View style={[styles.homeindicator, styles.statusbarPosition]}>
        <View style={[styles.homeIndicator, styles.notchIconPosition]} />
      </View>
      <Text style={styles.text2}>알람 시간 설정</Text>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/arrow-4.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.framePosition]}
        onPress={() => navigation.navigate("Frame8")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-5.png")}
        />
      </Pressable>
      <Text style={styles.text3}>
        시간을 직접 설정하여 알람 받을 시간을 지정해 주세요
      </Text>
      <Text style={[styles.text4, styles.textTypo]}>직접 시간 설정</Text>
      <Pressable
        style={[styles.pressable, styles.pressablePosition]}
        onPress={() => navigation.navigate("Frame8")}
      >
        <Text style={[styles.text5, styles.textTypo]}>오전 08:00</Text>
      </Pressable>
      <View style={styles.item} />
      <View style={[styles.inner, styles.innerLayout]} />
      <Image
        style={[styles.groupIcon, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/group-92.png")}
      />
      <Text style={[styles.mg, styles.mgPosition]}>{`텔미칸 정 40mg
(혈압강하제)`}</Text>
      <Image
        style={[styles.icon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-12.png")}
      />
      <Pressable
        style={[styles.container, styles.framePosition]}
        onPress={() => navigation.navigate("Frame8")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-5.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pressable1, styles.pressablePosition]}
        onPress={() => navigation.navigate("Frame8")}
      >
        <Text style={[styles.text5, styles.textTypo]}>오후 01:00</Text>
      </Pressable>
      <View style={[styles.rectangleView, styles.innerLayout]} />
      <Image
        style={[styles.child1, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/group-92.png")}
      />
      <Text style={[styles.mg1, styles.mg1Position]}>{`텔미칸 정 40mg
(혈압강하제)`}</Text>
      <Image
        style={[styles.icon3, styles.mg1Position]}
        contentFit="cover"
        source={require("../assets/-12.png")}
      />
      <Pressable
        style={[styles.frame, styles.framePosition]}
        onPress={() => navigation.navigate("Frame8")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-5.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pressable2, styles.pressablePosition]}
        onPress={() => navigation.navigate("Frame8")}
      >
        <Text style={[styles.text5, styles.textTypo]}>오후 07:00</Text>
      </Pressable>
      <View style={[styles.child2, styles.innerLayout]} />
      <Image
        style={[styles.child3, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/group-92.png")}
      />
      <Text style={[styles.mg2, styles.mg2Position]}>{`텔미칸 정 40mg
(혈압강하제)`}</Text>
      <Image
        style={[styles.icon5, styles.mg2Position]}
        contentFit="cover"
        source={require("../assets/-12.png")}
      />
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
  groupLayout: {
    width: 174,
    height: 63,
    position: "absolute",
  },
  framePosition: {
    width: 15,
    left: 115,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interBold,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    textAlign: "left",
    height: 20,
  },
  pressablePosition: {
    left: 38,
    position: "absolute",
  },
  innerLayout: {
    height: 86,
    width: 340,
    top: "50%",
    marginLeft: -170,
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  childLayout: {
    height: 24,
    left: 309,
    width: 24,
    position: "absolute",
  },
  mgPosition: {
    height: 39,
    top: 290,
    position: "absolute",
  },
  iconLayout: {
    width: 87,
    borderRadius: Border.br_xl,
    left: 43,
  },
  mg1Position: {
    top: 447,
    height: 39,
    position: "absolute",
  },
  mg2Position: {
    top: 614,
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
    fontFamily: FontFamily.calloutBold,
    height: 20,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
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
  groupChild: {
    height: 63,
    width: 173,
    position: "absolute",
  },
  text: {
    left: 65,
    width: 43,
    height: 30,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    top: 17,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleParent: {
    left: 11,
    top: 751,
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
    lineHeight: 21,
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
  },
  rectangleGroup: {
    left: 208,
    top: 751,
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
    bottom: 0,
    height: 34,
  },
  text2: {
    top: 62,
    left: 54,
    fontSize: FontSize.size_14xl,
    fontFamily: FontFamily.notoSansKRBold,
    width: 208,
    height: 31,
    fontWeight: "700",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  child: {
    top: 78,
    left: 30,
    width: 24,
    maxHeight: "100%",
    position: "absolute",
  },
  icon: {
    maxHeight: "100%",
    width: "100%",
  },
  wrapper: {
    top: 248,
  },
  text3: {
    top: 109,
    fontFamily: FontFamily.interMedium,
    color: Color.colorDimgray,
    width: 345,
    height: 38,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    left: 32,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  text4: {
    top: 156,
    width: 92,
    left: 32,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interBold,
    position: "absolute",
  },
  text5: {
    width: 77,
  },
  pressable: {
    top: 238,
  },
  item: {
    top: 193,
    borderTopWidth: 1,
    width: 391,
    height: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  inner: {
    marginTop: -161.5,
  },
  groupIcon: {
    top: 298,
  },
  mg: {
    width: 175,
    fontFamily: FontFamily.interSemiBold,
    left: 140,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  icon1: {
    height: 39,
    top: 290,
    position: "absolute",
  },
  container: {
    top: 405,
  },
  pressable1: {
    top: 395,
  },
  rectangleView: {
    marginTop: -4.5,
  },
  child1: {
    top: 456,
  },
  mg1: {
    width: 175,
    fontFamily: FontFamily.interSemiBold,
    left: 140,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  icon3: {
    width: 87,
    borderRadius: Border.br_xl,
    left: 43,
  },
  frame: {
    top: 572,
  },
  pressable2: {
    top: 562,
  },
  child2: {
    marginTop: 162.5,
  },
  child3: {
    top: 622,
  },
  mg2: {
    width: 175,
    fontFamily: FontFamily.interSemiBold,
    left: 140,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  icon5: {
    width: 87,
    borderRadius: Border.br_xl,
    left: 43,
  },
  view: {
    flex: 1,
    height: 857,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame7;
