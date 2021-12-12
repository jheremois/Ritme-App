import React, { Props, useState } from "react";
import { TextInput, Text, View, } from "react-native";
import { AppLooks as al } from "@src/shared/styles/AppLooks";
import { KeyboardTypeOptions } from "react-native";
import { AppColors } from "@src/shared/styles/AppResourses";

interface props{
    value: string
    placeHolder?: string
    keyboard?: KeyboardTypeOptions
    validator?: boolean
    errMsg?: string
    label?: string
    dark?: boolean
}

const AuthInput = (props: props)=>{

    const {value, placeHolder, keyboard, validator, errMsg, label, dark} = props

    return(
        <>
            <View>
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
                    placeholder={placeHolder}
                    placeholderTextColor={dark?`${AppColors.white}70`:`${AppColors.black}70`}
                    value={value}
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