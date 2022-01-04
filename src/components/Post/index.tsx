import React, { useState } from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import { AppColors } from "@src/shared/styles/AppResourses";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Lightbox from 'react-native-lightbox-v2';
import { PlaceholdImg, userPlacehold } from "@src/helpers/consts";
 
const Post = ({ profile_pic, user_name, post_image, post_tag, post_description, vote }: any)=>{

    return(
        <>
            <View style={[AppLooks.marginM, AppLooks.roundedM, AppLooks.bgDarkGray, AppLooks.borderS, {borderColor: "#f0f0f010"}]}>
                <View style={[AppLooks.paddingS, AppLooks.roundedM, AppLooks.bgDarkGray, {paddingBottom: 0}]}>
                    <View style={[AppLooks.flexRow]}>
                        <Pressable  
                            onPress={()=> {}}
                        >
                            <Image 
                                source={
                                    false
                                        ?
                                            {uri: profile_pic}
                                        :
                                            userPlacehold
                                }
                                style={[
                                    AppLooks.rounded,
                                    {
                                        height: Dimensions.get("screen").width / 9,
                                        width: Dimensions.get("screen").width / 9
                                    }
                                ]}
                            />
                        </Pressable>
                        <View style={[AppLooks.alignStart, AppLooks.paddingMX]}>
                            <Text style={[AppLooks.textWhite, AppLooks.fontXl, AppLooks.textS]}>
                                {user_name}
                            </Text>
                            <View style={[AppLooks.rounded, AppLooks.alignCenter]}>
                                <Text style={[AppLooks.textWhite, AppLooks.fontXl, AppLooks.textXS]}>
                                    {post_tag}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={[AppLooks.paddingS]}>
                        <Text style={[AppLooks.textWhite, AppLooks.textXS]}>
                            {post_description}
                        </Text>
                    </View>
                </View>
                <View>
                    <Lightbox
                        onLongPress={()=>{
                            console.log("Descargar");
                        }}
                    >
                        <Image 
                            source={
                                post_image?
                                    post_image.match(/^https?:\/\/.+\/.+$/)
                                        ?
                                            {uri: post_image}
                                        :
                                            PlaceholdImg
                                    :
                                        PlaceholdImg
                            } 
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
                        style={({ pressed }) =>[
                            pressed
                                ?
                                    {
                                        backgroundColor: AppColors.gray
                                    }
                                :
                                    {
                                        backgroundColor: AppColors.darkGray
                                    },
                            {
                                width: "50%",
                                borderBottomLeftRadius: 10,
                            },
                            AppLooks.alignCenter,
                            AppLooks.contentCenter,
                            AppLooks.paddingM
                        ]}
                    >
                        <MaterialCommunityIcons name="arrow-up-bold-outline" size={25} color={AppColors.white}/>
                    </Pressable>
                    <Pressable 
                        style={({ pressed }) =>[
                            pressed
                                ?
                                    {
                                        backgroundColor: AppColors.gray
                                    }
                                :
                                    {
                                        backgroundColor: AppColors.darkGray
                                    },
                            {
                                width: "50%",
                                borderBottomRightRadius: 10,
                            },
                            AppLooks.alignCenter,
                            AppLooks.contentCenter,
                            AppLooks.paddingM,
                            AppLooks.flexRow,
                        ]}
                    >
                       {/*  <Text
                            style={[AppLooks.textWhite, AppLooks.marginSX, AppLooks.fontM]}
                        >
                            90%
                        </Text> */}
                        <MaterialCommunityIcons name="arrow-down-bold-outline" size={25} color={AppColors.white}/>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

export default Post