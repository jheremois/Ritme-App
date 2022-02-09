import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import { Ionicons } from "@expo/vector-icons";
import { AppColors } from "@src/shared/styles/AppResourses";
import { UserContext } from "@src/context/userContext";
import FormButton from "@src/components/FormButton";

const NoConection = ({navigation}: any)=>{

    return(
        <View
            style={[
                {

                    height: "80%",
                },
                AppLooks.alignCenter,
                AppLooks.contentCenter
            ]}
        >
            <View
                style={[
                    AppLooks.alignCenter,
                    AppLooks.contentCenter
                ]}
            >
                <Ionicons name="wifi" size={50} color={AppColors.whiteLow} />
                <Text
                    style={[
                        AppLooks.textXM,
                        AppLooks.fontM,
                        AppLooks.textWhite,
                        AppLooks.marginMY
                    ]}
                >
                    No internet Connection
                </Text>
                <FormButton action={()=> navigation.navigate("splash")} color={AppColors.indigo}>
                    <Text
                        style={[
                            AppLooks.w50,
                            AppLooks.textCenter,
                            AppLooks.textS,
                            AppLooks.textWhite,
                            AppLooks.fontM
                        ]}
                    >
                        Retry
                    </Text>
                </FormButton>
            </View>
        </View>
    )
}

export default NoConection