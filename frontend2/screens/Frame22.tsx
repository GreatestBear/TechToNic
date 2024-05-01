import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Frame22 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={styles.statusbar}>
        <Image
          style={[styles.notchIcon, styles.notchIconPosition]}
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
            style={styles.iconMobileSignal}
            contentFit="cover"
            source={require("../assets/icon--mobile-signal.png")}
          />
        </View>
      </View>
      <Text style={[styles.text, styles.textLayout1]}>
        <Text style={styles.text1}>{`3 / `}</Text>
        <Text style={styles.text2}>4</Text>
      </Text>
      <Text style={[styles.text3, styles.textLayout1]}>
        현재 복용하고 계신 약을 알려주세요.
      </Text>
      <View style={styles.homeindicator}>
        <View style={[styles.homeIndicator, styles.notchIconPosition]} />
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout2]}
        onPress={() => navigation.navigate("Frame27")}
      >
        <View style={[styles.groupChild, styles.groupChildBorder1]} />
        <Text style={[styles.text4, styles.textLayout1]}>다음</Text>
      </Pressable>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleGroup, styles.groupChildLayout1]}>
          <View style={[styles.groupItem, styles.groupChildLayout1]} />
          <Text style={[styles.text5, styles.textTypo]}>
            갑산성기능저하증약
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupChildLayout1]}>
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text5, styles.textTypo]}>
            갑산성기능항진증약
          </Text>
        </View>
        <View style={[styles.groupView, styles.groupChildLayout1]}>
          <View style={[styles.groupInner, styles.groupChildBorder]} />
          <Text style={[styles.text5, styles.textTypo]}>
            아미오다론(심장약)
          </Text>
        </View>
        <View style={[styles.rectangleParent1, styles.groupChildLayout]}>
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Text style={[styles.text8, styles.textTypo]}>고지혈증약</Text>
        </View>
        <View style={[styles.rectangleParent2, styles.groupChildLayout]}>
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Text style={[styles.text8, styles.textTypo]}>골다공증약</Text>
        </View>
        <View
          style={[styles.rectangleParent3, styles.rectangleParentPosition5]}
        >
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Text style={[styles.text8, styles.textTypo]}>면역억제제</Text>
        </View>
        <View
          style={[styles.rectangleParent4, styles.rectangleParentPosition5]}
        >
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Text style={[styles.text8, styles.textTypo]}>신경안정제</Text>
        </View>
        <View
          style={[styles.rectangleParent5, styles.rectangleParentPosition4]}
        >
          <View style={[styles.groupChild5, styles.groupChildLayout]} />
          <Text style={[styles.text12, styles.textLayout]}>고혈압약</Text>
        </View>
        <View style={[styles.rectangleParent6, styles.groupChildLayout]}>
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Text style={[styles.text12, styles.textLayout]}>마그네슘</Text>
        </View>
        <View
          style={[styles.rectangleParent7, styles.rectangleParentPosition5]}
        >
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Text style={[styles.text12, styles.textLayout]}>조울증약</Text>
        </View>
        <View style={[styles.rectangleParent8, styles.text15Layout]}>
          <View style={[styles.groupChild8, styles.groupChildBorder]} />
          <Text style={[styles.text15, styles.text15Layout]}>
            트라마돌 함유 진통제
          </Text>
        </View>
        <View
          style={[styles.rectangleParent9, styles.rectangleParentPosition4]}
        >
          <View style={[styles.groupChild9, styles.groupChildLayout]} />
          <Text style={[styles.text16, styles.textTypo]}>당뇨약</Text>
        </View>
        <View style={[styles.rectangleParent10, styles.groupChildLayout]}>
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Text style={[styles.text16, styles.textTypo]}>치매약</Text>
        </View>
        <View style={[styles.rectangleParent11, styles.groupChildLayout]}>
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Text style={[styles.text16, styles.textTypo]}>이뇨제</Text>
        </View>
        <View style={[styles.rectangleParent12, styles.groupChildLayout]}>
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Text style={[styles.text16, styles.textTypo]}>와파린</Text>
        </View>
        <View style={[styles.rectangleParent13, styles.groupChildLayout]}>
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Text style={[styles.text20, styles.textLayout]}>우울증약</Text>
        </View>
        <View style={[styles.rectangleParent14, styles.groupChild14Layout]}>
          <View style={[styles.groupChild14, styles.groupChild14Layout]} />
          <Text style={[styles.text21, styles.textTypo]}>
            덱스트로메토르판(기침약)
          </Text>
        </View>
        <View style={[styles.rectangleParent15, styles.rectangleParentLayout1]}>
          <View style={[styles.groupChild15, styles.rectangleParentLayout1]} />
          <Text style={[styles.text22, styles.textPosition]}>
            디곡신(심장약)
          </Text>
        </View>
        <View style={[styles.rectangleParent16, styles.rectangleParentLayout1]}>
          <View style={[styles.groupChild15, styles.rectangleParentLayout1]} />
          <Text style={[styles.text22, styles.textPosition]}>
            발기부전치료제
          </Text>
        </View>
        <View style={[styles.rectangleParent17, styles.groupChild17Layout]}>
          <View style={[styles.groupChild17, styles.groupChild17Layout]} />
          <Text style={[styles.text24, styles.textTypo]}>테오필린(기침약)</Text>
        </View>
        <View style={[styles.rectangleParent18, styles.rectangleParentLayout1]}>
          <View style={[styles.groupChild15, styles.rectangleParentLayout1]} />
          <Text style={[styles.text22, styles.textPosition]}>
            위산분비억제제
          </Text>
        </View>
        <View style={[styles.rectangleParent19, styles.rectangleParentLayout1]}>
          <View style={[styles.groupChild15, styles.rectangleParentLayout1]} />
          <Text style={[styles.text22, styles.textPosition]}>
            전립선비대증약
          </Text>
        </View>
        <View
          style={[styles.rectangleParent20, styles.rectangleParentPosition3]}
        >
          <View style={[styles.groupChild20, styles.groupChildBorder]} />
          <Text style={[styles.nsaids, styles.textTypo]}>
            NSAIDS(소염진통제)
          </Text>
        </View>
        <View
          style={[styles.rectangleParent21, styles.rectangleParentPosition2]}
        >
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Text style={[styles.text8, styles.textTypo]}>페니실라민</Text>
        </View>
        <View
          style={[styles.rectangleParent22, styles.rectangleParentPosition2]}
        >
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Text style={[styles.text12, styles.textLayout]}>SAM-e</Text>
        </View>
        <View
          style={[styles.rectangleParent23, styles.rectangleParentPosition2]}
        >
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Text style={[styles.text16, styles.textTypo]}>항생제</Text>
        </View>
        <View
          style={[styles.rectangleParent24, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Text style={[styles.text12, styles.textLayout]}>항경련제</Text>
        </View>
        <View
          style={[styles.rectangleParent25, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Text style={[styles.text12, styles.textLayout]}>항진균제</Text>
        </View>
        <View
          style={[styles.rectangleParent26, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Text style={[styles.text12, styles.textLayout]}>항혈전제</Text>
        </View>
        <View style={[styles.rectangleParent27, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild27, styles.rectangleParentLayout]} />
          <Text style={[styles.text32, styles.textPosition]}>철분</Text>
        </View>
        <View style={[styles.rectangleParent28, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild27, styles.rectangleParentLayout]} />
          <Text style={[styles.text32, styles.textPosition]}>칼슘</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent29, styles.groupChild29Layout]}>
        <View style={[styles.groupChild29, styles.groupChild29Layout]} />
        <Text style={[styles.text4, styles.textLayout1]}>이전</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notchIconPosition: {
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
  textLayout1: {
    height: 30,
    textAlign: "left",
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  groupChildLayout2: {
    height: 63,
    width: 174,
    position: "absolute",
  },
  groupChildBorder1: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  groupChildLayout1: {
    height: 46,
    position: "absolute",
  },
  textTypo: {
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
  },
  groupChildBorder: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    top: 0,
  },
  groupChildLayout: {
    width: 103,
    height: 46,
    position: "absolute",
  },
  rectangleParentPosition5: {
    top: 254,
    width: 103,
    height: 46,
    position: "absolute",
  },
  rectangleParentPosition4: {
    top: 74,
    width: 103,
    height: 46,
    position: "absolute",
  },
  textLayout: {
    width: 62,
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  text15Layout: {
    width: 203,
    position: "absolute",
  },
  groupChild14Layout: {
    width: 218,
    height: 46,
    position: "absolute",
  },
  rectangleParentLayout1: {
    width: 121,
    height: 46,
    position: "absolute",
  },
  textPosition: {
    left: 12,
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  groupChild17Layout: {
    width: 144,
    height: 46,
    position: "absolute",
  },
  rectangleParentPosition3: {
    left: 175,
    height: 46,
  },
  rectangleParentPosition2: {
    top: 554,
    width: 103,
    height: 46,
    position: "absolute",
  },
  rectangleParentPosition1: {
    top: 614,
    width: 103,
    height: 46,
    position: "absolute",
  },
  rectangleParentLayout: {
    width: 60,
    height: 46,
    position: "absolute",
  },
  groupChild29Layout: {
    width: 173,
    height: 63,
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -86,
    height: 32,
    width: 172,
    top: 0,
  },
  time: {
    fontSize: FontSize.calloutBold_size,
    fontWeight: "900",
    fontFamily: FontFamily.notoSansKRBlack,
    height: 20,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    color: Color.labelColorLightPrimary,
    top: 1,
    width: 54,
    left: 0,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    marginLeft: -168,
    top: 14,
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
    left: "50%",
    position: "absolute",
  },
  rightSide: {
    marginLeft: 91,
    top: 19,
    width: 77,
  },
  statusbar: {
    width: 390,
    height: 62,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    color: Color.labelColorLightPrimary,
  },
  text2: {
    color: Color.colorDarkgray_100,
  },
  text: {
    top: 62,
    fontSize: FontSize.size_11xl,
    width: 352,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    height: 30,
    textAlign: "left",
    left: 19,
  },
  text3: {
    top: 115,
    fontSize: FontSize.size_xl,
    width: 352,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    height: 30,
    textAlign: "left",
    left: 19,
    color: Color.labelColorLightPrimary,
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
    right: 2,
    bottom: 0,
    left: -2,
    height: 34,
    position: "absolute",
  },
  groupChild: {
    borderColor: Color.colorRoyalblue_100,
    backgroundColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    height: 63,
    width: 174,
    position: "absolute",
  },
  text4: {
    top: 17,
    left: 65,
    fontSize: FontSize.size_4xl,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorWhite,
    width: 43,
    height: 30,
    textAlign: "left",
  },
  rectangleParent: {
    top: 746,
    left: 207,
  },
  groupItem: {
    backgroundColor: "rgba(88, 134, 254, 0)",
    borderColor: "rgba(0, 0, 0, 0.32)",
    width: 160,
    height: 46,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  text5: {
    left: 18,
    width: 124,
    position: "absolute",
  },
  rectangleGroup: {
    width: 160,
    height: 46,
    left: 20,
    top: 14,
  },
  groupInner: {
    height: 46,
    position: "absolute",
    width: 160,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  rectangleContainer: {
    left: 190,
    width: 160,
    height: 46,
    top: 14,
  },
  groupView: {
    top: 374,
    width: 160,
    height: 46,
    left: 20,
  },
  groupChild1: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  text8: {
    left: 10,
    width: 83,
    position: "absolute",
  },
  rectangleParent1: {
    top: 73,
    left: 130,
  },
  rectangleParent2: {
    top: 134,
    left: 20,
  },
  rectangleParent3: {
    left: 20,
  },
  rectangleParent4: {
    left: 130,
  },
  groupChild5: {
    backgroundColor: "rgba(88, 134, 254, 0.26)",
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    top: 0,
    left: 0,
  },
  text12: {
    left: 20,
  },
  rectangleParent5: {
    left: 20,
  },
  rectangleParent6: {
    top: 134,
    left: 130,
  },
  rectangleParent7: {
    left: 240,
  },
  groupChild8: {
    left: 11,
    width: 186,
    height: 46,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text15: {
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    left: 0,
  },
  rectangleParent8: {
    left: 175,
    height: 46,
    top: 374,
  },
  groupChild9: {
    backgroundColor: "rgba(27, 82, 223, 0.2)",
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    top: 0,
    left: 0,
  },
  text16: {
    left: 24,
    width: 54,
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    position: "absolute",
  },
  rectangleParent9: {
    left: 240,
  },
  rectangleParent10: {
    left: 260,
    top: 434,
  },
  rectangleParent11: {
    left: 150,
    top: 434,
  },
  rectangleParent12: {
    top: 314,
    left: 20,
  },
  text20: {
    left: 25,
  },
  rectangleParent13: {
    top: 314,
    left: 130,
  },
  groupChild14: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  text21: {
    left: 27,
    width: 163,
    position: "absolute",
  },
  rectangleParent14: {
    top: 194,
    left: 20,
  },
  groupChild15: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  text22: {
    width: 98,
  },
  rectangleParent15: {
    left: 240,
    top: 134,
  },
  rectangleParent16: {
    left: 251,
    top: 194,
  },
  groupChild17: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  text24: {
    left: 14,
    width: 116,
    position: "absolute",
  },
  rectangleParent17: {
    top: 494,
    left: 20,
  },
  rectangleParent18: {
    top: 314,
    left: 240,
  },
  rectangleParent19: {
    top: 434,
    left: 20,
  },
  groupChild20: {
    height: 46,
    position: "absolute",
    width: 172,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  nsaids: {
    width: 133,
    left: 19,
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    position: "absolute",
  },
  rectangleParent20: {
    top: 494,
    width: 172,
    position: "absolute",
  },
  rectangleParent21: {
    left: 240,
  },
  rectangleParent22: {
    left: 130,
  },
  rectangleParent23: {
    left: 20,
  },
  rectangleParent24: {
    left: 20,
  },
  rectangleParent25: {
    left: 130,
  },
  rectangleParent26: {
    left: 240,
  },
  groupChild27: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  text32: {
    width: 36,
  },
  rectangleParent27: {
    top: 674,
    width: 60,
    left: 20,
  },
  rectangleParent28: {
    left: 90,
    top: 674,
    width: 60,
  },
  groupParent: {
    top: 146,
    width: 388,
    height: 588,
    left: 0,
    position: "absolute",
  },
  groupChild29: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    borderColor: Color.colorRoyalblue_100,
    backgroundColor: Color.colorRoyalblue_100,
  },
  rectangleParent29: {
    top: 747,
    left: 15,
  },
  view: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame22;
