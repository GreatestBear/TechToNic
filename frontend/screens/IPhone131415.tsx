import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DarkModeFalse from "../components/DarkModeFalse";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const IPhone131415 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone131416}>
      <StatusBar1 notchIconTop={0} notchIconLeft={0} />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon1.png")}
      />
      <Image
        style={styles.settingsIcon}
        contentFit="cover"
        source={require("../assets/settings.png")}
      />
      <View style={styles.iphone131416Child} />
      <Text style={styles.text}>늘편안: 부모님의 든든한 건강 동반자</Text>
      <Text style={styles.text1}>약 직접 입력하기</Text>
      <View style={styles.buttonPrimary}>
        <Text style={styles.text2}>약 등록하기</Text>
      </View>
      <View style={[styles.iphone131416Item, styles.iphone131416ShadowBox]} />
      <Text style={styles.text3}>돌아가기</Text>
      <View style={[styles.iphone131416Inner, styles.iphone131416ShadowBox]} />
      <Text style={[styles.text4, styles.textLayout]}>입력완료</Text>
      <Pressable
        style={styles.text4Position}
        onPress={() => navigation.navigate("IPhone131416")}
      >
        <Text style={styles.textLayout}>입력완료</Text>
      </Pressable>
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseRight={0}
        darkModeFalseBottom={0}
        darkModeFalseLeft={0}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-222.png")}
      />
      <Image
        style={[styles.iphone131416Child1, styles.iphone131416ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <Text style={[styles.text6, styles.textTypo]}>복용시간</Text>
      <Image
        style={[styles.icon1, styles.mgPosition]}
        contentFit="cover"
        source={require("../assets/-115.png")}
      />
      <Text style={[styles.mg, styles.mgPosition]}>{`다이아벡스정 50mg
`}</Text>
      <Text style={[styles.text7, styles.textPosition]}>복용일수</Text>
      <Image
        style={[styles.iphone131416Child2, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-26.png")}
      />
      <Text style={[styles.text8, styles.textPosition]}>3일</Text>
      <Text style={[styles.text9, styles.textTypo]}>점심</Text>
      <Text style={styles.text3}>돌아가기</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone131416ShadowBox: {
    height: 42,
    borderWidth: 1,
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_mini,
    top: 758,
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
    transform: [
      {
        rotate: "0.2deg",
      },
    ],
    height: 22,
    width: 133,
    fontFamily: FontFamily.kodchasanRegular,
    fontSize: FontSize.size_5xl,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
  },
  iphone131416ChildLayout: {
    width: 175,
    borderRadius: Border.br_11xl,
  },
  textTypo: {
    lineHeight: 42,
    letterSpacing: -0.6,
    fontSize: FontSize.size_11xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  mgPosition: {
    top: 168,
    height: 42,
    position: "absolute",
  },
  textPosition: {
    top: 243,
    height: 42,
    position: "absolute",
  },
  icon: {
    top: 45,
    left: 319,
    width: 21,
    height: 23,
    position: "absolute",
  },
  settingsIcon: {
    left: 286,
    width: 30,
    height: 25,
    top: 46,
    position: "absolute",
    overflow: "hidden",
  },
  iphone131416Child: {
    top: 79,
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
  text: {
    fontSize: FontSize.calloutBold_size,
    fontFamily: FontFamily.interRegular,
    width: 262,
    height: 33,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    left: 0,
    top: 46,
    position: "absolute",
  },
  text1: {
    top: 81,
    left: 77,
    fontSize: FontSize.size_16xl,
    letterSpacing: -0.7,
    lineHeight: 49,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  text2: {
    lineHeight: 45,
    color: Color.colorWhite,
    display: "flex",
    width: 148,
    textAlign: "left",
    fontSize: FontSize.size_11xl,
    alignItems: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 23,
  },
  buttonPrimary: {
    top: 687,
    backgroundColor: Color.colorRoyalblue_100,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 2,
    elevation: 2,
    width: 343,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    borderRadius: Border.br_11xl,
    left: 23,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  iphone131416Item: {
    backgroundColor: Color.colorRoyalblue_200,
    width: 165,
    left: 15,
    height: 42,
    borderWidth: 1,
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_mini,
    top: 758,
  },
  text3: {
    width: 162,
    height: 31,
    fontFamily: FontFamily.kodchasanRegular,
    fontSize: FontSize.size_5xl,
    top: 768,
    left: 15,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  iphone131416Inner: {
    left: 203,
    backgroundColor: Color.colorMediumseagreen,
    width: 172,
    height: 42,
    borderWidth: 1,
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_mini,
    top: 758,
  },
  text4: {
    left: 222,
    top: 768,
    position: "absolute",
  },
  text4Position: {
    left: 222,
    top: 768,
    position: "absolute",
  },
  rectangleIcon: {
    top: 150,
    left: 30,
    width: 329,
    height: 489,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  iphone131416Child1: {
    left: 177,
    top: 318,
    height: 42,
    position: "absolute",
  },
  text6: {
    top: 318,
    height: 42,
    position: "absolute",
    width: 172,
    left: 23,
    letterSpacing: -0.6,
    textAlign: "center",
  },
  icon1: {
    left: 44,
    width: 45,
  },
  mg: {
    left: 96,
    width: 256,
    lineHeight: 42,
    letterSpacing: -0.6,
    fontSize: FontSize.size_11xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  text7: {
    lineHeight: 42,
    letterSpacing: -0.6,
    fontSize: FontSize.size_11xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    width: 172,
    left: 23,
    textAlign: "center",
  },
  iphone131416Child2: {
    left: 180,
    width: 175,
    borderRadius: Border.br_11xl,
  },
  text8: {
    left: 182,
    lineHeight: 42,
    letterSpacing: -0.6,
    fontSize: FontSize.size_11xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    width: 172,
    textAlign: "center",
  },
  text9: {
    left: 183,
    top: 318,
    height: 42,
    position: "absolute",
    width: 172,
    textAlign: "center",
  },
  iphone131416: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone131415;
