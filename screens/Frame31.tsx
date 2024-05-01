import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Frame31 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={[styles.statusbar, styles.iconPosition2]}>
        <Image
          style={[styles.notchIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
        <View style={[styles.rightSide, styles.rightSidePosition]}>
          <Image
            style={[styles.statusbarBatteryIcon, styles.rightSidePosition]}
            contentFit="cover"
            source={require("../assets/-statusbarbattery.png")}
          />
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.iconMobileSignal, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/icon--mobile-signal.png")}
          />
        </View>
      </View>
      <Text style={styles.text}>늘편안</Text>
      <Image
        style={[styles.icon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/--12.png")}
      />
      <View style={[styles.homeindicator, styles.childPosition]}>
        <View style={[styles.homeIndicator, styles.iconPosition1]} />
      </View>
      <View style={[styles.child, styles.childPosition]} />
      <View style={[styles.rectangleParent, styles.iconPosition2]}>
        <Pressable
          style={[styles.frameChild, styles.wrapperPosition]}
          onPress={() => navigation.navigate("Frame5")}
        />
        <Text style={[styles.text1, styles.textLayout]}>
          <Text style={styles.text2}>편안이에게 물어보세요  </Text>
          <Text style={styles.text3}>
            건강 및 의료 관련 질문에 모두 답변해 드립니다
          </Text>
        </Text>
        <Pressable
          style={[styles.frameItem, styles.frameBorder]}
          onPress={() => navigation.navigate("Frame11")}
        />
        <Image
          style={[styles.icon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/-17.png")}
        />
        <Text style={[styles.text4, styles.textLayout]}>
          <Text style={styles.text2}>약 추가하기  </Text>
          <Text style={styles.text3}>
            복용 중인 약을 추가하고, 약에  대한 정보를 확인해보세요
          </Text>
        </Text>
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/--2.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.wrapperPosition]}
          onPress={() => navigation.navigate("Frame6")}
        >
          <Image
            style={[styles.icon3, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-14.png")}
          />
        </Pressable>
        <Text style={[styles.text7, styles.textLayout]}>
          <Text style={styles.text2}>약 복용시간 알림이  </Text>
          <Text style={styles.text3}>
            잊어먹지 않도록 복용 시간에  알려드릴게요
          </Text>
        </Text>
        <Image
          style={[styles.icon4, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/-18.png")}
        />
        <View style={[styles.frameInner, styles.frameBorder]} />
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Frame17")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/-19.png")}
          />
        </Pressable>
        <View style={[styles.rectangleView, styles.frameBorder]} />
        <Text style={[styles.text10, styles.textLayout]}>
          <Text style={styles.text2}>가족 건강 모니터랑하기  </Text>
          <Text style={styles.text3}>
            가족의 자세한 건강 정보를 확인해보세요
          </Text>
        </Text>
        <Image
          style={styles.icon6}
          contentFit="cover"
          source={require("../assets/-22.png")}
        />
        <Pressable
          style={styles.pressable1}
          onPress={() => navigation.navigate("Frame12")}
        >
          <Text style={[styles.text13, styles.textLayout]}>
            <Text style={styles.text2}>건강정보 추가하기  </Text>
            <Text style={styles.text3}>
              새로운 건강 정보를 추가하시고 자세한 설명을 확인해보세요
            </Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition2: {
    left: 0,
    width: 390,
    position: "absolute",
  },
  iconPosition1: {
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  childPosition: {
    height: 34,
    left: 0,
    position: "absolute",
  },
  wrapperPosition: {
    height: 157,
    width: 340,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  textLayout: {
    height: 100,
    textAlign: "left",
    lineHeight: 21,
    letterSpacing: 0,
  },
  frameBorder: {
    borderColor: Color.colorRoyalblue_100,
    height: 157,
    width: 340,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    top: "50%",
    marginLeft: -168,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iconPosition: {
    width: 95,
    left: 254,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  notchIcon: {
    marginLeft: -86,
    width: 172,
    height: 32,
    top: 0,
  },
  time: {
    fontSize: FontSize.calloutBold_size,
    fontWeight: "600",
    fontFamily: FontFamily.calloutBold,
    textAlign: "center",
    height: 20,
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    width: 54,
    left: 0,
    top: 1,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    top: 14,
    marginLeft: -168,
    height: 21,
    width: 54,
  },
  statusbarBatteryIcon: {
    marginLeft: 11.3,
    width: 27,
    top: 0,
  },
  wifiIcon: {
    width: 17,
    height: 12,
  },
  iconMobileSignal: {
    marginLeft: -38.7,
    width: 18,
    height: 12,
    top: 1,
  },
  rightSide: {
    marginLeft: 91,
    top: 19,
    width: 77,
  },
  statusbar: {
    height: 49,
    overflow: "hidden",
    width: 390,
    top: 1,
  },
  text: {
    top: 61,
    left: 27,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  icon: {
    top: 745,
    height: 65,
    width: 390,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
  },
  homeindicator: {
    right: 0,
    bottom: 0,
  },
  child: {
    top: 810,
    width: 390,
    backgroundColor: Color.colorWhite,
    height: 34,
  },
  frameChild: {
    marginTop: -305.5,
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    width: 340,
    borderRadius: Border.br_11xl,
    top: "50%",
    marginLeft: -168,
    backgroundColor: Color.colorWhite,
  },
  text2: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
  },
  text3: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.notoSansKRRegular,
    color: Color.colorDarkslategray_200,
  },
  text1: {
    top: 49,
    width: 202,
    height: 100,
    left: 54,
    position: "absolute",
  },
  frameItem: {
    marginTop: -93.5,
  },
  icon1: {
    top: 260,
    height: 95,
  },
  text4: {
    top: 262,
    width: 202,
    height: 100,
    left: 54,
    position: "absolute",
  },
  icon2: {
    top: 15,
    left: 229,
    width: 150,
    height: 150,
    position: "absolute",
  },
  icon3: {
    marginTop: 118.5,
    borderRadius: Border.br_11xl,
    height: "100%",
    marginLeft: -168,
  },
  wrapper: {
    width: 340,
    top: "50%",
  },
  text7: {
    top: 485,
    width: 202,
    height: 100,
    left: 54,
    position: "absolute",
  },
  icon4: {
    top: 471,
    height: 111,
  },
  frameInner: {
    marginTop: 542.5,
  },
  pressable: {
    left: 270,
    top: 905,
    width: 64,
    height: 61,
    position: "absolute",
  },
  rectangleView: {
    marginTop: 330.5,
  },
  text10: {
    top: 904,
    width: 202,
    height: 100,
    left: 54,
    position: "absolute",
  },
  icon6: {
    top: 691,
    left: 259,
    width: 79,
    height: 76,
    position: "absolute",
  },
  text13: {
    width: 185,
  },
  pressable1: {
    top: 685,
    left: 54,
    position: "absolute",
  },
  rectangleParent: {
    top: 92,
    height: 653,
    width: 390,
  },
  view: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    height: 844,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame31;
