import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Frame28 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={styles.statusbarPosition}>
        <View style={[styles.statusbar, styles.statusbarPosition]}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/notch.png")}
          />
          <View style={[styles.leftSide, styles.leftSideLayout]}>
            <View style={[styles.statusbarTime, styles.leftSideLayout]}>
              <Text style={[styles.time, styles.textFlexBox]}>9:41</Text>
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
      </View>
      <View style={[styles.parent, styles.textLayout]}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/--11.png")}
        />
        <Text style={[styles.text, styles.textLayout]}>
          <Text style={styles.text1}>{`기본 정보 입력이  완료 되었어요
`}</Text>
          <Text style={styles.text2}>다음 단계를 계속 진행해주세요</Text>
        </Text>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Frame29")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.text3, styles.textFlexBox]}>다음으로</Text>
      </Pressable>
      <View style={styles.homeindicator}>
        <View style={[styles.homeIndicator, styles.iconPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusbarPosition: {
    height: 62,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
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
  textFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  textLayout: {
    width: 348,
    position: "absolute",
  },
  groupChildLayout: {
    height: 63,
    width: 348,
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
    lineHeight: 21,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
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
  },
  rightSide: {
    marginLeft: 91,
    top: 19,
    width: 77,
  },
  statusbar: {
    overflow: "hidden",
  },
  icon: {
    left: 32,
    width: 284,
    height: 284,
    top: 0,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.labelColorLightPrimary,
  },
  text2: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.notoSansKRRegular,
    color: Color.colorGray_100,
  },
  text: {
    top: 307,
    lineHeight: 50,
    height: 153,
    textAlign: "center",
    letterSpacing: 0,
    width: 348,
    left: 0,
  },
  parent: {
    top: 143,
    height: 460,
    left: 21,
  },
  groupChild: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorRoyalblue_100,
    borderStyle: "solid",
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    left: 0,
    height: 63,
    top: 0,
  },
  text3: {
    top: 20,
    left: 85,
    fontSize: FontSize.size_4xl,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorWhite,
    width: 178,
    height: 23,
    lineHeight: 21,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 737,
    left: 21,
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
    right: -1,
    bottom: 0,
    left: 1,
    height: 34,
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Frame28;
