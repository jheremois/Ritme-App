import React, { useState } from "react";
import { View, Text } from "react-native";
import { AppLooks as AL } from "@src/shared/styles/AppLooks";

const Header = ()=>{
    return(
        <>
            <View 
                style={[
                    AL.bgGray,
                    AL.contentBetween,
                    AL.flexRow,
                    AL.alignCenter,
                    AL.paddingM,
                    AL.shadowS
                ]}
            >
                <View>
                    <View style={[{height: 30, width: 30 }, AL.rounded, AL.bgWhite]}>

                    </View>
                </View>
                <View
                    style={[
                        AL.flexRow,
                        AL.alignCenter,
                    ]}
                >
                    <View 
                        style={[
                            {height: 25, width: 25 },
                            AL.rounded,
                            AL.bgWhite,
                            AL.marginSRi
                        ]}
                    />
                    <Text style={[AL.textWhite, AL.fontXl, AL.textXxl]}>
                        Rame
                    </Text>
                </View>
            </View>
        </>
    )
}

export default Header