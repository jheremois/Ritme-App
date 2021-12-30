import React, { Props, useState } from "react";
import { TextInput, Text, View, Pressable, } from "react-native";
import { AppLooks as al } from "@src/shared/styles/AppLooks";
import { KeyboardTypeOptions } from "react-native";
import { AppColors } from "@src/shared/styles/AppResourses";
import { Ionicons } from "@expo/vector-icons";

interface props{
    value: string
    placeHolder?: string
    keyboard?: KeyboardTypeOptions
    validator?: boolean
    errMsg?: string
    label?: string
    dark?: boolean
    onchangetext?: any
    visible?: boolean
}

const AuthInput = (props: props)=>{

    const [visiblePswrd, setVisiblePswrd] = useState(false)

    const {value, placeHolder, keyboard, validator, errMsg, label, dark, onchangetext, visible} = props

    return(
        <>
            <View
                style={[
                    {width: "100%"}
                ]}
            >
                <Text
                    style={[
                        al.textS,
                        al.fontM,
                        {padding: 4},
                        validator?al.textRed:al.textWhite
                    ]}
                >
                    {label}
                </Text>
                <TextInput
                    secureTextEntry={
                        visible
                        ?
                            visiblePswrd
                        :
                            false
                    }
                    placeholder={placeHolder}
                    placeholderTextColor={dark?`${AppColors.white}70`:`${AppColors.black}70`}
                    value={value}
                    onChangeText={onchangetext}
                    keyboardType={keyboard}
                    style={[
                        al.roundedS,
                        al.textM,
                        al.paddingS,
                        dark
                            ?(
                                [al.textWhite, al.bgGray,]
                            ) 
                            :(
                                [al.textBlack, al.bgWhite]
                            ),
                    ]}
                />
                {
                    visible
                    ?
                        <Pressable
                            onPress={()=>{
                                setVisiblePswrd(!visiblePswrd)
                            }}
                            style={[al.alignCenter, al.contentEnd, al.abasolute, {bottom: 10,right: 10}]}
                        >
                            <Ionicons name={
                                visiblePswrd
                                ?
                                "eye"
                                :
                                "eye-off"
                            } size={25} color={"#f0f0f0"} />
                        </Pressable>
                    :
                        null
                }
                {
                validator
                    ?
                        <Text
                            style={[al.textXS, al.textRed]}
                        >
                            {errMsg}
                        </Text>
                    :
                        null
                }
            </View>
        </>
    )
}

export default AuthInput