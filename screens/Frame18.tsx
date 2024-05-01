import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Frame18 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={styles.child} />
      <View style={[styles.item, styles.itemLayout]} />
      <View style={[styles.inner, styles.itemLayout]} />
      <View style={[styles.rectangleView, styles.child4Layout]} />
      <Text style={[styles.text, styles.textTypo4]}>주 4회 이상</Text>
      <Text style={[styles.text1, styles.textTypo3]}>주 2회 이상</Text>
      <View style={[styles.lineView, styles.child1Position]} />
      <Text style={[styles.text2, styles.text2Typo]}>키, 몸무게</Text>
      <Text style={[styles.cm94Kg, styles.text2Typo]}>168 cm, 94 kg</Text>
      <Text style={[styles.text3, styles.textTypo2]}>음주</Text>
      <Text style={[styles.text4, styles.textTypo2]}>{`흡연 `}</Text>
      <View style={[styles.child1, styles.child1Position]} />
      <View style={[styles.child2, styles.childLayout]} />
      <Text style={[styles.text5, styles.textTypo1]}>비흡연자</Text>
      <Text style={[styles.text6, styles.textTypo1]}>흡연자</Text>
      <View style={[styles.child3, styles.childLayout]} />
      <View style={[styles.child4, styles.child4Layout]} />
      <Text style={[styles.text7, styles.textTypo3]}>주 1회 이상</Text>
      <Text style={[styles.text8, styles.textTypo4]}>주 3회 이상</Text>
      <View style={[styles.child5, styles.itemLayout]} />
      <Text style={[styles.text9, styles.textTypo4]}>거의 하지 않음</Text>
      <View style={styles.statusbar}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
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
            style={[styles.iconMobileSignal, styles.iconPosition]}
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
        <Text style={[styles.text10, styles.textTypo]}>이전</Text>
      </Pressable>
      <View style={styles.homeindicator}>
        <View style={[styles.homeIndicator, styles.iconPosition]} />
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Frame31")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text11, styles.textTypo]}>메인 화면으로</Text>
      </Pressable>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-25.png")}
      />
      <Text style={[styles.text12, styles.timeLayout]}>기본 건강정보</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    height: 50,
    width: 127,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  child4Layout: {
    top: 530,
    height: 50,
    width: 127,
    backgroundColor: Color.colorGainsboro_200,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  textTypo4: {
    height: 41,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo3: {
    top: 599,
    height: 41,
    width: 96,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  child1Position: {
    height: 1,
    width: 299,
    borderTopWidth: 1,
    marginLeft: -149.5,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  text2Typo: {
    fontSize: FontSize.size_6xl,
    width: 186,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    left: 50,
    position: "absolute",
  },
  textTypo2: {
    left: 46,
    textAlign: "left",
    fontSize: FontSize.size_6xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    position: "absolute",
  },
  childLayout: {
    top: 400,
    height: 50,
    width: 127,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  textTypo1: {
    top: 404,
    fontSize: FontSize.size_6xl,
    height: 41,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconPosition: {
    left: "50%",
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
    textAlign: "center",
    color: Color.labelColorLightPrimary,
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
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
  },
  textTypo: {
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
  child: {
    marginTop: -235,
    top: "50%",
    width: 340,
    height: 521,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: "50%",
    marginLeft: -168,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  item: {
    backgroundColor: Color.colorGainsboro_200,
    left: 50,
    top: 590,
    height: 50,
    width: 127,
  },
  inner: {
    backgroundColor: "rgba(36, 79, 233, 0.2)",
    left: 195,
    top: 590,
    height: 50,
    width: 127,
  },
  rectangleView: {
    left: 50,
    top: 530,
  },
  text: {
    width: 96,
    top: 539,
    height: 41,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_xl,
    left: 66,
  },
  text1: {
    left: 66,
  },
  lineView: {
    top: 314,
  },
  text2: {
    top: 207,
    width: 186,
    textAlign: "left",
  },
  cm94Kg: {
    top: 259,
    width: 186,
    textAlign: "left",
  },
  text3: {
    top: 486,
    width: 252,
  },
  text4: {
    top: 337,
    width: 186,
  },
  child1: {
    top: 467,
  },
  child2: {
    backgroundColor: "rgba(35, 77, 223, 0.2)",
    left: 195,
  },
  text5: {
    left: 206,
    width: 108,
  },
  text6: {
    left: 73,
    width: 81,
  },
  child3: {
    backgroundColor: Color.colorGainsboro_200,
    left: 50,
  },
  child4: {
    left: 195,
  },
  text7: {
    left: 212,
  },
  text8: {
    left: 211,
    width: 96,
    top: 539,
    height: 41,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_xl,
  },
  child5: {
    top: 650,
    backgroundColor: Color.colorGainsboro_200,
    left: 50,
  },
  text9: {
    top: 659,
    width: 130,
    height: 41,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_xl,
    left: 50,
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
    top: 14,
    marginLeft: -168,
    height: 21,
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
  },
  rightSide: {
    marginLeft: 91,
    top: 19,
    width: 77,
  },
  statusbar: {
    width: 390,
    height: 62,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    height: 63,
    width: 173,
    position: "absolute",
  },
  text10: {
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
  },
  homeindicator: {
    right: 1,
    bottom: 0,
    left: -1,
    height: 34,
    position: "absolute",
  },
  groupItem: {
    borderColor: Color.colorRoyalblue_100,
    backgroundColor: Color.colorRoyalblue_100,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
  },
  text11: {
    marginLeft: -68.75,
    width: 138,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    top: 17,
    left: "50%",
  },
  rectangleGroup: {
    left: 207,
    top: 738,
  },
  icon: {
    top: 74,
    left: 20,
    width: 75,
    height: 75,
    position: "absolute",
  },
  text12: {
    top: 101,
    left: 112,
    fontSize: FontSize.size_21xl,
    width: 228,
    height: 31,
    lineHeight: 21,
    letterSpacing: 0,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
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

export default Frame18;
