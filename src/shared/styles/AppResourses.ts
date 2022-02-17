import { Dimensions } from "react-native";
const { width, height }=Dimensions.get('screen')

export const AppColors = {
    black: "#1C1C1E",
    gray: "#2C2C2E",
    white: "#F9FAFB",
    darkGray: "#1F1F20",
    indigo: "#5E5CE6",
    blue: "#0A84FF",
    red: "#FF453A",
  
    blackLow: "#1C1C1E70",
    grayLow: "#2C2C2E70",
    whiteLow: "#F9FAFB70",
    darkGrayLow: "#1F1F2070",
    indigoLow: "#5E5CE670",
    blueLow: "#0A84FF70",
};

export const AppSizes = {
    FullH: height,
    h50: height / 2,
    h25: height / 4,

    FullW: width,
    w50: width / 2,
    w25: width / 4
}