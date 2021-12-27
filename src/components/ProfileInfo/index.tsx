import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";

interface profileInfo{
    user_name: string
    user_description: string
    profile_pic: any
    action: any | undefined
}

export const ProfileInfo = (props: profileInfo)=>{

    const {user_name, user_description, profile_pic, action} = props

    return(
        <View style={[AppLooks.paddingXl, AppLooks.bgDarkGray]}>
            <View style={[AppLooks.flexRow, AppLooks.alignCenter, AppLooks.paddingMBot]}>
                <Image source={profile_pic} style={[{marginRight: 10, height: Dimensions.get("screen").width / 4.4, width: Dimensions.get("screen").width / 4.4}]}/>
                <View style={[AppLooks.flexRow, AppLooks.contentBetween]}>
                    <View>
                        <Text style={[AppLooks.textWhite, AppLooks.fontM,  AppLooks.textXM, AppLooks.paddingSX]}>
                            {user_name}
                        </Text>
                        <Text style={[AppLooks.textWhite,  AppLooks.textXS, AppLooks.paddingSX, {maxWidth: "95%"}]}>
                            {user_description}
                        </Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={[AppLooks.flexRow, AppLooks.paddingS, AppLooks.contentBetween, AppLooks.alignCenter]}>
                    <Pressable style={[AppLooks.marginXlRi]}>
                        <View style={[AppLooks.alignCenter]}>
                            <Text style={[AppLooks.textM, AppLooks.fontM, AppLooks.textWhite]}>
                                50k
                            </Text>
                            <Text style={[AppLooks.textS, AppLooks.textWhite]}>
                                Seguidores
                            </Text>
                        </View> 
                    </Pressable>
                    <Pressable>
                        <View style={[AppLooks.alignCenter]}>
                            <Text style={[AppLooks.textM, AppLooks.fontM, AppLooks.textWhite]}>
                                500
                            </Text>
                            <Text style={[AppLooks.textS, AppLooks.textWhite]}>
                                Seguidos
                            </Text>
                        </View> 
                    </Pressable>
                    <View style={[]}>
                        <Pressable 
                            onPress={action}
                            style={[AppLooks.paddingSY, AppLooks.paddingMX, AppLooks.borderS, AppLooks.roundedS, AppLooks.bgBlack, {borderColor: "#f0f0f020"}]}
                        >
                            <Text style={[AppLooks.textWhite, AppLooks.textS]}>
                                Settings
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}