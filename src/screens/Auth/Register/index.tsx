import React, { useState } from "react";
import { Dimensions, View, Image, Text, Pressable, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import AuthInput from "@components/AuthInput";
import { AppLooks as al } from "@src/shared/styles/AppLooks";
import FormButton from "@src/components/FormButton";
import { AppColors } from "@src/shared/styles/AppResourses";
import { emailRegex, fullLogo, showToast } from "@src/helpers/consts";
import { formUserType } from "@src/shared/interfaces/user.type";
import { RegisterUser } from "@src/services/Auth.services";

const Register = ({navigation}: any)=>{

    const [form, setForm] = useState<formUserType>({
        email:    "",
        password: "",
        user_name: ""
    })

    const [inValidForm, setInValidForm] = useState<any>({
        email:    false,
        password: false,
        user_name: false
    })

    const [loading, setLoading] = useState<boolean>(false)

    const changeForm = (e: any, field: any) => {
        setForm({ ...form, [field]: e });
    };

    function sendForm() {
        setLoading(true)
        setInValidForm({user_name: form.user_name.length <= 3, password: form.password.length <= 5, email: !form.email.match(emailRegex)})

        form.user_name.length <= 3 || form.password.length <= 5 || !form.email.match(emailRegex)
            ?
                setLoading(false)
            :
                RegisterUser(form).then(()=>{
                    navigation.navigate("login")
                    setLoading(false)
                }).catch((error)=> {
                    if (!error.status) {
                        setLoading(false)
                        showToast("error", error.response.data.errMessage)
                        
                    }else{
                        setLoading(false)
                        showToast("error", error.response.data.errMessage)
                    }
                });
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
                            value={form.user_name}
                            onchangetext={(e: any) => changeForm(e, "user_name")}
                            errMsg="Place a valid user name"
                            validator={inValidForm.user_name}
                            placeHolder="Place your user name"
                            label="User name"
                            keyboard={"default"} 
                        />
                    </View>
                    <View style={[al.paddingS]}>
                        <AuthInput 
                            dark={true}
                            value={form.email}
                            onchangetext={(e: any) => changeForm(e, "email")}
                            errMsg="Something is wrong in your email"
                            validator={inValidForm.email}
                            placeHolder="placeYour@email.com"
                            label="Email"
                            keyboard={"email-address"} 
                        />
                    </View>
                    <View style={[al.paddingS]}>
                        <AuthInput 
                            visible={true}
                            dark={true}
                            value={form.password}
                            onchangetext={(e: any) => changeForm(e, "password")}
                            errMsg="Not a valid password"
                            validator={inValidForm.password}
                            placeHolder="Private password..."
                            label="Password"
                            keyboard={"ascii-capable"} 
                        />
                    </View>
                    <View style={[al.paddingS, al.marginMTop]}>
                    {
                        loading
                            ?
                                <FormButton
                                    action={()=> {}} 
                                    color={AppColors.indigo}
                                >
                                    <ActivityIndicator size={"large"} color={AppColors.white}/>
                                </FormButton>
                            :
                                <FormButton
                                    action={()=> {
                                        sendForm()
                                    }} 
                                    color={AppColors.indigo}
                                >
                                    <Text
                                        style={[al.textWhite, al.fontM, al.textXM]}
                                    >
                                        Register!
                                    </Text>
                                </FormButton>
                    }
                </View>
                </KeyboardAvoidingView>
                <View style={[al.flexRow, al.alignCenter, al.contentCenter, al.marginXlTop]}>
                    <Text style={[al.textS, al.textWhite]}>
                        already have an acount? 
                    </Text>
                    <Pressable onPress={()=> navigation.navigate("login")}>
                    <Text style={[{paddingHorizontal: 4, paddingVertical: 9}, al.textS, al.textWhite, {textDecorationLine: "underline"}, al.fontM]}>
                            Login
                        </Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Register