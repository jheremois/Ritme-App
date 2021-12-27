import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import { userPlacehold } from "@src/helpers/consts";
import { Ionicons } from "@expo/vector-icons";
import { profileType } from "@src/shared/interfaces/user.type";
import { getCurrentUser } from "@src/services/User.services";
import { updateMe } from "@src/services/User.services";
import { FlatInput } from "@src/components/FlatInput";
import { showToast } from "@src/helpers/consts";

export const EditProfile = ({navigation}: any)=>{

    const [user, setUser] = useState<profileType>(
        {
            email: "",
            profile_pic: userPlacehold,
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
        console.log("res user-> ", res?.data.response[0])
        setUser(res?.data.response[0])
    }).catch((err)=>{
        console.log("user err ->", err)
    })

    useEffect(()=>{
        getMe()
    }, [])

    const updateUser = ()=>{
        setValidUser({user_name: user.user_name.length <= 2, user_description: user.user_description.length > 100, profile_pic: false})
        let data = {
            profile_pic: user.profile_pic,
            user_name: user.user_name,
            user_description: user.user_description
        }
        updateMe(data).then((res)=>{
            showToast("success", "User updated")
            console.log("update res: ", "User updated")
            navigation.goBack()
        }).catch((err)=>{
            showToast("error", err.response.data)
        })
    }

    const changeForm = (e: any, field: any) => {
        setUser({ ...user, [field]: e });
    };

    return(
        <>
            <View style={[AppLooks.paddingSX, AppLooks.contentBetween, AppLooks.flexRow,AppLooks.bgGray]}>
                <Pressable
                    style={[AppLooks.paddingS]}
                    onPress={()=>{

                        navigation.goBack()
                    }}
                >
                    <Ionicons name={"close-sharp"} color={"white"} size={29}/>
                </Pressable>
                <Pressable
                    onPress={()=>{
                        user.user_name
                            ?
                            user.user_name.length > 2
                                ?
                                    updateUser()
                                :
                                    setValidUser({user_name: user.user_name.length <= 2, user_description: user.user_description.length > 100, profile_pic: false})
                            :
                                setValidUser({user_name: user.user_name.length <= 2, user_description: user.user_description.length > 100, profile_pic: false})
                    }}
                    style={[AppLooks.paddingS]}
                >
                    <Ionicons name={"checkmark"} color={"white"} size={29}/>
                </Pressable>
            </View>
            <View style={[AppLooks.paddingXl, AppLooks.bgDarkGray, AppLooks.flex]}>
                <View style={[AppLooks.alignCenter, AppLooks.paddingMBot]}>
                    <Pressable 
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
                            source={userPlacehold}
                            style={[{marginRight: 10, width: Dimensions.get("screen").width / 3.4, height: Dimensions.get("screen").width / 3.4}]}
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
                            maxLength={100}
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