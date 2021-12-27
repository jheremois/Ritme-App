import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { AppLooks } from '@src/shared/styles/AppLooks';
import { AppColors } from '@src/shared/styles/AppResourses';

interface props{
    title?: string
}

function GoBack(props: props) {
    const {title} = props

    const navigate = useNavigation()

    return (
        <>
            <View style={[AppLooks.paddingSX, AppLooks.wFull, AppLooks.contentCenter, AppLooks.bgGray, {zIndex: 99}]}>
                <View style={[AppLooks.flexRow, AppLooks.alignCenter, AppLooks.contentBetween]}>
                    <Pressable
                        onPress={() => navigate.goBack()} 
                        style={[AppLooks.paddingM]}
                    >
                        <Ionicons name="arrow-back" size={26} color={AppColors.white} />
                    </Pressable>
                    <Text style={[AppLooks.paddingMX, AppLooks.textM, AppLooks.textWhite, AppLooks.fontM]}>
                        {title}
                    </Text>
                </View>
            </View>
        </>
    )

}

export default GoBack