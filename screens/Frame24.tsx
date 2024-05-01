import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Frame24 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={[styles.statusbarParent, styles.statusbarPosition]}>
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
        <View style={styles.homeindicator}>
          <View style={[styles.homeIndicator, styles.notchIconPosition]} />
        </View>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/rectangle-10.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>나중에</Text>
        <Text style={[styles.text1, styles.textTypo]}>예상시간 1분</Text>
        <Text style={[styles.text2, styles.text2Position]}>체크하기</Text>
      </View>
      <Pressable
        style={styles.text2Position}
        onPress={() => navigation.navigate("Frame25")}
      >
        <Text style={[styles.text3, styles.textTypo]}>체크하기</Text>
      </Pressable>
      <View style={[styles.parent, styles.text4Layout]}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/--11.png")}
        />
        <Text style={[styles.text4, styles.text4Layout]}>
          <Text style={styles.text5}>{`반가워요 `}</Text>
          <Text style={styles.text6}>사용자</Text>
          <Text style={styles.text5}>{`님
건강 상태를 체크해 볼까요?`}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusbarPosition: {
    width: 390,
    left: 0,
    top: 0,
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
  textTypo: {
    height: 31,
    width: 190,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
  },
  text2Position: {
    top: 572,
    left: 100,
    position: "absolute",
  },
  text4Layout: {
    width: 348,
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
    bottom: 0,
    height: 34,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    top: 550,
    left: 22,
    borderRadius: Border.br_11xl,
    width: 346,
    height: 152,
    position: "absolute",
  },
  text: {
    top: 659,
    color: Color.colorWhitesmoke,
    height: 31,
    width: 190,
    fontSize: FontSize.size_5xl,
    left: 100,
    position: "absolute",
  },
  text1: {
    top: 740,
    color: Color.colorGray_100,
    height: 31,
    width: 190,
    fontSize: FontSize.size_5xl,
    left: 100,
    position: "absolute",
  },
  text2: {
    height: 31,
    width: 190,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    color: Color.colorWhitesmoke,
  },
  statusbarParent: {
    height: 844,
  },
  text3: {
    color: Color.colorWhitesmoke,
    height: 31,
    width: 190,
    fontSize: FontSize.size_5xl,
  },
  icon: {
    left: 32,
    width: 284,
    height: 284,
    top: 0,
    position: "absolute",
  },
  text5: {
    color: Color.labelColorLightPrimary,
  },
  text6: {
    color: Color.colorRoyalblue_100,
  },
  text4: {
    top: 323,
    fontSize: FontSize.size_11xl,
    lineHeight: 50,
    height: 141,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    width: 348,
    textAlign: "center",
    letterSpacing: 0,
    left: 0,
  },
  parent: {
    top: 77,
    left: 21,
    height: 464,
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
  },
});

export default Frame24;
