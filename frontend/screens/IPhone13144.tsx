import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import StatusBar1 from "../components/StatusBar1";
import DarkModeFalse from "../components/DarkModeFalse";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13144 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13147}>
      <StatusBar1 notchIconTop={0} notchIconLeft={0} />
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseRight={0}
        darkModeFalseBottom={0}
        darkModeFalseLeft={0}
      />
      <Text style={styles.text}>{`

가족이 연결되었습니다!
`}</Text>
      <Text style={styles.text1}>홍판서</Text>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-11.png")}
      />
      <View style={[styles.iphone13147Child, styles.iphone13147ShadowBox]} />
      <Text style={[styles.text2, styles.textTypo]}>남성</Text>
      <View style={[styles.iphone13147Item, styles.iphone13147ShadowBox]} />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("IPhone13145")}
      >
        <Text style={[styles.text3, styles.textTypo]}>{`완료
`}</Text>
      </Pressable>
      <Text style={[styles.kg, styles.kgLayout]}>몸무게 70kg</Text>
      <Text style={[styles.cm, styles.kgLayout]}>키 175cm</Text>
      <Text style={[styles.text4, styles.kgLayout]}>{`1960.01.01 `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13147ShadowBox: {
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    position: "absolute",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  textTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
  },
  kgLayout: {
    width: 390,
    fontSize: FontSize.size_5xl,
    height: 41,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  text: {
    top: 87,
    left: 15,
    width: 356,
    height: 107,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_17xl,
    position: "absolute",
  },
  text1: {
    top: 447,
    width: 399,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 8,
    height: 41,
    left: 0,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_17xl,
    position: "absolute",
  },
  icon: {
    top: 262,
    left: 128,
    width: 142,
    height: 160,
    position: "absolute",
  },
  iphone13147Child: {
    top: 539,
    left: 157,
    backgroundColor: Color.colorDeepskyblue_200,
    width: 90,
    height: 38,
  },
  text2: {
    top: 546,
    left: 161,
    width: 81,
    height: 31,
    position: "absolute",
  },
  iphone13147Item: {
    top: 743,
    left: 102,
    backgroundColor: Color.colorMediumseagreen,
    width: 194,
    height: 42,
  },
  text3: {
    width: 105,
    height: 13,
  },
  pressable: {
    left: 146,
    top: 751,
    position: "absolute",
  },
  kg: {
    top: 643,
    left: 12,
  },
  cm: {
    top: 602,
    left: 0,
    width: 390,
  },
  text4: {
    top: 493,
    left: 0,
    width: 390,
  },
  iphone13147: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default IPhone13144;
