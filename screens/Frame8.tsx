import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame8 = () => {
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
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={[styles.text, styles.textTypo2]}>이전</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text, styles.textTypo2]}>다음</Text>
      </View>
      <View style={[styles.homeindicator, styles.homeindicatorPosition]}>
        <View style={[styles.homeIndicator, styles.notchIconPosition]} />
      </View>
      <Text style={[styles.text2, styles.textTypo1]}>알람 시간 설정</Text>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/arrow-4.png")}
      />
      <Image
        style={[styles.item, styles.itemLayout]}
        contentFit="cover"
        source={require("../assets/arrow-5.png")}
      />
      <Text style={styles.text3}>
        시간을 직접 설정하여 알람 받을 시간을 지정해 주세요
      </Text>
      <Text style={styles.text4}>직접 시간 설정</Text>
      <Text style={[styles.text5, styles.textTypo]}>오전 08:00</Text>
      <View style={styles.inner} />
      <View style={[styles.rectangleView, styles.childLayout]} />
      <Image
        style={[styles.groupIcon, styles.child2Layout]}
        contentFit="cover"
        source={require("../assets/group-92.png")}
      />
      <Text style={[styles.mg, styles.mgPosition]}>{`텔미칸 정 40mg
(혈압강하제)`}</Text>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-12.png")}
      />
      <Image
        style={[styles.arrowIcon, styles.itemLayout]}
        contentFit="cover"
        source={require("../assets/arrow-5.png")}
      />
      <Text style={[styles.text6, styles.textTypo]}>오후 01:00</Text>
      <View style={[styles.child1, styles.childLayout]} />
      <Image
        style={[styles.child2, styles.child2Layout]}
        contentFit="cover"
        source={require("../assets/group-92.png")}
      />
      <Text style={[styles.mg1, styles.mg1Position]}>{`텔미칸 정 40mg
(혈압강하제)`}</Text>
      <Image
        style={[styles.icon1, styles.mg1Position]}
        contentFit="cover"
        source={require("../assets/-12.png")}
      />
      <Image
        style={[styles.child3, styles.itemLayout]}
        contentFit="cover"
        source={require("../assets/arrow-5.png")}
      />
      <Text style={[styles.text7, styles.textTypo]}>오후 07:00</Text>
      <View style={[styles.child4, styles.childLayout]} />
      <Text style={[styles.mg2, styles.mg2Position]}>{`텔미칸 정 40mg
(혈압강하제)`}</Text>
      <Image
        style={[styles.icon2, styles.mg2Position]}
        contentFit="cover"
        source={require("../assets/-12.png")}
      />
      <View style={styles.child5} />
      <Text style={[styles.text8, styles.textTypo1]}>섭취 시간</Text>
      <View style={styles.child6} />
      <Text style={[styles.text9, styles.textLayout1]}>09:00</Text>
      <Text style={[styles.text10, styles.textLayout1]}>09:00</Text>
      <Pressable
        style={[styles.rectangleContainer, styles.groupInnerLayout]}
        onPress={() => navigation.navigate("Frame7")}
      >
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Text style={[styles.text11, styles.textTypo2]}>확인</Text>
      </Pressable>
      <View style={[styles.homeindicator1, styles.homeindicatorPosition]}>
        <View style={[styles.homeIndicator, styles.notchIconPosition]} />
      </View>
      <Text style={[styles.text12, styles.textLayout]}>오전</Text>
      <Text style={[styles.text13, styles.textLayout]}>오후</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notchIconPosition: {
    position: "absolute",
    left: "50%",
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
    borderWidth: 1,
    borderColor: Color.colorRoyalblue_100,
    borderStyle: "solid",
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  textTypo2: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    top: 17,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  groupLayout: {
    width: 174,
    height: 63,
    position: "absolute",
  },
  homeindicatorPosition: {
    height: 34,
    right: 0,
    left: 0,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  itemLayout: {
    width: 15,
    left: 115,
    maxHeight: "100%",
    position: "absolute",
  },
  textTypo: {
    left: 38,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interBold,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    textAlign: "left",
    width: 77,
    height: 20,
    position: "absolute",
  },
  childLayout: {
    height: 86,
    width: 340,
    backgroundColor: Color.colorWhite,
    top: "50%",
    marginLeft: -170,
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: "50%",
    position: "absolute",
  },
  child2Layout: {
    height: 24,
    left: 309,
    width: 24,
    position: "absolute",
  },
  mgPosition: {
    height: 39,
    top: 290,
    position: "absolute",
  },
  iconLayout: {
    width: 87,
    borderRadius: Border.br_xl,
    left: 43,
  },
  mg1Position: {
    top: 447,
    height: 39,
    position: "absolute",
  },
  mg2Position: {
    top: 614,
    height: 39,
    position: "absolute",
  },
  textLayout1: {
    width: 93,
    fontFamily: FontFamily.interRegular,
    lineHeight: 42,
    letterSpacing: -0.6,
    fontSize: FontSize.size_11xl,
    left: 195,
    height: 39,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  groupInnerLayout: {
    width: 326,
    height: 63,
    position: "absolute",
  },
  textLayout: {
    width: 59,
    fontFamily: FontFamily.interRegular,
    lineHeight: 42,
    letterSpacing: -0.6,
    fontSize: FontSize.size_11xl,
    height: 39,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -86,
    width: 172,
    height: 32,
    left: "50%",
    top: 0,
  },
  time: {
    fontSize: FontSize.calloutBold_size,
    fontFamily: FontFamily.calloutBold,
    height: 20,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
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
    height: 13,
  },
  statusbar: {
    height: 62,
    overflow: "hidden",
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    height: 63,
    width: 173,
    position: "absolute",
  },
  text: {
    left: 65,
    width: 43,
    height: 30,
  },
  rectangleParent: {
    left: 11,
    top: 751,
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
    left: 208,
    top: 751,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    left: "50%",
  },
  homeindicator: {
    bottom: 0,
  },
  text2: {
    top: 62,
    left: 54,
    fontSize: FontSize.size_14xl,
    width: 208,
    height: 31,
  },
  child: {
    top: 78,
    left: 30,
    width: 24,
    maxHeight: "100%",
    position: "absolute",
  },
  item: {
    top: 248,
  },
  text3: {
    top: 109,
    fontFamily: FontFamily.interMedium,
    color: Color.colorDimgray,
    width: 345,
    height: 38,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    left: 32,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  text4: {
    top: 156,
    width: 92,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interBold,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    left: 32,
    fontWeight: "700",
    textAlign: "left",
    height: 20,
    position: "absolute",
  },
  text5: {
    top: 238,
  },
  inner: {
    top: 193,
    borderTopWidth: 1,
    width: 391,
    height: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  rectangleView: {
    marginTop: -161.5,
  },
  groupIcon: {
    top: 298,
  },
  mg: {
    width: 175,
    fontFamily: FontFamily.interSemiBold,
    left: 140,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  icon: {
    height: 39,
    top: 290,
    position: "absolute",
  },
  arrowIcon: {
    top: 405,
  },
  text6: {
    top: 395,
  },
  child1: {
    marginTop: -4.5,
  },
  child2: {
    top: 456,
  },
  mg1: {
    width: 175,
    fontFamily: FontFamily.interSemiBold,
    left: 140,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  icon1: {
    width: 87,
    borderRadius: Border.br_xl,
    left: 43,
  },
  child3: {
    top: 572,
  },
  text7: {
    top: 562,
  },
  child4: {
    marginTop: 162.5,
  },
  mg2: {
    width: 175,
    fontFamily: FontFamily.interSemiBold,
    left: 140,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  icon2: {
    width: 87,
    borderRadius: Border.br_xl,
    left: 43,
  },
  child5: {
    marginTop: 82.5,
    marginLeft: -195,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    height: 346,
    backgroundColor: Color.colorWhite,
    top: "50%",
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    left: "50%",
    width: 390,
    position: "absolute",
  },
  text8: {
    top: 541,
    left: 29,
    fontSize: FontSize.size_6xl,
    width: 99,
    height: 25,
  },
  child6: {
    marginTop: 154.5,
    backgroundColor: "rgba(173, 176, 185, 0.14)",
    height: 167,
    width: 340,
    marginLeft: -170,
    top: "50%",
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: "50%",
    position: "absolute",
  },
  text9: {
    top: 681,
  },
  text10: {
    top: 620,
  },
  groupInner: {
    borderWidth: 1,
    borderColor: Color.colorRoyalblue_100,
    borderStyle: "solid",
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  text11: {
    marginLeft: -21,
    left: "50%",
  },
  rectangleContainer: {
    top: 769,
    left: 32,
    width: 326,
  },
  homeindicator1: {
    bottom: 3,
  },
  text12: {
    marginTop: 191.5,
    marginLeft: -101,
    top: "50%",
    width: 59,
    left: "50%",
  },
  text13: {
    left: 93,
    top: 681,
  },
  view: {
    backgroundColor: "#bcbcbc",
    flex: 1,
    width: "100%",
    height: 857,
  },
});

export default Frame8;
