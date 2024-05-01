import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.pressable}
      onPress={() => navigation.navigate("Frame2")}
    >
      <View style={[styles.statusbar, styles.statusbarPosition]}>
        <Image
          style={styles.notchIcon}
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
      <View style={styles.child} />
      <Text style={styles.text}>기본 건강정보를 알려주세요.</Text>
      <Text style={styles.text1}>
        <Text style={styles.text2}>{`1 / `}</Text>
        <Text style={styles.text3}>4</Text>
      </Text>
      <Text style={[styles.text4, styles.textTypo]}>
        키와 몸무게를 알려주세요
      </Text>
      <Text style={[styles.text5, styles.textTypo]}>흡연자이신가요?</Text>
      <View style={[styles.rectangleParent, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.text6, styles.textPosition]}>
          키를 입력해 주세요
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.text6, styles.textPosition]}>
          몸무게를 입력해 주세요
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.text8, styles.textPosition]}>네</Text>
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.text8, styles.textPosition]}>아니오</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Text style={[styles.text8, styles.textPosition]}>거의 하지 않음</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  statusbarPosition: {
    left: 0,
    top: 0,
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
  textTypo: {
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
  groupParentLayout: {
    height: 63,
    position: "absolute",
  },
  textPosition: {
    fontSize: FontSize.size_4xl,
    left: 17,
    top: 17,
    textAlign: "left",
    height: 30,
    width: 352,
    lineHeight: 21,
    letterSpacing: 0,
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
    position: "absolute",
  },
  child: {
    top: 149,
    left: 256,
    backgroundColor: Color.colorGainsboro_100,
    width: 9,
    height: 5,
    position: "absolute",
  },
  text: {
    top: 111,
    height: 30,
    width: 352,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
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
    top: 386,
  },
  groupChild: {
    borderRadius: Border.br_11xl,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    width: 349,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text6: {
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    fontSize: FontSize.size_4xl,
    left: 17,
    top: 17,
  },
  rectangleParent: {
    top: 222,
    width: 369,
    height: 63,
    left: 21,
  },
  rectangleGroup: {
    top: 304,
    width: 369,
    height: 63,
    left: 21,
  },
  text8: {
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.labelColorLightPrimary,
  },
  rectangleContainer: {
    top: 434,
    width: 369,
    height: 63,
    left: 19,
  },
  groupView: {
    top: 516,
    width: 369,
    height: 63,
    left: 19,
  },
  rectangleParent1: {
    top: 983,
    width: 369,
    height: 63,
    left: 19,
  },
  pressable: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: Color.colorWhite,
  },
});

export default Frame;
