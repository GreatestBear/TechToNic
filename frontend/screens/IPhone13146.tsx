import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import StatusBar1 from "../components/StatusBar1";
import DarkModeFalse from "../components/DarkModeFalse";
import FrameComponent from "../components/FrameComponent";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const IPhone13146 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone131417}>
      <StatusBar1 notchIconTop={1} notchIconLeft={0} />
      <Text style={styles.text}>늘편안: 부모님의 든든한 건강 동반자</Text>
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseRight={0}
        darkModeFalseBottom={0}
        darkModeFalseLeft={0}
      />
      <View style={styles.iphone131417Child} />
      <Image
        style={[styles.settingsIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/settings.png")}
      />
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/icon1.png")}
      />
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/-2.png")}
      />
      <Text style={styles.text1}>가족 건강 모니터링하기</Text>
      <Text style={[styles.text2, styles.textTypo3]}>관리중인 시니어</Text>
      <Text style={[styles.text3, styles.textLayout3]}>{`1960.01.01 `}</Text>
      <Text style={styles.text4}>남성</Text>
      <View style={styles.iphone131417Item} />
      <View
        style={[styles.iphone131417Inner, styles.iphone131417ChildShadowBox1]}
      />
      <Text style={[styles.text5, styles.textLayout]}>고혈압</Text>
      <Text style={[styles.cm, styles.textLayout3]}>키 175cm</Text>
      <Text style={[styles.kg, styles.textLayout3]}>몸무게 70kg</Text>
      <Text style={[styles.text6, styles.textLayout3]}>홍판서</Text>
      <Text style={[styles.text7, styles.textTypo3]}>복용중인 약</Text>
      <Text style={[styles.text8, styles.textTypo3]}>건강 정보</Text>
      <FrameComponent />
      <View style={styles.rectangleView} />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("IPhone13145")}
      >
        <Text style={styles.text9}>메인으로 돌아가기</Text>
      </Pressable>
      <Text style={[styles.text10, styles.textTypo1]}>혈압 수치</Text>
      <View
        style={[styles.iphone131417Child1, styles.iphone131417ChildShadowBox1]}
      />
      <View
        style={[styles.iphone131417Child2, styles.iphone131417ChildShadowBox1]}
      />
      <Text style={styles.text11}>저혈압</Text>
      <Text style={[styles.text12, styles.textLayout]}>정상</Text>
      <Image
        style={[styles.icon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-111.png")}
      />
      <Text style={[styles.text13, styles.textTypo1]}>비만도</Text>
      <View
        style={[styles.iphone131417Child3, styles.iphone131417ChildShadowBox]}
      />
      <View
        style={[styles.iphone131417Child4, styles.iphone131417ChildShadowBox]}
      />
      <View
        style={[styles.iphone131417Child5, styles.iphone131417ChildShadowBox]}
      />
      <Image
        style={[styles.icon3, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-112.png")}
      />
      <Text style={[styles.text14, styles.textTypo]}>고도비만</Text>
      <Text style={[styles.text15, styles.textTypo]}>비만</Text>
      <Text style={[styles.text16, styles.textTypo]}>정상</Text>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 63,
    position: "absolute",
  },
  textTypo3: {
    lineHeight: 34,
    letterSpacing: -0.5,
    fontSize: FontSize.size_5xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 27,
    textAlign: "center",
    position: "absolute",
  },
  textLayout3: {
    height: 41,
    fontFamily: FontFamily.kodchasanRegular,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  iphone131417ChildShadowBox1: {
    left: 116,
    height: 26,
    width: 84,
    borderWidth: 1,
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_mini,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  textLayout: {
    height: 10,
    width: 57,
  },
  textTypo1: {
    lineHeight: 28,
    letterSpacing: -0.4,
    top: 721,
    fontSize: FontSize.size_xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  iconLayout: {
    height: 72,
    width: 73,
    position: "absolute",
  },
  iphone131417ChildShadowBox: {
    left: 296,
    height: 26,
    width: 84,
    borderWidth: 1,
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_mini,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  textTypo: {
    left: 304,
    lineHeight: 22,
    letterSpacing: -0.3,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.calloutBold_size,
    position: "absolute",
  },
  text: {
    left: -3,
    fontFamily: FontFamily.interRegular,
    width: 262,
    height: 33,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.calloutBold_size,
    top: 63,
    position: "absolute",
  },
  iphone131417Child: {
    top: 96,
    shadowRadius: 20,
    elevation: 20,
    borderTopWidth: 1,
    width: 391,
    height: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    position: "absolute",
  },
  settingsIcon: {
    left: 290,
    width: 30,
    height: 25,
    overflow: "hidden",
  },
  icon: {
    left: 326,
    width: 21,
    height: 23,
  },
  icon1: {
    top: 263,
    width: 109,
    height: 115,
    left: 32,
    position: "absolute",
  },
  text1: {
    top: 132,
    fontSize: FontSize.size_16xl,
    letterSpacing: -0.7,
    lineHeight: 49,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 27,
    textAlign: "center",
    position: "absolute",
  },
  text2: {
    top: 218,
  },
  text3: {
    top: 309,
    width: 390,
    fontSize: FontSize.size_xl,
    height: 41,
    left: 13,
  },
  text4: {
    width: 81,
    height: 31,
    left: 154,
    top: 340,
    fontFamily: FontFamily.kodchasanRegular,
    fontSize: FontSize.size_xl,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  iphone131417Item: {
    backgroundColor: Color.colorDeepskyblue_200,
    height: 26,
    width: 84,
    borderWidth: 1,
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_mini,
    left: 154,
    top: 340,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  iphone131417Inner: {
    top: 683,
    backgroundColor: Color.colorSpringgreen,
  },
  text5: {
    lineHeight: 22,
    letterSpacing: -0.3,
    left: 125,
    height: 10,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.calloutBold_size,
    position: "absolute",
    top: 652,
  },
  cm: {
    top: 378,
    left: 2,
    width: 390,
    fontSize: FontSize.size_xl,
    height: 41,
  },
  kg: {
    top: 412,
    width: 390,
    fontSize: FontSize.size_xl,
    height: 41,
    left: 13,
  },
  text6: {
    top: 271,
    fontSize: 32,
    width: 399,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 8,
    height: 41,
    left: 0,
  },
  text7: {
    top: 472,
  },
  text8: {
    top: 616,
  },
  rectangleView: {
    top: 776,
    left: 76,
    backgroundColor: Color.colorRoyalblue_200,
    width: 247,
    height: 42,
    borderWidth: 1,
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_mini,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  text9: {
    width: 192,
    height: 22,
    fontFamily: FontFamily.kodchasanRegular,
    fontSize: FontSize.size_5xl,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
  },
  pressable: {
    left: 107,
    top: 786,
    position: "absolute",
  },
  text10: {
    left: 32,
  },
  iphone131417Child1: {
    backgroundColor: Color.colorDeepskyblue_100,
    top: 650,
  },
  iphone131417Child2: {
    backgroundColor: "rgba(32, 188, 254, 0.03)",
    top: 718,
  },
  text11: {
    left: 127,
    top: 721,
    height: 10,
    width: 57,
    lineHeight: 22,
    letterSpacing: -0.3,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.calloutBold_size,
    position: "absolute",
  },
  text12: {
    top: 685,
    lineHeight: 22,
    letterSpacing: -0.3,
    left: 125,
    height: 10,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.calloutBold_size,
    position: "absolute",
  },
  icon2: {
    top: 652,
    borderRadius: Border.br_mini,
    height: 72,
    width: 73,
    left: 27,
  },
  text13: {
    left: 226,
  },
  iphone131417Child3: {
    backgroundColor: Color.colorDeepskyblue_100,
    top: 650,
  },
  iphone131417Child4: {
    top: 685,
    backgroundColor: Color.colorDeepskyblue_100,
  },
  iphone131417Child5: {
    top: 718,
    backgroundColor: Color.colorSpringgreen,
  },
  icon3: {
    left: 223,
    top: 650,
  },
  text14: {
    width: 68,
    height: 29,
    top: 652,
  },
  text15: {
    top: 686,
    height: 10,
    width: 57,
  },
  text16: {
    top: 720,
    height: 21,
    width: 57,
    left: 304,
  },
  rectangleIcon: {
    top: 118,
    left: 5,
    borderRadius: Border.br_11xl,
    width: 367,
    height: 78,
    position: "absolute",
  },
  iphone131417: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone13146;
