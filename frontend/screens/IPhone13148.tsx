import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import DarkModeFalse from "../components/DarkModeFalse";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const IPhone13148 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone131419}>
      <StatusBar1 notchIconTop={0} notchIconLeft={0} />
      <Image
        style={styles.settingsIcon}
        contentFit="cover"
        source={require("../assets/settings.png")}
      />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon1.png")}
      />
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseRight={0}
        darkModeFalseBottom={0}
        darkModeFalseLeft={0}
      />
      <Text style={styles.text}>늘편안: 부모님의 든든한 건강 동반자</Text>
      <View style={styles.iphone131419Child} />
      <Image
        style={[styles.icon1, styles.icon1Position]}
        contentFit="cover"
        source={require("../assets/-113.png")}
      />
      <Image
        style={[styles.iphone131419Item, styles.icon1Position]}
        contentFit="cover"
        source={require("../assets/rectangle-191.png")}
      />
      <Text style={styles.text1}> 복용 시간 알림 설정하기</Text>
      <Text style={[styles.text2, styles.textTypo2]}>
        무슨 약을 설정하시겠나요?
      </Text>
      <View style={[styles.parent, styles.icon6Position]}>
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-17.png")}
        />
        <Image
          style={[styles.icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-18.png")}
        />
        <Image
          style={[styles.icon4, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-19.png")}
        />
        <Image
          style={[styles.icon5, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-110.png")}
        />
        <Text style={[styles.mg, styles.mgTypo]}>아마릴 정 2mg</Text>
        <Text style={[styles.mg1, styles.mgTypo]}>리피논 정 20mg</Text>
        <Text style={[styles.mg2, styles.mgTypo]}>텔미칸 정 40mg</Text>
        <Text style={styles.text3}>소론도 정</Text>
      </View>
      <Text style={[styles.text4, styles.textTypo2]}>
        몇시 몇분에 복용하시겠어요?
      </Text>
      <View style={[styles.iphone131419Inner, styles.rectangleViewShadowBox]} />
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Image
        style={[styles.icon6, styles.icon6Position]}
        contentFit="cover"
        source={require("../assets/-114.png")}
      />
      <Text style={[styles.text5, styles.textTypo1]}>시</Text>
      <Text style={[styles.text6, styles.textTypo1]}>분</Text>
      <View
        style={[styles.iphone131419Child1, styles.iphone131419ChildShadowBox]}
      />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("IPhone13145")}
      >
        <Text style={[styles.text7, styles.textTypo]}>메인으로 돌아가기</Text>
      </Pressable>
      <View
        style={[styles.iphone131419Child2, styles.iphone131419ChildShadowBox]}
      />
      <Text style={[styles.text8, styles.textTypo]}>입력 완료</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon1Position: {
    left: 12,
    top: 156,
    position: "absolute",
  },
  textTypo2: {
    lineHeight: 34,
    letterSpacing: -0.5,
    fontSize: FontSize.size_5xl,
    left: 28,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  icon6Position: {
    left: 19,
    position: "absolute",
  },
  iconLayout: {
    height: 39,
    width: 87,
    borderRadius: Border.br_xl,
    top: 0,
    position: "absolute",
  },
  mgTypo: {
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    top: 47,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleViewShadowBox: {
    height: 26,
    width: 53,
    borderWidth: 1,
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.colorDeepskyblue_100,
    borderRadius: Border.br_mini,
    top: 514,
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
  textTypo1: {
    height: 46,
    width: 38,
    top: 509,
    lineHeight: 34,
    letterSpacing: -0.5,
    fontSize: FontSize.size_5xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  iphone131419ChildShadowBox: {
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
  textTypo: {
    height: 22,
    fontFamily: FontFamily.kodchasanRegular,
    fontSize: FontSize.size_5xl,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
  },
  settingsIcon: {
    left: 289,
    width: 30,
    height: 25,
    top: 62,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    top: 61,
    left: 326,
    width: 21,
    height: 23,
    position: "absolute",
  },
  text: {
    left: -3,
    fontSize: FontSize.calloutBold_size,
    fontFamily: FontFamily.interRegular,
    width: 262,
    height: 33,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    top: 62,
    position: "absolute",
  },
  iphone131419Child: {
    top: 95,
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
  icon1: {
    width: 78,
    height: 79,
  },
  iphone131419Item: {
    borderRadius: Border.br_11xl,
    width: 367,
    height: 109,
  },
  text1: {
    top: 167,
    fontSize: FontSize.size_16xl,
    letterSpacing: -0.7,
    lineHeight: 49,
    width: 278,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 74,
    textAlign: "center",
    position: "absolute",
  },
  text2: {
    top: 298,
  },
  icon2: {
    left: 3,
  },
  icon3: {
    left: 107,
  },
  icon4: {
    left: 214,
  },
  icon5: {
    left: 317,
  },
  mg: {
    width: 276,
    left: 0,
    textAlign: "left",
  },
  mg1: {
    left: 109,
    width: 307,
  },
  mg2: {
    width: 310,
    left: 214,
  },
  text3: {
    left: 319,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    top: 47,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  parent: {
    top: 343,
    width: 360,
    height: 67,
  },
  text4: {
    top: 454,
  },
  iphone131419Inner: {
    left: 121,
  },
  rectangleView: {
    left: 209,
  },
  icon6: {
    top: 499,
    width: 90,
    height: 90,
  },
  text5: {
    left: 169,
  },
  text6: {
    left: 262,
  },
  iphone131419Child1: {
    top: 771,
    backgroundColor: Color.colorRoyalblue_200,
    width: 247,
    left: 74,
    height: 42,
  },
  text7: {
    width: 192,
  },
  pressable: {
    left: 108,
    top: 781,
    position: "absolute",
  },
  iphone131419Child2: {
    top: 706,
    left: 106,
    backgroundColor: Color.colorMediumseagreen,
    width: 194,
  },
  text8: {
    top: 716,
    left: 138,
    width: 133,
    position: "absolute",
  },
  iphone131419: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone13148;
