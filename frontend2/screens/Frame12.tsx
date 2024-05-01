import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame12 = () => {
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
            <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
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
        onPress={() => navigation.navigate("Frame31")}
      >
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={[styles.text, styles.timeLayout]}>이전</Text>
      </Pressable>
      <View style={[styles.homeindicator, styles.statusbarPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <Text style={styles.text1}>
        <Text style={styles.blankLine}>
          <Text style={styles.blankLine1}> </Text>
        </Text>
        <Text style={styles.text2}>
          <Text style={styles.blankLine}>{`어떤 건강 정보를 
`}</Text>
          <Text style={styles.text4}>{`
수정 및 추가`}</Text>
          <Text style={styles.blankLine}>하시겠어요?</Text>
        </Text>
      </Text>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-22.png")}
      />
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Frame13")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text6, styles.textLayout]}>키, 몸무게</Text>
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.groupLayout]}
        onPress={() => navigation.navigate("Frame16")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text7, styles.textLayout]}>질환</Text>
        <Image
          style={[styles.image4Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={() => navigation.navigate("Frame15")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text7, styles.textLayout]}>음주</Text>
        <Image
          style={[styles.image3Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectangleParent1, styles.groupLayout]}
        onPress={() => navigation.navigate("Frame14")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text7, styles.textLayout]}>흡연</Text>
        <Image
          style={[styles.image2Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  statusbarPosition: {
    left: 0,
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  timeLayout: {
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 63,
    width: 326,
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  groupLayout: {
    height: 77,
    width: 248,
    position: "absolute",
  },
  textLayout: {
    height: 37,
    width: 170,
    fontSize: FontSize.size_9xl,
    top: 24,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  iconPosition: {
    left: 23,
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
    fontWeight: "600",
    fontFamily: FontFamily.calloutBold,
    height: 20,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    top: 1,
    width: 54,
    lineHeight: 21,
    letterSpacing: 0,
    left: 0,
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
  groupChild: {
    backgroundColor: Color.colorRoyalblue_100,
    borderColor: Color.colorRoyalblue_100,
    height: 63,
    width: 326,
    position: "absolute",
  },
  text: {
    marginLeft: -21,
    top: 17,
    fontSize: FontSize.size_4xl,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorWhite,
    textAlign: "left",
    left: "50%",
  },
  rectangleParent: {
    top: 746,
    left: 32,
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
    right: 0,
    bottom: 0,
    height: 34,
  },
  blankLine1: {
    fontSize: FontSize.size_14xl,
  },
  blankLine: {
    color: Color.labelColorLightPrimary,
  },
  text4: {
    color: Color.colorRoyalblue_100,
  },
  text2: {
    fontSize: FontSize.size_13xl,
  },
  text1: {
    marginLeft: -164,
    top: 170,
    width: 331,
    height: 99,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
  },
  icon: {
    top: 78,
    left: 149,
    width: 79,
    height: 76,
    position: "absolute",
  },
  groupItem: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text6: {
    textAlign: "right",
    left: 32,
  },
  image1Icon: {
    top: 10,
    left: 15,
    height: 57,
    width: 62,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  rectangleGroup: {
    top: 320,
    left: 71,
    width: 248,
  },
  text7: {
    left: 47,
    textAlign: "center",
  },
  image4Icon: {
    width: 64,
    height: 55,
    top: 8,
    left: 23,
    borderRadius: Border.br_xl,
  },
  rectangleContainer: {
    top: 620,
    left: 71,
    width: 248,
  },
  image3Icon: {
    width: 60,
    top: 8,
    left: 23,
    borderRadius: Border.br_xl,
    height: 62,
  },
  groupPressable: {
    top: 520,
    left: 71,
    width: 248,
  },
  image2Icon: {
    top: 9,
    height: 61,
    width: 62,
  },
  rectangleParent1: {
    top: 420,
    left: 71,
    width: 248,
  },
  view: {
    flex: 1,
    width: "100%",
    height: 857,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame12;
