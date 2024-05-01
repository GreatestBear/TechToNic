import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Frame23 = () => {
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
      <Text style={styles.text}>가지고 있는 질환이 있으신가요?</Text>
      <Text style={[styles.text1, styles.textTypo1]}>
        <Text style={styles.text2}>{`2 / `}</Text>
        <Text style={styles.text3}>4</Text>
      </Text>
      <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
        <View style={styles.groupChild} />
        <Text style={styles.text4}>없어요</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleParentLayout]}>
        <View style={styles.groupChild} />
        <Text style={styles.text4}>있어요</Text>
      </View>
      <Pressable
        style={[styles.rectangleContainer, styles.groupInnerLayout]}
        onPress={() => navigation.navigate("Frame25")}
      >
        <View style={[styles.groupInner, styles.groupInnerBorder]} />
        <Text style={[styles.text6, styles.textTypo]}>이전</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("Frame26")}
      >
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
        <Text style={[styles.text6, styles.textTypo]}>다음</Text>
      </Pressable>
      <View style={[styles.homeindicator, styles.groupParentPosition]}>
        <View style={[styles.homeIndicator, styles.notchIconPosition]} />
      </View>
      <Text style={[styles.text8, styles.textTypo1]}>
        음주를 자주 하시나요?
      </Text>
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <View style={[styles.groupView, styles.rectangleParentPosition]}>
          <View style={styles.groupChild} />
          <Text style={[styles.text9, styles.textTypo]}>주 1회 이상</Text>
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleParentPosition]}>
          <View style={styles.groupChild} />
          <Text style={[styles.text9, styles.textTypo]}>주 2회 이상</Text>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentPosition]}>
          <View style={styles.groupChild} />
          <Text style={[styles.text9, styles.textTypo]}>주 3회 이상</Text>
        </View>
        <View style={[styles.rectangleParent3, styles.rectangleParentPosition]}>
          <View style={styles.groupChild} />
          <Text style={[styles.text9, styles.textTypo]}>주 4회 이상</Text>
        </View>
        <View style={[styles.rectangleParent4, styles.rectangleParentLayout]}>
          <View style={styles.groupChild} />
          <Text style={[styles.text9, styles.textTypo]}>거의 하지 않음</Text>
        </View>
      </View>
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
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    left: 19,
    height: 30,
    width: 352,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 63,
    width: 369,
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
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
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
  rectangleViewLayout: {
    width: 174,
    height: 63,
    position: "absolute",
  },
  groupParentPosition: {
    left: -2,
    position: "absolute",
  },
  rectangleParentPosition: {
    left: 23,
    height: 63,
    width: 369,
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
    height: 62,
    width: 390,
    left: 0,
    position: "absolute",
    top: 0,
    overflow: "hidden",
  },
  text: {
    top: 498,
    left: 5,
    height: 30,
    width: 352,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    fontSize: FontSize.size_6xl,
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
    fontSize: FontSize.size_11xl,
  },
  groupChild: {
    borderColor: Color.colorDarkgray_100,
    width: 349,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    height: 63,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text4: {
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_4xl,
    top: 17,
    left: 17,
    textAlign: "left",
    height: 30,
    width: 352,
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 547,
    left: 21,
    width: 369,
  },
  rectangleGroup: {
    top: 629,
    left: 21,
    width: 369,
  },
  groupInner: {
    width: 173,
    height: 63,
    position: "absolute",
  },
  text6: {
    left: 65,
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
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  groupPressable: {
    left: 207,
    top: 746,
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
    right: 2,
    bottom: 0,
    height: 34,
  },
  text8: {
    top: 111,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    left: 19,
    color: Color.labelColorLightPrimary,
  },
  text9: {
    left: 17,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    width: 352,
    color: Color.labelColorLightPrimary,
  },
  groupView: {
    top: 264,
  },
  rectangleParent1: {
    top: 182,
  },
  rectangleParent2: {
    top: 100,
  },
  rectangleParent3: {
    top: 18,
  },
  rectangleParent4: {
    top: 346,
    left: 25,
  },
  groupParent: {
    top: 142,
    height: 311,
    width: 390,
  },
  view: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame23;
