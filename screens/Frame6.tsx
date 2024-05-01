import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame6 = () => {
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
      <Text style={[styles.text, styles.timeFlexBox]}>복용중인 약</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Frame31")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-4.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.child, styles.childLayout1]}
        onPress={() => navigation.navigate("Frame7")}
      />
      <Pressable
        style={[styles.pressable, styles.mgPosition]}
        onPress={() => navigation.navigate("Frame7")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/-11.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.mg, styles.mgPosition]}
        onPress={() => navigation.navigate("Frame7")}
      >
        <Text style={[styles.mg1, styles.mg1Typo]}>{`아마릴 정 2mg
(혈당강하제)`}</Text>
      </Pressable>
      <Image
        style={[styles.item, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/group-92.png")}
      />
      <View style={[styles.inner, styles.childLayout1]} />
      <Pressable
        style={[styles.inner, styles.childLayout1]}
        onPress={() => navigation.navigate("Frame7")}
      />
      <Text style={[styles.mg2, styles.mg1Typo]}>{`소론도 정 60mg
(부신호르몬제)`}</Text>
      <Image
        style={[styles.groupIcon, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/group-92.png")}
      />
      <View style={[styles.rectangleView, styles.childLayout1]} />
      <View style={[styles.rectangleView, styles.childLayout1]} />
      <Pressable
        style={[styles.rectangleView, styles.childLayout1]}
        onPress={() => navigation.navigate("Frame7")}
      />
      <Text style={[styles.mg3, styles.mg3Position]}>{`리피칸 정 10mg
(고지혈증제)`}</Text>
      <Image
        style={[styles.child3, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/group-92.png")}
      />
      <View style={[styles.child4, styles.childLayout1]} />
      <Pressable
        style={[styles.child4, styles.childLayout1]}
        onPress={() => navigation.navigate("Frame7")}
      />
      <Pressable
        style={[styles.mg4, styles.mg4Position]}
        onPress={() => navigation.navigate("Frame7")}
      >
        <Text style={[styles.mg1, styles.mg1Typo]}>{`텔미칸 정 40mg
(혈압강하제)`}</Text>
      </Pressable>
      <Image
        style={[styles.child6, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/group-92.png")}
      />
      <Pressable
        style={[styles.pressable1, styles.mg4Position]}
        onPress={() => navigation.navigate("Frame7")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/-12.png")}
        />
      </Pressable>
      <Image
        style={[styles.icon3, styles.pressableLayout]}
        contentFit="cover"
        source={require("../assets/-13.png")}
      />
      <Image
        style={[styles.icon4, styles.mg3Position]}
        contentFit="cover"
        source={require("../assets/-2.png")}
      />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Frame31")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.text1}>이전</Text>
      </Pressable>
      <View style={[styles.homeindicator, styles.statusbarPosition]}>
        <View style={[styles.homeIndicator, styles.notchIconPosition]} />
      </View>
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
  timeFlexBox: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  childLayout1: {
    height: 86,
    width: 340,
    borderColor: Color.colorDarkgray_100,
    top: "50%",
    marginLeft: -175,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  mgPosition: {
    top: 145,
    position: "absolute",
  },
  mg1Typo: {
    width: 234,
    fontFamily: FontFamily.interSemiBold,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  childLayout: {
    height: 24,
    left: 316,
    width: 24,
    position: "absolute",
  },
  mg3Position: {
    top: 535,
    height: 39,
    position: "absolute",
  },
  mg4Position: {
    top: 275,
    position: "absolute",
  },
  pressableLayout: {
    left: 38,
    height: 39,
    width: 87,
  },
  groupChildLayout: {
    height: 63,
    width: 326,
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
    fontWeight: "600",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    top: 1,
    width: 54,
    left: 0,
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
    top: 62,
    left: 54,
    fontSize: FontSize.size_14xl,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
    width: 173,
    height: 31,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
  },
  icon: {
    maxHeight: "100%",
    width: "100%",
  },
  wrapper: {
    left: 30,
    top: 78,
    width: 24,
    position: "absolute",
  },
  child: {
    marginTop: -306.5,
  },
  icon1: {
    height: "100%",
    borderRadius: Border.br_xl,
    width: "100%",
  },
  pressable: {
    height: 39,
    width: 87,
    left: 38,
  },
  mg1: {
    height: 39,
  },
  mg: {
    left: 135,
  },
  item: {
    top: 153,
  },
  inner: {
    marginTop: -46.5,
  },
  mg2: {
    top: 405,
    left: 135,
    height: 39,
    position: "absolute",
  },
  groupIcon: {
    top: 413,
  },
  rectangleView: {
    marginTop: 83.5,
  },
  mg3: {
    width: 234,
    fontFamily: FontFamily.interSemiBold,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
    left: 135,
  },
  child3: {
    top: 543,
  },
  child4: {
    marginTop: -176.5,
  },
  mg4: {
    left: 135,
  },
  child6: {
    top: 283,
  },
  pressable1: {
    height: 39,
    width: 87,
    left: 38,
  },
  icon3: {
    top: 404,
    borderRadius: Border.br_xl,
    height: 39,
    width: 87,
    position: "absolute",
  },
  icon4: {
    left: 37,
    borderRadius: Border.br_xl,
    width: 87,
  },
  groupChild: {
    backgroundColor: Color.colorRoyalblue_100,
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    width: 326,
    left: 0,
    top: 0,
  },
  text1: {
    marginLeft: -21,
    top: 17,
    fontSize: FontSize.size_4xl,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorWhite,
    textAlign: "left",
    lineHeight: 21,
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    top: 755,
    left: 32,
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
  view: {
    flex: 1,
    height: 857,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame6;
