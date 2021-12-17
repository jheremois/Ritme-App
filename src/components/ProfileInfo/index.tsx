import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";

interface profileInfo{
    username: string
    image: any
}

export const ProfileInfo = (props: profileInfo)=>{

    const {username, image} = props

    return(
        <View style={[AppLooks.paddingXl, AppLooks.bgDarkGray]}>
            <View style={[AppLooks.flexRow, AppLooks.alignCenter, AppLooks.paddingMBot]}>
                <Image source={image} style={[{marginRight: 10, height: Dimensions.get("screen").width / 4.4, width: Dimensions.get("screen").width / 4.4}]}/>
                <View style={[AppLooks.flexRow, AppLooks.contentBetween]}>
                    <View>
                        <Text style={[AppLooks.textWhite, AppLooks.fontM,  AppLooks.textXM, AppLooks.paddingSX]}>
                            {username} Castro
                        </Text>
                        <Text style={[AppLooks.textWhite, AppLooks.textS, AppLooks.paddingSX]}>
                            @{username}
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
                        <Pressable style={[AppLooks.paddingS, AppLooks.borderS, AppLooks.roundedS, AppLooks.bgBlack, {borderColor: "#f0f0f020"}]}>
                            <Text style={[AppLooks.textWhite, AppLooks.textS]}>
                                Editar perfil
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}