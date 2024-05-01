import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame9 = () => {
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
      <Pressable
        style={[styles.inner, styles.innerLayout]}
        onPress={() => navigation.navigate("Frame11")}
      >
        <View style={[styles.groupChild, styles.groupBorder]} />
      </Pressable>
      <View style={[styles.child, styles.childLayout2]}>
        <View style={[styles.groupItem, styles.childLayout2]} />
      </View>
      <View style={[styles.homeindicator, styles.statusbarPosition]}>
        <View style={[styles.homeIndicator, styles.notchIconPosition]} />
      </View>
      <Text style={styles.text}>복용중인 약</Text>
      <Image
        style={styles.item}
        contentFit="cover"
        source={require("../assets/arrow-4.png")}
      />
      <View style={[styles.rectangleView, styles.childLayout1]} />
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-11.png")}
      />
      <Text style={[styles.mg, styles.mgTypo]}>{`아마릴 정 2mg
(혈당강하제)`}</Text>
      <Image
        style={[styles.groupIcon, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/group-92.png")}
      />
      <View style={[styles.child1, styles.childLayout1]} />
      <Text style={[styles.mg1, styles.mgTypo]}>{`소론도 정 60mg
(부신호르몬제)`}</Text>
      <Image
        style={[styles.child2, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/group-92.png")}
      />
      <View style={[styles.child3, styles.childLayout1]} />
      <View style={[styles.child3, styles.childLayout1]} />
      <View style={[styles.child3, styles.childLayout1]} />
      <Text style={[styles.mg2, styles.mg2Position]}>{`리피칸 정 10mg
(고지혈증제)`}</Text>
      <Image
        style={[styles.child6, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/group-92.png")}
      />
      <View style={[styles.child7, styles.childLayout1]} />
      <View style={[styles.child7, styles.childLayout1]} />
      <Text style={[styles.mg3, styles.mg3Position]}>{`텔미칸 정 40mg
(혈압강하제)`}</Text>
      <Image
        style={[styles.child9, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/group-92.png")}
      />
      <Image
        style={[styles.icon1, styles.mg3Position]}
        contentFit="cover"
        source={require("../assets/-12.png")}
      />
      <Image
        style={[styles.icon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-13.png")}
      />
      <Image
        style={[styles.icon3, styles.mg2Position]}
        contentFit="cover"
        source={require("../assets/-2.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>더 추가하기</Text>
      <Pressable
        style={[styles.pressable, styles.text1Position]}
        onPress={() => navigation.navigate("Frame31")}
      >
        <Text style={[styles.text2, styles.textTypo]}>메인 화면으로</Text>
      </Pressable>
      <View style={[styles.child10, styles.childLayout1]} />
      <Image
        style={[styles.child11, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/group-92.png")}
      />
      <Text
        style={[styles.acetaminophen300mg, styles.icon4Position]}
      >{`리리스 정
(Acetaminophen 300mg 외 1) `}</Text>
      <Image
        style={[styles.icon4, styles.icon4Position]}
        contentFit="cover"
        source={require("../assets/-11.png")}
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
  innerLayout: {
    height: 63,
    width: 173,
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 1,
    borderColor: Color.colorRoyalblue_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  childLayout2: {
    width: 174,
    height: 63,
    position: "absolute",
  },
  childLayout1: {
    height: 86,
    width: 340,
    borderColor: Color.colorDarkgray_100,
    top: "50%",
    marginLeft: -175,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iconLayout: {
    height: 39,
    position: "absolute",
  },
  mgTypo: {
    width: 234,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    left: 135,
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  childLayout: {
    height: 24,
    left: 316,
    width: 24,
    position: "absolute",
  },
  mg2Position: {
    top: 535,
    height: 39,
    position: "absolute",
  },
  mg3Position: {
    top: 275,
    height: 39,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    lineHeight: 21,
    letterSpacing: 0,
  },
  text1Position: {
    top: 772,
    position: "absolute",
  },
  icon4Position: {
    top: 665,
    height: 39,
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
  },
  statusbar: {
    width: 390,
    height: 62,
    overflow: "hidden",
    top: 0,
  },
  groupChild: {
    height: 63,
    width: 173,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  inner: {
    left: 11,
    top: 751,
  },
  groupItem: {
    backgroundColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    borderColor: Color.colorRoyalblue_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  child: {
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
    right: 0,
    bottom: 0,
    height: 34,
  },
  text: {
    top: 62,
    left: 54,
    fontSize: FontSize.size_14xl,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
    height: 31,
    width: 173,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  item: {
    top: 78,
    left: 30,
    maxHeight: "100%",
    width: 24,
    position: "absolute",
  },
  rectangleView: {
    marginTop: -306.5,
  },
  icon: {
    width: 87,
    borderRadius: Border.br_xl,
    left: 38,
    top: 145,
    height: 39,
  },
  mg: {
    height: 39,
    position: "absolute",
    top: 145,
  },
  groupIcon: {
    top: 153,
  },
  child1: {
    marginTop: -46.5,
  },
  mg1: {
    top: 405,
    height: 39,
    position: "absolute",
  },
  child2: {
    top: 413,
  },
  child3: {
    marginTop: 83.5,
  },
  mg2: {
    width: 234,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    left: 135,
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  child6: {
    top: 543,
  },
  child7: {
    marginTop: -176.5,
  },
  mg3: {
    width: 234,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    left: 135,
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  child9: {
    top: 283,
  },
  icon1: {
    width: 87,
    borderRadius: Border.br_xl,
    left: 38,
  },
  icon2: {
    top: 404,
    width: 87,
    borderRadius: Border.br_xl,
    left: 38,
  },
  icon3: {
    left: 37,
    width: 87,
    borderRadius: Border.br_xl,
  },
  text1: {
    marginLeft: -152,
    color: Color.colorRoyalblue_100,
    width: 110,
    top: 772,
    position: "absolute",
    left: "50%",
  },
  text2: {
    color: Color.colorWhite,
    width: 139,
    height: 30,
  },
  pressable: {
    left: 230,
  },
  child10: {
    marginTop: 213.5,
  },
  child11: {
    top: 656,
  },
  acetaminophen300mg: {
    width: 234,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    left: 135,
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  icon4: {
    width: 87,
    borderRadius: Border.br_xl,
    left: 38,
  },
  view: {
    flex: 1,
    width: "100%",
    height: 857,
    backgroundColor: Color.colorWhite,
  },
});

export default Frame9;
