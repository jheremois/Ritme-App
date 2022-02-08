import React, { useEffect, useState } from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import { AppColors } from "@src/shared/styles/AppResourses";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Lightbox from 'react-native-lightbox-v2';
import { checkImage } from "@src/helpers/ImageUplader";
import { useNavigation } from "@react-navigation/native";
import Animated, {useAnimatedStyle, FadeInLeft, withSpring} from "react-native-reanimated";
import { postDataType } from "@src/shared/interfaces/posts.type";

const Post = (props: postDataType)=>{

    const {
        upload_time,
        userId,
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

    const navigate = useNavigation()

    const upChart = 
        (upVotes/ (upVotes + downVotes)) * (100) >= 1
            ?
                (upVotes/ (upVotes + downVotes)) * (Dimensions.get("screen").width - 30)
            :
                0
    ;

    const downChart = 
        (downVotes / (upVotes + downVotes)) * (100) >= 1
            ?
                (downVotes / (upVotes + downVotes)) * (Dimensions.get("screen").width - 30)
            :
                0
    ;

    const animationStyleUp = useAnimatedStyle(()=>{
        return{
            width: withSpring(upChart)
        }
    })

    const animationStyleDown = useAnimatedStyle(()=>{
        return{
            width: withSpring(downChart)
        }
    })

    return(
        <>
            <View style={[AppLooks.marginM, AppLooks.roundedM, AppLooks.bgDarkGray, AppLooks.borderM, {overflow: "hidden", borderColor: "#f0f0f020"}]}>
                <View style={[AppLooks.paddingS, AppLooks.roundedM, AppLooks.bgDarkGray, {paddingBottom: 0}]}>
                    <View
                        style={[AppLooks.flexRow, AppLooks.contentBetween]}
                    >
                        <View style={[AppLooks.flexRow]}>
                            <Pressable  
                                onPress={()=> {
                                    navigate.navigate('userProfile', {id: userId})
                                }}
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
                                <Pressable
                                    style={[AppLooks.flexRow, AppLooks.alignCenter]}
                                    onPress={()=> {
                                        navigate.navigate('userProfile', {id: userId})
                                    }}
                                >
                                    <Text style={[AppLooks.textWhite, AppLooks.fontXl, AppLooks.textS]}>
                                        {user_name}
                                    </Text>
                                    <Text style={[{paddingHorizontal: 3.3, opacity: 0.7,}, AppLooks.textWhite, AppLooks.fontXl, AppLooks.textS]}>
                                        -
                                    </Text>
                                    <Text style={[{color: AppColors.whiteLow}, AppLooks.fontS, AppLooks.textXS]}>
                                        {upload_time}
                                    </Text>
                                </Pressable>

                                <View style={[AppLooks.roundedXl, AppLooks.alignCenter, AppLooks.paddingMX, AppLooks.borderS, {borderColor: "#ffffff60"}]}>
                                    <Text style={[AppLooks.textWhite, AppLooks.fontXl, AppLooks.textXS]}>
                                        {post_tag}
                                    </Text>
                                </View>
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
                    <Lightbox>
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
                <View style={[AppLooks.alignCenter, AppLooks.contentBetween]}>
                    {
                    iVoted?       
                        <View
                            style={[{height: 50, width: "100%", display: "flex", flexDirection: "row"}]}
                        >
                            <Animated.View
                                onLayout={()=> FadeInLeft.duration(3000)}
                                style={[
                                    {
                                        height: "100%",
                                        backgroundColor: `${AppColors.indigo}`,
                                        flexDirection: "row",
                                        //width: `${upChart}%`,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    },
                                    animationStyleUp
                                ]}
                            >
                                {
                                    Math.round(upChart) > 80 && 
                                    <Text
                                        style={[AppLooks.textWhite, AppLooks.fontM, {paddingRight: 2}]}
                                    >
                                        {Math.round((upVotes/ (upVotes + downVotes)) * (100))}%
                                    </Text>
                                }
                                <MaterialCommunityIcons name="arrow-up-bold-outline" size={18} color={AppColors.white}/>
                            </Animated.View>

                            <Animated.View
                                style={[
                                    {
                                        height: "100%",
                                        flexDirection: "row",
                                        backgroundColor: AppColors.red,
                                        //width: `${downChart}%`,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    },
                                    animationStyleDown
                                ]}
                            >
                                {
                                    Math.round(downChart) > 80 && 
                                    <Text
                                        style={[AppLooks.textWhite, AppLooks.fontM, {paddingRight: 2}]}
                                    >
                                        {Math.round((downVotes/ (upVotes + downVotes)) * (100))}%
                                    </Text>
                                }
                                {
                                    <MaterialCommunityIcons name="arrow-down-bold-outline" size={18} color={AppColors.white}/>
                                }
                            </Animated.View>
                        </View>
                    :
                        <View
                           style={[{height: 50, width: "100%", display: "flex", flexDirection: "row"}]}
                        >
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
                        </View>
                    }
                </View>
            </View>
        </>
    )
}

export default Post