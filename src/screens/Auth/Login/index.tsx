import React, { useContext, useEffect, useState } from "react";
import { Dimensions, View, Image, Text, Pressable, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import AuthInput from "@components/AuthInput";
import { AppLooks as al } from "@src/shared/styles/AppLooks";
import FormButton from "@src/components/FormButton";
import { AppColors } from "@src/shared/styles/AppResourses";
import { emailRegex, fullLogo } from "@src/helpers/consts";
import { loginUserType } from "@src/shared/interfaces/user.type";
import { loginUser } from "@src/services/Auth.services";
import { UserContext } from "@src/context/userContext";
import { showToast } from "@src/helpers/consts";

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
    const { saveCredentials } = useContext(UserContext);

    const changeForm = (e: any, field: any) => {
        setForm({ ...form, [field]: e });
    };

    const logUser = ()=>{
        setLoading(true)
        setInValidForm({password: form.password.length <= 5, email: !form.email.match(emailRegex)})
        loginUser(form).then( async (res)=>{
            try {
                saveCredentials(res.data.data)
                await setLoading(false)
                navigation.replace("splash")
            } catch (e) {
                showToast("error", "Error trying to authenticate")
                await setLoading(false)
            }
        }).catch(async (err)=>{
            showToast("error", err.response.data.errMessage)
            await setLoading(false)
        })
    }

    function sendForm() {
        let condition = {password: form.password.length <= 5, email: !form.email.match(emailRegex)}
        form.password.length <= 5 || !form.email.match(emailRegex)
            ?
                setInValidForm(condition)
            :
                logUser()
    }

    return(
        <KeyboardAvoidingView behavior="padding" style={[al.alignCenter, al.flex]}>
            <KeyboardAvoidingView behavior="position" style={[{width: Dimensions.get("screen").width / 1.12}]}>
                <View style={[al.paddingS, al.marginXxlY, al.alignCenter, al.contentCenter, {height: Dimensions.get("screen").height / 5}]}>
                    <Image 
                        source={fullLogo}
                        style={{height: 45, width: Dimensions.get("screen").width / 2.4}}
                    />
                </View>
                <View>
                    <View style={[al.paddingS]}>
                        <AuthInput 
                            dark={true}
                            value={form.email}
                            onchangetext={(e: string) => changeForm(e, "email")}
                            errMsg="Place a valid email"
                            validator={inValidForm.email}
                            placeHolder="valid@email.com"
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
                            errMsg="Invalid password"
                            validator={inValidForm.password}
                            placeHolder="Private password..."
                            label="Password"
                            keyboard={"default"} 
                        />
                    </View>
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
                                        Login
                                    </Text>
                                </FormButton>
                    }
                </View>
                <View style={[al.flexRow, al.alignCenter, al.contentCenter, al.marginMTop]}>
                    <Text style={[al.textS, al.textWhite]}>
                        New here?
                    </Text>
                    <Pressable onPress={()=> navigation.navigate("register")}>
                        <Text style={[{paddingHorizontal: 4, paddingVertical: 9}, al.textS, al.textWhite, {textDecorationLine: "underline"}, al.fontM]}>
                            Register
                        </Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </KeyboardAvoidingView>
    )
}

export default Login