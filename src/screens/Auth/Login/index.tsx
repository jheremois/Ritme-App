import React, { useState } from "react";
import { Dimensions, View, Image, Text, Pressable } from "react-native";
import AuthInput from "@components/AuthInput";
import { AppLooks as al } from "@src/shared/styles/AppLooks";
import FormButton from "@src/components/FormButton";
import { AppColors } from "@src/shared/styles/AppResourses";
import { fullLogo } from "@src/helpers/consts";

const Login = ({navigation}: any)=>{
    return(
        <View style={[al.alignCenter, al.flex]}>
            <View style={[{width: Dimensions.get("screen").width / 1.12}]}>
                <View style={[al.paddingS, al.marginXxlY, al.alignCenter, al.contentCenter, {height: Dimensions.get("screen").height / 5}]}>
                    <Image 
                        source={fullLogo}
                        style={{height: 45, width: Dimensions.get("screen").width / 2.4}}
                    />
                </View>
                <View>
                    <View style={[al.paddingS]}>
                        <AuthInput dark={true} value="" errMsg="Something is wrong" validator={false} placeHolder="valid@email.com" label="Email" keyboard={"email-address"} />
                    </View>
                    <View style={[al.paddingS]}>
                        <AuthInput dark={true} value="" errMsg="Something is wrong" validator={false} placeHolder="Private password..." label="Password" keyboard={"email-address"} />
                    </View>
                </View>
                <View style={[al.paddingS, al.marginMTop]}>
                    <FormButton text="Login" action={console.log("A")} textColor={AppColors.white} color={AppColors.indigo}/>
                </View>
                <View style={[al.flexRow, al.alignCenter, al.contentCenter, al.marginMTop]}>
                    <Text style={[al.textS, al.textWhite]}>
                        New here?
                    </Text>
                    <Pressable onPress={()=> navigation.navigate("register")}>
                        <Text style={[{paddingHorizontal: 4, paddingVertical: 9}, al.textS, al.textIndigo, al.fontM]}>
                            Register
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Login