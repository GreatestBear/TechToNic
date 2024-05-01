import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Frame1 = () => {
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
      <View style={[styles.child, styles.itemLayout]} />
      <Text style={[styles.text, styles.textLayout1]}>
        특정 알레르기가 있으신가요?
      </Text>
      <Text style={[styles.text1, styles.textLayout1]}>
        <Text style={styles.text2}>{`4 / `}</Text>
        <Text style={styles.text3}>4</Text>
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildBorder1]} />
        <Text style={[styles.text4, styles.textTypo]}>거의 하지 않음</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupBorder]} />
        <Text style={[styles.text5, styles.textTypo]}>이전</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Text style={[styles.text5, styles.textTypo]}>다음</Text>
      </View>
      <View style={styles.homeindicator}>
        <View style={[styles.homeIndicator, styles.itemLayout]} />
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.rectangleView, styles.groupViewLayout]} />
        <Text style={[styles.text7, styles.textLayout]}>아니요 없어요.</Text>
      </View>
      <View style={[styles.item, styles.itemLayout]} />
      <View style={[styles.rectangleParent1, styles.groupViewLayout]}>
        <View style={[styles.groupChild1, styles.groupChildBorder]} />
        <Text style={[styles.text7, styles.textLayout]}>네 있어요.</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.groupChild2Layout]}>
        <View style={[styles.groupChild2, styles.groupChild2Layout]} />
        <Text style={[styles.text9, styles.textPosition]}>조개/갑각류</Text>
      </View>
      <View style={[styles.rectangleParent3, styles.groupChild3Layout]}>
        <View style={[styles.groupChild3, styles.groupChild3Layout]} />
        <Text style={[styles.text10, styles.textLayout]}>
          돼지풀/국화/금잔화/데이지
        </Text>
      </View>
      <View style={[styles.rectangleParent4, styles.groupViewLayout]}>
        <View style={[styles.groupChild4, styles.groupViewLayout]} />
        <Text style={[styles.text11, styles.textPosition]}>황</Text>
      </View>
      <View style={[styles.rectangleParent5, styles.groupViewLayout]}>
        <View style={[styles.groupChild4, styles.groupViewLayout]} />
        <Text style={[styles.text11, styles.textPosition]}>옻</Text>
      </View>
      <View style={[styles.rectangleParent6, styles.groupViewLayout]}>
        <View style={[styles.groupChild6, styles.groupViewLayout]} />
        <Text style={[styles.text13, styles.textLayout]}>소나무껍질</Text>
      </View>
      <View style={[styles.rectangleParent7, styles.groupViewLayout]}>
        <View style={[styles.groupChild6, styles.groupViewLayout]} />
        <Text style={[styles.text13, styles.textLayout]}>미역/석류</Text>
      </View>
      <View style={[styles.rectangleParent8, styles.rectangleParentPosition]}>
        <View style={[styles.groupChild4, styles.groupViewLayout]} />
        <Text style={[styles.text11, styles.textPosition]}>대두</Text>
      </View>
      <View style={[styles.rectangleParent9, styles.groupChild9Layout]}>
        <View style={[styles.groupChild9, styles.groupChild9Layout]} />
        <Text style={[styles.text16, styles.textLayout]}>우유/유제품</Text>
      </View>
      <View style={[styles.rectangleParent10, styles.rectangleParentPosition]}>
        <View style={[styles.groupChild6, styles.groupViewLayout]} />
        <Text style={[styles.text17, styles.textLayout]}>꽃가루</Text>
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
  itemLayout: {
    height: 5,
    position: "absolute",
  },
  textLayout1: {
    height: 30,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    width: 352,
    textAlign: "left",
    left: 19,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 63,
    position: "absolute",
  },
  groupChildBorder1: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
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
  groupLayout: {
    width: 173,
    height: 63,
    position: "absolute",
  },
  groupBorder: {
    borderColor: Color.colorRoyalblue_100,
    backgroundColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  groupInnerLayout: {
    width: 174,
    height: 63,
    position: "absolute",
  },
  groupViewLayout: {
    height: 46,
    position: "absolute",
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
  groupChildBorder: {
    backgroundColor: Color.colorRoyalblue_300,
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  groupChild2Layout: {
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
  groupChild3Layout: {
    width: 235,
    height: 46,
    position: "absolute",
  },
  rectangleParentPosition: {
    left: 265,
    height: 46,
    position: "absolute",
  },
  groupChild9Layout: {
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
    overflow: "hidden",
    left: 0,
    top: 0,
    position: "absolute",
  },
  child: {
    top: 149,
    width: 9,
    backgroundColor: Color.colorGainsboro_100,
    left: 256,
    height: 5,
  },
  text: {
    top: 119,
    fontSize: FontSize.size_6xl,
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
  },
  groupChild: {
    width: 349,
    height: 63,
    position: "absolute",
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
    width: 173,
    height: 63,
    position: "absolute",
  },
  text5: {
    left: 65,
    color: Color.colorWhite,
    width: 43,
  },
  rectangleGroup: {
    left: 10,
    top: 736,
  },
  groupInner: {
    borderColor: Color.colorRoyalblue_100,
    backgroundColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  rectangleContainer: {
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
    right: 2,
    bottom: 10,
    left: -2,
    height: 34,
    position: "absolute",
  },
  rectangleView: {
    width: 340,
    height: 46,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text7: {
    left: 13,
    width: 264,
    textAlign: "left",
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
  },
  groupView: {
    top: 163,
    width: 340,
    height: 46,
    left: 19,
  },
  item: {
    top: 209,
    width: 9,
    backgroundColor: Color.colorGainsboro_100,
    left: 256,
    height: 5,
  },
  groupChild1: {
    height: 46,
    position: "absolute",
    width: 340,
  },
  rectangleParent1: {
    top: 223,
    width: 340,
    height: 46,
    left: 19,
  },
  groupChild2: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text9: {
    width: 98,
  },
  rectangleParent2: {
    top: 296,
    left: 19,
  },
  groupChild3: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text10: {
    left: 16,
    width: 202,
    textAlign: "center",
  },
  rectangleParent3: {
    left: 146,
    top: 296,
  },
  groupChild4: {
    width: 60,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text11: {
    width: 36,
  },
  rectangleParent4: {
    width: 60,
    top: 356,
    left: 19,
  },
  rectangleParent5: {
    left: 86,
    width: 60,
    top: 356,
  },
  groupChild6: {
    width: 103,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text13: {
    width: 83,
    left: 10,
    textAlign: "center",
  },
  rectangleParent6: {
    left: 153,
    width: 103,
    top: 356,
  },
  rectangleParent7: {
    top: 416,
    width: 103,
    left: 19,
  },
  rectangleParent8: {
    width: 60,
    top: 356,
  },
  groupChild9: {
    backgroundColor: Color.colorRoyalblue_300,
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  text16: {
    left: 26,
    width: 80,
    textAlign: "center",
  },
  rectangleParent9: {
    left: 128,
    top: 416,
  },
  text17: {
    left: 24,
    textAlign: "center",
    width: 54,
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
  },
  rectangleParent10: {
    top: 416,
    width: 103,
  },
  view: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: Color.colorWhite,
  },
});

export default Frame1;
