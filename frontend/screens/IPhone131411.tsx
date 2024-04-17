import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import DarkModeFalse from "../components/DarkModeFalse";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone131411 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13149}>
      <StatusBar1 notchIconTop={1} notchIconLeft={2} />
      <Image
        style={[styles.userIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseRight={16}
        darkModeFalseBottom={0}
        darkModeFalseLeft={-16}
      />
      <Text style={styles.text}>늘편안: 부모님의 든든한 건강 동반자</Text>
      <View style={styles.iphone13149Child} />
      <Image
        style={[styles.settingsIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/settings.png")}
      />
      <View style={[styles.iphone13149Item, styles.rectangleBorder]} />
      <View style={[styles.iphone13149Inner, styles.rectangleBorder]} />
      <Text style={[styles.text1, styles.textTypo]}>
        내가 혈압이 높은 편인데 어떻게 관리하면 좋아질까?
      </Text>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-23.png")}
      />
      <Text
        style={[styles.text2, styles.textTypo]}
      >{`고혈압을 관리하는 것은 매우 중요합니다. 여기에 몇 가지 조언이 있습니다:
건강한 식습관: 소금 섭취량을 줄이고, 과일과 채소를 많이 섭취하세요.
체중 감량: 과체중이라면 체중 감량이 도움이 됩니다.
규칙적인 운동: 유산소 운동과 근력 운동을 포함한 활동적인 라이프스타일 유지.
알코올 제한: 과도한 음주를 피하십시오.
정기적인 의료 상담 및 검진도 중요합니다.`}</Text>
      <View style={[styles.rectangleView, styles.rectangleBorder]} />
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleBorder]}
        onPress={() => navigation.navigate("IPhone13145")}
      />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("IPhone13145")}
      >
        <Text style={[styles.text3, styles.textTypo]}>메인으로 돌아가기</Text>
      </Pressable>
      <Text style={styles.text4}>#이어서 입력하기</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleBorder: {
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  textTypo: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
  },
  userIcon: {
    top: 65,
    left: 326,
    width: 26,
  },
  text: {
    top: 63,
    height: 33,
    width: 262,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.calloutBold_size,
    left: 2,
    position: "absolute",
  },
  iphone13149Child: {
    top: 96,
    borderTopWidth: 1,
    width: 391,
    height: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    elevation: 20,
    shadowRadius: 20,
    left: 0,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  settingsIcon: {
    top: 66,
    left: 291,
    width: 30,
  },
  iphone13149Item: {
    top: 129,
    left: 112,
    height: 95,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_11xl,
    borderWidth: 1,
    elevation: 20,
    shadowRadius: 20,
    backgroundColor: Color.colorWhite,
    width: 262,
  },
  iphone13149Inner: {
    top: 283,
    width: 338,
    height: 348,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_11xl,
    borderWidth: 1,
    elevation: 20,
    shadowRadius: 20,
    backgroundColor: Color.colorWhite,
    left: 2,
  },
  text1: {
    top: 149,
    left: 126,
    width: 238,
    height: 86,
    fontSize: FontSize.size_xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    position: "absolute",
  },
  icon: {
    top: 197,
    left: 27,
    width: 56,
    height: 75,
    position: "absolute",
  },
  text2: {
    top: 305,
    width: 340,
    height: 246,
    fontSize: FontSize.size_xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    position: "absolute",
    left: 0,
  },
  rectangleView: {
    top: 666,
    left: 60,
    width: 254,
    height: 77,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_11xl,
    borderWidth: 1,
    elevation: 20,
    shadowRadius: 20,
    backgroundColor: Color.colorWhite,
  },
  rectanglePressable: {
    top: 756,
    left: 67,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorRoyalblue_200,
    width: 247,
    height: 42,
    borderWidth: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text3: {
    fontSize: FontSize.size_5xl,
    width: 192,
    height: 22,
  },
  pressable: {
    left: 91,
    top: 766,
    position: "absolute",
  },
  text4: {
    top: 681,
    left: 100,
    color: Color.colorGray,
    textAlign: "left",
    width: 139,
    height: 62,
    fontFamily: FontFamily.interRegular,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.calloutBold_size,
    position: "absolute",
  },
  iphone13149: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.colorWhite,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default IPhone131411;
