import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Group5 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <Text style={styles.text}>주 1회 이상</Text>
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/rectangle-13.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChild: {
    top: 27,
    left: 0,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    width: 349,
    height: 63,
    position: "absolute",
  },
  text: {
    top: 44,
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
  groupItem: {
    top: 0,
    left: 40,
    width: 100,
    position: "absolute",
    height: 100,
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 100,
  },
});

export default Group5;
