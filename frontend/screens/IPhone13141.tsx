import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import DarkModeFalse from "../components/DarkModeFalse";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13141 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13143}>
      <Text style={styles.text}>{`앓고 있는 질환이 있나요?

건강 정보를 입력해주

세요!`}</Text>
      <StatusBar1 notchIconTop={1} notchIconLeft={2} />
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseRight={0}
        darkModeFalseBottom={0}
        darkModeFalseLeft={0}
      />
      <View style={[styles.iphone13143Child, styles.iphone13143ChildLayout2]} />
      <View style={[styles.iphone13143Item, styles.iphone13143ChildBorder1]} />
      <View style={[styles.iphone13143Inner, styles.iphone13143Layout]} />
      <Text style={[styles.text1, styles.textLayout5]}>고혈압</Text>
      <View style={[styles.rectangleView, styles.iphone13143ChildLayout2]} />
      <View
        style={[styles.iphone13143Child1, styles.iphone13143ChildLayout1]}
      />
      <View
        style={[styles.iphone13143Child2, styles.iphone13143ChildPosition]}
      />
      <Text style={[styles.text2, styles.textLayout4]}>신부전증</Text>
      <View
        style={[styles.iphone13143Child3, styles.iphone13143ChildLayout2]}
      />
      <View
        style={[styles.iphone13143Child4, styles.iphone13143ChildLayout2]}
      />
      <Text style={[styles.text3, styles.textLayout3]}>간질환</Text>
      <Text style={[styles.text4, styles.textLayout2]}>심장병</Text>
      <Text style={[styles.text4, styles.textLayout2]}>심장병</Text>
      <Text style={[styles.text6, styles.textLayout4]}>비만</Text>
      <Text style={[styles.text7, styles.textLayout3]}>신장질환</Text>
      <View style={[styles.iphone13143Child5, styles.iphone13143Layout]} />
      <Text style={[styles.text8, styles.textLayout1]}>우울증</Text>
      <View
        style={[styles.iphone13143Child6, styles.iphone13143ChildLayout1]}
      />
      <Text style={[styles.text9, styles.textLayout5]}>{`고지혈증
`}</Text>
      <View
        style={[styles.iphone13143Child7, styles.iphone13143ChildPosition]}
      />
      <View
        style={[styles.iphone13143Child8, styles.iphone13143ChildLayout1]}
      />
      <Text style={[styles.text10, styles.textLayout1]}>폐렴</Text>
      <View
        style={[styles.iphone13143Child9, styles.iphone13143ChildPosition]}
      />
      <Text style={[styles.text11, styles.textLayout2]}>암</Text>
      <Text style={[styles.text12, styles.iphone13143ChildPosition]}>당뇨</Text>
      <View
        style={[styles.iphone13143Child10, styles.iphone13143ChildLayout2]}
      />
      <Text style={[styles.text13, styles.textLayout5]}>없음</Text>
      <Text style={[styles.text14, styles.textTypo3]}>없음</Text>
      <View
        style={[styles.iphone13143Child11, styles.iphone13143ChildLayout]}
      />
      <View
        style={[styles.iphone13143Child12, styles.iphone13143ChildBorder1]}
      />
      <View
        style={[styles.iphone13143Child13, styles.iphone13143ChildBorder]}
      />
      <Text style={[styles.text15, styles.textTypo2]}>하루 한갑 반 이상</Text>
      <View
        style={[styles.iphone13143Child14, styles.iphone13143ChildBorder]}
      />
      <Text style={[styles.text16, styles.textTypo2]}>하루 반갑~한갑</Text>
      <View
        style={[styles.iphone13143Child15, styles.iphone13143ChildBorder1]}
      />
      <Text style={[styles.text17, styles.textTypo3]}>{`하루 반갑 `}</Text>
      <Text style={[styles.text18, styles.textTypo3]}>하루 반갑 미만</Text>
      <View
        style={[styles.iphone13143Child16, styles.iphone13143ChildLayout]}
      />
      <Text style={[styles.text19, styles.textTypo1]}>주 5회 이상</Text>
      <View
        style={[styles.iphone13143Child17, styles.iphone13143ChildLayout]}
      />
      <Text style={[styles.text20, styles.textTypo1]}>주 3~4회</Text>
      <Text style={[styles.text21, styles.textTypo]}>음주 주기</Text>
      <Text style={[styles.text22, styles.textTypo]}>
        앓고 있는 질병을 모두 체크해주세요
      </Text>
      <Text style={[styles.text23, styles.textTypo]}>흡연 주기</Text>
      <View style={styles.iphone13143Child18} />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("IPhone13143")}
      >
        <Text style={styles.text24}>다음으로</Text>
      </Pressable>
      <Text style={[styles.text25, styles.textTypo1]}>없음</Text>
      <Text style={[styles.text26, styles.textTypo1]}>주 1~2회</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13143ChildLayout2: {
    height: 33,
    width: 65,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
  },
  iphone13143ChildBorder1: {
    top: 381,
    height: 33,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iphone13143Layout: {
    left: 116,
    height: 33,
    width: 65,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  textLayout5: {
    height: 25,
    fontSize: FontSize.calloutBold_size,
    top: 549,
    width: 58,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
  },
  iphone13143ChildLayout1: {
    left: 292,
    height: 33,
    width: 65,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iphone13143ChildPosition: {
    left: 204,
    position: "absolute",
  },
  textLayout4: {
    top: 648,
    height: 25,
    width: 58,
    fontSize: FontSize.calloutBold_size,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  textLayout3: {
    top: 647,
    height: 25,
    width: 58,
    fontSize: FontSize.calloutBold_size,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  textLayout2: {
    top: 594,
    height: 25,
    width: 58,
    fontSize: FontSize.calloutBold_size,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  textLayout1: {
    top: 596,
    height: 25,
    width: 58,
    fontSize: FontSize.calloutBold_size,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo3: {
    top: 389,
    height: 25,
    fontSize: FontSize.calloutBold_size,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  iphone13143ChildLayout: {
    width: 86,
    height: 33,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    top: 268,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iphone13143ChildBorder: {
    top: 428,
    height: 33,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  textTypo2: {
    top: 434,
    height: 25,
    fontSize: FontSize.calloutBold_size,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo1: {
    top: 274,
    height: 25,
    fontSize: FontSize.calloutBold_size,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo: {
    height: 34,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  text: {
    top: 105,
    left: 2,
    fontSize: FontSize.size_17xl,
    width: 388,
    height: 87,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  iphone13143Child: {
    left: 29,
    top: 268,
    height: 33,
    position: "absolute",
  },
  iphone13143Item: {
    width: 65,
    top: 381,
    left: 29,
  },
  iphone13143Inner: {
    top: 543,
  },
  text1: {
    left: 120,
    position: "absolute",
  },
  rectangleView: {
    top: 590,
    left: 29,
    position: "absolute",
  },
  iphone13143Child1: {
    top: 643,
  },
  iphone13143Child2: {
    top: 643,
    height: 33,
    width: 65,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
  },
  text2: {
    left: 207,
  },
  iphone13143Child3: {
    top: 643,
    left: 120,
    position: "absolute",
  },
  iphone13143Child4: {
    top: 643,
    left: 29,
    position: "absolute",
  },
  text3: {
    left: 33,
  },
  text4: {
    left: 33,
  },
  text6: {
    left: 298,
  },
  text7: {
    left: 123,
  },
  iphone13143Child5: {
    top: 590,
  },
  text8: {
    left: 120,
  },
  iphone13143Child6: {
    top: 543,
  },
  text9: {
    left: 294,
    position: "absolute",
  },
  iphone13143Child7: {
    top: 543,
    height: 33,
    width: 65,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
  },
  iphone13143Child8: {
    top: 590,
  },
  text10: {
    left: 297,
  },
  iphone13143Child9: {
    top: 590,
    height: 33,
    width: 65,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
  },
  text11: {
    left: 208,
  },
  text12: {
    height: 25,
    fontSize: FontSize.calloutBold_size,
    top: 549,
    width: 58,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
  },
  iphone13143Child10: {
    top: 543,
    left: 29,
    position: "absolute",
  },
  text13: {
    left: 33,
    position: "absolute",
  },
  text14: {
    left: 33,
    width: 58,
  },
  iphone13143Child11: {
    left: 101,
  },
  iphone13143Child12: {
    width: 128,
    left: 101,
  },
  iphone13143Child13: {
    left: 169,
    width: 145,
  },
  text15: {
    left: 182,
    width: 124,
  },
  iphone13143Child14: {
    width: 128,
    left: 29,
  },
  text16: {
    left: 38,
    width: 112,
  },
  iphone13143Child15: {
    left: 236,
    width: 128,
  },
  text17: {
    left: 243,
    width: 114,
  },
  text18: {
    width: 98,
    left: 115,
  },
  iphone13143Child16: {
    left: 290,
  },
  text19: {
    left: 288,
    width: 88,
  },
  iphone13143Child17: {
    left: 194,
  },
  text20: {
    left: 198,
    width: 75,
  },
  text21: {
    top: 234,
    width: 120,
    height: 34,
    left: 29,
  },
  text22: {
    top: 503,
    left: 21,
    width: 355,
  },
  text23: {
    top: 347,
    width: 120,
    height: 34,
    left: 29,
  },
  iphone13143Child18: {
    top: 742,
    left: 94,
    backgroundColor: Color.colorMediumseagreen,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 194,
    height: 42,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  text24: {
    width: 105,
    height: 17,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.kodchasanRegular,
    lineHeight: 21,
    letterSpacing: 0,
  },
  pressable: {
    left: 137,
    top: 754,
    position: "absolute",
  },
  text25: {
    left: 33,
    width: 58,
  },
  text26: {
    left: 115,
    width: 58,
  },
  iphone13143: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone13141;
