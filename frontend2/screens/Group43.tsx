import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Group43 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <Text style={styles.text}>이전</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorRoyalblue_100,
    borderStyle: "solid",
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    width: 173,
    position: "absolute",
    height: 63,
  },
  text: {
    top: 17,
    left: 65,
    fontSize: FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorWhite,
    textAlign: "left",
    width: 43,
    height: 30,
    position: "absolute",
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 63,
  },
});

export default Group43;
