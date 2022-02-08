import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import PostsList from "@src/components/PostsList";
import { AppColors } from "@src/shared/styles/AppResourses";
import { postType } from "@src/shared/interfaces/posts.type";
import { getPostsByTag, getTags } from "@src/services/Posts.services";
import { showToast } from "@src/helpers/consts";
import { getFeed } from "@src/services/Posts.services";

const Trending = ()=>{

    const [isFetching, setIsFetching] = useState(false);
    const [tagList, setTegList] = useState<{}[]>()
    const [activeTag, setActiveTag] = useState<string>("")
    const [posts, setPosts] = useState<postType[]>([])

    const onRefresh = async () => {
        await setIsFetching(true);
        loadPosts()
        setTimeout(() => {
            setIsFetching(false);
        }, 3000);
    };

    const loadPosts = async()=>{
        getFeed().then((res)=>{
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
        getPostsByTag(activeTag).then((res)=>{
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
        setIsFetching(true);
        loadPosts()
        getTags().then((res)=>{
            setTegList(res.data)
        }).catch((err)=>{
            
        })
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
                                            setIsFetching(true)
                                            setActiveTag(data.item.post_tag)
                                            loadPostsByTag(data.item.post_tag)
                                            setTimeout(() => {
                                                setIsFetching(false)
                                            }, 1000);
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
                data={
                    posts.sort((a: postType, b: postType) => {
                            
                        if(a.post.upload_time.slice(0,10) < b.post.upload_time.slice(0,10) ) return 1
                        if(a.post.upload_time.slice(0,10) > b.post.upload_time.slice(0,10) ) return -1

                        if(b.upVotes.length > a.upVotes.length) return 1
                        if(b.upVotes.length < a.upVotes.length) return -1

                        return 0

                    })
                }
                state={isFetching}
                refFunc={onRefresh}
            />
        </>
    )
}

export default Trending