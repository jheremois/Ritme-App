import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, Dimensions, Pressable, TextInput, KeyboardTypeOptions } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import { userPlacehold } from "@src/helpers/consts";
import { AppColors } from "@src/shared/styles/AppResourses";
import { Ionicons } from "@expo/vector-icons";

export const EditProfile = ({route}: any)=>{

    interface props{
        value: string
        placeHolder?: string
        keyboard?: KeyboardTypeOptions
        validator?: boolean
        errMsg?: string
        label?: string
        onchangetext?: any
        textarea?: boolean
    }

    const FlatInput = (props: props)=>{
        const {placeHolder, value, onchangetext, keyboard, label, textarea} = props
        return(
            <View style={[{marginTop: 20}]}>
                <Text
                    style={{color:AppColors.white}}
                >
                    {label}
                </Text>
                <TextInput 
                    placeholder={placeHolder}
                    placeholderTextColor={AppColors.whiteLow}
                    value={value}
                    multiline={textarea
                        ?
                            true
                        :
                            false
                    }
                    numberOfLines={textarea
                        ?
                            2
                        :
                            1
                    }
                    onChangeText={onchangetext}
                    keyboardType={keyboard}
                    style={[
                        {
                            textAlignVertical: "top",
                            width: Dimensions.get("screen").width / 1.2,
                            borderColor: "#11111100",
                            borderBottomColor: "#515151"
                        },
                        AppLooks.textM,
                        AppLooks.paddingS,
                        AppLooks.textWhite,
                        AppLooks.borderXl
                    ]}
                />
            </View>
        )
    }

    return(
        <>
            <View style={[AppLooks.paddingMX, AppLooks.contentBetween, AppLooks.flexRow,AppLooks.bgGray]}>
                <Pressable>
                    <Ionicons name={"close-sharp"} color={"white"} size={27}/>
                </Pressable>
                <Pressable>
                    <Ionicons name={"checkmark"} color={"white"} size={27}/>
                </Pressable>
            </View>
            <View style={[AppLooks.paddingXl, AppLooks.bgDarkGray, AppLooks.flex]}>
                <View style={[AppLooks.alignCenter, AppLooks.paddingMBot]}>
                    <Pressable 
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? `#ffffff10`
                                : "transparent"
                        },
                        AppLooks.alignCenter,
                        AppLooks.marginMY
                    ]}
                    >
                        <Image 
                            source={userPlacehold}
                            style={[{marginRight: 10, width: Dimensions.get("screen").width / 3.4, height: Dimensions.get("screen").width / 3.4}]}
                        />
                        <View style={[AppLooks.marginMTop]}>
                            <Text style={[AppLooks.textM, AppLooks.textWhite]}>
                                Change Profile picture
                            </Text>
                        </View>
                    </Pressable>
                    <View>
                        <FlatInput
                            value=""
                            onchangetext={()=> {}}
                            label="User name"
                            placeHolder="User name"
                            textarea={false}
                        />
                        <FlatInput
                            value=""
                            onchangetext={()=> {}}
                            label="Description"
                            placeHolder="Description"
                            textarea={true}
                        />
                    </View>
                </View>
            </View>
        </>
    )
}