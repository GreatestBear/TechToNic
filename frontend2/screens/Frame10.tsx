import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const Frame10 = () => {
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
            <Text style={[styles.time, styles.timeClr]}>9:41</Text>
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
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Frame11")}
      >
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={[styles.text, styles.textFlexBox]}>이전</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Frame9")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text, styles.textFlexBox]}>다음</Text>
      </Pressable>
      <View style={styles.homeindicator}>
        <View style={[styles.homeIndicator, styles.notchIconPosition]} />
      </View>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/arrow-4.png")}
      />
      <View style={[styles.item, styles.childLayout]} />
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-11.png")}
      />
      <Text
        style={[styles.acetaminophen300mg, styles.acetaminophen300mgTypo]}
      >{`리리스 정
(Acetaminophen 300mg 외 1) `}</Text>
      <View style={[styles.inner, styles.childLayout]} />
      <View style={[styles.inner, styles.childLayout]} />
      <Text style={[styles.acetaminophen300mg1, styles.acetaminophen300mgTypo]}>
        렉스판 정 (Acetaminophen 300mg 외 1) 
      </Text>
      <View style={[styles.child1, styles.childLayout]} />
      <View style={[styles.child1, styles.childLayout]} />
      <View style={[styles.child1, styles.childLayout]} />
      <Text style={[styles.acetaminophen450mg, styles.icon4Position]}>
        다아펜 정 (Acetaminophen 450mg 외 1) 
      </Text>
      <Image
        style={[styles.groupIcon, styles.child7Layout]}
        contentFit="cover"
        source={require("../assets/group-98.png")}
      />
      <View style={[styles.child4, styles.childLayout]} />
      <View style={[styles.child4, styles.childLayout]} />
      <View style={[styles.child4, styles.childLayout]} />
      <Image
        style={[styles.icon1, styles.icon1Position]}
        contentFit="cover"
        source={require("../assets/-11.png")}
      />
      <Text style={[styles.acetaminophen3255mg, styles.icon1Position]}>
        아마돌 정 (Acetaminophen 3255mg 외 1) 
      </Text>
      <Image
        style={[styles.child7, styles.child7Layout]}
        contentFit="cover"
        source={require("../assets/group-98.png")}
      />
      <View style={[styles.child8, styles.childLayout]} />
      <View style={[styles.child8, styles.childLayout]} />
      <Image
        style={[styles.child10, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/group-98.png")}
      />
      <Text
        style={[styles.acetaminophen500mg, styles.icon2Position]}
      >{`에코리자 정
(Acetaminophen 500mg 외 2)`}</Text>
      <Image
        style={[styles.icon2, styles.icon2Position]}
        contentFit="cover"
        source={require("../assets/-12.png")}
      />
      <Image
        style={[styles.icon3, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-13.png")}
      />
      <Image
        style={[styles.icon4, styles.icon4Position]}
        contentFit="cover"
        source={require("../assets/-2.png")}
      />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-8.png")}
      />
      <Text style={[styles.text2, styles.textFlexBox]}>아세트아미노펜</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.child11, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/group-95.png")}
      />
      <Image
        style={[styles.child12, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/group-98.png")}
      />
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
  timeClr: {
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.calloutBold_size,
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
  textFlexBox: {
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
  childLayout: {
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
  acetaminophen300mgTypo: {
    width: 234,
    fontFamily: FontFamily.interSemiBold,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    left: 127,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  icon4Position: {
    top: 533,
    height: 39,
    position: "absolute",
  },
  child7Layout: {
    height: 24,
    left: 329,
    width: 24,
    position: "absolute",
  },
  icon1Position: {
    top: 662,
    height: 39,
    position: "absolute",
  },
  childPosition: {
    left: 328,
    height: 24,
    width: 24,
    position: "absolute",
  },
  icon2Position: {
    top: 273,
    height: 39,
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -86,
    width: 172,
    height: 32,
    top: 0,
  },
  time: {
    fontFamily: FontFamily.calloutBold,
    textAlign: "center",
    height: 20,
    fontWeight: "600",
    lineHeight: 21,
    letterSpacing: 0,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.calloutBold_size,
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
  groupChild: {
    height: 63,
    width: 173,
    position: "absolute",
  },
  text: {
    top: 17,
    left: 65,
    fontSize: FontSize.size_4xl,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorWhite,
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
  },
  homeindicator: {
    right: 0,
    bottom: 0,
    height: 34,
    left: 0,
    position: "absolute",
  },
  child: {
    top: 78,
    width: 24,
    maxHeight: "100%",
    left: 30,
    position: "absolute",
  },
  item: {
    marginTop: -306.5,
  },
  icon: {
    width: 87,
    borderRadius: Border.br_xl,
    top: 143,
    height: 39,
    left: 30,
  },
  acetaminophen300mg: {
    height: 39,
    position: "absolute",
    top: 143,
  },
  inner: {
    marginTop: -46.5,
  },
  acetaminophen300mg1: {
    top: 403,
    height: 39,
    position: "absolute",
  },
  child1: {
    marginTop: 83.5,
  },
  acetaminophen450mg: {
    width: 234,
    fontFamily: FontFamily.interSemiBold,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    left: 127,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  groupIcon: {
    top: 543,
  },
  child4: {
    marginTop: 212.5,
  },
  icon1: {
    width: 87,
    borderRadius: Border.br_xl,
    left: 30,
  },
  acetaminophen3255mg: {
    width: 234,
    fontFamily: FontFamily.interSemiBold,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    left: 127,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  child7: {
    top: 672,
  },
  child8: {
    marginTop: -176.5,
  },
  child10: {
    top: 283,
  },
  acetaminophen500mg: {
    width: 234,
    fontFamily: FontFamily.interSemiBold,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    left: 127,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  icon2: {
    width: 87,
    borderRadius: Border.br_xl,
    left: 30,
  },
  icon3: {
    top: 402,
    width: 87,
    borderRadius: Border.br_xl,
    left: 30,
  },
  icon4: {
    left: 29,
    width: 87,
    borderRadius: Border.br_xl,
  },
  lineIcon: {
    top: 100,
    left: 35,
    width: 320,
    height: 1,
    position: "absolute",
  },
  text2: {
    top: 66,
    left: 64,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
    width: 276,
    height: 23,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.calloutBold_size,
    textAlign: "left",
  },
  vectorIcon: {
    height: "2.33%",
    width: "5.13%",
    top: "7.93%",
    right: "10.26%",
    bottom: "89.73%",
    left: "84.62%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  child11: {
    top: 153,
  },
  child12: {
    top: 413,
  },
  view: {
    flex: 1,
    width: "100%",
    height: 857,
    backgroundColor: Color.colorWhite,
  },
});

export default Frame10;
