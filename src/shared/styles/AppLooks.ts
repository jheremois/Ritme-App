import { StyleSheet, Dimensions } from "react-native";
import { AppColors, AppSizes } from "./AppResourses";

export const AppLooks = StyleSheet.create({
  //Corlors
  bgBlack: {
    backgroundColor: AppColors.black
  },
  bgGray: {
    backgroundColor: AppColors.gray
  },
  bgDarkGray: {
    backgroundColor: AppColors.darkGray
  },
  bgWhite: {
    backgroundColor: AppColors.white
  },
  bgIndigo: {
    backgroundColor: AppColors.indigo
  },
  bgBlue: {
    backgroundColor: AppColors.blue
  },
  bgRed: {
    backgroundColor: AppColors.red
  },

  textBlack: {
    color: AppColors.black
  },
  textGray: {
    color: AppColors.gray
  },
  textWhite: {
    color: AppColors.white
  },
  textIndigo: {
    color: AppColors.indigo
  },
  textBlue: {
    color: AppColors.blue
  },
  textRed: {
    color: AppColors.red
  },


  // Fonts
  fontXl: {
    fontWeight: "bold",
  },
  fontM: {
    fontWeight: "700",
  },
  fontS: {
    fontWeight: "300",
  },

  //Texto
  textXXS: {
    fontSize: 12,
  },
  textXS: {
    fontSize: 14,
  },
  textS: {
    fontSize: 16,
  },
  textM: {
    fontSize: 18,
  },
  textXM: {
    fontSize: 20,
  },
  textL: {
    fontSize: 22,  
  },
  textXl: {
    fontSize: 24,  
  },
  textXxl: {
    fontSize: 26,
  },
  textXxxl: {
    fontSize: 28,
  },
  textCenter: {
    textAlign: "center",
  },
  textLeft: {
    textAlign: "left",
  },

  letterSpacingS: {
    letterSpacing: 0.7,
  },

  letterSpacingM: {
    letterSpacing: 0.8,
  },
  letterSpacingXL: {
    letterSpacing: 1,
  },

  // Tamaño
  hScreen: {
    height: AppSizes.FullH,
  },
  wScreen: {
    width: AppSizes.FullW,
  },
  h50: {
    height: AppSizes.h50
  },
  h25: {
    height: AppSizes.h25
  },
  w50: {
    width: AppSizes.w50
  },
  w25: {
    width: AppSizes.w25
  },
  hFull: {
    height: "100%",
  },
  wFull: {
    width: "100%",
  },
  hHalf: {
    height: "50%",
  },
  wHalf: {
    width: "50%",
  },

  // Flex
  dFlex: {
    display: "flex",
  },
  flexRow: {
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
  },
  flex: {
    flex: 1,
  },

  // Posicionamiento
  contentStart: {
    justifyContent: "flex-start",
  },
  contentCenter: {
    justifyContent: "center",
  },
  contentBetween: {
    justifyContent: "space-between",
  },
  contentAround: {
    justifyContent: "space-around",
  },
  contentEnd: {
    justifyContent: "flex-end",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  alignCenter: {
    alignItems: "center",
  },

  // Forma
  roundedS: {
    borderRadius: 5,
  },
  roundedM: {
    borderRadius: 12,
  },
  roundedXl: {
    borderRadius: 20,
  },
  rounded: {
    borderRadius: 900,
  },
  shadowS: {
    shadowColor: "#515151",
    shadowOffset: {
      width: 1,
      height: 1.2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  shadowM: {
    shadowColor: "#515151",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  shadowXl: {
    shadowColor: "#515151",
    shadowOffset: {
      width: 3,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 12.5,
  },

  // Spacio
  marginXS: {
    margin: 5,
  },
  marginS: {
    margin: 10,
  },
  marginM: {
    margin: 15,
  },
  marginXl: {
    margin: 20,
  },
  marginXXl: {
    margin: 25,
  },

  paddingXS: {
    padding: 5,
  },
  paddingS: {
    padding: 10,
  },
  paddingM: {
    padding: 12,
  },
  paddingl: {
    padding: 16,
  },
  paddingXl: {
    padding: 20,
  },
  paddingXXl: {
    padding: 25,
  },

  marginXSY: {
    marginVertical: 5,
  },
  marginSY: {
    marginVertical: 10,
  },
  marginMY: {
    marginVertical: 15,
  },
  marginXlY: {
    marginVertical: 20,
  },
  marginXxlY: {
    marginVertical: 25,
  },

  paddingXSY: {
    paddingVertical: 5,
  },
  paddingSY: {
    paddingVertical: 10,
  },
  paddingMY: {
    paddingVertical: 15,
  },
  paddingXlY: {
    paddingVertical: 20,
  },
  paddingXxlY: {
    paddingVertical: 25,
  },

  marginXSX: {
    marginHorizontal: 5,
  },
  marginSX: {
    marginHorizontal: 10,
  },
  marginMX: {
    marginHorizontal: 15,
  },
  marginXlX: {
    marginHorizontal: 20,
  },
  marginXxlX: {
    marginHorizontal: 25,
  },

  paddingXSX: {
    paddingHorizontal: 5,
  },
  paddingSX: {
    paddingHorizontal: 10,
  },
  paddingMX: {
    paddingHorizontal: 15,
  },
  paddingXlX: {
    paddingHorizontal: 20,
  },
  paddingXxlX: {
    paddingHorizontal: 25,
  },

  marginXSBot: {
    marginBottom: 5,
  },
  marginSBot: {
    marginBottom: 10,
  },
  marginMBot: {
    marginBottom: 15,
  },
  marginXlBot: {
    marginBottom: 20,
  },
  marginXxlBot: {
    marginBottom: 25,
  },

  paddingXSBot: {
    paddingBottom: 5,
  },
  paddingSBot: {
    paddingBottom: 10,
  },
  paddingMBot: {
    paddingBottom: 15,
  },
  paddingXlBot: {
    paddingBottom: 20,
  },
  paddingXxlBot: {
    paddingBottom: 25,
  },

  marginXSLe: {
    marginLeft: 5,
  },
  marginSLe: {
    marginLeft: 10,
  },
  marginMLe: {
    marginLeft: 15,
  },
  marginXlLe: {
    marginLeft: 20,
  },
  marginXxlLe: {
    marginLeft: 25,
  },

  paddingXSLe: {
    paddingLeft: 5,
  },
  paddingSLe: {
    paddingLeft: 10,
  },
  paddingMLe: {
    paddingLeft: 15,
  },
  paddingXlLe: {
    paddingLeft: 20,
  },
  paddingXxlLe: {
    paddingLeft: 25,
  },


  marginXSTop: {
    marginTop: 5,
  },
  marginSTop: {
    marginTop: 10,
  },
  marginMTop: {
    marginTop: 15,
  },
  marginXlTop: {
    marginTop: 20,
  },
  marginXxlTop: {
    marginTop: 25,
  },
  
  paddingXSTop: {
    paddingTop: 5,
  },
  paddingSTop: {
    paddingTop: 10,
  },
  paddingMTop: {
    paddingTop: 15,
  },
  paddingXlTop: {
    paddingTop: 20,
  },
  paddingXxlTop: {
    paddingTop: 25,
  },

  marginXSRi: {
    marginRight: 5,
  },
  marginSRi: {
    marginRight: 10,
  },
  marginMRi: {
    marginRight: 15,
  },
  marginXlRi: {
    marginRight: 20,
  },
  marginXxlRi: {
    marginRight: 25,
  },

  paddingXSRi: {
    paddingRight: 5,
  },
  paddingSRi: {
    paddingRight: 10,
  },
  paddingMRi: {
    paddingRight: 15,
  },
  paddingXlRi: {
    paddingRight: 20,
  },
  paddingXxlRi: {
    paddingRight: 25,
  },

  // Borde
  borderS: {
    borderWidth: 1,
  },
  borderM: {
    borderWidth: 1.5,
  },
  borderXl: {
    borderWidth: 2,
  },

  abasolute: {
    position: "absolute",
  },
   
});