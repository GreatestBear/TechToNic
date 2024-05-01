import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Frame14 = () => {
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
        <Text style={styles.text}>이전</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Frame31")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={styles.text}>{`완료
`}</Text>
      </Pressable>
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image-21.png")}
      />
      <Text style={[styles.text2, styles.textLayout]}>{`흡연 여부를 알려주세요
`}</Text>
      <View style={[styles.rectangleContainer, styles.groupViewLayout]}>
        <View style={styles.groupInner} />
        <Text style={[styles.text3, styles.textLayout]}>흡연자</Text>
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={styles.groupInner} />
        <Text style={[styles.text3, styles.textLayout]}>비흡연자</Text>
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
  groupLayout: {
    width: 174,
    height: 63,
    position: "absolute",
  },
  textLayout: {
    width: 352,
    height: 30,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  groupViewLayout: {
    width: 369,
    left: 22,
    height: 63,
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
    textAlign: "center",
    height: 20,
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
    color: Color.colorWhite,
    width: 43,
    height: 30,
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    top: 17,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
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
  image2Icon: {
    top: 102,
    left: 91,
    width: 187,
    height: 176,
    position: "absolute",
  },
  text2: {
    top: 346,
    left: 40,
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
  },
  groupInner: {
    borderColor: Color.colorDarkgray_100,
    width: 349,
    borderRadius: Border.br_11xl,
    height: 63,
    left: 0,
    top: 0,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  text3: {
    left: 17,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    top: 17,
    width: 352,
  },
  rectangleContainer: {
    top: 412,
  },
  groupView: {
    top: 495,
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

export default Frame14;
