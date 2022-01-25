import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Dimensions, Button } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import PostsList from "@src/components/PostsList";
import { AppColors } from "@src/shared/styles/AppResourses";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const Trending = ()=>{

    const [isFetching, setIsFetching] = useState(false);

    const onRefresh = async () => {
        await setIsFetching(true);
        setTimeout(() => {
            setIsFetching(false);
        }, 3000);
    };

    const loadPosts = async()=>{
        
    }

    useEffect(()=>{
        loadPosts()
    })

    const offset = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
        width: offset.value * 500,
        //transform: [{ translateX: offset.value * 255 }],
        };
    });

    

    return(
        <>
            <View 
                style={[
                    {paddingBottom: 0}, 
                    AppLooks.alignCenter, 
                    AppLooks.contentCenter, 
                    AppLooks.h50
                ]}
            >
                <Animated.View
                    style={[
                        AppLooks.shadowM,
                        AppLooks.bgGray,
                        AppLooks.roundedM,
                        AppLooks.paddingS,
                        AppLooks.paddingMY,
                        {width: Dimensions.get("screen").width / 1.6}
                    ]}
                >
                    <View>
                        <Text
                            style={[
                                AppLooks.textCenter,
                                AppLooks.fontM,
                                AppLooks.textL,
                                AppLooks.textWhite
                            ]}
                        >
                            Coming soon
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={[
                                AppLooks.textCenter,
                                AppLooks.textS,
                                AppLooks.paddingSY,
                                {color: AppColors.whiteLow}
                            ]}
                        >
                            This zone still in development
                        </Text>
                    </View>
                </Animated.View>
            </View>
        </>
    )
}

export default Trending