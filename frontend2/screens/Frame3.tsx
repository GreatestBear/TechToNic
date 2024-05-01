import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Frame3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.pressable}
      onPress={() => navigation.navigate("Frame1")}
    >
      <View style={[styles.statusbar, styles.statusbarPosition]}>
        <Image
          style={[styles.notchIcon, styles.viewLayout]}
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
      <Text style={[styles.text, styles.textLayout2]}>
        <Text style={styles.text1}>{`3 / `}</Text>
        <Text style={styles.text2}>4</Text>
      </Text>
      <View style={[styles.child, styles.childLayout]} />
      <Text style={[styles.text3, styles.textLayout2]}>{`현재 복용하고 계신 약을
알려주세요.`}</Text>
      <View style={[styles.rectangleParent, styles.groupLayout1]}>
        <View style={styles.groupChild} />
        <Text style={[styles.text4, styles.textTypo]}>갑산성기능저하증약</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout1]}>
        <View style={[styles.groupItem, styles.groupChildBorder1]} />
        <Text style={[styles.text5, styles.textTypo]}>갑산성기능항진증약</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout1]}>
        <View style={[styles.groupItem, styles.groupChildBorder1]} />
        <Text style={[styles.text5, styles.textTypo]}>아미오다론(심장약)</Text>
      </View>
      <View style={[styles.groupView, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.groupChildBorder1]} />
        <Text style={[styles.nsaids, styles.textTypo]}>NSAIDS(소염진통제)</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentLayout2]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout2]} />
        <Text style={[styles.text7, styles.textTypo]}>고지혈증약</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentPosition1]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout2]} />
        <Text style={[styles.text7, styles.textTypo]}>골다공증약</Text>
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentPosition]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout2]} />
        <Text style={[styles.text7, styles.textTypo]}>페니실라민</Text>
      </View>
      <View style={[styles.rectangleParent4, styles.rectangleParentLayout2]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout2]} />
        <Text style={[styles.text7, styles.textTypo]}>면역억제제</Text>
      </View>
      <View style={[styles.rectangleParent5, styles.rectangleParentLayout2]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout2]} />
        <Text style={[styles.text7, styles.textTypo]}>신경안정제</Text>
      </View>
      <View style={[styles.rectangleParent6, styles.rectangleParentPosition1]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout2]} />
        <Text style={[styles.text12, styles.textLayout]}>고혈압약</Text>
      </View>
      <View style={[styles.rectangleParent7, styles.rectangleParentLayout2]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout2]} />
        <Text style={[styles.text12, styles.textLayout]}>마그네슘</Text>
      </View>
      <View style={[styles.rectangleParent8, styles.rectangleParentLayout2]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout2]} />
        <Text style={[styles.text12, styles.textLayout]}>조울증약</Text>
      </View>
      <View style={[styles.rectangleParent9, styles.rectangleParentLayout2]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout2]} />
        <Text style={[styles.text12, styles.textLayout]}>항경련제</Text>
      </View>
      <View style={[styles.rectangleParent10, styles.rectangleParentLayout2]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout2]} />
        <Text style={[styles.text12, styles.textLayout]}>SAM-e</Text>
      </View>
      <View style={[styles.rectangleParent11, styles.rectangleParentLayout2]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout2]} />
        <Text style={[styles.text12, styles.textLayout]}>항진균제</Text>
      </View>
      <View style={[styles.rectangleParent12, styles.rectangleParentLayout2]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout2]} />
        <Text style={[styles.text12, styles.textLayout]}>항혈전제</Text>
      </View>
      <View style={[styles.rectangleParent13, styles.text18Layout]}>
        <View style={[styles.groupChild13, styles.groupChildBorder1]} />
        <Text style={[styles.text18, styles.text18Layout]}>
          트라마돌 함유 진통제
        </Text>
      </View>
      <View style={[styles.rectangleParent14, styles.rectangleParentLayout2]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout2]} />
        <Text style={[styles.text19, styles.textTypo]}>당뇨약</Text>
      </View>
      <View style={[styles.rectangleParent15, styles.rectangleParentLayout2]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout2]} />
        <Text style={[styles.text19, styles.textTypo]}>치매약</Text>
      </View>
      <View style={[styles.rectangleParent16, styles.rectangleParentLayout2]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout2]} />
        <Text style={[styles.text19, styles.textTypo]}>이뇨제</Text>
      </View>
      <View style={[styles.rectangleParent17, styles.rectangleParentPosition]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout2]} />
        <Text style={[styles.text19, styles.textTypo]}>항생제</Text>
      </View>
      <View style={[styles.rectangleParent18, styles.rectangleParentLayout2]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout2]} />
        <Text style={[styles.text19, styles.textTypo]}>와파린</Text>
      </View>
      <View style={[styles.rectangleParent19, styles.rectangleParentLayout2]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout2]} />
        <Text style={[styles.text24, styles.textLayout]}>우울증약</Text>
      </View>
      <View style={[styles.rectangleParent20, styles.groupChild20Layout]}>
        <View style={[styles.groupChild20, styles.groupChild20Layout]} />
        <Text style={[styles.text25, styles.textTypo]}>
          덱스트로메토르판(기침약)
        </Text>
      </View>
      <View style={[styles.rectangleParent21, styles.groupChild21Layout]}>
        <View style={[styles.groupChild21, styles.groupChild21Layout]} />
        <Text
          style={[styles.text26, styles.textTypo]}
        >{`항히스타민제(수면유도제,알레르기약)
`}</Text>
      </View>
      <View style={[styles.rectangleParent22, styles.rectangleParentLayout1]}>
        <View style={[styles.groupChild22, styles.rectangleParentLayout1]} />
        <Text style={[styles.text27, styles.textTypo]}>디곡신(심장약)</Text>
      </View>
      <View style={[styles.rectangleParent23, styles.rectangleParentLayout1]}>
        <View style={[styles.groupChild22, styles.rectangleParentLayout1]} />
        <Text style={[styles.text27, styles.textTypo]}>발기부전치료제</Text>
      </View>
      <View style={[styles.rectangleParent24, styles.groupChild24Layout]}>
        <View style={[styles.groupChild24, styles.groupChild24Layout]} />
        <Text style={[styles.text29, styles.textTypo]}>테오필린(기침약)</Text>
      </View>
      <View style={[styles.rectangleParent25, styles.rectangleParentLayout1]}>
        <View style={[styles.groupChild22, styles.rectangleParentLayout1]} />
        <Text style={[styles.text27, styles.textTypo]}>위산분비억제제</Text>
      </View>
      <View style={[styles.rectangleParent26, styles.rectangleParentLayout1]}>
        <View style={[styles.groupChild22, styles.rectangleParentLayout1]} />
        <Text style={[styles.text27, styles.textTypo]}>전립선비대증약</Text>
      </View>
      <View style={[styles.rectangleParent27, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild27, styles.rectangleParentLayout]} />
        <Text style={[styles.text32, styles.textTypo]}>철분</Text>
      </View>
      <View style={[styles.rectangleParent28, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild27, styles.rectangleParentLayout]} />
        <Text style={[styles.text32, styles.textTypo]}>칼슘</Text>
      </View>
      <View style={styles.rectangleParent29}>
        <View style={[styles.groupChild29, styles.groupLayout]} />
        <View style={[styles.groupParent, styles.groupLayout]}>
          <View style={[styles.rectangleParent30, styles.groupChild30Layout]}>
            <View style={[styles.groupChild30, styles.groupChildBorder]} />
            <Text style={[styles.text34, styles.textLayout2]}>이전</Text>
          </View>
          <View style={[styles.rectangleParent31, styles.groupChild31Layout]}>
            <View style={[styles.groupChild31, styles.groupChild31Layout]} />
            <Text style={[styles.text34, styles.textLayout2]}>다음</Text>
          </View>
          <View style={[styles.homeindicator, styles.statusbarPosition]}>
            <View style={[styles.homeIndicator, styles.childLayout]} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  statusbarPosition: {
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  viewLayout: {
    width: 172,
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
  textLayout2: {
    height: 30,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  childLayout: {
    height: 5,
    position: "absolute",
  },
  groupLayout1: {
    width: 160,
    height: 46,
    position: "absolute",
  },
  textTypo: {
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
  },
  groupChildBorder1: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  rectangleParentLayout2: {
    width: 103,
    height: 46,
    position: "absolute",
  },
  rectangleParentPosition1: {
    top: 329,
    width: 103,
    height: 46,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 869,
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
  text18Layout: {
    width: 203,
    position: "absolute",
  },
  groupChild20Layout: {
    width: 218,
    height: 46,
    position: "absolute",
  },
  groupChild21Layout: {
    width: 246,
    height: 46,
    position: "absolute",
  },
  rectangleParentLayout1: {
    width: 121,
    height: 46,
    position: "absolute",
  },
  groupChild24Layout: {
    width: 144,
    height: 46,
    position: "absolute",
  },
  rectangleParentLayout: {
    width: 60,
    height: 46,
    position: "absolute",
  },
  groupLayout: {
    height: 98,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupChild30Layout: {
    height: 63,
    width: 173,
    top: 0,
    position: "absolute",
  },
  groupChildBorder: {
    borderColor: Color.colorWhite,
    backgroundColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
  },
  groupChild31Layout: {
    width: 174,
    height: 63,
    top: 0,
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -86,
    height: 32,
    left: "50%",
    top: 0,
  },
  time: {
    fontSize: FontSize.calloutBold_size,
    fontWeight: "900",
    fontFamily: FontFamily.notoSansKRBlack,
    height: 20,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
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
    height: 62,
    width: 390,
    top: 0,
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
    lineHeight: 21,
  },
  child: {
    top: 157,
    left: 258,
    backgroundColor: Color.colorGainsboro_100,
    width: 9,
  },
  text3: {
    top: 114,
    fontSize: FontSize.size_6xl,
    lineHeight: 30,
    left: 21,
    width: 352,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    height: 30,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  groupChild: {
    backgroundColor: "rgba(88, 134, 254, 0.11)",
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    height: 46,
    width: 160,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text4: {
    color: Color.colorRoyalblue_100,
    width: 124,
    left: 18,
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    position: "absolute",
  },
  rectangleParent: {
    top: 209,
    height: 46,
    left: 21,
  },
  groupItem: {
    height: 46,
    width: 160,
    position: "absolute",
    left: 0,
  },
  text5: {
    width: 124,
    left: 18,
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    position: "absolute",
    color: Color.labelColorLightPrimary,
  },
  rectangleGroup: {
    top: 269,
    height: 46,
    left: 21,
  },
  rectangleContainer: {
    left: 129,
    top: 569,
    height: 46,
  },
  rectangleView: {
    height: 46,
    width: 172,
    position: "absolute",
    left: 0,
  },
  nsaids: {
    width: 133,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    height: 22,
    color: Color.labelColorLightPrimary,
    left: 19,
    position: "absolute",
  },
  groupView: {
    top: 1050,
    height: 46,
    left: 19,
  },
  groupChild1: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    top: 0,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  text7: {
    left: 10,
    width: 83,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    height: 22,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  rectangleParent1: {
    left: 185,
    top: 269,
  },
  rectangleParent2: {
    left: 130,
  },
  rectangleParent3: {
    left: 21,
  },
  rectangleParent4: {
    top: 509,
    left: 21,
  },
  rectangleParent5: {
    top: 569,
    left: 21,
  },
  text12: {
    left: 20,
  },
  rectangleParent6: {
    left: 21,
  },
  rectangleParent7: {
    left: 146,
    top: 449,
  },
  rectangleParent8: {
    left: 255,
    top: 690,
  },
  rectangleParent9: {
    top: 870,
    left: 129,
  },
  rectangleParent10: {
    left: 196,
    top: 1050,
  },
  rectangleParent11: {
    top: 929,
    left: 22,
  },
  rectangleParent12: {
    top: 931,
    left: 129,
  },
  groupChild13: {
    left: 11,
    width: 186,
    height: 46,
    position: "absolute",
  },
  text18: {
    height: 22,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    color: Color.labelColorLightPrimary,
    left: 0,
  },
  rectangleParent13: {
    left: 157,
    top: 809,
    height: 46,
  },
  text19: {
    left: 24,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    height: 22,
    color: Color.labelColorLightPrimary,
    width: 54,
    position: "absolute",
  },
  rectangleParent14: {
    top: 328,
    left: 239,
  },
  rectangleParent15: {
    left: 86,
    top: 749,
  },
  rectangleParent16: {
    top: 689,
    left: 21,
  },
  rectangleParent17: {
    left: 237,
  },
  rectangleParent18: {
    top: 629,
    left: 21,
  },
  text24: {
    left: 25,
  },
  rectangleParent19: {
    top: 629,
    left: 129,
  },
  groupChild20: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    top: 0,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  text25: {
    left: 27,
    width: 163,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    height: 22,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  rectangleParent20: {
    top: 389,
    left: 21,
  },
  groupChild21: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    top: 0,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  text26: {
    left: 8,
    width: 238,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    height: 22,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  rectangleParent21: {
    top: 990,
    left: 22,
  },
  groupChild22: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    top: 0,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  text27: {
    width: 98,
    left: 12,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    height: 22,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  rectangleParent22: {
    top: 449,
    left: 21,
  },
  rectangleParent23: {
    top: 509,
    left: 129,
  },
  groupChild24: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    top: 0,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  text29: {
    left: 14,
    width: 116,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    height: 22,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  rectangleParent24: {
    top: 809,
    left: 22,
  },
  rectangleParent25: {
    top: 629,
    left: 239,
  },
  rectangleParent26: {
    top: 690,
    left: 129,
  },
  groupChild27: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    top: 0,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  text32: {
    width: 36,
    left: 12,
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_mini,
    top: 12,
    height: 22,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  rectangleParent27: {
    top: 749,
    left: 21,
  },
  rectangleParent28: {
    left: 191,
    top: 749,
  },
  groupChild29: {
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  groupChild30: {
    height: 63,
    width: 173,
    top: 0,
    position: "absolute",
  },
  text34: {
    top: 17,
    left: 65,
    fontSize: FontSize.size_4xl,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorWhite,
    width: 43,
    height: 30,
    textAlign: "left",
    lineHeight: 21,
  },
  rectangleParent30: {
    left: 12,
  },
  groupChild31: {
    borderColor: Color.colorWhite,
    backgroundColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    left: 0,
  },
  rectangleParent31: {
    left: 209,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    left: "50%",
  },
  homeindicator: {
    right: 0,
    bottom: 0,
    height: 34,
  },
  groupParent: {
    top: 1,
  },
  rectangleParent29: {
    top: 744,
    left: -4,
    height: 99,
    width: 390,
    position: "absolute",
  },
  pressable: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: Color.colorWhite,
  },
});

export default Frame3;
