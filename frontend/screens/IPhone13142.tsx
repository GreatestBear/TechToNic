import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import StatusBar1 from "../components/StatusBar1";
import DarkModeFalse from "../components/DarkModeFalse";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13142 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13145}>
      <StatusBar1 notchIconTop={0} notchIconLeft={0} />
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseRight={0}
        darkModeFalseBottom={0}
        darkModeFalseLeft={0}
      />
      <Text style={styles.text}>{`어서오세요 홍길동님!

사용자 정보를 입력해주

세요!`}</Text>
      <View style={[styles.iphone13145Child, styles.rectangleViewShadowBox]} />
      <View style={[styles.iphone13145Item, styles.iphone13145ShadowBox]} />
      <View style={[styles.iphone13145Inner, styles.iphone13145ShadowBox]} />
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Text style={[styles.text1, styles.textLayout1]}>키</Text>
      <Text style={[styles.text2, styles.textLayout1]}>몸무게</Text>
      <Text style={[styles.text3, styles.textLayout]}>생년월일</Text>
      <Text style={[styles.text4, styles.textLayout]}>성별</Text>
      <View style={[styles.iphone13145Child1, styles.iphone13145ChildBorder]} />
      <Image
        style={styles.calendarIcon}
        contentFit="cover"
        source={require("../assets/calendar.png")}
      />
      <Text style={[styles.text5, styles.textTypo1]}>#생년. 월. 일</Text>
      <Text style={[styles.text6, styles.textTypo]}>남성</Text>
      <Text style={[styles.text7, styles.textTypo]}>여성</Text>
      <View style={[styles.iphone13145Child2, styles.iphone13145ChildBorder]} />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("IPhone13141")}
      >
        <Text style={[styles.text8, styles.textTypo1]}>다음으로</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewShadowBox: {
    height: 38,
    top: 307,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_mini,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iphone13145ShadowBox: {
    top: 559,
    height: 38,
    width: 114,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  textLayout1: {
    height: 41,
    width: 80,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  textLayout: {
    height: 34,
    width: 120,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  iphone13145ChildBorder: {
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
  },
  textTypo: {
    top: 567,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  text: {
    top: 110,
    left: 16,
    fontSize: FontSize.size_17xl,
    width: 352,
    height: 87,
    textAlign: "center",
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  iphone13145Child: {
    left: 33,
    width: 114,
    height: 38,
    top: 307,
  },
  iphone13145Item: {
    left: 167,
    backgroundColor: "rgba(250, 13, 13, 0.47)",
  },
  iphone13145Inner: {
    left: 36,
    backgroundColor: Color.colorDeepskyblue_200,
  },
  rectangleView: {
    left: 188,
    width: 137,
    height: 38,
    top: 307,
  },
  text1: {
    top: 266,
    left: 25,
  },
  text2: {
    top: 268,
    left: 185,
  },
  text3: {
    top: 388,
    left: 30,
  },
  text4: {
    top: 525,
    left: 8,
  },
  iphone13145Child1: {
    top: 422,
    left: 32,
    width: 336,
    height: 53,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
  },
  calendarIcon: {
    top: 435,
    left: 311,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  text5: {
    top: 436,
    left: -2,
    color: Color.colorGray,
    width: 259,
    height: 26,
    position: "absolute",
  },
  text6: {
    left: 59,
    width: 69,
    height: 30,
  },
  text7: {
    left: 186,
    width: 62,
    height: 35,
  },
  iphone13145Child2: {
    top: 747,
    left: 101,
    backgroundColor: Color.colorMediumseagreen,
    width: 194,
    height: 42,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
  },
  text8: {
    width: 133,
    height: 22,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_5xl,
  },
  pressable: {
    left: 132,
    top: 757,
    position: "absolute",
  },
  iphone13145: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone13142;
