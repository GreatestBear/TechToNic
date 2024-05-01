import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame27 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={styles.statusbar}>
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
      <View style={[styles.child, styles.childLayout]} />
      <Text style={[styles.text, styles.textLayout1]}>
        특정 알레르기가 있으신가요?
      </Text>
      <Text style={[styles.text1, styles.textLayout1]}>
        <Text style={styles.text2}>{`4 / `}</Text>
        <Text style={styles.text3}>4</Text>
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Frame22")}
      >
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={[styles.text4, styles.textLayout1]}>이전</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Frame28")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text4, styles.textLayout1]}>다음</Text>
      </Pressable>
      <View style={styles.homeindicator}>
        <View style={[styles.homeIndicator, styles.childLayout]} />
      </View>
      <View style={[styles.rectangleContainer, styles.groupViewLayout]}>
        <View style={[styles.groupInner, styles.groupChildBorder]} />
        <Text style={[styles.text6, styles.textLayout]}>아니요 없어요.</Text>
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.rectangleView, styles.groupChild8Border]} />
        <Text style={[styles.text6, styles.textLayout]}>네 있어요.</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupChild1Layout]}>
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        <Text style={[styles.text8, styles.textPosition]}>조개/갑각류</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.groupChild2Layout]}>
        <View style={[styles.groupChild2, styles.groupChild2Layout]} />
        <Text style={[styles.text9, styles.textLayout]}>
          돼지풀/국화/금잔화/데이지
        </Text>
      </View>
      <View style={[styles.rectangleParent3, styles.groupViewLayout]}>
        <View style={[styles.groupChild3, styles.groupChildBorder]} />
        <Text style={[styles.text10, styles.textPosition]}>황</Text>
      </View>
      <View style={[styles.rectangleParent4, styles.groupViewLayout]}>
        <View style={[styles.groupChild3, styles.groupChildBorder]} />
        <Text style={[styles.text10, styles.textPosition]}>옻</Text>
      </View>
      <View style={[styles.rectangleParent5, styles.groupViewLayout]}>
        <View style={[styles.groupChild5, styles.groupChildBorder]} />
        <Text style={[styles.text12, styles.textLayout]}>소나무껍질</Text>
      </View>
      <View style={[styles.rectangleParent6, styles.groupViewLayout]}>
        <View style={[styles.groupChild5, styles.groupChildBorder]} />
        <Text style={[styles.text12, styles.textLayout]}>미역/석류</Text>
      </View>
      <View style={[styles.rectangleParent7, styles.rectangleParentPosition]}>
        <View style={[styles.groupChild3, styles.groupChildBorder]} />
        <Text style={[styles.text10, styles.textPosition]}>대두</Text>
      </View>
      <View style={[styles.rectangleParent8, styles.groupChild8Layout]}>
        <View style={[styles.groupChild8, styles.groupChild8Layout]} />
        <Text style={[styles.text15, styles.textLayout]}>우유/유제품</Text>
      </View>
      <View style={[styles.rectangleParent9, styles.rectangleParentPosition]}>
        <View style={[styles.groupChild5, styles.groupChildBorder]} />
        <Text style={[styles.text16, styles.textLayout]}>꽃가루</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  childLayout: {
    height: 5,
    position: "absolute",
  },
  textLayout1: {
    height: 30,
    textAlign: "left",
    lineHeight: 21,
    letterSpacing: 0,
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
  groupViewLayout: {
    height: 46,
    position: "absolute",
  },
  groupChildBorder: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  textLayout: {
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  groupChild8Border: {
    backgroundColor: Color.colorRoyalblue_300,
    borderWidth: 1,
    borderColor: Color.colorRoyalblue_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  groupChild1Layout: {
    width: 121,
    height: 46,
    position: "absolute",
  },
  textPosition: {
    left: 12,
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  groupChild2Layout: {
    width: 235,
    height: 46,
    position: "absolute",
  },
  rectangleParentPosition: {
    left: 265,
    height: 46,
    position: "absolute",
  },
  groupChild8Layout: {
    width: 132,
    height: 46,
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
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  child: {
    top: 149,
    left: 256,
    backgroundColor: Color.colorGainsboro_100,
    width: 9,
  },
  text: {
    top: 119,
    fontSize: FontSize.size_6xl,
    width: 352,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    height: 30,
    left: 19,
    color: Color.labelColorLightPrimary,
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
    width: 352,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    height: 30,
    left: 19,
  },
  groupChild: {
    height: 63,
    width: 173,
    position: "absolute",
  },
  text4: {
    top: 17,
    left: 65,
    fontSize: FontSize.size_4xl,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorWhite,
    width: 43,
  },
  rectangleParent: {
    left: 10,
    top: 736,
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
  rectangleGroup: {
    left: 207,
    top: 736,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    left: "50%",
  },
  homeindicator: {
    right: 1,
    bottom: 2,
    left: -1,
    height: 34,
    position: "absolute",
  },
  groupInner: {
    height: 46,
    position: "absolute",
    width: 340,
  },
  text6: {
    left: 13,
    width: 264,
    textAlign: "left",
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
  },
  rectangleContainer: {
    top: 163,
    width: 340,
    height: 46,
    left: 19,
  },
  rectangleView: {
    height: 46,
    position: "absolute",
    width: 340,
  },
  groupView: {
    top: 223,
    width: 340,
    height: 46,
    left: 19,
  },
  groupChild1: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text8: {
    width: 98,
  },
  rectangleParent1: {
    top: 296,
    left: 19,
  },
  groupChild2: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text9: {
    left: 16,
    width: 202,
    textAlign: "center",
  },
  rectangleParent2: {
    left: 146,
    top: 296,
  },
  groupChild3: {
    width: 60,
    height: 46,
    position: "absolute",
  },
  text10: {
    width: 36,
  },
  rectangleParent3: {
    width: 60,
    top: 356,
    left: 19,
  },
  rectangleParent4: {
    left: 86,
    width: 60,
    top: 356,
  },
  groupChild5: {
    width: 103,
    height: 46,
    position: "absolute",
  },
  text12: {
    width: 83,
    left: 10,
    textAlign: "center",
  },
  rectangleParent5: {
    left: 153,
    width: 103,
    top: 356,
  },
  rectangleParent6: {
    top: 416,
    width: 103,
    left: 19,
  },
  rectangleParent7: {
    width: 60,
    top: 356,
  },
  groupChild8: {
    backgroundColor: Color.colorRoyalblue_300,
    borderWidth: 1,
    borderColor: Color.colorRoyalblue_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  text15: {
    left: 26,
    width: 80,
    textAlign: "center",
  },
  rectangleParent8: {
    left: 128,
    top: 416,
  },
  text16: {
    left: 24,
    textAlign: "center",
    width: 54,
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
  },
  rectangleParent9: {
    top: 416,
    width: 103,
  },
  view: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame27;
