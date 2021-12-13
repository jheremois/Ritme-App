import React, { useState } from "react";
import { Dimensions, View, Image, Text, Pressable, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import AuthInput from "@components/AuthInput";
import { AppLooks as al } from "@src/shared/styles/AppLooks";
import FormButton from "@src/components/FormButton";
import { AppColors } from "@src/shared/styles/AppResourses";
import { emailRegex, fullLogo } from "@src/helpers/consts";
import { formUserType } from "@src/shared/interfaces/user.type";
import { RegisterUser } from "@src/services/Auth.services";

const Register = ({navigation}: any)=>{

    const [form, setForm] = useState<formUserType>({
        email:    "",
        password: "",
        username: ""
    })

    const [inValidForm, setInValidForm] = useState<any>({
        email:    false,
        password: false,
        username: false
    })

    const [loading, setLoading] = useState<boolean>(false)

    const changeForm = (e: any, field: any) => {
        setForm({ ...form, [field]: e });
    };

    function sendForm() {
        let condition = {username: form.username.length <= 3, password: form.password.length <= 5, email: !form.email.match(emailRegex)}
        form.username.length <= 3 || form.password.length <= 5 || !form.email.match(emailRegex)
            ?
                setInValidForm(condition)
            :
                RegisterUser(form).then((res)=>{
                    setLoading(true)
                    console.log(res.data)
                    console.log(res.config.data)
                }).catch((err)=>{
                    console.log(err);
                })
    }

    return(
        <View style={[al.alignCenter, al.flex]}>
            <KeyboardAvoidingView behavior="position" style={[{width: Dimensions.get("screen").width / 1.12}]}>
                <View style={[al.paddingS, al.marginXxlY, al.alignCenter, al.contentCenter, {height: Dimensions.get("screen").height / 5}]}>
                    <Image 
                        source={fullLogo}
                        style={{height: 45, width: Dimensions.get("screen").width / 2.4}}
                    />
                </View>
                <KeyboardAvoidingView behavior="padding">
                    <View style={[al.paddingS]}>
                        <AuthInput 
                            dark={true}
                            value={form.username}
                            onchangetext={(e: any) => changeForm(e, "username")}
                            errMsg="Something is wrong"
                            validator={inValidForm.username}
                            placeHolder="My username"
                            label="User name"
                            keyboard={"name-phone-pad"} 
                        />
                    </View>
                    <View style={[al.paddingS]}>
                        <AuthInput 
                            dark={true}
                            value={form.email}
                            onchangetext={(e: any) => changeForm(e, "email")}
                            errMsg="Something is wrong"
                            validator={inValidForm.email}
                            placeHolder="valid@email.com"
                            label="Email"
                            keyboard={"email-address"} 
                        />
                    </View>
                    <View style={[al.paddingS]}>
                        <AuthInput 
                            dark={true}
                            value={form.password}
                            onchangetext={(e: any) => changeForm(e, "password")}
                            errMsg="Something is wrong"
                            validator={inValidForm.password}
                            placeHolder="Private password..."
                            label="Password"
                            keyboard={"visible-password"} 
                        />
                    </View>
                    <View style={[al.paddingS, al.marginMTop]}>
                    <FormButton
                        action={()=> {
                            sendForm()
                        }} 
                        color={AppColors.indigo}
                    >
                        {
                            loading?
                                <ActivityIndicator size={"large"} color={AppColors.white}/>
                            :
                                <Text
                                    style={[al.textWhite, al.fontM, al.textXM]}
                                >
                                    Register
                                </Text>
                        }
                    </FormButton>
                </View>
                </KeyboardAvoidingView>
                <View style={[al.flexRow, al.alignCenter, al.contentCenter, al.marginXlTop]}>
                    <Text style={[al.textS, al.textWhite]}>
                        Allready have an acount? 
                    </Text>
                    <Pressable onPress={()=> navigation.navigate("login")}>
                        <Text style={[{paddingHorizontal: 4, paddingVertical: 9}, al.textS, al.textIndigo, al.fontM]}>
                            Login
                        </Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Register