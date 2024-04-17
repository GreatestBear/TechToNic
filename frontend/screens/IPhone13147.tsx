import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import StatusBar1 from "../components/StatusBar1";
import DarkModeFalse from "../components/DarkModeFalse";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13147 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13144}>
      <StatusBar1 notchIconTop={1} notchIconLeft={2} />
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseRight={0}
        darkModeFalseBottom={0}
        darkModeFalseLeft={0}
      />
      <Text style={styles.text}>늘편안: 부모님의 든든한 건강 동반자</Text>
      <View style={styles.iphone13144Child} />
      <Image
        style={styles.settingsIcon}
        contentFit="cover"
        source={require("../assets/settings.png")}
      />
      <Image
        style={[styles.settingsIcon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/settings.png")}
      />
      <Image
        style={[styles.userIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-21.png")}
      />
      <View style={styles.iphone13144Item} />
      <Text style={styles.text1}>#무엇이든 입력하세요.</Text>
      <Pressable
        style={[styles.iphone13144Inner, styles.rectangleViewShadowBox]}
        onPress={() => navigation.navigate("IPhone131411")}
      />
      <Text style={[styles.text2, styles.textTypo]}>입력 완료</Text>
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("IPhone13145")}
      >
        <Text style={[styles.text3, styles.textTypo]}>메인으로 돌아가기</Text>
      </Pressable>
      <Text style={styles.text4}>무엇이 궁금하신가요?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 65,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleViewShadowBox: {
    height: 42,
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_mini,
    borderWidth: 1,
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
    fontSize: FontSize.size_5xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
  },
  text: {
    top: 63,
    width: 262,
    height: 33,
    textAlign: "center",
    left: 0,
    fontFamily: FontFamily.interRegular,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.calloutBold_size,
    position: "absolute",
  },
  iphone13144Child: {
    top: 96,
    left: 2,
    borderTopWidth: 1,
    width: 391,
    height: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  settingsIcon: {
    top: 61,
    left: -188,
    height: 25,
    width: 30,
    position: "absolute",
    overflow: "hidden",
  },
  settingsIcon1: {
    left: 297,
    width: 30,
    top: 65,
  },
  userIcon: {
    left: 326,
    width: 26,
  },
  icon: {
    top: 165,
    left: 111,
    width: 158,
    height: 189,
    position: "absolute",
  },
  iphone13144Item: {
    top: 521,
    left: 33,
    borderRadius: Border.br_11xl,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: 332,
    height: 114,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text1: {
    top: 547,
    left: 73,
    color: Color.colorGray,
    textAlign: "left",
    width: 265,
    height: 62,
    fontFamily: FontFamily.interRegular,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.calloutBold_size,
    position: "absolute",
  },
  iphone13144Inner: {
    top: 702,
    left: 94,
    backgroundColor: Color.colorMediumseagreen,
    width: 194,
  },
  text2: {
    top: 712,
    left: 126,
    width: 133,
    position: "absolute",
  },
  rectangleView: {
    top: 756,
    left: 76,
    backgroundColor: Color.colorRoyalblue_200,
    width: 247,
  },
  text3: {
    width: 192,
  },
  pressable: {
    left: 99,
    top: 766,
    position: "absolute",
  },
  text4: {
    top: 422,
    fontSize: FontSize.size_17xl,
    width: 390,
    height: 134,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  iphone13144: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone13147;
