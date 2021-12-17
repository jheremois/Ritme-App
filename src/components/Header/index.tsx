import React, { useState } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { AppLooks as AL } from "@src/shared/styles/AppLooks";
import { smallLogo } from "@src/helpers/consts";

const Header = ()=>{
    return(
        <>
            <View 
                style={[
                    AL.bgGray,
                    AL.contentEnd,
                    AL.flexRow,
                    AL.alignCenter,
                    AL.paddingS,
                    AL.paddingMX,
                    AL.shadowS
                ]}
            >
                <Image source={smallLogo} style={{width: Dimensions.get("screen").width / 11, height: Dimensions.get("screen").width / 12}}/>
            </View>
        </>
    )
}

export default Header