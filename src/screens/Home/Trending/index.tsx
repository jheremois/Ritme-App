import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Dimensions, Button, Pressable } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import PostsList from "@src/components/PostsList";
import { AppColors } from "@src/shared/styles/AppResourses";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { postType } from "@src/shared/interfaces/posts.type";
import { getPosts, getPostsTags, getTags } from "@src/services/Posts.services";
import { showToast } from "@src/helpers/consts";

const Trending = ()=>{

    const [isFetching, setIsFetching] = useState(false);
    const [tagList, setTegList] = useState<any[]>()
    const [activeTag, setActiveTag] = useState<string>("")
    const [posts, setPosts] = useState<postType[]>([])

    const onRefresh = async () => {
        await setIsFetching(true);
        setTimeout(() => {
            setIsFetching(false);
        }, 3000);
    };

    const loadPosts = async()=>{
        getPosts().then((res)=>{
            setPosts(res.data)
            setTimeout(() => {
                setIsFetching(false);
            }, 1000);
        }).catch((err)=>{
            setTimeout(() => {
                setIsFetching(false)
            }, 1000);
            showToast("error", err.response)
        })
    }

    const loadPostsByTag = (activeTag: string)=>{
        getPostsTags(activeTag).then((res)=>{
            setPosts(res.data)
            setTimeout(() => {
                setIsFetching(false);
            }, 1000);
        }).catch((err)=>{
            setTimeout(() => {
                setIsFetching(false)
            }, 1000);
            showToast("error", err.response)
        })
    }
    
    useEffect(()=>{
        //setIsFetching(true);
        getTags().then((res)=>{
            setTegList(res.data)
        }).catch((err)=>{
            console.log(err.message);
        }).finally(()=>{
            console.log("esto: ", tagList);
            
        })
        //loadPosts()
    }, []) 

    return(
        <>
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    listKey={`D${Date.now()}`}
                    keyExtractor={item => Math.random() + " 1" + Date.now()}
                    data={tagList}
                    horizontal={true}
                    renderItem={
                        (data: any)=>{
                            return(
                                <View
                                    style={[
                                        AppLooks.paddingMY,
                                        {
                                            marginHorizontal: 4
                                        }
                                    ]}
                                >
                                    <Pressable
                                        onPress={()=>{
                                            setActiveTag(data.item.post_tag)
                                            loadPostsByTag(data.item.post_tag)
                                        }}
                                        style={[{
                                            borderRadius: 20,
                                            borderColor: activeTag == data.item.post_tag? AppColors.indigo : AppColors.whiteLow,
                                            paddingVertical: 5,
                                        },
                                        AppLooks.rounded,
                                        AppLooks.bgBlack,
                                        AppLooks.borderXl,
                                        AppLooks.paddingSX,
                                        AppLooks.alignCenter,
                                        AppLooks.contentCenter,
                                        ]}
                                    >
                                        <Text
                                            style={[
                                                activeTag == data.item.post_tag? AppLooks.textIndigo : AppLooks.textWhite,
                                                AppLooks.fontXl
                                            ]}
                                        >
                                            {
                                                data.item.post_tag
                                            }
                                        </Text>
                                    </Pressable>
                                </View>
                            )
                        }
                    }
                />
            </View>
            <PostsList
                data={posts}
                state={isFetching}
                refFunc={onRefresh}
            />
            {/* 
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
             */}
        </>
    )
}

export default Trending