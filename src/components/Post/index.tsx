import React from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import { AppColors } from "@src/shared/styles/AppResourses";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Lightbox from 'react-native-lightbox-v2';
import { checkImage } from "@src/helpers/ImageUplader";
 
const Post = ({ profile_pic, user_name, post_image, post_tag, post_description, votingP, votingN, upVotes, downVotes }: any)=>{

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
                    <Pressable
                        onPress={
                            votingP
                        }
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
                                backgroundColor: `${AppColors.indigo}30`
                            },
                            AppLooks.alignCenter,
                            AppLooks.contentAround,
                            AppLooks.paddingM,
                            AppLooks.flexRow,
                        ]}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontSize: 19
                            }}
                        >
                            {
                                upVotes
                                ?
                                    upVotes.length
                                :
                                    0
                                //votes.length
                            }
                        </Text>
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
                                        backgroundColor: AppColors.gray
                                    }
                                :
                                    {
                                        backgroundColor: AppColors.darkGray
                                    },
                            {
                                width: "50%",
                                borderBottomRightRadius: 10,
                                backgroundColor: `${AppColors.red}30`
                            },
                            AppLooks.alignCenter,
                            AppLooks.contentAround,
                            AppLooks.paddingM,
                            AppLooks.flexRow,
                        ]}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontSize: 19
                            }}
                        >
                            {
                                downVotes
                                ?
                                    downVotes.length
                                :
                                    0
                            }
                        </Text>
                        <MaterialCommunityIcons name="arrow-down-bold-outline" size={25} color={AppColors.white}/>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

export default Post