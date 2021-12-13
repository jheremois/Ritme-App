import React, { Children, ComponentType, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { AppLooks as al } from "@src/shared/styles/AppLooks";

interface props{
    children: any
    action: VoidFunction
    color: string
}

const FormButton = (props: props)=>{

    const {children, action, color} = props

    return(
        <View>
            <Pressable
                onPress={action}
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
                {children}
            </Pressable>
        </View>
    )
}

export default FormButton