import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Rectangle4 = () => {
  return (
    <ImageBackground
      style={styles.icon}
      resizeMode="cover"
      source={require("../assets/21.png")}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    width: "100%",
    height: 843,
  },
});

export default Rectangle4;
