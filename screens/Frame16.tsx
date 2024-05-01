import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame16 = () => {
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
      <View style={[styles.homeindicator, styles.statusbarPosition]}>
        <View style={[styles.homeIndicator, styles.notchIconPosition]} />
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Frame12")}
      >
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={[styles.text, styles.textLayout]}>이전</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Frame31")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text, styles.textLayout]}>{`완료
`}</Text>
      </Pressable>
      <Image
        style={styles.image4Icon}
        contentFit="cover"
        source={require("../assets/image-41.png")}
      />
      <Text
        style={[styles.text2, styles.textLayout]}
      >{`갖고 계신 질환을 모두 선택

해주세요`}</Text>
      <View style={[styles.groupParent, styles.statusbarPosition]}>
        <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text3, styles.textTypo]}>간질환</Text>
        </View>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text3, styles.textTypo]}>녹내장</Text>
        </View>
        <View
          style={[styles.rectangleParent1, styles.rectangleParentPosition4]}
        >
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text3, styles.textTypo]}>심부전</Text>
        </View>
        <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text3, styles.textTypo]}>부정맥</Text>
        </View>
        <View style={[styles.rectangleParent3, styles.groupParentLayout]}>
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text7, styles.textTypo]}>고지혈증</Text>
        </View>
        <View
          style={[styles.rectangleParent4, styles.rectangleParentPosition3]}
        >
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text7, styles.textTypo]}>담낭질환</Text>
        </View>
        <View style={[styles.rectangleParent5, styles.rectangleParentLayout1]}>
          <View style={[styles.groupChild5, styles.rectangleParentLayout1]} />
          <Text style={[styles.text9, styles.b12Position]}>당뇨</Text>
        </View>
        <View style={[styles.rectangleParent6, styles.rectangleParentLayout1]}>
          <View style={[styles.groupChild5, styles.rectangleParentLayout1]} />
          <Text style={[styles.text9, styles.b12Position]}>두통</Text>
        </View>
        <View style={[styles.rectangleParent7, styles.rectangleParentLayout1]}>
          <View style={[styles.groupChild5, styles.rectangleParentLayout1]} />
          <Text style={[styles.text9, styles.b12Position]}>통풍</Text>
        </View>
        <View
          style={[styles.rectangleParent8, styles.rectangleParentPosition3]}
        >
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text7, styles.textTypo]}>골관절염</Text>
        </View>
        <View
          style={[styles.rectangleParent9, styles.rectangleParentPosition2]}
        >
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text7, styles.textTypo]}>수술전후</Text>
        </View>
        <View
          style={[styles.rectangleParent10, styles.rectangleParentPosition2]}
        >
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text7, styles.textTypo]}>신장결석</Text>
        </View>
        <View
          style={[styles.rectangleParent11, styles.rectangleParentPosition4]}
        >
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text15, styles.textTypo]}>고칼슘혈증</Text>
        </View>
        <View
          style={[styles.rectangleParent12, styles.rectangleParentPosition2]}
        >
          <View style={[styles.groupChild12, styles.groupChildBorder]} />
          <Text style={[styles.text16, styles.textPosition]}>전립선비대증</Text>
        </View>
        <View style={[styles.rectangleParent13, styles.groupChild13Layout]}>
          <View style={[styles.groupChild13, styles.groupChild13Layout]} />
          <Text style={[styles.b12, styles.b12Position]}>비타민B12결핍</Text>
        </View>
        <View style={[styles.rectangleParent14, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild14, styles.rectangleParentLayout]} />
          <Text style={[styles.text17, styles.textTypo]}>갑산성기능저하증</Text>
        </View>
        <View style={[styles.rectangleParent15, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild14, styles.rectangleParentLayout]} />
          <Text style={[styles.text17, styles.textTypo]}>갑산성기능항진증</Text>
        </View>
        <View style={[styles.rectangleParent16, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild14, styles.rectangleParentLayout]} />
          <Text style={[styles.text17, styles.textTypo]}>과민성대장증후군</Text>
        </View>
        <View style={[styles.rectangleParent17, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild14, styles.rectangleParentLayout]} />
          <Text style={[styles.text17, styles.textTypo]}>고중성지방혈증</Text>
        </View>
        <View style={[styles.rectangleParent18, styles.groupChild18Layout]}>
          <View style={[styles.groupChild18, styles.groupChild18Layout]} />
          <Text style={[styles.text21, styles.textTypo]}>
            면역과민(아토피, 알레르기, 비염
          </Text>
        </View>
        <View style={[styles.rectangleParent19, styles.groupChild19Layout]}>
          <View style={[styles.groupChild19, styles.groupChild19Layout]} />
          <Text style={[styles.text22, styles.textTypo]}>
            소화기질환(위궤양 등)
          </Text>
        </View>
        <View style={[styles.rectangleParent20, styles.groupChild20Layout]}>
          <View style={[styles.groupChild20, styles.groupChild20Layout]} />
          <Text
            style={[styles.text23, styles.textTypo]}
          >{`심장질환(협심증, 뇌졸중 등)
`}</Text>
        </View>
        <View style={[styles.rectangleParent21, styles.groupChild21Layout]}>
          <View style={[styles.groupChild21, styles.groupChild21Layout]} />
          <Text style={[styles.text24, styles.textPosition]}>
            소화기질환(장폐색, 식도협착, 염증성질환 등)
          </Text>
        </View>
        <View style={[styles.rectangleParent22, styles.groupParentLayout]}>
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text7, styles.textTypo]}>{`간질환
`}</Text>
        </View>
        <View style={[styles.rectangleParent23, styles.groupChild23Layout]}>
          <View style={[styles.groupChild23, styles.groupChild23Layout]} />
          <Text style={[styles.text26, styles.textTypo]}>
            위장질환(만성설사)
          </Text>
        </View>
        <View style={[styles.rectangleParent24, styles.groupChild24Layout]}>
          <View style={[styles.groupChild24, styles.groupChild24Layout]} />
          <Text style={[styles.text27, styles.textTypo]}>
            신장질환(신부전 등)
          </Text>
        </View>
        <View
          style={[styles.rectangleParent25, styles.rectangleParentPosition]}
        >
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text15, styles.textTypo]}>출혈성질환</Text>
        </View>
        <View
          style={[styles.rectangleParent26, styles.rectangleParentPosition]}
        >
          <View style={[styles.groupChild12, styles.groupChildBorder]} />
          <Text style={[styles.text16, styles.textPosition]}>염증성장질환</Text>
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
  groupChildLayout: {
    height: 63,
    width: 173,
    position: "absolute",
  },
  groupBorder: {
    borderColor: Color.colorRoyalblue_100,
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
  },
  textLayout: {
    height: 30,
    textAlign: "left",
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  groupLayout: {
    width: 174,
    height: 63,
    position: "absolute",
  },
  groupParentLayout: {
    height: 46,
    position: "absolute",
  },
  groupChildBorder: {
    borderColor: Color.colorDarkgray_100,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
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
  rectangleParentLayout1: {
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
    top: 0,
    overflow: "hidden",
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
  groupChild: {
    height: 63,
    width: 173,
    position: "absolute",
  },
  text: {
    left: 65,
    fontSize: FontSize.size_4xl,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorWhite,
    width: 43,
    top: 17,
  },
  rectangleParent: {
    left: 10,
    top: 746,
  },
  groupItem: {
    borderColor: Color.colorRoyalblue_100,
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
  },
  rectangleGroup: {
    left: 207,
    top: 746,
  },
  image4Icon: {
    top: 55,
    left: 133,
    borderRadius: Border.br_xl,
    width: 123,
    height: 124,
    position: "absolute",
  },
  text2: {
    top: 194,
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
    width: 352,
    left: 19,
    color: Color.labelColorLightPrimary,
    height: 30,
    textAlign: "left",
  },
  groupInner: {
    height: 46,
    position: "absolute",
    width: 103,
  },
  text3: {
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
  text7: {
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
    borderColor: Color.colorDarkgray_100,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  text9: {
    width: 36,
  },
  rectangleParent5: {
    top: 302,
    left: 20,
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
  text15: {
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
  },
  text16: {
    width: 90,
  },
  rectangleParent12: {
    left: 260,
    width: 112,
  },
  groupChild13: {
    borderColor: Color.colorDarkgray_100,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
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
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  text17: {
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
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  text21: {
    left: 33,
    width: 202,
  },
  rectangleParent18: {
    top: 530,
    left: 20,
  },
  groupChild19: {
    borderColor: Color.colorDarkgray_100,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  text22: {
    left: 6,
    width: 177,
  },
  rectangleParent19: {
    top: 131,
    left: 191,
  },
  groupChild20: {
    borderColor: Color.colorDarkgray_100,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  text23: {
    left: 7,
    width: 193,
  },
  rectangleParent20: {
    left: 157,
    top: 416,
  },
  groupChild21: {
    borderColor: Color.colorDarkgray_100,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  text24: {
    width: 326,
  },
  rectangleParent21: {
    top: 473,
    left: 20,
  },
  rectangleParent22: {
    width: 103,
    left: 20,
    top: 17,
  },
  groupChild23: {
    borderColor: Color.colorDarkgray_100,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  text26: {
    left: 14,
    width: 119,
  },
  rectangleParent23: {
    top: 587,
    left: 20,
  },
  groupChild24: {
    borderColor: Color.colorDarkgray_100,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  text27: {
    width: 130,
    left: 19,
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
    top: 273,
    width: 388,
    height: 462,
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

export default Frame16;
