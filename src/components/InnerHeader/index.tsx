import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { AppLooks as AL } from "@src/shared/styles/AppLooks";
import { Ionicons } from "@expo/vector-icons";
import { AppColors } from "@src/shared/styles/AppResourses";

const InnerHeader = (prop: any)=>{
    
    let {tabName} = prop

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
                    <Pressable
                         style={[
                            AL.contentCenter,
                            AL.alignCenter,
                        ]}
                    >
                        <Ionicons name="arrow-back" size={29} color={AppColors.whiteLow}/>
                    </Pressable>
                </View>
                <View
                    style={[
                        AL.flexRow,
                        AL.alignCenter,
                    ]}
                >
                    <Text style={[AL.textWhite, AL.fontM, AL.textXl]}>
                        {
                            tabName
                        }
                    </Text>
                </View>
            </View>
        </>
    )
}

export default InnerHeader