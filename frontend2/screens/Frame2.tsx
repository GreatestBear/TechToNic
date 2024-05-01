import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Frame2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.pressable}
      onPress={() => navigation.navigate("Frame3")}
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
      <View style={[styles.child, styles.childLayout]} />
      <Text style={[styles.text, styles.textTypo2]}>
        가지고 있는 질환을 모두 선택해주세요.
      </Text>
      <Text style={[styles.text1, styles.textTypo2]}>
        <Text style={styles.text2}>{`2 / `}</Text>
        <Text style={styles.text3}>4</Text>
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
        <View style={[styles.groupChild, styles.groupChildBorder1]} />
        <Text style={[styles.text4, styles.textTypo1]}>거의 하지 않음</Text>
      </View>
      <View style={[styles.inner, styles.groupChildLayout]}>
        <View style={[styles.groupItem, styles.groupChildLayout]} />
      </View>
      <View style={[styles.rectangleGroup, styles.groupChildLayout]}>
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <Text style={[styles.text5, styles.textTypo]}>간질환</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupChildLayout]}>
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <Text style={[styles.text5, styles.textTypo]}>녹내장</Text>
      </View>
      <View style={[styles.groupView, styles.groupChildLayout]}>
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <Text style={[styles.text5, styles.textTypo]}>심부전</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupChildLayout]}>
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <Text style={[styles.text5, styles.textTypo]}>부정맥</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.groupChildLayout]}>
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <Text style={[styles.text9, styles.textTypo]}>고지혈증</Text>
      </View>
      <View style={[styles.rectangleParent3, styles.groupChildLayout]}>
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <Text style={[styles.text9, styles.textTypo]}>담낭질환</Text>
      </View>
      <View style={[styles.rectangleParent4, styles.rectangleParentLayout3]}>
        <View style={[styles.groupChild5, styles.rectangleParentLayout3]} />
        <Text style={[styles.text11, styles.textTypo]}>당뇨</Text>
      </View>
      <View style={[styles.rectangleParent5, styles.rectangleParentLayout3]}>
        <View style={[styles.groupChild5, styles.rectangleParentLayout3]} />
        <Text style={[styles.text11, styles.textTypo]}>두통</Text>
      </View>
      <View style={[styles.rectangleParent6, styles.rectangleParentLayout3]}>
        <View style={[styles.groupChild5, styles.rectangleParentLayout3]} />
        <Text style={[styles.text11, styles.textTypo]}>통풍</Text>
      </View>
      <View style={[styles.rectangleParent7, styles.rectangleParentLayout3]}>
        <View style={[styles.groupChild5, styles.rectangleParentLayout3]} />
        <Text style={[styles.text11, styles.textTypo]}>투석</Text>
      </View>
      <View style={[styles.rectangleParent8, styles.rectangleParentPosition1]}>
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <Text style={[styles.text9, styles.textTypo]}>골관절염</Text>
      </View>
      <View style={[styles.rectangleParent9, styles.groupChildLayout]}>
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <Text style={[styles.text9, styles.textTypo]}>수술전후</Text>
      </View>
      <View style={[styles.rectangleParent10, styles.rectangleParentPosition]}>
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <Text style={[styles.text9, styles.textTypo]}>신장결석</Text>
      </View>
      <View style={[styles.rectangleParent11, styles.groupChild12Layout]}>
        <View style={[styles.groupChild12, styles.groupChild12Layout]} />
        <Text style={[styles.text18, styles.textTypo]}>
          신장질환(신부전 등)
        </Text>
      </View>
      <View style={[styles.rectangleParent12, styles.rectangleParentPosition]}>
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <Text style={[styles.text19, styles.textTypo]}>고칼슘혈증</Text>
      </View>
      <View style={[styles.rectangleParent13, styles.groupChildLayout]}>
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <Text style={[styles.text19, styles.textTypo]}>출혈성질환</Text>
      </View>
      <View style={[styles.rectangleParent14, styles.rectangleParentLayout2]}>
        <View style={[styles.groupChild15, styles.rectangleParentLayout2]} />
        <Text style={[styles.text21, styles.textPosition]}>염증성장질환</Text>
      </View>
      <View style={[styles.rectangleParent15, styles.rectangleParentLayout2]}>
        <View style={[styles.groupChild15, styles.rectangleParentLayout2]} />
        <Text style={[styles.text21, styles.textPosition]}>전립선비대증</Text>
      </View>
      <View style={[styles.rectangleParent16, styles.rectangleParentLayout1]}>
        <View style={[styles.groupChild17, styles.rectangleParentLayout1]} />
        <Text style={[styles.text23, styles.textTypo]}>위장질환(만성설사)</Text>
      </View>
      <View style={[styles.rectangleParent17, styles.rectangleParentLayout1]}>
        <View style={[styles.groupChild17, styles.rectangleParentLayout1]} />
        <Text style={[styles.text23, styles.textTypo]}>하지정맥류, 치질</Text>
      </View>
      <View style={[styles.rectangleParent18, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild19, styles.rectangleParentLayout]} />
        <Text style={[styles.b12, styles.textTypo]}>비타민B12결핍</Text>
      </View>
      <View style={[styles.rectangleParent19, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild19, styles.rectangleParentLayout]} />
        <Text style={[styles.b12, styles.textTypo]}>천식, COPD</Text>
      </View>
      <View style={[styles.rectangleParent20, styles.groupChildLayout]}>
        <View style={[styles.groupChild21, styles.groupChildLayout]} />
        <Text style={[styles.text25, styles.textLayout]}>갑산성기능저하증</Text>
      </View>
      <View style={[styles.rectangleParent21, styles.rectangleParentPosition1]}>
        <View style={[styles.groupChild21, styles.groupChildLayout]} />
        <Text style={[styles.text25, styles.textLayout]}>과민성대장증후군</Text>
      </View>
      <View style={[styles.rectangleParent22, styles.groupChildLayout]}>
        <View style={[styles.groupChild21, styles.groupChildLayout]} />
        <Text style={[styles.text25, styles.textLayout]}>고중성지방혈증</Text>
      </View>
      <View style={[styles.rectangleParent23, styles.groupChild24Layout]}>
        <View style={[styles.groupChild24, styles.groupChild24Layout]} />
        <Text style={[styles.text28, styles.textTypo]}>
          면역과민(아토피, 알레르기, 비염
        </Text>
      </View>
      <View style={[styles.rectangleParent24, styles.groupChild25Layout]}>
        <View style={[styles.groupChild25, styles.groupChild25Layout]} />
        <Text style={[styles.text29, styles.textTypo]}>
          소화기질환(위궤양 등)
        </Text>
      </View>
      <View style={[styles.rectangleParent25, styles.groupChild26Layout]}>
        <View style={[styles.groupChild26, styles.groupChild26Layout]} />
        <Text
          style={[styles.text30, styles.textTypo]}
        >{`심장질환(협심증, 뇌졸중 등)
`}</Text>
      </View>
      <View style={[styles.rectangleParent26, styles.groupChild27Layout]}>
        <View style={[styles.groupChild27, styles.groupChild27Layout]} />
        <Text style={[styles.text31, styles.textPosition]}>
          소화기질환(장폐색, 식도협착, 염증성질환 등)
        </Text>
      </View>
      <View style={[styles.rectangleParent27, styles.groupChild28Layout]}>
        <View style={[styles.groupChild28, styles.groupChild28Layout]} />
        <Text style={[styles.text32, styles.textTypo]}>
          정신질환(우울증, 조울증, 양극성장애 등)
        </Text>
      </View>
      <View style={[styles.rectangleParent28, styles.rectangleLayout]}>
        <View style={[styles.groupChild29, styles.groupChildLayout]} />
        <Text style={[styles.text33, styles.textLayout]}>갑산성기능항진증</Text>
        <Image
          style={[styles.rectangleIcon, styles.rectangleLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
      </View>
      <Text style={[styles.text34, styles.textTypo]}>간질환</Text>
      <View style={[styles.item, styles.itemLayout]} />
      <View style={[styles.groupParent, styles.itemLayout]}>
        <View style={[styles.rectangleParent29, styles.groupChild30Layout]}>
          <View style={[styles.groupChild30, styles.groupChildBorder]} />
          <Text style={[styles.text35, styles.textTypo1]}>이전</Text>
        </View>
        <View style={[styles.rectangleParent30, styles.groupChild31Layout]}>
          <View style={[styles.groupChild31, styles.groupChild31Layout]} />
          <Text style={[styles.text35, styles.textTypo1]}>다음</Text>
        </View>
        <View style={[styles.homeindicator, styles.statusbarPosition]}>
          <View style={[styles.homeIndicator, styles.childLayout]} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  statusbarPosition: {
    overflow: "hidden",
    left: 0,
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
  childLayout: {
    height: 5,
    position: "absolute",
  },
  textTypo2: {
    height: 30,
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    width: 352,
    left: 19,
    letterSpacing: 0,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 63,
    position: "absolute",
  },
  groupChildBorder1: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  textTypo1: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    top: 17,
    height: 30,
    textAlign: "left",
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 46,
    position: "absolute",
  },
  textTypo: {
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleParentLayout3: {
    width: 60,
    height: 46,
    position: "absolute",
  },
  rectangleParentPosition1: {
    top: 368,
    height: 46,
    position: "absolute",
  },
  rectangleParentPosition: {
    left: 131,
    height: 46,
    width: 103,
    position: "absolute",
  },
  groupChild12Layout: {
    width: 168,
    height: 46,
    position: "absolute",
  },
  rectangleParentLayout2: {
    width: 112,
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
  rectangleParentLayout1: {
    width: 147,
    height: 46,
    position: "absolute",
  },
  rectangleParentLayout: {
    width: 121,
    height: 46,
    position: "absolute",
  },
  textLayout: {
    width: 124,
    left: 18,
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  groupChild24Layout: {
    width: 271,
    height: 46,
    position: "absolute",
  },
  groupChild25Layout: {
    width: 187,
    height: 46,
    position: "absolute",
  },
  groupChild26Layout: {
    width: 204,
    height: 46,
    position: "absolute",
  },
  groupChild27Layout: {
    width: 344,
    height: 46,
    position: "absolute",
  },
  groupChild28Layout: {
    width: 266,
    height: 46,
    position: "absolute",
  },
  rectangleLayout: {
    height: 100,
    position: "absolute",
  },
  itemLayout: {
    height: 98,
    position: "absolute",
  },
  groupChild30Layout: {
    width: 173,
    height: 63,
    top: 0,
    position: "absolute",
  },
  groupChildBorder: {
    borderColor: Color.colorWhite,
    backgroundColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
  },
  groupChild31Layout: {
    width: 174,
    height: 63,
    top: 0,
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
    height: 62,
    width: 390,
    top: 0,
  },
  child: {
    top: 149,
    backgroundColor: Color.colorGainsboro_100,
    width: 9,
    left: 256,
  },
  text: {
    top: 106,
    fontSize: FontSize.size_6xl,
    lineHeight: 30,
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
    lineHeight: 21,
    height: 30,
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
  },
  groupChild: {
    width: 349,
    height: 63,
    position: "absolute",
    top: 0,
  },
  text4: {
    left: 17,
    width: 352,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    top: 17,
    color: Color.labelColorLightPrimary,
  },
  rectangleParent: {
    top: 983,
    width: 369,
    left: 19,
  },
  groupItem: {
    width: 103,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  inner: {
    width: 103,
    left: 22,
    top: 198,
    height: 46,
  },
  text5: {
    left: 24,
    top: 12,
    width: 54,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
  },
  rectangleGroup: {
    left: 242,
    top: 314,
    width: 103,
  },
  rectangleContainer: {
    top: 428,
    width: 103,
    left: 22,
  },
  groupView: {
    left: 193,
    top: 785,
    width: 103,
  },
  rectangleParent1: {
    top: 553,
    width: 103,
    left: 22,
  },
  text9: {
    width: 62,
    left: 20,
    top: 12,
  },
  rectangleParent2: {
    top: 314,
    width: 103,
    left: 22,
  },
  rectangleParent3: {
    left: 133,
    top: 428,
    width: 103,
  },
  groupChild5: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  text11: {
    width: 36,
    left: 12,
    top: 12,
  },
  rectangleParent4: {
    top: 428,
    left: 242,
  },
  rectangleParent5: {
    left: 311,
    top: 428,
  },
  rectangleParent6: {
    top: 1070,
    left: 256,
  },
  rectangleParent7: {
    top: 1127,
    left: 20,
  },
  rectangleParent8: {
    width: 103,
    left: 22,
  },
  rectangleParent9: {
    top: 728,
    width: 103,
    left: 22,
  },
  rectangleParent10: {
    top: 728,
  },
  groupChild12: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  text18: {
    width: 130,
    top: 12,
    left: 19,
  },
  rectangleParent11: {
    top: 785,
    left: 19,
  },
  text19: {
    left: 10,
    width: 83,
    top: 12,
  },
  rectangleParent12: {
    top: 314,
  },
  rectangleParent13: {
    left: 145,
    top: 1070,
    width: 103,
  },
  groupChild15: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  text21: {
    width: 90,
  },
  rectangleParent14: {
    left: 21,
    top: 899,
  },
  rectangleParent15: {
    top: 956,
    left: 20,
  },
  groupChild17: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  text23: {
    left: 14,
    width: 119,
    top: 12,
  },
  rectangleParent16: {
    left: 138,
    top: 899,
  },
  rectangleParent17: {
    left: 87,
    top: 1127,
  },
  groupChild19: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  b12: {
    width: 98,
    left: 12,
    top: 12,
  },
  rectangleParent18: {
    left: 133,
    top: 553,
  },
  rectangleParent19: {
    top: 1070,
    left: 20,
  },
  groupChild21: {
    width: 160,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  text25: {
    top: 12,
  },
  rectangleParent20: {
    width: 160,
    left: 133,
    top: 198,
    height: 46,
  },
  rectangleParent21: {
    width: 160,
    left: 133,
  },
  rectangleParent22: {
    top: 257,
    left: 190,
    width: 160,
  },
  groupChild24: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  text28: {
    left: 33,
    width: 202,
    top: 12,
  },
  rectangleParent23: {
    top: 489,
    left: 21,
  },
  groupChild25: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  text29: {
    left: 6,
    width: 177,
    top: 12,
  },
  rectangleParent24: {
    top: 614,
    left: 21,
  },
  groupChild26: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  text30: {
    left: 7,
    width: 193,
    top: 12,
  },
  rectangleParent25: {
    top: 842,
    left: 20,
  },
  groupChild27: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  text31: {
    width: 326,
  },
  rectangleParent26: {
    top: 671,
    left: 20,
  },
  groupChild28: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  text32: {
    left: 9,
    width: 252,
    top: 12,
  },
  rectangleParent27: {
    top: 1013,
    left: 19,
  },
  groupChild29: {
    top: 24,
    width: 160,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  text33: {
    top: 36,
  },
  rectangleIcon: {
    left: 34,
    width: 100,
    top: 0,
  },
  rectangleParent28: {
    top: 234,
    width: 160,
    left: 22,
  },
  text34: {
    top: 210,
    left: 46,
    width: 54,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
  },
  item: {
    top: 751,
    left: 2,
    width: 371,
    backgroundColor: Color.colorWhite,
  },
  groupChild30: {
    width: 173,
    height: 63,
    top: 0,
    position: "absolute",
  },
  text35: {
    left: 65,
    color: Color.colorWhite,
    width: 43,
  },
  rectangleParent29: {
    left: 12,
  },
  groupChild31: {
    borderColor: Color.colorWhite,
    backgroundColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
  },
  rectangleParent30: {
    left: 209,
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
    right: 0,
    bottom: 0,
    height: 34,
  },
  groupParent: {
    top: 746,
    left: -2,
    width: 390,
  },
  pressable: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: Color.colorWhite,
  },
});

export default Frame2;
