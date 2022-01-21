import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions, Pressable, ActivityIndicator } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import { Ionicons } from "@expo/vector-icons";
import { profileType } from "@src/shared/interfaces/user.type";
import { getCurrentUser } from "@src/services/User.services";
import { updateMe } from "@src/services/User.services";
import { FlatInput } from "@src/components/FlatInput";
import { showToast } from "@src/helpers/consts";
import { checkImage, pickImage } from "@src/helpers/ImageUplader";
import { AppColors } from "@src/shared/styles/AppResourses";

export const EditProfile = ({navigation}: any)=>{

    const [load, setLoad] = useState(false)
    const [user, setUser] = useState<profileType>(
        {
            email: "",
            profile_pic: null,
            user_description: "",
            user_id: null,
            user_name: ""
        }
    )

    const [validUser, setValidUser] = useState({
        profile_pic: false,
        user_description: false,
        user_name: false
    })

    const getMe = ()=> getCurrentUser().then((res)=> {
        setUser(
            {
                user_description: res?.data.response[0].user_description,
                email: res?.data.response[0].email,
                profile_pic: res?.data.response[0].profile_pic,
                user_id: res?.data.response[0].user_id,
                user_name: res?.data.response[0].user_name,
            }
        )
    }).catch((err)=>{
        console.log("user err ->", err)
    })

    async function upImage() {
        const post_image = await pickImage();
    
        setUser({ ...user, profile_pic: post_image })
    
    }

    useEffect(()=>{
        setLoad(true)
        getMe().finally(()=>{
            setLoad(false)
        })
    }, [])

    const updateUser = ()=>{
        setValidUser({user_name: user.user_name.length <= 2, user_description: false, profile_pic: false})
        
        let data = {
            profile_pic: user.profile_pic,
            user_name: user.user_name,
            user_description: user.user_description
        }

        setLoad(true)
        
        updateMe(data).then((res)=>{
            showToast("success", "User updated")
            navigation.goBack()
        }).catch((err)=>{
            setLoad(false)
            console.log(err.response.data);
            showToast("error", err.response.data)
        })
    }

    const changeForm = (e: any, field: any) => {
        setUser({ ...user, [field]: e });
    };

    return(
        <>
            <View>
                {
                    load
                    ?
                        <View
                            style={[AppLooks.alignCenter, AppLooks.contentCenter, AppLooks.wFull, AppLooks.paddingM]}
                        >
                            <ActivityIndicator size={"large"} color={AppColors.indigo}/>
                        </View>
                    :
                        <View
                            style={[AppLooks.paddingSX, AppLooks.alignCenter, AppLooks.contentBetween, AppLooks.flexRow,AppLooks.bgGray]}
                        >
                            <Pressable
                                style={[AppLooks.paddingS]}
                                onPress={()=>{
                                    navigation.goBack()
                                }}
                            >
                                <Ionicons name={"close-sharp"} color={"white"} size={29}/>
                            </Pressable>
                            <Text
                                style={[AppLooks.textWhite, AppLooks.fontM, AppLooks.textS]}
                            >
                                Edit profile
                            </Text>
                            <Pressable
                                onPress={()=>{
                                    user.user_name
                                        ?
                                        user.user_name.length > 2
                                            ?
                                                updateUser()
                                            :
                                                setValidUser({user_name: user.user_name.length <= 2, user_description: false, profile_pic: false})
                                        :
                                            setValidUser({user_name: user.user_name.length <= 2, user_description: false, profile_pic: false})
                                }}
                                style={[AppLooks.paddingS]}
                            >
                                <Ionicons name={"checkmark"} color={"white"} size={29}/>
                            </Pressable>
                        </View>
                }
            </View>
            <View style={[AppLooks.paddingXl, AppLooks.bgDarkGray, AppLooks.flex]}>
                <View style={[AppLooks.alignCenter, AppLooks.paddingMBot]}>
                    <Pressable 
                    onPress={()=>{
                        upImage()
                    }}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? `#ffffff05`
                                : "transparent"
                        },
                        AppLooks.alignCenter,
                        AppLooks.marginMY
                    ]}
                    >
                        <Image 
                            source={checkImage(user.profile_pic)}
                            resizeMode="cover"
                            style={[AppLooks.rounded, {marginRight: 10, width: Dimensions.get("screen").width / 3.4, height: Dimensions.get("screen").width / 3.4}]}
                        />
                        <View style={[AppLooks.marginMTop]}>
                            <Text style={[AppLooks.textM, AppLooks.textWhite]}>
                                Change Profile picture
                            </Text>
                        </View>
                    </Pressable>
                    <View>
                        <FlatInput
                            maxLength={20}
                            value={user.user_name}
                            validator={validUser.user_name}
                            errMsg={"Invalid user name"}
                            onchangetext={(e: any) => changeForm(e, "user_name")}
                            label="User name"
                            placeHolder="User name"
                            textarea={false}
                        />
                        <FlatInput
                            maxLength={900}
                            value={user.user_description}
                            validator={validUser.user_description}
                            errMsg={"Invalid user description"}
                            onchangetext={(e: any) => changeForm(e, "user_description")}
                            label="Description"
                            placeHolder="Description"
                            textarea={true}
                        />
                    </View>
                </View>
            </View>
        </>
    )
}