import React, { useState } from "react";
import { Dimensions, View, Image, Text, Pressable, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import AuthInput from "@components/AuthInput";
import { AppLooks as al } from "@src/shared/styles/AppLooks";
import FormButton from "@src/components/FormButton";
import { AppColors } from "@src/shared/styles/AppResourses";
import { emailRegex, fullLogo } from "@src/helpers/consts";
import { formUserType, loginUserType } from "@src/shared/interfaces/user.type";
import { loginUser } from "@src/services/Auth.services";

const Login = ({navigation}: any)=>{

    const [form, setForm] = useState<loginUserType>({
        email: "",
        password: "",
    })

    const [inValidForm, setInValidForm] = useState({
        email: false,
        password: false,
    })
    const [loading, setLoading] = useState<boolean>(false)

    const changeForm = (e: any, field: any) => {
        setForm({ ...form, [field]: e });
    };

    function sendForm() {
        let condition = {password: form.password.length <= 5, email: !form.email.match(emailRegex)}
            form.password.length <= 5 || !form.email.match(emailRegex)
            ?
                setInValidForm(condition)
            :
                loginUser(form).then((res)=>{
                    setLoading(true)
                    console.log(res.data)
                    console.log(res.config.data)
                }).catch((err)=>{
                    console.log(err);
                })
    }

    return(
        <KeyboardAvoidingView behavior="padding" style={[al.alignCenter, al.flex]}>
            <KeyboardAvoidingView behavior="position" style={[{width: Dimensions.get("screen").width / 1.12}]}>
                <Pressable onPress={()=> navigation.navigate("app")} style={[al.paddingS, al.marginXxlY, al.alignCenter, al.contentCenter, {height: Dimensions.get("screen").height / 5}]}>
                    <Image 
                        source={fullLogo}
                        style={{height: 45, width: Dimensions.get("screen").width / 2.4}}
                    />
                </Pressable>
                <View>
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
                </View>
                <View style={[al.paddingS, al.marginMTop]}>
                    <FormButton action={()=> {
                        sendForm()
                    }} color={AppColors.indigo}>
                        {
                            loading?
                                <ActivityIndicator size={"large"} color={AppColors.white}/>
                            :
                                <Text
                                    style={[al.textWhite, al.fontM, al.textXM]}
                                >
                                    Login
                                </Text>
                        }
                    </FormButton>
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
            </KeyboardAvoidingView>
        </KeyboardAvoidingView>
    )
}

export default Login