import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const Frame13 = () => {
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
      <Text style={styles.text}>키와 몸무게를 알려주세요</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={styles.groupChild} />
        <Text style={[styles.text1, styles.textTypo]}>키를 입력해 주세요</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={styles.groupChild} />
        <Text style={[styles.text1, styles.textTypo]}>
          몸무게를 입력해 주세요
        </Text>
      </View>
      <View style={[styles.homeindicator, styles.statusbarPosition]}>
        <View style={[styles.homeIndicator, styles.notchIconPosition]} />
      </View>
      <Pressable
        style={[styles.rectangleContainer, styles.groupInnerLayout]}
        onPress={() => navigation.navigate("Frame12")}
      >
        <View style={[styles.groupInner, styles.groupInnerBorder]} />
        <Text style={[styles.text3, styles.textTypo]}>이전</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("Frame31")}
      >
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
        <Text style={[styles.text3, styles.textTypo]}>{`완료
`}</Text>
      </Pressable>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
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
  rectangleLayout: {
    height: 63,
    width: 369,
    left: 22,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_4xl,
    top: 17,
    height: 30,
    textAlign: "left",
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  groupInnerLayout: {
    width: 173,
    height: 63,
    position: "absolute",
  },
  groupInnerBorder: {
    borderColor: Color.colorRoyalblue_100,
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
  },
  rectangleViewLayout: {
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
    textAlign: "center",
    height: 20,
    color: Color.labelColorLightPrimary,
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
    top: 0,
    overflow: "hidden",
  },
  text: {
    top: 346,
    left: 27,
    fontSize: FontSize.size_13xl,
    height: 30,
    textAlign: "left",
    width: 352,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
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
  text1: {
    left: 17,
    color: Color.colorDarkgray_100,
    width: 352,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    fontSize: FontSize.size_4xl,
    top: 17,
  },
  rectangleParent: {
    top: 412,
  },
  rectangleGroup: {
    top: 495,
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
  groupInner: {
    width: 173,
    height: 63,
    position: "absolute",
  },
  text3: {
    left: 65,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorWhite,
    width: 43,
  },
  rectangleContainer: {
    left: 10,
    top: 746,
  },
  rectangleView: {
    borderColor: Color.colorRoyalblue_100,
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
  },
  groupPressable: {
    left: 207,
    top: 746,
  },
  image1Icon: {
    top: 102,
    left: 91,
    borderRadius: 50,
    width: 207,
    height: 204,
    position: "absolute",
  },
  view: {
    borderColor: Color.labelColorLightPrimary,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame13;
