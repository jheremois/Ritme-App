import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, Dimensions, Pressable, TextInput } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "@src/context/userContext";
import { userPlacehold } from "@src/helpers/consts";

const CreatePost = ()=>{
  
    return(
        <>
            <View>
                <View>
                    <TextInput
                        style={[{borderColor: "#f0f0f080", textAlignVertical: "top"}, AppLooks.paddingS, AppLooks.borderS, AppLooks.roundedS, AppLooks.textWhite]}
                        multiline={true}
                        numberOfLines={3}
                    />
                </View>
            </View>
        </>
    )
}

export default CreatePost