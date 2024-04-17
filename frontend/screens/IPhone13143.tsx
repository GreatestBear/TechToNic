import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import StatusBar1 from "../components/StatusBar1";
import DarkModeFalse from "../components/DarkModeFalse";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const IPhone13143 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13146}>
      <Text style={styles.text}>{`

가족을 연결하세요!`}</Text>
      <StatusBar1 notchIconTop={0} notchIconLeft={0} />
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseRight={0}
        darkModeFalseBottom={0}
        darkModeFalseLeft={0}
      />
      <Text style={[styles.text1, styles.textTypo]}>
        늘편안을 사용중인 피보호인이 있으신가요? 코드를 통해 연결하세요!
      </Text>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-1.png")}
      />
      <View style={[styles.iphone13146Child, styles.iphone13146Border]} />
      <Text style={[styles.text2, styles.textTypo]}>
        #피보호인의 코드를 입력하세요
      </Text>
      <View style={[styles.iphone13146Item, styles.iphone13146Border]} />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("IPhone13144")}
      >
        <Text style={[styles.text3, styles.textTypo]}>다음으로</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
  },
  iphone13146Border: {
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  text: {
    top: 87,
    left: 21,
    fontSize: FontSize.size_17xl,
    width: 352,
    height: 107,
    textAlign: "center",
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  text1: {
    top: 434,
    left: 0,
    width: 390,
    height: 41,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  icon: {
    top: 219,
    left: 100,
    width: 181,
    height: 185,
    position: "absolute",
  },
  iphone13146Child: {
    top: 505,
    left: 27,
    width: 343,
    height: 53,
    backgroundColor: Color.colorWhite,
  },
  text2: {
    top: 519,
    left: 37,
    color: Color.colorGray,
    width: 326,
    height: 26,
    position: "absolute",
  },
  iphone13146Item: {
    top: 745,
    left: 98,
    backgroundColor: Color.colorMediumseagreen,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 194,
    height: 42,
  },
  text3: {
    width: 105,
    height: 17,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_5xl,
  },
  pressable: {
    left: 147,
    top: 757,
    position: "absolute",
  },
  iphone13146: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone13143;
