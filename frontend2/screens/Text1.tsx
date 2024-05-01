import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Text1 = () => {
  return <Text style={styles.text}>음주를 자주 하시나요?</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_6xl,
    letterSpacing: 0,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    width: 352,
    height: 30,
  },
});

export default Text1;
