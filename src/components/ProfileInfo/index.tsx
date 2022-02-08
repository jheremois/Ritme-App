import React from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import { checkImage } from "@src/helpers/ImageUplader";

interface profileInfo{
    user_name: string
    isMe: boolean
    user_description: string
    profile_pic: any
    action: any | undefined
}

export const ProfileInfo = (props: profileInfo)=>{

    const {user_name, user_description, profile_pic, action, isMe} = props

    return(
        <View style={[AppLooks.paddingXl, AppLooks.bgDarkGray]}>
            <View style={[AppLooks.flexRow, AppLooks.alignCenter, AppLooks.paddingMBot]}>
                <Image 
                    source={checkImage(profile_pic)} 
                    style={[AppLooks.rounded, {marginRight: 10, height: Dimensions.get("screen").width / 4.4, width: Dimensions.get("screen").width / 4.4}]}/>
                <View style={[AppLooks.flexRow, AppLooks.contentBetween]}>
                    <View>
                        <Text style={[AppLooks.textWhite, AppLooks.fontM,  AppLooks.textXM, AppLooks.paddingSX]}>
                            {user_name}
                        </Text>
                        <Text style={[AppLooks.textWhite, AppLooks.textXS, AppLooks.paddingSX, {width: Dimensions.get("screen").width / 1.58}]}>
                            {user_description}
                        </Text>
                    </View>
                </View>
            </View>
            <View>
                {
                    !isMe &&
                            <View style={[AppLooks.flexRow, AppLooks.paddingS, AppLooks.contentBetween, AppLooks.alignCenter]}>
                                <View style={[AppLooks.wFull]}>
                                    <Pressable 
                                        onPress={action}
                                        style={[AppLooks.paddingSY, AppLooks.paddingMX, AppLooks.borderS, AppLooks.roundedS, AppLooks.bgBlack, {borderColor: "#f0f0f020"}]}
                                    >
                                        <Text style={[AppLooks.textWhite, AppLooks.textS, AppLooks.textCenter]}>
                                            Edit Profile
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                }
            </View>
        </View>
    )
}