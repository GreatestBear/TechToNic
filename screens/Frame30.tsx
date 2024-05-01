import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame30 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={[styles.child, styles.childBorder]} />
      <View style={styles.statusbar}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
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
      <Text style={[styles.text, styles.textTypo3]}>{`

가족이 연결되었습니다!`}</Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Frame29")}
      >
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={styles.text1}>이전</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Frame31")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={styles.text1}>다음</Text>
      </Pressable>
      <View style={styles.homeindicator}>
        <View style={[styles.homeIndicator, styles.iconPosition]} />
      </View>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-16.png")}
      />
      <View style={styles.inner}>
        <View style={styles.frameParent}>
          <View style={styles.parent}>
            <Text style={[styles.text3, styles.textTypo2]}>사용자명</Text>
            <Image
              style={styles.phosphorIconsRegularPenci}
              contentFit="cover"
              source={require("../assets/phosphor-icons-regular--pencilsimpleline.png")}
            />
          </View>
          <Text style={[styles.id, styles.idTypo]}>ID: 유저코드</Text>
        </View>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <Text style={[styles.text4, styles.textTypo1]}>당뇨</Text>
        </View>
        <Text style={[styles.text5, styles.idTypo]}>질환</Text>
        <View style={styles.vectorParent}>
          <Image
            style={[styles.rectangleIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-12.png")}
          />
          <Image
            style={[styles.groupChild1, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-12.png")}
          />
          <Text style={[styles.text6, styles.textTypo1]}>신장질환</Text>
        </View>
        <Text style={[styles.text7, styles.textTypo]}>간질환</Text>
        <View style={[styles.lineView, styles.itemPosition]} />
      </View>
      <View style={[styles.groupContainer, styles.text9Layout]}>
        <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <Text style={[styles.text4, styles.textTypo1]}>당뇨약</Text>
        </View>
        <Text style={[styles.text9, styles.text9Layout]}>복용 중인 약</Text>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-12.png")}
        />
        <Text style={[styles.text10, styles.textTypo]}>고혈압약</Text>
      </View>
      <Text style={[styles.cm94Kg, styles.cm94KgTypo]}>168 cm, 94 kg</Text>
      <Text style={[styles.text11, styles.cm94KgTypo]}>신체정보</Text>
      <View style={[styles.item, styles.itemPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  childBorder: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
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
  timeFlexBox: {
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  textTypo3: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
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
  groupLayout: {
    width: 174,
    height: 63,
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.size_6xl,
    textAlign: "left",
  },
  idTypo: {
    width: 186,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
  },
  groupInnerLayout: {
    height: 46,
    width: 77,
    position: "absolute",
  },
  textTypo1: {
    height: 22,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
  },
  groupIconLayout: {
    width: 103,
    height: 46,
    position: "absolute",
  },
  textTypo: {
    top: 62,
    height: 22,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  itemPosition: {
    height: 1,
    width: 299,
    borderTopWidth: 1,
    marginLeft: -149.5,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  text9Layout: {
    width: 252,
    position: "absolute",
  },
  cm94KgTypo: {
    left: 50,
    width: 186,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  child: {
    marginTop: -139,
    marginLeft: -170,
    top: "50%",
    width: 340,
    height: 426,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
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
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    fontFamily: FontFamily.notoSansKRBlack,
    fontWeight: "900",
    lineHeight: 21,
    letterSpacing: 0,
    top: 1,
    width: 54,
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
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: 24,
    fontSize: FontSize.size_14xl,
    width: 352,
    left: 19,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
  },
  groupChild: {
    height: 63,
    width: 173,
    position: "absolute",
  },
  text1: {
    top: 17,
    left: 65,
    fontSize: FontSize.size_4xl,
    color: Color.colorWhite,
    width: 43,
    height: 30,
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleParent: {
    left: 10,
    top: 738,
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
  rectangleGroup: {
    left: 207,
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
  icon: {
    top: 138,
    left: 27,
    width: 116,
    height: 116,
    position: "absolute",
  },
  text3: {
    color: Color.colorRoyalblue_100,
    width: 296,
    fontFamily: FontFamily.notoSansKRBlack,
    fontWeight: "900",
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
    height: 59,
    marginTop: 16,
    fontFamily: FontFamily.notoSansKRBlack,
    fontWeight: "900",
  },
  frameParent: {
    width: 150,
  },
  inner: {
    top: 106,
    left: 180,
    width: 241,
    height: 159,
    position: "absolute",
  },
  groupInner: {
    backgroundColor: Color.colorGainsboro_200,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
  },
  text4: {
    marginLeft: -26.5,
    top: 12,
    width: 54,
  },
  rectangleContainer: {
    left: 109,
    top: 50,
  },
  text5: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleIcon: {
    left: 0,
    top: 0,
    borderRadius: Border.br_11xl,
    width: 103,
  },
  groupChild1: {
    left: 190,
    top: 1,
    borderRadius: Border.br_11xl,
    width: 103,
  },
  text6: {
    marginLeft: 59.55,
    top: 13,
    width: 70,
  },
  vectorParent: {
    width: 293,
    height: 47,
    top: 50,
    left: 0,
    position: "absolute",
  },
  text7: {
    left: 24,
    width: 54,
  },
  lineView: {
    top: 130,
  },
  groupParent: {
    top: 434,
    width: 298,
    height: 130,
    left: 46,
    position: "absolute",
  },
  text9: {
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
    left: 0,
    top: 0,
  },
  groupIcon: {
    top: 50,
    left: 0,
  },
  text10: {
    width: 63,
    left: 19,
  },
  groupContainer: {
    top: 583,
    height: 96,
    left: 46,
  },
  cm94Kg: {
    top: 356,
  },
  text11: {
    top: 304,
  },
  item: {
    top: 411,
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

export default Frame30;
