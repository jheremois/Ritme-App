import React, { useState } from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import { AppLooks as AL } from "@src/shared/styles/AppLooks";
import { smallLogo } from "@src/helpers/consts";
import { Ionicons } from "@expo/vector-icons";
import { AppColors } from "@src/shared/styles/AppResourses";
import { useNavigation } from "@react-navigation/native";


const Header = ({navigation}: any)=>{

    const navigate = useNavigation()

    return(
        <>
            <View 
                style={[
                    AL.bgGray,
                    AL.contentBetween,
                    AL.flexRow,
                    AL.alignCenter,
                    AL.paddingS,
                    AL.paddingMX,
                    AL.shadowS
                ]}
            >
                <Image source={smallLogo} style={{width: Dimensions.get("screen").width / 11, height: Dimensions.get("screen").width / 12}}/>
                <View>
                    <Pressable
                        onPress={()=> {
                            navigate.navigate("searchBar")
                        }}
                        style={[
                            AL.bgDarkGray,
                            AL.rounded,
                            {
                                padding: 8
                            }
                        ]}
                    >
                        <Ionicons name="search" size={22} color={AppColors.white}/>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

export default Header