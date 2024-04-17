import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import DarkModeFalse from "../components/DarkModeFalse";
import StatusBar1 from "../components/StatusBar1";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13145 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13141}>
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseRight={0}
        darkModeFalseBottom={0}
        darkModeFalseLeft={0}
      />
      <StatusBar1 notchIconTop={1} notchIconLeft={0} />
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={[styles.frameItem, styles.frameShadowBox]} />
        <View style={[styles.frameInner, styles.frameShadowBox]} />
        <View style={[styles.lineView, styles.frameChildShadowBox]} />
        <View style={[styles.frameChild1, styles.frameChildShadowBox]} />
        <View style={[styles.frameChild2, styles.frameChildShadowBox]} />
        <View style={[styles.rectangleView, styles.frameShadowBox]} />
        <View style={[styles.frameChild3, styles.frameChildShadowBox]} />
        <View style={[styles.frameChild4, styles.frameShadowBox]} />
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("IPhone13146")}
        >
          <Text style={[styles.text, styles.textTypo]}>
            가족의 자세한 건강 정보를 확인해보세요!
          </Text>
        </Pressable>
        <Text style={[styles.text1, styles.textLayout1]}>
          가족 건강 모니터링하기
        </Text>
        <View style={[styles.frameChild5, styles.frameChildShadowBox]} />
        <View style={[styles.frameChild6, styles.frameChildShadowBox]} />
        <Text style={[styles.text2, styles.pressablePosition]}>
          편안이에게 무엇이든 물어보세요!
        </Text>
        <Pressable
          style={styles.pressable1}
          onPress={() => navigation.navigate("IPhone13147")}
        >
          <Text style={[styles.text3, styles.textTypo]}>
            의약품, 건강 관련 질문에 모두 답변해 드립니다
          </Text>
        </Pressable>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-12.png")}
        />
        <Text
          style={[styles.text4, styles.textLayout1]}
        >{`복용 시간 알림 `}</Text>
        <Pressable
          style={[styles.pressable2, styles.pressablePosition]}
          onPress={() => navigation.navigate("IPhone13148")}
        >
          <Text style={[styles.text, styles.textTypo]}>
            약의 복용 시간을 알려드립니다
          </Text>
        </Pressable>
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/-13.png")}
        />
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-14.png")}
        />
        <Pressable
          style={styles.pressable3}
          onPress={() => navigation.navigate("IPhone13149")}
        >
          <Text
            style={[styles.text, styles.textTypo]}
          >{`새로운 약을 추가하시고 약에 대한 정보를 확인해보세요!
`}</Text>
        </Pressable>
        <Text
          style={[styles.text7, styles.textLayout1]}
        >{`건강정보 추가하기 `}</Text>
        <Pressable
          style={[styles.pressable4, styles.pressablePosition]}
          onPress={() => navigation.navigate("IPhone131410")}
        >
          <Text style={[styles.text, styles.textTypo]}>
            새로운 건강 정보를 추가하시고 자세한 설명을 확인해보세요!
          </Text>
        </Pressable>
        <Text style={[styles.text9, styles.textLayout1]}>{`약 추가하기 `}</Text>
        <Image
          style={[styles.icon3, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/-15.png")}
        />
        <Image
          style={[styles.icon4, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/-16.png")}
        />
        <Image
          style={[styles.settingsIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/settings.png")}
        />
        <Image
          style={[styles.icon5, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={styles.text10}>늘편안: 부모님의 든든한 건강 동반자</Text>
        <View style={[styles.frameChild7, styles.frameChildLayout]} />
        <View style={[styles.frameChild8, styles.frameChildLayout]} />
        <View style={[styles.frameChild9, styles.frameChildLayout]} />
        <View style={[styles.frameChild10, styles.frameChildLayout]} />
        <View style={[styles.frameChild11, styles.frameChildLayout]} />
        <Text style={[styles.text11, styles.textLayout]}>편안이</Text>
        <Text style={[styles.text12, styles.textLayout]}>약 알림</Text>
        <Text style={[styles.text13, styles.textLayout]}>약 추가</Text>
        <Text style={[styles.text14, styles.textLayout]}>건강정보 추가</Text>
        <Text style={[styles.text15, styles.textLayout]}>모니터링</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameShadowBox: {
    left: 37,
    height: 185,
    width: 324,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_11xl,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.colorWhite,
  },
  frameChildShadowBox: {
    height: 1,
    width: 391,
    borderTopWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    elevation: 20,
    shadowRadius: 20,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.calloutBold_size,
  },
  textLayout1: {
    height: 37,
    width: 148,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  pressablePosition: {
    left: 152,
    position: "absolute",
  },
  iconLayout: {
    width: 73,
    position: "absolute",
  },
  iconPosition1: {
    left: 70,
    position: "absolute",
  },
  iconPosition: {
    top: -33,
    position: "absolute",
  },
  frameChildLayout: {
    height: 49,
    width: 65,
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_mini,
    top: 1230,
    position: "absolute",
  },
  textLayout: {
    height: 21,
    fontFamily: FontFamily.kolkerBrushRegular,
    width: 65,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.calloutBold_size,
    position: "absolute",
  },
  frameChild: {
    top: 34,
    left: 35,
    height: 185,
    width: 324,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_11xl,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.colorWhite,
  },
  frameItem: {
    top: 530,
  },
  frameInner: {
    top: 280,
  },
  lineView: {
    top: 0,
    left: 0,
  },
  frameChild1: {
    top: 256,
    left: 0,
  },
  frameChild2: {
    top: 506,
    left: 0,
  },
  rectangleView: {
    top: 760,
  },
  frameChild3: {
    top: 741,
    left: 0,
  },
  frameChild4: {
    top: 1018,
  },
  text: {
    width: 172,
    height: 62,
  },
  pressable: {
    top: 1125,
    left: 156,
    position: "absolute",
  },
  text1: {
    top: 1071,
    left: 156,
  },
  frameChild5: {
    top: 981,
    left: 0,
  },
  frameChild6: {
    top: 1292,
    left: 2,
  },
  text2: {
    top: 70,
    width: 184,
    height: 44,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_5xl,
    left: 152,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 21,
    letterSpacing: 0,
  },
  text3: {
    width: 195,
    height: 40,
  },
  pressable1: {
    top: 127,
    left: 156,
    position: "absolute",
  },
  icon: {
    top: 327,
    left: 62,
    height: 74,
  },
  text4: {
    top: 335,
    left: 153,
  },
  pressable2: {
    top: 373,
  },
  icon1: {
    top: 577,
    left: 73,
    width: 58,
    height: 61,
    position: "absolute",
  },
  icon2: {
    top: 65,
    left: 54,
    height: 89,
  },
  pressable3: {
    top: 634,
    left: 156,
    position: "absolute",
  },
  text7: {
    top: 813,
    left: 156,
  },
  pressable4: {
    top: 868,
  },
  text9: {
    top: 586,
    left: 164,
  },
  icon3: {
    width: 63,
    height: 61,
    top: 1071,
  },
  icon4: {
    top: 810,
    width: 56,
    height: 53,
  },
  settingsIcon: {
    left: 286,
    width: 30,
    height: 25,
    overflow: "hidden",
  },
  icon5: {
    left: 326,
    width: 21,
    height: 23,
  },
  text10: {
    width: 262,
    height: 33,
    textAlign: "center",
    top: -33,
    fontFamily: FontFamily.interRegular,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.calloutBold_size,
    left: 0,
    position: "absolute",
  },
  frameChild7: {
    left: 21,
  },
  frameChild8: {
    left: 321,
  },
  frameChild9: {
    left: 246,
  },
  frameChild10: {
    left: 171,
  },
  frameChild11: {
    left: 96,
  },
  text11: {
    top: 1244,
    height: 21,
    fontFamily: FontFamily.kolkerBrushRegular,
    left: 21,
  },
  text12: {
    top: 1244,
    height: 21,
    fontFamily: FontFamily.kolkerBrushRegular,
    left: 96,
  },
  text13: {
    top: 1244,
    height: 21,
    fontFamily: FontFamily.kolkerBrushRegular,
    left: 171,
  },
  text14: {
    top: 1237,
    left: 247,
  },
  text15: {
    top: 1244,
    height: 21,
    fontFamily: FontFamily.kolkerBrushRegular,
    left: 321,
  },
  rectangleParent: {
    top: 95,
    width: 392,
    height: 741,
    left: 0,
    position: "absolute",
  },
  iphone13141: {
    shadowRadius: 4,
    elevation: 4,
    flex: 1,
    width: "100%",
    height: 844,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone13145;
