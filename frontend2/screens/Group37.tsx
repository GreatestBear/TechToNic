import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Group37 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <Text style={styles.text}>갑산성기능항진증</Text>
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
    top: 24,
    left: 0,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    width: 160,
    height: 46,
    position: "absolute",
  },
  text: {
    top: 36,
    left: 18,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 21,
    fontFamily: FontFamily.notoSansKRRegular,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    width: 124,
    height: 22,
    position: "absolute",
  },
  groupItem: {
    top: 0,
    left: 34,
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

export default Group37;
