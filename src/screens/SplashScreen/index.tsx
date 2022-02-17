import React, { useContext, useEffect } from "react";
import { View, Image, Dimensions, ActivityIndicator } from "react-native";
import { getCurrentUser } from "@src/services/User.services";
import { fullLogo, showToast } from "@src/helpers/consts";
import { AppLooks } from "@src/shared/styles/AppLooks";
import { AppColors } from "@src/shared/styles/AppResourses";
import { ConectionContext } from "@src/context/conectionContext";

const SplashScreen = ({navigation}: any)=>{

  const { conection } = useContext(ConectionContext)

  const getMe = ()=> getCurrentUser().then((res)=> {
    conection
    ?
      res == null
        ?
          navigation.replace("auth")
        :
          navigation.replace("app")
    :
      navigation.replace("ofLine")
  }).catch((err)=>{
    conection
      ?
        navigation.replace("auth")
      :
        navigation.replace("ofLine")
  })

  useEffect(()=>{
    getMe()  
    !conection && showToast("error", "No internet Connection")
  }, [])
  
  return(
    <>
      <View
          style={[AppLooks.alignCenter, AppLooks.paddingM, {flex: 1}]}  
        >
        <View
          style={[AppLooks.contentEnd, {height: Dimensions.get("screen").height / 2 - 20}]}  
        >
          <Image
            style={[{width: Dimensions.get("screen").width / 3}]}
            resizeMode="center"
            source={fullLogo}
          />
        </View>
        <View
          style={[AppLooks.contentEnd, {height: Dimensions.get("screen").height / 2 - 60}]}  
        >
          <ActivityIndicator
            size={"large"}
            color={AppColors.indigoLow}
          />
        </View>
      </View>
    </>
  )
}

export default SplashScreen