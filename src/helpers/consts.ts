import Toast from 'react-native-toast-message';
export const fullLogo = require("@assets/logo.png")
export const smallLogo = require("@assets/logo-s.png")
export const userPlacehold = require("@assets/userPlacehold.png")
export const PlaceholdImg = require("@assets/placeholdImg.png")

export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const showToast = (type: 'error' | 'success', text1: string, text2?: string | "") => {
  Toast.show({
    type: type,
    text1: text1,
    text2: text2
  });
}