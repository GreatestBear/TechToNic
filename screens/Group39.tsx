import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Group39 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={styles.text}>이전</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={styles.text}>다음</Text>
      </View>
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 63,
    width: 173,
    top: 0,
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_11xl,
    left: 0,
  },
  groupLayout: {
    width: 174,
    height: 63,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    height: 63,
    width: 173,
    top: 0,
    position: "absolute",
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
    left: 12,
  },
  groupItem: {
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorRoyalblue_100,
    borderRadius: Border.br_11xl,
    left: 0,
  },
  rectangleGroup: {
    left: 209,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeindicator: {
    right: 0,
    bottom: 0,
    height: 34,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 98,
  },
});

export default Group39;
