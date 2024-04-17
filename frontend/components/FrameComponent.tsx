import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={styles.mgParent}>
      <Text style={[styles.mg, styles.mgTypo]}>아마릴 정 2mg</Text>
      <Text style={[styles.mg1, styles.mgTypo]}>리피논 정 20mg</Text>
      <Text style={[styles.mg2, styles.mgTypo]}>텔미칸 정 40mg</Text>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-17.png")}
      />
      <Image
        style={[styles.icon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-18.png")}
      />
      <Image
        style={[styles.icon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-19.png")}
      />
      <Text style={styles.text}>소론도 정</Text>
      <Image
        style={[styles.icon3, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-110.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mgTypo: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    top: 47,
    position: "absolute",
  },
  iconLayout: {
    height: 39,
    width: 87,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  mg: {
    width: 276,
    left: 0,
  },
  mg1: {
    left: 112,
    width: 307,
  },
  mg2: {
    left: 228,
    width: 310,
  },
  icon: {
    top: 2,
    height: 39,
    width: 87,
    borderRadius: Border.br_xl,
    left: 0,
  },
  icon1: {
    left: 108,
    top: 2,
    height: 39,
    width: 87,
    borderRadius: Border.br_xl,
  },
  icon2: {
    left: 222,
    top: 2,
    height: 39,
    width: 87,
    borderRadius: Border.br_xl,
  },
  text: {
    left: 333,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    top: 47,
    position: "absolute",
  },
  icon3: {
    top: 0,
    left: 330,
  },
  mgParent: {
    top: 515,
    left: 20,
    width: 360,
    height: 67,
    position: "absolute",
  },
});

export default FrameComponent;
