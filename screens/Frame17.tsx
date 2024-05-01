import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const Frame17 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={[styles.statusbar, styles.statusbarPosition]}>
        <Image
          style={[styles.notchIcon, styles.text2Position]}
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
        <View style={[styles.homeIndicator, styles.text2Position]} />
      </View>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-14.png")}
      />
      <Text style={styles.text}>관리중인 시니어</Text>
      <View style={styles.inner}>
        <View style={styles.frameParent}>
          <View style={styles.parent}>
            <Text style={[styles.text1, styles.idTypo]}>사용자명</Text>
            <Image
              style={styles.phosphorIconsRegularPenci}
              contentFit="cover"
              source={require("../assets/phosphor-icons-regular--pencilsimpleline.png")}
            />
          </View>
          <Text style={[styles.id, styles.idTypo]}>ID: 유저코드</Text>
        </View>
      </View>
      <Text style={[styles.text2, styles.textTypo]}>
        <Text style={styles.blankLine}>
          <Text style={styles.blankLine1}> </Text>
        </Text>
        <Text style={styles.text3}>
          <Text style={styles.blankLine}>{`어떤 건강 정보를 
`}</Text>
          <Text style={styles.text5}>{`
확인 `}</Text>
          <Text style={styles.blankLine}>하시겠어요?</Text>
        </Text>
      </Text>
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("Frame18")}
      >
        <View style={[styles.groupChild, styles.itemChildBorder]} />
        <Text style={[styles.text7, styles.text7Position]}>{`     기본 건강정보

(키, 몸무게, 흡연, 음주)`}</Text>
        <Image
          style={[styles.icon1, styles.text7Position]}
          contentFit="cover"
          source={require("../assets/-23.png")}
        />
      </Pressable>
      <View style={[styles.child, styles.itemChildBorder]} />
      <Pressable
        style={[styles.pressable, styles.pressablePosition]}
        onPress={() => navigation.navigate("Frame19")}
      >
        <Text style={[styles.text8, styles.textTypo]}>약</Text>
      </Pressable>
      <Image
        style={[styles.icon2, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/-24.png")}
      />
      <View style={[styles.item, styles.itemChildBorder]} />
      <Pressable
        style={[styles.pressable1, styles.pressablePosition]}
        onPress={() => navigation.navigate("Frame20")}
      >
        <Text style={[styles.text8, styles.textTypo]}>질환</Text>
      </Pressable>
      <Image
        style={[styles.image4Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-42.png")}
      />
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Frame31")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={styles.text10}>이전</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  statusbarPosition: {
    left: 0,
    top: 0,
  },
  text2Position: {
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
  idTypo: {
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRBlack,
    fontWeight: "900",
  },
  textTypo: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 0,
  },
  itemChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
  },
  text7Position: {
    top: 16,
    position: "absolute",
  },
  pressablePosition: {
    left: 117,
    position: "absolute",
  },
  iconPosition: {
    left: 61,
    position: "absolute",
  },
  groupLayout: {
    height: 63,
    width: 326,
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
    height: 20,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.notoSansKRBlack,
    fontWeight: "900",
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
    position: "absolute",
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
    right: 1,
    bottom: 0,
    left: -1,
    height: 34,
    position: "absolute",
  },
  icon: {
    top: 95,
    left: 27,
    width: 116,
    height: 116,
    position: "absolute",
  },
  text: {
    top: 50,
    left: 28,
    letterSpacing: -0.5,
    lineHeight: 34,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  text1: {
    width: 296,
    textAlign: "left",
    color: Color.colorRoyalblue_100,
  },
  phosphorIconsRegularPenci: {
    width: 48,
    height: 48,
    marginLeft: 16,
  },
  parent: {
    height: 84,
    flexDirection: "row",
    alignItems: "flex-end",
    width: 150,
  },
  id: {
    color: Color.colorDarkgray_200,
    width: 186,
    height: 59,
    marginTop: 16,
    textAlign: "left",
  },
  frameParent: {
    width: 150,
  },
  inner: {
    top: 62,
    left: 173,
    width: 241,
    height: 159,
    position: "absolute",
  },
  blankLine1: {
    fontSize: FontSize.size_14xl,
  },
  blankLine: {
    color: Color.labelColorLightPrimary,
  },
  text5: {
    color: Color.colorRoyalblue_100,
  },
  text3: {
    fontSize: FontSize.size_13xl,
  },
  text2: {
    marginLeft: -172,
    top: 230,
    width: 331,
    height: 99,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    height: 93,
    width: 309,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  text7: {
    left: 72,
    width: 237,
    height: 61,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    top: 16,
    color: Color.labelColorLightPrimary,
  },
  icon1: {
    left: 16,
    width: 56,
    height: 55,
  },
  rectangleParent: {
    top: 350,
    height: 93,
    width: 309,
    left: 45,
    position: "absolute",
  },
  child: {
    top: 600,
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    height: 93,
    width: 309,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    left: 45,
  },
  text8: {
    fontSize: FontSize.size_17xl,
    width: 170,
    height: 37,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  pressable: {
    top: 635,
  },
  icon2: {
    top: 611,
    width: 76,
    height: 72,
  },
  item: {
    top: 480,
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    height: 93,
    width: 309,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    left: 45,
  },
  pressable1: {
    top: 515,
  },
  image4Icon: {
    top: 499,
    borderRadius: Border.br_xl,
    width: 66,
    height: 64,
  },
  groupItem: {
    backgroundColor: Color.colorRoyalblue_100,
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    width: 326,
    left: 0,
    top: 0,
  },
  text10: {
    marginLeft: -21,
    top: 17,
    fontSize: FontSize.size_4xl,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorWhite,
    textAlign: "left",
    lineHeight: 21,
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
  },
  rectangleGroup: {
    top: 746,
    left: 32,
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

export default Frame17;
