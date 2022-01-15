import React, { useEffect, useState } from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import { AppColors } from "@src/shared/styles/AppResourses";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Lightbox from 'react-native-lightbox-v2';
import { checkImage } from "@src/helpers/ImageUplader";
import { getCurrentUser } from "@src/services/User.services";


const Post = (props: any)=>{

    const {
        iVoted,
        profile_pic,
        user_name,
        post_image,
        post_tag,
        post_description,
        votingP,
        votingN,
        upVotes,
        downVotes 
    } = props

    const upChart = 
        (upVotes.length/ (upVotes.length + downVotes.length)) * (100) >= 1
            ?
                (upVotes.length/ (upVotes.length + downVotes.length)) * (100)
            :
                0

    const downChart = 
        (downVotes.length / (upVotes.length + downVotes.length)) * (100) >= 1
            ?
                (downVotes.length / (upVotes.length + downVotes.length)) * (100)
            :
                0


    return(
        <>
            <View style={[AppLooks.marginM, AppLooks.roundedM, AppLooks.bgDarkGray, AppLooks.borderM, {overflow: "hidden", borderColor: "#f0f0f010"}]}>
                <View style={[AppLooks.paddingS, AppLooks.roundedM, AppLooks.bgDarkGray, {paddingBottom: 0}]}>
                    <View style={[AppLooks.flexRow]}>
                        <Pressable  
                            onPress={()=> {}}
                        >
                            <Image 
                                source={
                                    checkImage(profile_pic)
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
                            <View style={[AppLooks.roundedXl, AppLooks.alignCenter, AppLooks.paddingMX, AppLooks.borderS, {borderColor: "#ffffff60"}]}>
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
                                checkImage(post_image)
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
                    {
                    iVoted?            
                    <View
                        style={[{height: 50, width: "100%", display: "flex", flexDirection: "row"}]}
                    >
                        <View
                            style={[
                                {
                                    height: "100%",
                                    backgroundColor: `${AppColors.indigo}`,
                                    width: `${upChart}%`,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "row",
                                }
                            ]}
                        >
                            <MaterialCommunityIcons name="arrow-up-bold-outline" size={25} color={AppColors.white}/>
                        </View>

                        <View
                            style={[
                                {
                                    height: "100%",
                                    backgroundColor: AppColors.red,
                                    width: `${downChart}%`,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }
                            ]}
                        >
                            <MaterialCommunityIcons name="arrow-down-bold-outline" size={25} color={AppColors.white}/>
                        </View>
                    </View>
                    :
                            <>
                            
                        <Pressable
                            onPress={
                                votingP
                            }
                            style={({ pressed }) =>[
                                pressed
                                    ?
                                        {
                                            backgroundColor: `${AppColors.indigo}`
                                        }
                                    :
                                        {
                                            backgroundColor: `${AppColors.indigo}10`
                                        },
                                {
                                    width: "50%",
                                },
                                AppLooks.alignCenter,
                                AppLooks.contentAround,
                                AppLooks.paddingM,
                                AppLooks.flexRow,
                            ]}
                        >
                            <MaterialCommunityIcons name="arrow-up-bold-outline" size={25} color={AppColors.white}/>
                        </Pressable>
                        <Pressable 
                            onPress={
                                votingN
                            }
                            style={({ pressed }) =>[
                                pressed
                                    ?
                                        {
                                            backgroundColor: `${AppColors.red}`
                                        }
                                    :
                                        {
                                            backgroundColor: `${AppColors.red}10`
                                        },
                                {
                                    width: "50%",
                                },

                                AppLooks.alignCenter,
                                AppLooks.contentAround,
                                AppLooks.paddingM,
                                AppLooks.flexRow,
                            ]}
                        >
                            <MaterialCommunityIcons name="arrow-down-bold-outline" size={25} color={AppColors.white}/>
                        </Pressable>
                        </>
                    }
                </View>
            </View>
        </>
    )
}

export default Post