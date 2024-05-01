import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Text4 = () => {
  return <Text style={styles.text}>간질환</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 21,
    fontFamily: FontFamily.notoSansKRRegular,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    width: 54,
    height: 22,
  },
});

export default Text4;
