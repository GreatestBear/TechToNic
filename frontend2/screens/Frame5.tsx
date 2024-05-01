import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame5 = () => {
  return (
    <View style={styles.view}>
      <View style={styles.statusbarPosition}>
        <View style={[styles.statusbar, styles.statusbarPosition]}>
          <Image
            style={styles.notchIcon}
            contentFit="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.leftSide}>
            <View style={styles.statusbarTime}>
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
              style={[styles.iconMobileSignal, styles.groupItemPosition]}
              contentFit="cover"
              source={require("../assets/icon--mobile-signal.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.inner}>
        <View style={styles.groupChild} />
      </View>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/--1.png")}
      />
      <Image
        style={[styles.child, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/arrow-2.png")}
      />
      <Text style={styles.text}>{`편안이
`}</Text>
      <Image
        style={[styles.child, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/arrow-2.png")}
      />
      <View style={[styles.parent, styles.groupLayout1]}>
        <Text style={styles.text1}>{`편안이
`}</Text>
        <View style={[styles.ellipseParent, styles.iconLayout]}>
          <Image
            style={[styles.groupItem, styles.groupItemPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/--1.png")}
          />
        </View>
      </View>
      <View style={[styles.group, styles.groupLayout1]}>
        <Text style={styles.text1}>{`편안이
`}</Text>
        <View style={[styles.ellipseParent, styles.iconLayout]}>
          <Image
            style={[styles.groupItem, styles.groupItemPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/--1.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout1]}>
        <View style={[styles.rectangleView, styles.groupChildBorder1]} />
        <Text style={[styles.text3, styles.textTypo]}>
          만나서 반가워요! 사용자님, 어떤 고민이 있으신가요?
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild1, styles.groupChildBorder]} />
        <Text style={[styles.text4, styles.textTypo1]}>
          붙이는 멀미약 사용할 때 주의점 좀 알려줄래?
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.groupChild2, styles.groupChildBorder]} />
        <Text style={[styles.text5, styles.textTypo1]}>정말 고마워!</Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild3, styles.groupLayout]} />
        <Text style={[styles.text6, styles.textTypo]}>
          멀미 패치 사용 시 몇 가지 주의사항이 있어요, 먼저 패치가 졸음을 유발할
          수 있으니 운전이나 기계 조작을 하기 전에 패치가 어떻게 작용하는지
          확인해야 해요, 또한 이 약물은 수상 스포츠를 할 때 주의가 필요해요.
          또한 이 약을 복용 후 입마름 증상이 나타날 수 있으니 인지해주세요.
          마지막으로 멀미 패치를 붙이기 전후에는 반드시 손을 비누와 물을 이용해
          씻어야 하며, 손을 씻은 후에야 눈을 만저야 해요. 이렇게 주의사항을 잘
          지키면서 사용하시면 좋을 것 같아요 사용자님
        </Text>
      </View>
      <View style={[styles.inner1, styles.inner1Layout]}>
        <View style={[styles.groupChild4, styles.inner1Layout]} />
      </View>
      <Text style={[styles.text7, styles.textTypo1]}>
        궁금한 질문을 입력해 주세요
      </Text>
      <Image
        style={[styles.arrowIcon, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/arrow-3.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-90.png")}
      />
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusbarPosition: {
    height: 62,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  groupItemPosition: {
    top: 1,
    position: "absolute",
  },
  iconLayout: {
    height: 57,
    position: "absolute",
  },
  childLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  groupLayout1: {
    width: 122,
    height: 57,
    position: "absolute",
  },
  rectangleLayout1: {
    height: 58,
    width: 246,
    position: "absolute",
  },
  groupChildBorder1: {
    borderColor: Color.colorGainsboro_100,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  textTypo: {
    width: 232,
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 40,
    position: "absolute",
  },
  groupChildBorder: {
    borderRadius: Border.br_mini,
    height: 40,
    borderWidth: 1,
    borderColor: Color.colorRoyalblue_200,
    borderStyle: "solid",
    backgroundColor: Color.colorRoyalblue_200,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 282,
    width: 246,
    position: "absolute",
  },
  inner1Layout: {
    height: 36,
    width: 360,
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
    height: 21,
    width: 54,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  leftSide: {
    marginLeft: -168,
    top: 14,
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
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
    left: "50%",
  },
  rightSide: {
    marginLeft: 91,
    top: 19,
    width: 77,
  },
  statusbar: {
    overflow: "hidden",
  },
  groupChild: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    borderWidth: 1,
    borderColor: Color.colorRoyalblue_200,
    borderStyle: "solid",
    backgroundColor: Color.colorRoyalblue_200,
    height: 63,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  inner: {
    top: 35,
    height: 63,
    width: 390,
    left: 0,
    position: "absolute",
  },
  icon: {
    top: 38,
    left: 48,
    width: 47,
    height: 57,
  },
  child: {
    top: 66,
    width: 24,
    left: 15,
  },
  text: {
    top: 55,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
    height: 22,
    width: 83,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    left: 74,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  text1: {
    top: 17,
    left: 39,
    fontFamily: FontFamily.notoSansKRRegular,
    height: 22,
    width: 83,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  groupItem: {
    height: 54,
    width: 54,
    left: 0,
  },
  icon1: {
    left: 3,
    width: 47,
    height: 57,
    top: 0,
  },
  ellipseParent: {
    width: 54,
    left: 0,
    top: 0,
  },
  parent: {
    top: 118,
    left: 12,
  },
  group: {
    top: 334,
    left: 11,
  },
  rectangleView: {
    height: 58,
    width: 246,
    position: "absolute",
  },
  text3: {
    top: 8,
    left: 8,
  },
  rectangleParent: {
    top: 175,
    left: 54,
  },
  groupChild1: {
    width: 321,
  },
  text4: {
    top: 9,
    left: 22,
    width: 278,
    color: Color.colorWhite,
    textAlign: "left",
    height: 21,
  },
  rectangleGroup: {
    top: 253,
    width: 321,
    left: 74,
    height: 40,
  },
  groupChild2: {
    width: 121,
  },
  text5: {
    top: 10,
    left: 23,
    width: 293,
    color: Color.colorWhite,
    textAlign: "left",
    height: 20,
  },
  rectangleContainer: {
    top: 699,
    left: 276,
    width: 316,
  },
  groupChild3: {
    borderColor: Color.colorGainsboro_100,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  text6: {
    top: 3,
    left: 7,
    height: 216,
  },
  groupView: {
    top: 397,
    left: 54,
  },
  groupChild4: {
    borderColor: Color.colorGainsboro_100,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  inner1: {
    top: 780,
    left: 15,
  },
  text7: {
    top: 788,
    left: 27,
    color: "#96989e",
    width: 340,
    height: 20,
  },
  arrowIcon: {
    top: 798,
    left: 338,
    width: 25,
  },
  groupIcon: {
    top: 59,
    left: 351,
    width: 20,
    height: 15,
    position: "absolute",
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
    bottom: 2,
    height: 34,
    left: 0,
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Frame5;
