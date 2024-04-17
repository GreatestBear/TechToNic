import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import StatusBar1 from "../components/StatusBar1";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DarkModeFalse from "../components/DarkModeFalse";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const IPhone131416 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone131413}>
      <View style={[styles.iphone131413Child, styles.rectangleShadowBox]} />
      <Text style={[styles.text, styles.textFlexBox]}>돌아가기</Text>
      <View style={styles.iphone131413ShadowBox} />
      <Text style={styles.textLayout}>입력완료</Text>
      <Text style={styles.textLayout}>입력완료</Text>
      <View style={styles.iphone131413ShadowBox} />
      <Text style={[styles.text, styles.textFlexBox]}>돌아가기</Text>
      <View style={[styles.rectangleView, styles.rectangleShadowBox]} />
      <StatusBar1 notchIconTop={0} notchIconLeft={0} />
      <Text style={[styles.text4, styles.textTypo]}>복용하는 약 목록 확인</Text>
      <Text style={[styles.text5, styles.mg1Position]}>소론도 정</Text>
      <Text style={[styles.mg, styles.mgTypo]}>아마릴 정 2mg</Text>
      <Image
        style={[styles.rectangleIcon, styles.iphone131413ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-51.png")}
      />
      <Text style={[styles.mg1, styles.mgTypo]}>리피논 정 20mg</Text>
      <Text style={[styles.mg2, styles.mgTypo]}>텔미칸 정 40mg</Text>
      <Image
        style={[styles.iphone131413Child1, styles.iphone131413ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Image
        style={[styles.iphone131413Child2, styles.iphone131413ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.iphone131413Child3, styles.iphone131413ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Pressable
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate("IPhone131412")}
      >
        <Text style={[styles.text6, styles.mgTypo]}>약 추가하기</Text>
      </Pressable>
      <Image
        style={[styles.iphone131413Child3, styles.iphone131413ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <StatusBar1 notchIconTop={0} notchIconLeft={0} />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon1.png")}
      />
      <Image
        style={[styles.settingsIcon, styles.text8Position]}
        contentFit="cover"
        source={require("../assets/settings.png")}
      />
      <Image
        style={[styles.iphone131413Child1, styles.iphone131413ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Text style={[styles.mg2, styles.mgTypo]}>텔미칸 정 40mg</Text>
      <Text style={[styles.mg1, styles.mgTypo]}>리피논 정 20mg</Text>
      <Image
        style={[styles.rectangleIcon, styles.iphone131413ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-51.png")}
      />
      <Text style={[styles.mg, styles.mgTypo]}>아마릴 정 2mg</Text>
      <Text style={[styles.text5, styles.mg1Position]}>소론도 정</Text>
      <Image
        style={[styles.iphone131413Child2, styles.iphone131413ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseRight={0}
        darkModeFalseBottom={-2}
        darkModeFalseLeft={0}
      />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={[styles.text8, styles.text8Position]}>
        늘편안: 부모님의 든든한 건강 동반자
      </Text>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("IPhone13145")}
      >
        <Text style={styles.text9}>메인으로 돌아가기</Text>
      </Pressable>
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleShadowBox]}
        onPress={() => navigation.navigate("IPhone13145")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleShadowBox: {
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
    backgroundColor: Color.colorRoyalblue_200,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
  },
  mg1Position: {
    left: 46,
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
  iphone131413ChildLayout: {
    height: 78,
    width: 315,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  text8Position: {
    top: 46,
    position: "absolute",
  },
  iphone131413Child: {
    width: 165,
    left: -756,
    top: 588,
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
    backgroundColor: Color.colorRoyalblue_200,
    borderRadius: Border.br_mini,
  },
  text: {
    width: 162,
    height: 31,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    fontSize: FontSize.size_5xl,
    top: 598,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    left: -756,
    position: "absolute",
  },
  iphone131413ShadowBox: {
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
  textLayout: {
    transform: [
      {
        rotate: "0.2deg",
      },
    ],
    width: 133,
    left: -549,
    height: 22,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    top: 598,
    position: "absolute",
  },
  rectangleView: {
    width: 165,
    left: -756,
    top: 588,
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
    backgroundColor: Color.colorRoyalblue_200,
    borderRadius: Border.br_mini,
  },
  text4: {
    top: 95,
    lineHeight: 49,
    letterSpacing: -0.7,
    fontSize: FontSize.size_16xl,
    color: Color.labelColorLightPrimary,
    position: "absolute",
    left: 37,
  },
  text5: {
    top: 566,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
  },
  mg: {
    top: 183,
    left: 57,
    width: 276,
    lineHeight: 49,
    letterSpacing: -0.7,
    fontSize: FontSize.size_16xl,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  rectangleIcon: {
    top: 168,
    left: 37,
  },
  mg1: {
    top: 310,
    width: 307,
    left: 46,
    lineHeight: 49,
    letterSpacing: -0.7,
    fontSize: FontSize.size_16xl,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  mg2: {
    top: 438,
    left: 42,
    width: 310,
    lineHeight: 49,
    letterSpacing: -0.7,
    fontSize: FontSize.size_16xl,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  iphone131413Child1: {
    top: 296,
    left: 37,
  },
  iphone131413Child2: {
    top: 424,
    left: 37,
  },
  iphone131413Child3: {
    top: 552,
    left: 39,
  },
  text6: {
    fontSize: FontSize.size_11xl,
    lineHeight: 45,
    color: Color.colorWhite,
    display: "flex",
    width: 148,
    height: 23,
    alignItems: "center",
  },
  buttonPrimary: {
    top: 686,
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
  lineIcon: {
    top: 79,
    left: -4,
    maxHeight: "100%",
    width: 390,
    position: "absolute",
  },
  text8: {
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
  text9: {
    width: 192,
    height: 22,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
  },
  pressable: {
    left: 97,
    top: 786,
    position: "absolute",
  },
  rectanglePressable: {
    top: 776,
    left: 69,
    width: 247,
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
    backgroundColor: Color.colorRoyalblue_200,
    borderRadius: Border.br_mini,
  },
  iphone131413: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone131416;
