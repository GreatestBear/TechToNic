import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Rectangle1 = () => {
  return (
    <ImageBackground
      style={styles.icon}
      resizeMode="cover"
      source={require("../assets/111.png")}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    width: "100%",
    height: 1178,
  },
});

export default Rectangle1;
