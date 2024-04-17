import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import StatusBar1 from "../components/StatusBar1";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DarkModeFalse from "../components/DarkModeFalse";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const IPhone131414 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone131412}>
      <View style={styles.rectangleViewShadowBox} />
      <Text style={styles.text}>돌아가기</Text>
      <View style={styles.iphone131412ShadowBox} />
      <Text style={[styles.text1, styles.textLayout]}>입력완료</Text>
      <Text style={[styles.text2, styles.textLayout]}>입력완료</Text>
      <View style={styles.iphone131412ShadowBox} />
      <Text style={styles.text}>돌아가기</Text>
      <View style={styles.rectangleViewShadowBox} />
      <StatusBar1 notchIconTop={0} notchIconLeft={0} />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon1.png")}
      />
      <Image
        style={[styles.settingsIcon, styles.text4Position]}
        contentFit="cover"
        source={require("../assets/settings.png")}
      />
      <Text style={[styles.text4, styles.text4Position]}>
        늘편안: 부모님의 든든한 건강 동반자
      </Text>
      <Text style={[styles.text5, styles.textTypo]}>약 봉투 인식하기</Text>
      <Text style={[styles.text6, styles.textTypo]}>
        약을 선택해 등록해주세요
      </Text>
      <Text style={[styles.text7, styles.mg1Position]}>소론도 정</Text>
      <Text style={[styles.mg, styles.mgTypo]}>아마릴 정 2mg</Text>
      <Image
        style={[styles.rectangleIcon, styles.iphone131412ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-51.png")}
      />
      <Text style={[styles.mg1, styles.mgTypo]}>리피논 정 20mg</Text>
      <Text style={[styles.mg2, styles.mgTypo]}>텔미칸 정 40mg</Text>
      <Image
        style={[styles.iphone131412Child1, styles.iphone131412ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Image
        style={[styles.iphone131412Child2, styles.iphone131412ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.iphone131412Child3, styles.iphone131412ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <View style={styles.buttonPrimary}>
        <Text style={[styles.text8, styles.mgTypo]}>약 등록하기</Text>
      </View>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("IPhone131412")}
      />
      <Text style={styles.text9}>돌아가기</Text>
      <View style={styles.iphone131412Child4} />
      <Text style={[styles.text10, styles.text10Position]}>입력완료</Text>
      <Pressable
        style={styles.text10Position}
        onPress={() => navigation.navigate("IPhone131416")}
      >
        <Text style={styles.textLayout}>입력완료</Text>
      </Pressable>
      <Text style={styles.text9}>돌아가기</Text>
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseRight={5}
        darkModeFalseBottom={-6}
        darkModeFalseLeft={-5}
      />
      <View style={styles.lineView} />
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    transform: [
      {
        rotate: "0.2deg",
      },
    ],
    height: 22,
    width: 133,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
  },
  text4Position: {
    top: 46,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
  },
  mg1Position: {
    left: 55,
    lineHeight: 49,
    letterSpacing: -0.7,
    fontSize: FontSize.size_16xl,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  mgTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  iphone131412ChildLayout: {
    height: 78,
    width: 315,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  text10Position: {
    left: 223,
    top: 793,
    position: "absolute",
  },
  rectangleViewShadowBox: {
    height: 42,
    width: 165,
    borderWidth: 1,
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.colorRoyalblue_200,
    borderRadius: Border.br_mini,
    left: -756,
    top: 588,
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
  text: {
    height: 31,
    width: 162,
    fontFamily: FontFamily.kodchasanRegular,
    fontSize: FontSize.size_5xl,
    top: 598,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    left: -756,
    position: "absolute",
  },
  iphone131412ShadowBox: {
    width: 172,
    backgroundColor: Color.colorMediumseagreen,
    left: -568,
    height: 42,
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
    top: 588,
    position: "absolute",
  },
  text1: {
    left: -549,
    transform: [
      {
        rotate: "0.2deg",
      },
    ],
    height: 22,
    width: 133,
    top: 598,
    position: "absolute",
  },
  text2: {
    left: -549,
    transform: [
      {
        rotate: "0.2deg",
      },
    ],
    height: 22,
    width: 133,
    top: 598,
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
    overflow: "hidden",
  },
  text4: {
    left: 0,
    fontSize: FontSize.calloutBold_size,
    fontFamily: FontFamily.interRegular,
    width: 262,
    height: 33,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    top: 46,
  },
  text5: {
    top: 88,
    left: 68,
    lineHeight: 49,
    letterSpacing: -0.7,
    fontSize: FontSize.size_16xl,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  text6: {
    top: 146,
    left: 40,
    letterSpacing: -0.6,
    lineHeight: 42,
    fontSize: FontSize.size_11xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  text7: {
    top: 621,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
  },
  mg: {
    top: 238,
    left: 66,
    width: 276,
    lineHeight: 49,
    letterSpacing: -0.7,
    fontSize: FontSize.size_16xl,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  rectangleIcon: {
    top: 223,
    left: 46,
    height: 78,
    width: 315,
  },
  mg1: {
    top: 365,
    width: 307,
    left: 55,
    lineHeight: 49,
    letterSpacing: -0.7,
    fontSize: FontSize.size_16xl,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  mg2: {
    top: 493,
    left: 51,
    width: 310,
    lineHeight: 49,
    letterSpacing: -0.7,
    fontSize: FontSize.size_16xl,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  iphone131412Child1: {
    top: 351,
    left: 46,
    height: 78,
    width: 315,
  },
  iphone131412Child2: {
    top: 479,
    left: 46,
    height: 78,
    width: 315,
  },
  iphone131412Child3: {
    top: 607,
    left: 48,
  },
  text8: {
    lineHeight: 45,
    color: Color.colorWhite,
    display: "flex",
    width: 148,
    alignItems: "center",
    fontSize: FontSize.size_11xl,
    height: 23,
  },
  buttonPrimary: {
    top: 709,
    left: 23,
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
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  rectanglePressable: {
    left: 16,
    top: 783,
    height: 42,
    width: 165,
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
    backgroundColor: Color.colorRoyalblue_200,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  text9: {
    top: 793,
    left: 16,
    height: 31,
    width: 162,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  iphone131412Child4: {
    left: 204,
    top: 783,
    width: 172,
    backgroundColor: Color.colorMediumseagreen,
    height: 42,
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
  text10: {
    transform: [
      {
        rotate: "0.2deg",
      },
    ],
    height: 22,
    width: 133,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
  },
  lineView: {
    top: 79,
    left: 1,
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
    position: "absolute",
  },
  iphone131412: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone131414;
