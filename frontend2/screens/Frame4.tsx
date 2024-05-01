import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame4 = () => {
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>가족의 자세한 건강 정보를 확인해보세요!</Text>
      <Text style={styles.text1}>가족 건강 모니터링하기</Text>
      <View style={styles.frameChild} />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-1.png")}
      />
      <View style={[styles.frameItem, styles.frameChildLayout]} />
      <View style={[styles.frameInner, styles.frameChildLayout]} />
      <View style={[styles.rectangleView, styles.frameChildLayout]} />
      <View style={[styles.frameChild1, styles.frameChildLayout]} />
      <View style={[styles.frameChild2, styles.frameChildLayout]} />
      <Text style={[styles.text2, styles.textLayout]}>편안이</Text>
      <Text style={[styles.text3, styles.textLayout]}>약 알림</Text>
      <Text style={[styles.text4, styles.textLayout]}>약 추가</Text>
      <Text style={[styles.text5, styles.textLayout]}>건강정보 추가</Text>
      <Text style={[styles.text6, styles.textLayout]}>모니터링</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 49,
    width: 65,
    backgroundColor: Color.colorDodgerblue_100,
    borderRadius: Border.br_mini,
    top: 1230,
    position: "absolute",
  },
  textLayout: {
    height: 21,
    textAlign: "center",
    fontFamily: FontFamily.kolkerBrushRegular,
    width: 65,
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.calloutBold_size,
    position: "absolute",
  },
  text: {
    top: 1125,
    color: "rgba(0, 0, 0, 0.45)",
    width: 172,
    height: 62,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.calloutBold_size,
    left: 156,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_5xl,
    width: 148,
    height: 37,
    color: Color.labelColorLightPrimary,
    top: 1071,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 21,
    letterSpacing: 0,
    left: 156,
    position: "absolute",
  },
  frameChild: {
    top: 1292,
    left: 2,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.labelColorLightPrimary,
    borderTopWidth: 1,
    width: 391,
    height: 1,
    position: "absolute",
  },
  icon: {
    left: 70,
    width: 63,
    height: 61,
    top: 1071,
    position: "absolute",
  },
  frameItem: {
    left: 21,
  },
  frameInner: {
    left: 321,
  },
  rectangleView: {
    left: 246,
  },
  frameChild1: {
    left: 171,
  },
  frameChild2: {
    left: 96,
  },
  text2: {
    top: 1244,
    height: 21,
    textAlign: "center",
    fontFamily: FontFamily.kolkerBrushRegular,
    left: 21,
  },
  text3: {
    top: 1244,
    height: 21,
    textAlign: "center",
    fontFamily: FontFamily.kolkerBrushRegular,
    left: 96,
  },
  text4: {
    top: 1244,
    height: 21,
    textAlign: "center",
    fontFamily: FontFamily.kolkerBrushRegular,
    left: 171,
  },
  text5: {
    top: 1237,
    left: 247,
  },
  text6: {
    top: 1244,
    height: 21,
    textAlign: "center",
    fontFamily: FontFamily.kolkerBrushRegular,
    left: 321,
  },
  parent: {
    flex: 1,
    width: "100%",
    height: 8,
  },
});

export default Frame4;
