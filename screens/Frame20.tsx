import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame20 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
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
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Frame17")}
      >
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={[styles.text, styles.textTypo2]}>이전</Text>
      </Pressable>
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Frame31")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text1, styles.textTypo2]}>메인 화면으로</Text>
      </Pressable>
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Text style={[styles.text2, styles.textTypo1]}>질환</Text>
      <View style={[styles.child, styles.childBorder]} />
      <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Text style={[styles.text3, styles.textTypo]}>당뇨</Text>
      </View>
      <Text style={[styles.text4, styles.textTypo1]}>{`현재 갖고 계신 질환은
 다음과 같습니다`}</Text>
      <Image
        style={[styles.item, styles.itemLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Image
        style={[styles.inner, styles.itemLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Text style={[styles.text5, styles.textTypo]}>신장질환</Text>
      <Text style={[styles.text6, styles.textTypo]}>간질환</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statusbarPosition: {
    left: 0,
    top: 0,
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
  textTypo1: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  childBorder: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
  },
  groupInnerLayout: {
    height: 46,
    width: 77,
    position: "absolute",
  },
  textTypo: {
    height: 22,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  itemLayout: {
    width: 103,
    height: 46,
    borderRadius: Border.br_11xl,
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
    top: 14,
    marginLeft: -168,
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
    width: 390,
    height: 62,
    position: "absolute",
    overflow: "hidden",
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
    textAlign: "left",
  },
  rectangleParent: {
    left: 10,
    top: 738,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeindicator: {
    right: 1,
    bottom: 0,
    left: -1,
    height: 34,
    position: "absolute",
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
  text1: {
    marginLeft: -68.75,
    width: 138,
    textAlign: "center",
    left: "50%",
  },
  rectangleGroup: {
    left: 207,
    top: 738,
  },
  image5Icon: {
    top: 79,
    left: 54,
    borderRadius: Border.br_xl,
    width: 75,
    height: 75,
    position: "absolute",
  },
  text2: {
    top: 101,
    left: 79,
    fontSize: FontSize.size_21xl,
    width: 228,
    height: 31,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
  },
  child: {
    marginTop: -208,
    top: "50%",
    width: 340,
    height: 322,
    marginLeft: -168,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupInner: {
    backgroundColor: Color.colorGainsboro_200,
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  text3: {
    marginLeft: -26.5,
    top: 12,
    width: 54,
    height: 22,
    fontSize: FontSize.size_xl,
    left: "50%",
  },
  rectangleContainer: {
    left: 160,
    top: 381,
  },
  text4: {
    top: 270,
    left: 81,
    fontSize: FontSize.size_6xl,
    width: 250,
    textAlign: "left",
  },
  item: {
    left: 51,
    top: 381,
  },
  inner: {
    top: 382,
    left: 241,
  },
  text5: {
    marginLeft: 57,
    top: 394,
    width: 79,
    left: "50%",
  },
  text6: {
    top: 393,
    left: 69,
    width: 66,
  },
  view: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame20;
