import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import StatusBar1 from "../components/StatusBar1";
import DarkModeFalse from "../components/DarkModeFalse";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13149 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone131410}>
      <StatusBar1 notchIconTop={0} notchIconLeft={0} />
      <View style={styles.iphone131410Child} />
      <View style={styles.rectangleViewShadowBox} />
      <Text style={styles.text}>약 추가하기</Text>
      <Image
        style={styles.iphone131410Inner}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-115.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={[styles.iphone131410Child1, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Text style={[styles.text1, styles.textTypo1]}>직접 입력하기</Text>
      <Text style={[styles.text2, styles.textTypo]}>약봉투 인식하기</Text>
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseRight={0}
        darkModeFalseBottom={0}
        darkModeFalseLeft={0}
      />
      <StatusBar1 notchIconTop={0} notchIconLeft={0} />
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/icon1.png")}
      />
      <Image
        style={[styles.settingsIcon, styles.text3Position]}
        contentFit="cover"
        source={require("../assets/settings.png")}
      />
      <Text style={[styles.text3, styles.textLayout]}>
        늘편안: 부모님의 든든한 건강 동반자
      </Text>
      <View style={styles.rectangleViewShadowBox} />
      <Pressable
        style={[styles.rectanglePressable, styles.text4Position]}
        onPress={() => navigation.navigate("IPhone13145")}
      />
      <Text style={[styles.text4, styles.text4Position]}>돌아가기</Text>
      <Text style={styles.text}>약 추가하기</Text>
      <Image
        style={styles.iphone131410Inner}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-115.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={[styles.iphone131410Child1, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Pressable
        style={styles.text1Position}
        onPress={() => navigation.navigate("IPhone131413")}
      >
        <Text style={styles.textTypo1}>직접 입력하기</Text>
      </Pressable>
      <Pressable
        style={styles.text2Position}
        onPress={() => navigation.navigate("IPhone131412")}
      >
        <Text style={styles.textTypo}>약봉투 인식하기</Text>
      </Pressable>
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseRight={0}
        darkModeFalseBottom={0}
        darkModeFalseLeft={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleIconLayout: {
    left: 62,
    height: 78,
    width: 245,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  textTypo1: {
    height: 71,
    width: 231,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 49,
    letterSpacing: -0.7,
    fontSize: FontSize.size_16xl,
  },
  textTypo: {
    lineHeight: 48,
    fontSize: FontSize.size_15xl,
    height: 71,
    width: 231,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: -0.7,
  },
  text3Position: {
    top: 46,
    position: "absolute",
  },
  textLayout: {
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: "center",
  },
  text4Position: {
    left: 113,
    position: "absolute",
  },
  iphone131410Child: {
    top: 79,
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
    left: 0,
    position: "absolute",
  },
  rectangleViewShadowBox: {
    height: 475,
    width: 324,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_11xl,
    left: 33,
    top: 175,
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
  text: {
    left: 132,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 49,
    letterSpacing: -0.7,
    fontSize: FontSize.size_16xl,
    color: Color.labelColorLightPrimary,
    top: 244,
    position: "absolute",
  },
  iphone131410Inner: {
    top: 229,
    left: 66,
    height: 78,
    width: 245,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  icon: {
    left: 80,
    width: 45,
    height: 42,
    top: 244,
    position: "absolute",
  },
  rectangleIcon: {
    top: 385,
  },
  iphone131410Child1: {
    top: 523,
  },
  text1: {
    left: 69,
    top: 541,
    position: "absolute",
  },
  text2: {
    left: 74,
    top: 404,
    position: "absolute",
  },
  icon1: {
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
  text3: {
    fontSize: FontSize.calloutBold_size,
    fontFamily: FontFamily.interRegular,
    width: 262,
    height: 33,
    top: 46,
    position: "absolute",
    lineHeight: 21,
    letterSpacing: 0,
    left: 0,
  },
  rectanglePressable: {
    top: 752,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorRoyalblue_200,
    shadowRadius: 4,
    elevation: 4,
    width: 165,
    height: 42,
    left: 113,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text4: {
    top: 760,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.kodchasanRegular,
    width: 162,
    height: 31,
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    left: 113,
  },
  text1Position: {
    left: 69,
    top: 541,
    position: "absolute",
  },
  text2Position: {
    left: 74,
    top: 404,
    position: "absolute",
  },
  iphone131410: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone13149;
