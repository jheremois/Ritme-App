import React, { useState } from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
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
                <View>
                    <Pressable>
                        
                    </Pressable>
                </View>
                <Image source={smallLogo} style={{width: Dimensions.get("screen").width / 11, height: Dimensions.get("screen").width / 12}}/>
            </View>
        </>
    )
}

export default Header