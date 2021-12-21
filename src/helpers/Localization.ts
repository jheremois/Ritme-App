import I18n from "i18n-js";

export function _(message:string,params={}){
   return I18n.t(message,params)
}