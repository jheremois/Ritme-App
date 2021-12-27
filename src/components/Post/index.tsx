import React, { useState } from "react";
import InnerNav from "@src/components/InnerNav";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import { userPlacehold } from "@src/helpers/consts";
import { AppColors } from "@src/shared/styles/AppResourses";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Lightbox from 'react-native-lightbox-v2';
 
const Post = ()=>{

    return(
        <>
            <View style={[AppLooks.marginM, AppLooks.roundedM, AppLooks.bgDarkGray, AppLooks.borderS, {borderColor: "#f0f0f010"}]}>
                <View style={[AppLooks.paddingS, AppLooks.roundedM, AppLooks.bgDarkGray, {paddingBottom: 0}]}>
                    <View style={[AppLooks.flexRow]}>
                        <Pressable onPress={()=> {}}>
                            <Image 
                                source={userPlacehold} 
                                style={[
                                    {
                                        height: Dimensions.get("screen").width / 9,
                                        width: Dimensions.get("screen").width / 9
                                    }
                                ]}
                            />
                        </Pressable>
                        <View style={[AppLooks.alignStart, AppLooks.paddingMX]}>
                            <Text style={[AppLooks.textWhite, AppLooks.fontXl, AppLooks.textS]}>
                                Jheremy Castro
                            </Text>
                            <View style={[AppLooks.rounded, AppLooks.alignCenter]}>
                                <Text style={[AppLooks.textWhite, AppLooks.fontXl, AppLooks.textXS]}>
                                    Etiqueta
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={[AppLooks.paddingS]}>
                        <Text style={[AppLooks.textWhite, AppLooks.textXS]}>
                            Descripcion
                        </Text>
                    </View>
                </View>
                <View>
                    <Lightbox>
                        <Image 
                            source={{}} 
                            style={[
                                {
                                    backgroundColor: AppColors.whiteLow,
                                    height: Dimensions.get("screen").width,
                                    width: "100%"
                                }
                            ]}
                        />
                    </Lightbox>
                </View>
                <View style={[AppLooks.alignCenter, AppLooks.flexRow, AppLooks.contentBetween]}>
                    <Pressable 
                        style={[
                            AppLooks.w50,
                            AppLooks.alignCenter,
                            AppLooks.contentCenter,
                            AppLooks.paddingM
                        ]}
                    >
                        <MaterialCommunityIcons name="arrow-up-bold-outline" size={25} color={AppColors.white}/>
                    </Pressable>
                    <Pressable 
                        style={[
                            AppLooks.w50,
                            AppLooks.alignCenter,
                            AppLooks.contentCenter,
                            AppLooks.paddingMY
                        ]}
                    >
                        <MaterialCommunityIcons name="arrow-down-bold-outline" size={25} color={AppColors.white}/>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

export default Post