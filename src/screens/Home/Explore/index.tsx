import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import PostsList from "@src/components/PostsList";
import { postType } from "@src/shared/interfaces/posts.type";
import { getFeed } from "@src/services/Posts.services";
import { showToast } from "@src/helpers/consts";

const Explore = ()=>{

    const [isFetching, setIsFetching] = useState(false);
    const [posts, setPosts] = useState<postType[] | any>([])

    const onRefresh = async () => {
        await setIsFetching(true);
        loadPosts()
    };

    const loadPosts = async()=>{
        getFeed().then((res)=>{
            setPosts(res.data)
            setTimeout(() => {
                setIsFetching(false);
            }, 1000);
        }).catch((err)=>{
            setTimeout(() => {
                setIsFetching(false);
            }, 1000);
            showToast("error", err.response)
        })
    }

    const loadThem = async()=>{
        getFeed().then((res)=>{
            setPosts(res.data)
        }).catch((err)=>{
            showToast("error", err.response)
        })
    }

    useEffect(()=>{
        setIsFetching(true)
        loadPosts()
    }, [])

    return(
        <>
            <View style={{paddingBottom: 0}}>
                <PostsList
                    updateFeed={loadThem}
                    data={posts.sort((a: any, b:any) => b.post.post_id - a.post.post_id)}
                    state={isFetching}
                    refFunc={onRefresh}
                />
            </View>
        </>
    )
}

export default Explore