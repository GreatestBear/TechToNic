import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame26 = () => {
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
      <Text style={[styles.text, styles.textLayout]}>
        가지고 있는 질환을 모두 선택해주세요.
      </Text>
      <Text style={[styles.text1, styles.textLayout]}>
        <Text style={styles.text2}>{`2 / `}</Text>
        <Text style={styles.text3}>4</Text>
      </Text>
      <View style={styles.homeindicator}>
        <View style={[styles.homeIndicator, styles.notchIconPosition]} />
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout2]}
        onPress={() => navigation.navigate("Frame23")}
      >
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={[styles.text4, styles.textLayout]}>이전</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Frame22")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text4, styles.textLayout]}>다음</Text>
      </Pressable>
      <View style={[styles.groupParent, styles.statusbarPosition]}>
        <View style={[styles.rectangleContainer, styles.groupChildLayout1]}>
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text6, styles.textTypo]}>간질환</Text>
        </View>
        <View style={[styles.groupView, styles.groupChildLayout1]}>
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text6, styles.textTypo]}>녹내장</Text>
        </View>
        <View
          style={[styles.rectangleParent1, styles.rectangleParentPosition4]}
        >
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text6, styles.textTypo]}>심부전</Text>
        </View>
        <View style={[styles.rectangleParent2, styles.groupChildLayout1]}>
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text6, styles.textTypo]}>부정맥</Text>
        </View>
        <View style={[styles.rectangleParent3, styles.groupChildLayout1]}>
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text10, styles.textTypo]}>고지혈증</Text>
        </View>
        <View
          style={[styles.rectangleParent4, styles.rectangleParentPosition3]}
        >
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text10, styles.textTypo]}>담낭질환</Text>
        </View>
        <View style={[styles.rectangleParent5, styles.groupChildLayout]}>
          <View style={[styles.groupChild5, styles.groupChildLayout]} />
          <Text style={[styles.text12, styles.b12Position]}>당뇨</Text>
        </View>
        <View style={[styles.rectangleParent6, styles.groupChildLayout]}>
          <View style={[styles.groupChild6, styles.groupChildLayout]} />
          <Text style={[styles.text12, styles.b12Position]}>두통</Text>
        </View>
        <View style={[styles.rectangleParent7, styles.groupChildLayout]}>
          <View style={[styles.groupChild6, styles.groupChildLayout]} />
          <Text style={[styles.text12, styles.b12Position]}>통풍</Text>
        </View>
        <View
          style={[styles.rectangleParent8, styles.rectangleParentPosition3]}
        >
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text10, styles.textTypo]}>골관절염</Text>
        </View>
        <View
          style={[styles.rectangleParent9, styles.rectangleParentPosition2]}
        >
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text10, styles.textTypo]}>수술전후</Text>
        </View>
        <View
          style={[styles.rectangleParent10, styles.rectangleParentPosition2]}
        >
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text10, styles.textTypo]}>신장결석</Text>
        </View>
        <View
          style={[styles.rectangleParent11, styles.rectangleParentPosition4]}
        >
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text18, styles.textTypo]}>고칼슘혈증</Text>
        </View>
        <View
          style={[styles.rectangleParent12, styles.rectangleParentPosition2]}
        >
          <View style={[styles.groupChild12, styles.groupChildBorder]} />
          <Text style={[styles.text19, styles.textPosition]}>전립선비대증</Text>
        </View>
        <View style={[styles.rectangleParent13, styles.groupChild13Layout]}>
          <View style={[styles.groupChild13, styles.groupChild13Layout]} />
          <Text style={[styles.b12, styles.b12Position]}>비타민B12결핍</Text>
        </View>
        <View style={[styles.rectangleParent14, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild14, styles.rectangleParentLayout]} />
          <Text style={[styles.text20, styles.textTypo]}>갑산성기능저하증</Text>
        </View>
        <View style={[styles.rectangleParent15, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild14, styles.rectangleParentLayout]} />
          <Text style={[styles.text20, styles.textTypo]}>갑산성기능항진증</Text>
        </View>
        <View style={[styles.rectangleParent16, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild14, styles.rectangleParentLayout]} />
          <Text style={[styles.text20, styles.textTypo]}>과민성대장증후군</Text>
        </View>
        <View style={[styles.rectangleParent17, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild14, styles.rectangleParentLayout]} />
          <Text style={[styles.text20, styles.textTypo]}>고중성지방혈증</Text>
        </View>
        <View style={[styles.rectangleParent18, styles.groupChild18Layout]}>
          <View style={[styles.groupChild18, styles.groupChild18Layout]} />
          <Text style={[styles.text24, styles.textTypo]}>
            면역과민(아토피, 알레르기, 비염
          </Text>
        </View>
        <View style={[styles.rectangleParent19, styles.groupChild19Layout]}>
          <View style={[styles.groupChild19, styles.groupChild19Layout]} />
          <Text style={[styles.text25, styles.textTypo]}>
            소화기질환(위궤양 등)
          </Text>
        </View>
        <View style={[styles.rectangleParent20, styles.groupChild20Layout]}>
          <View style={[styles.groupChild20, styles.groupChild20Layout]} />
          <Text
            style={[styles.text26, styles.textTypo]}
          >{`심장질환(협심증, 뇌졸중 등)
`}</Text>
        </View>
        <View style={[styles.rectangleParent21, styles.groupChild21Layout]}>
          <View style={[styles.groupChild21, styles.groupChild21Layout]} />
          <Text style={[styles.text27, styles.textPosition]}>
            소화기질환(장폐색, 식도협착, 염증성질환 등)
          </Text>
        </View>
        <View style={[styles.rectangleParent22, styles.groupChildLayout1]}>
          <View style={[styles.groupChild22, styles.groupChildBorder]} />
          <Text style={[styles.text10, styles.textTypo]}>{`간질환
`}</Text>
        </View>
        <View style={[styles.rectangleParent23, styles.groupChild23Layout]}>
          <View style={[styles.groupChild23, styles.groupChild23Layout]} />
          <Text style={[styles.text29, styles.textTypo]}>
            위장질환(만성설사)
          </Text>
        </View>
        <View style={[styles.rectangleParent24, styles.groupChild24Layout]}>
          <View style={[styles.groupChild24, styles.groupChild24Layout]} />
          <Text style={[styles.text30, styles.textTypo]}>
            신장질환(신부전 등)
          </Text>
        </View>
        <View
          style={[styles.rectangleParent25, styles.rectangleParentPosition]}
        >
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text18, styles.textTypo]}>출혈성질환</Text>
        </View>
        <View
          style={[styles.rectangleParent26, styles.rectangleParentPosition]}
        >
          <View style={[styles.groupChild12, styles.groupChildBorder]} />
          <Text style={[styles.text19, styles.textPosition]}>염증성장질환</Text>
        </View>
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
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  textLayout: {
    height: 30,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  groupChildLayout2: {
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
  groupChildLayout1: {
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
  },
  textTypo: {
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
  rectangleParentPosition4: {
    left: 135,
    height: 46,
    width: 103,
    position: "absolute",
  },
  rectangleParentPosition3: {
    left: 250,
    height: 46,
    width: 103,
    position: "absolute",
  },
  groupChildLayout: {
    width: 60,
    height: 46,
    position: "absolute",
  },
  b12Position: {
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
  rectangleParentPosition2: {
    top: 359,
    height: 46,
    position: "absolute",
  },
  textPosition: {
    left: 11,
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
  groupChild13Layout: {
    width: 121,
    height: 46,
    position: "absolute",
  },
  rectangleParentLayout: {
    width: 160,
    height: 46,
    position: "absolute",
  },
  groupChild18Layout: {
    width: 271,
    height: 46,
    position: "absolute",
  },
  groupChild19Layout: {
    width: 187,
    height: 46,
    position: "absolute",
  },
  groupChild20Layout: {
    width: 204,
    height: 46,
    position: "absolute",
  },
  groupChild21Layout: {
    width: 344,
    height: 46,
    position: "absolute",
  },
  groupChild23Layout: {
    width: 147,
    height: 46,
    position: "absolute",
  },
  groupChild24Layout: {
    width: 168,
    height: 46,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 644,
    height: 46,
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
    letterSpacing: 0,
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
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
    top: 106,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    width: 352,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    height: 30,
    textAlign: "left",
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
    textAlign: "left",
    left: 19,
    lineHeight: 21,
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
    left: -2,
    height: 34,
    position: "absolute",
  },
  groupChild: {
    height: 63,
    width: 173,
    position: "absolute",
  },
  text4: {
    left: 65,
    fontSize: FontSize.size_4xl,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorWhite,
    width: 43,
    top: 17,
    height: 30,
    textAlign: "left",
    lineHeight: 21,
  },
  rectangleParent: {
    left: 10,
    top: 746,
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
    top: 746,
  },
  groupInner: {
    height: 46,
    position: "absolute",
    width: 103,
    backgroundColor: Color.colorWhite,
  },
  text6: {
    left: 24,
    width: 54,
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
  },
  rectangleContainer: {
    width: 103,
    left: 20,
    top: 245,
  },
  groupView: {
    left: 130,
    width: 103,
    top: 17,
  },
  rectangleParent1: {
    top: 245,
  },
  rectangleParent2: {
    left: 240,
    width: 103,
    top: 17,
  },
  text10: {
    width: 62,
    left: 20,
  },
  rectangleParent3: {
    top: 188,
    width: 103,
    left: 20,
  },
  rectangleParent4: {
    top: 245,
  },
  groupChild5: {
    backgroundColor: "rgba(31, 95, 220, 0.3)",
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  text12: {
    width: 36,
  },
  rectangleParent5: {
    top: 302,
    left: 20,
  },
  groupChild6: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  rectangleParent6: {
    left: 85,
    top: 302,
  },
  rectangleParent7: {
    left: 150,
    top: 302,
  },
  rectangleParent8: {
    top: 188,
  },
  rectangleParent9: {
    left: 140,
    width: 103,
  },
  rectangleParent10: {
    width: 103,
    left: 20,
  },
  text18: {
    width: 83,
    left: 10,
  },
  rectangleParent11: {
    top: 188,
  },
  groupChild12: {
    width: 112,
    height: 46,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text19: {
    width: 90,
  },
  rectangleParent12: {
    left: 260,
    width: 112,
  },
  groupChild13: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  b12: {
    width: 98,
  },
  rectangleParent13: {
    top: 416,
    left: 20,
  },
  groupChild14: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text20: {
    left: 18,
    width: 124,
  },
  rectangleParent14: {
    top: 74,
    width: 160,
    left: 20,
  },
  rectangleParent15: {
    left: 191,
    top: 74,
    width: 160,
  },
  rectangleParent16: {
    left: 215,
    top: 302,
  },
  rectangleParent17: {
    top: 131,
    left: 20,
  },
  groupChild18: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text24: {
    left: 33,
    width: 202,
  },
  rectangleParent18: {
    top: 530,
    left: 20,
  },
  groupChild19: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text25: {
    left: 6,
    width: 177,
  },
  rectangleParent19: {
    top: 131,
    left: 191,
  },
  groupChild20: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text26: {
    left: 7,
    width: 193,
  },
  rectangleParent20: {
    left: 157,
    top: 416,
  },
  groupChild21: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text27: {
    width: 326,
  },
  rectangleParent21: {
    top: 473,
    left: 20,
  },
  groupChild22: {
    backgroundColor: "rgba(37, 125, 230, 0.26)",
    height: 46,
    position: "absolute",
    width: 103,
  },
  rectangleParent22: {
    width: 103,
    left: 20,
    top: 17,
  },
  groupChild23: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text29: {
    left: 14,
    width: 119,
  },
  rectangleParent23: {
    top: 587,
    left: 20,
  },
  groupChild24: {
    backgroundColor: "rgba(26, 91, 188, 0.34)",
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  text30: {
    width: 130,
    left: 19,
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
  },
  rectangleParent24: {
    left: 180,
    top: 587,
  },
  rectangleParent25: {
    width: 103,
    left: 20,
  },
  rectangleParent26: {
    width: 112,
    left: 130,
  },
  groupParent: {
    top: 137,
    width: 388,
    height: 599,
  },
  view: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame26;
