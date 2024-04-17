import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

export type StatusBar1Type = {
  /** Style props */
  notchIconTop?: number | string;
  notchIconLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusBar1 = ({ notchIconTop, notchIconLeft }: StatusBar1Type) => {
  const statusBarStyle = useMemo(() => {
    return {
      ...getStyleValue("top", notchIconTop),
      ...getStyleValue("left", notchIconLeft),
    };
  }, [notchIconTop, notchIconLeft]);

  return (
    <View style={[styles.statusbar, statusBarStyle]}>
      <Image
        style={[styles.notchIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/notch.png")}
      />
      <View style={[styles.leftSide, styles.leftSideLayout]}>
        <View style={[styles.statusbarTime, styles.leftSideLayout]}>
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
          style={[styles.iconMobileSignal, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/icon--mobile-signal.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -86,
    width: 172,
    height: 32,
    top: 0,
  },
  time: {
    left: 0,
    fontSize: FontSize.calloutBold_size,
    letterSpacing: 0,
    lineHeight: 21,
    fontWeight: "600",
    fontFamily: FontFamily.calloutBold,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    height: 20,
    width: 54,
    top: 1,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    marginLeft: -168,
    top: 14,
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
    top: 1,
  },
  rightSide: {
    marginLeft: 91,
    top: 19,
    width: 77,
  },
  statusbar: {
    left: 2,
    width: 390,
    height: 62,
    overflow: "hidden",
    top: 1,
    position: "absolute",
  },
});

export default StatusBar1;
