import React from "react";
import { Pressable, Text, View } from "react-native";
import { AppLooks as al } from "@src/shared/styles/AppLooks";

interface props{
    text: string
    action: void
    color: string
    textColor: string
}

const FormButton = (props: props)=>{

    const {text, action, color, textColor} = props

    return(
        <View>
            <Pressable
                onPress={()=>{
                    action
                }}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? `${color}90`
                            : color
                    },
                    al.paddingM,
                    al.alignCenter,
                    al.contentCenter,
                    al.roundedS
                ]}
            >
                <Text
                    style={[{color: textColor}, al.fontM, al.textXM]}
                >
                    {text}
                </Text>
            </Pressable>
        </View>
    )
}

export default FormButton