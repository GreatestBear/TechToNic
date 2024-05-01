import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Group6 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <Text style={styles.text}>거의 하지 않음</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    width: 349,
    position: "absolute",
    height: 63,
  },
  text: {
    top: 17,
    left: 17,
    fontSize: FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    width: 352,
    height: 30,
    position: "absolute",
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 63,
  },
});

export default Group6;
