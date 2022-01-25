import React, { useState } from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import { AppLooks as AL } from "@src/shared/styles/AppLooks";
import { smallLogo } from "@src/helpers/consts";
import { Ionicons } from "@expo/vector-icons";
import { AppColors } from "@src/shared/styles/AppResourses";

const Searcher = ()=>{
    return(
        <>
            <Pressable
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
        </>
    )
}

export default Searcher