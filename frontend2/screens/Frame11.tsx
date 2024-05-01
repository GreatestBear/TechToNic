import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Frame11 = () => {
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
            <Text style={[styles.time, styles.textLayout]}>9:41</Text>
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
        <Text style={[styles.text, styles.textLayout]}>이전</Text>
      </Pressable>
      <View style={[styles.homeindicator, styles.statusbarPosition]}>
        <View style={[styles.homeIndicator, styles.icon1Layout]} />
      </View>
      <Text style={[styles.text1, styles.textLayout]}>
        <Text style={styles.text2}>{`
복용하고 있는 약을  `}</Text>
        <Text style={styles.text3}>검색</Text>
        <Text style={styles.text2}>해 보세요</Text>
      </Text>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text5, styles.textPosition]}>
          사진으로 검색하기
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text6, styles.textPosition]}>
          제품명/성분명  검색
        </Text>
      </View>
      <Image
        style={[styles.iconCamera, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-camera.png")}
      />
      <Pressable
        style={styles.iconSearch}
        onPress={() => navigation.navigate("Frame10")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-search.png")}
        />
      </Pressable>
      <Image
        style={[styles.icon1, styles.icon1Layout]}
        contentFit="cover"
        source={require("../assets/-21.png")}
      />
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
  textLayout: {
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
  icon1Layout: {
    width: 134,
    position: "absolute",
  },
  groupLayout: {
    height: 150,
    width: 150,
    position: "absolute",
  },
  textPosition: {
    width: 116,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    marginLeft: -58,
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    height: 5,
    left: "50%",
  },
  homeindicator: {
    right: 0,
    bottom: 0,
    height: 34,
  },
  text2: {
    color: Color.labelColorLightPrimary,
  },
  text3: {
    color: Color.colorRoyalblue_100,
  },
  text1: {
    marginLeft: -155,
    top: 281,
    fontSize: FontSize.size_14xl,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
    width: 297,
    height: 99,
    textAlign: "center",
    left: "50%",
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
  text5: {
    top: 105,
    textAlign: "left",
    height: 20,
  },
  rectangleGroup: {
    left: 27,
    top: 433,
    width: 150,
  },
  text6: {
    top: 94,
    textAlign: "center",
  },
  rectangleContainer: {
    left: 213,
    top: 433,
    width: 150,
  },
  iconCamera: {
    height: "6.28%",
    width: "16.18%",
    top: "54.61%",
    right: "65.87%",
    bottom: "39.11%",
    left: "17.95%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconSearch: {
    left: "66.92%",
    top: "54.73%",
    right: "19.49%",
    bottom: "39.09%",
    width: "13.59%",
    height: "6.18%",
    position: "absolute",
  },
  icon1: {
    top: 113,
    left: 128,
    height: 117,
  },
  view: {
    flex: 1,
    height: 857,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame11;
