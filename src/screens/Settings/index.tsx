import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import { Ionicons } from "@expo/vector-icons";
import { AppColors } from "@src/shared/styles/AppResourses";
import { UserContext } from "@src/context/userContext";

const Settings = ({navigation}: any)=>{

    interface props{
        icon: any
        name: String
        action: VoidFunction
    }

    const { deleteCredentials } = useContext(UserContext);

    const LogOut = ()=> {
        deleteCredentials().then((res)=>{
            navigation.replace("splash")
        })
    }

    const Option = ({icon, name, action}: props)=>{

        return(
            <Pressable 
                onPress={action}
                style={
                    [
                        AppLooks.flexRow,
                        AppLooks.paddingXl,
                        AppLooks.alignCenter,
                        AppLooks.borderS,
                        {borderColor: "#11111100", borderBottomColor: AppColors.darkGray}
                    ]
                }
            >
                <Ionicons name={icon} color={"white"} size={22}/>
                <Text
                    style={[AppLooks.marginMLe, AppLooks.textWhite, AppLooks.textXM]}
                >
                    {name}
                </Text>
            </Pressable>
        )
    }

    return(
        <View>
            <View>
                <Option icon="ios-person-outline" name="Edit Profile" action={()=> navigation.navigate("editProfile")} />
                <Option icon="ios-exit-outline" name="Logout" action={()=> LogOut()} />
            </View>
        </View>
    )
}

export default Settings