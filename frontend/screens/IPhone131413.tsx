import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DarkModeFalse from "../components/DarkModeFalse";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const IPhone131413 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone131415}>
      <StatusBar1 notchIconTop={0} notchIconLeft={0} />
      <Image
        style={[styles.icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/icon1.png")}
      />
      <Image
        style={styles.settingsIcon}
        contentFit="cover"
        source={require("../assets/settings.png")}
      />
      <Text style={styles.text}>늘편안: 부모님의 든든한 건강 동반자</Text>
      <Text style={[styles.text1, styles.textClr]}>약 직접 입력하기</Text>
      <View style={[styles.iphone131415Child, styles.iphone131415ShadowBox]} />
      <Pressable
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate("IPhone131415")}
      >
        <Text style={styles.text2}>약 등록하기</Text>
      </Pressable>
      <Pressable
        style={[styles.iphone131415Item, styles.iconLayout1]}
        onPress={() => navigation.navigate("IPhone13149")}
      />
      <Text style={[styles.text3, styles.textClr]}>돌아가기</Text>
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseRight={0}
        darkModeFalseBottom={0}
        darkModeFalseLeft={0}
      />
      <Image
        style={styles.iphone131415Inner}
        contentFit="cover"
        source={require("../assets/rectangle-22.png")}
      />
      <Text style={[styles.text4, styles.mg2Typo]}>약 이름을 입력하세요</Text>
      <Image
        style={[styles.searchIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.iphone131415ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-221.png")}
      />
      <Image
        style={[styles.iphone131415Child1, styles.iphone131415ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-221.png")}
      />
      <Image
        style={[styles.iphone131415Child2, styles.iphone131415ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-221.png")}
      />
      <Image
        style={[styles.iphone131415Child3, styles.iphone131415ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-221.png")}
      />
      <Image
        style={[styles.icon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-115.png")}
      />
      <Image
        style={[styles.icon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-115.png")}
      />
      <Image
        style={[styles.icon3, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-115.png")}
      />
      <Image
        style={[styles.icon4, styles.mg2Position]}
        contentFit="cover"
        source={require("../assets/-115.png")}
      />
      <Text style={[styles.mg, styles.mgTypo]}>아마릴 정 2mg</Text>
      <Text style={[styles.mg1, styles.mgTypo]}>{`다이아벡스정 50mg
`}</Text>
      <Text style={[styles.mg2, styles.mg2Position]}>리피논정 20mg</Text>
      <Text style={[styles.mg3, styles.mgTypo]}>란스톤 캡슐 15mg</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    height: 23,
    position: "absolute",
  },
  textClr: {
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    position: "absolute",
  },
  iphone131415ShadowBox: {
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iconLayout1: {
    height: 42,
    position: "absolute",
  },
  mg2Typo: {
    lineHeight: 42,
    letterSpacing: -0.6,
    width: 268,
    textAlign: "left",
    fontSize: FontSize.size_11xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  iphone131415ChildLayout: {
    height: 78,
    width: 329,
    left: 32,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  iconLayout: {
    width: 45,
    left: 46,
  },
  mg2Position: {
    top: 608,
    height: 42,
    position: "absolute",
  },
  mgTypo: {
    left: 91,
    lineHeight: 42,
    letterSpacing: -0.6,
    height: 42,
    textAlign: "left",
    fontSize: FontSize.size_11xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    top: 45,
    left: 319,
    width: 21,
  },
  settingsIcon: {
    left: 286,
    width: 30,
    height: 25,
    top: 46,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    left: 0,
    fontSize: FontSize.calloutBold_size,
    fontFamily: FontFamily.interRegular,
    width: 262,
    height: 33,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    top: 46,
    position: "absolute",
  },
  text1: {
    top: 75,
    left: 77,
    fontSize: FontSize.size_16xl,
    letterSpacing: -0.7,
    lineHeight: 49,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
  },
  iphone131415Child: {
    top: 79,
    left: -9,
    shadowRadius: 20,
    elevation: 20,
    borderTopWidth: 1,
    width: 391,
    height: 1,
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
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  iphone131415Item: {
    top: 763,
    left: 116,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorRoyalblue_200,
    borderWidth: 1,
    width: 165,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    elevation: 4,
    shadowRadius: 4,
    height: 42,
  },
  text3: {
    top: 774,
    left: 114,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.kodchasanRegular,
    width: 162,
    height: 31,
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
  },
  iphone131415Inner: {
    top: 143,
    left: 26,
    width: 354,
    height: 73,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  text4: {
    top: 156,
    left: 47,
    height: 27,
    width: 268,
    position: "absolute",
  },
  searchIcon: {
    top: 171,
    left: 334,
    width: 16,
  },
  rectangleIcon: {
    top: 236,
  },
  iphone131415Child1: {
    top: 354,
  },
  iphone131415Child2: {
    top: 472,
  },
  iphone131415Child3: {
    top: 590,
  },
  icon1: {
    top: 254,
    height: 42,
    position: "absolute",
  },
  icon2: {
    top: 372,
    height: 42,
    position: "absolute",
  },
  icon3: {
    top: 490,
    height: 42,
    position: "absolute",
  },
  icon4: {
    width: 45,
    left: 46,
  },
  mg: {
    width: 191,
    top: 372,
  },
  mg1: {
    width: 256,
    top: 254,
  },
  mg2: {
    left: 93,
    width: 268,
    lineHeight: 42,
    letterSpacing: -0.6,
    textAlign: "left",
    fontSize: FontSize.size_11xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  mg3: {
    top: 490,
    width: 268,
  },
  iphone131415: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    elevation: 4,
    shadowRadius: 4,
  },
});

export default IPhone131413;
