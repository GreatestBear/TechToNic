import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DarkModeFalse from "../components/DarkModeFalse";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const IPhone131412 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone131411}>
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
      <View style={styles.iphone131411Child} />
      <Text style={[styles.text, styles.textTypo1]}>약 봉투 인식하기</Text>
      <Text style={[styles.text1, styles.textTypo1]}>인식하는 방법</Text>
      <View style={styles.buttonPrimary}>
        <Text style={styles.text2}>사진 업로드</Text>
      </View>
      <Pressable
        style={[styles.iphone131411Item, styles.iphone131411ShadowBox]}
        onPress={() => navigation.navigate("IPhone13149")}
      />
      <Text style={styles.text3}>돌아가기</Text>
      <View style={[styles.iphone131411Inner, styles.iphone131411ShadowBox]} />
      <Text style={[styles.text4, styles.textLayout]}>입력완료</Text>
      <Pressable
        style={styles.text4Position}
        onPress={() => navigation.navigate("IPhone131414")}
      >
        <Text style={styles.textLayout}>입력완료</Text>
      </Pressable>
      <Text style={styles.text3}>돌아가기</Text>
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/1-2.png")}
      />
      <Text
        style={[styles.text7, styles.textTypo]}
      >{`사진 업로드를 이용하여 사진을 올린다
약 확인하기를 누른다
인식된 약을 눌러 추가 정보를 입력한다`}</Text>
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseRight={0}
        darkModeFalseBottom={0}
        darkModeFalseLeft={0}
      />
      <Text style={[styles.text8, styles.textTypo]}>
        늘편안: 부모님의 든든한 건강 동반자
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    textAlign: "center",
    lineHeight: 49,
    letterSpacing: -0.7,
    fontSize: FontSize.size_16xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  iphone131411ShadowBox: {
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
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  textTypo: {
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  icon: {
    left: 319,
    width: 21,
    height: 23,
    top: 45,
    position: "absolute",
  },
  settingsIcon: {
    top: 46,
    left: 286,
    width: 30,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  iphone131411Child: {
    top: 78,
    left: -1,
    shadowRadius: 20,
    elevation: 20,
    borderTopWidth: 1,
    width: 391,
    height: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  text: {
    top: 94,
    left: 69,
  },
  text1: {
    top: 542,
    left: 95,
  },
  text2: {
    fontSize: FontSize.size_11xl,
    lineHeight: 45,
    color: Color.colorWhite,
    display: "flex",
    width: 148,
    textAlign: "left",
    alignItems: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 23,
  },
  buttonPrimary: {
    top: 158,
    left: 23,
    borderRadius: Border.br_11xl,
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
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  iphone131411Item: {
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
    lineHeight: 21,
    letterSpacing: 0,
    left: 15,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  iphone131411Inner: {
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
  icon1: {
    top: 249,
    left: 47,
    width: 296,
    height: 222,
    position: "absolute",
  },
  text7: {
    top: 605,
    left: 18,
    fontSize: FontSize.size_xl,
    letterSpacing: -0.4,
    lineHeight: 28,
    width: 353,
    height: 83,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.labelColorLightPrimary,
  },
  text8: {
    left: 0,
    fontSize: FontSize.calloutBold_size,
    width: 262,
    height: 33,
    lineHeight: 21,
    letterSpacing: 0,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    top: 45,
  },
  iphone131411: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone131412;
