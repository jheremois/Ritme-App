import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import PostsList from "@src/components/PostsList";
import { postType } from "@src/shared/interfaces/posts.type";
import { getPosts, sendVote } from "@src/services/Posts.services";
import { showToast } from "@src/helpers/consts";

const Explore = ()=>{

    const [isFetching, setIsFetching] = useState(false);
    const [posts, setPosts] = useState<postType[]>([
        {
            post_description: "",
            post_image: "https://lh3.googleusercontent.com/pXGlOyBba25bIdBx6IyETSZvu0u5F4oW-vRC41RuF270L_sX7rxnlgDjeCy3saY-Q_euVweABXs8T8RQIkcd3Jlia0p0m9DbcM9W5h6mwwHtoUT9nbEgb-7ayuPU1ak41ciPI5M5YWZfJD5NL9f04DuNUEbCNJzDD7VnMbbt_xhG29TEMgjThvDXfTyptfM4A0V8io8-5AyGdnvFm-p6pI88fRofwqs3aRiG-qYMLzYhhMsT5Wzq2gEkwesSJotz5fmwO08TY1V9IxxuDgCto_fPmGJ7JqtErillRK7ejLk5MZ9i-bXnyCrjjPLXRu9dvj3KeZa3-4njRAgbopDnM03kTEy5TKne8n0SNjtSN736ok8fHjMN7Ezc0cCrUBhwoxYYdM9s4vJLFQeNTOaYktls4BJbestW03k51MFJ3HF9DK0Rghsvoz2Lb_MTF8A5fQbsNLYqeHZJMyQsE2mWX1zCfUQwELRhAjL8PC81mkLwgDDyukXhy3J2EvBOYZWN99axJN6yTGiVdI_lP7XfuNHPNhX-xkANVPPT5oPZ0UdrK1wuBJos4PpXKFGJSZuaJg4eMsKA8ciu-0orbM7FqNJn70NA9ycyld9mTONsdzeJvSyRt1RUXQMASAd3mUx5eYPxU3JvwA2qb2e6O-MRqD7Yih35O0_wXdPRx_lj26Kchw5qN7F7A_UhwIPxowjOxW_hwhs2Ow5-iS5ilQ=w1050-h882-no?authuser=0",
            post_tag: "",
            upload_time: "",
            user_id: 1,
        }
    ])

    const onRefresh = async () => {
        await setIsFetching(true);
        loadPosts()
        setTimeout(() => {
            setIsFetching(false);
        }, 1000);
    };

    const loadPosts = async()=>{
        getPosts().then((res)=>{
            setPosts(res.data)
        }).catch((err)=>{
            showToast("error", err.response)
        })
    }

    useEffect(()=>{
        setIsFetching(true);
        loadPosts()
        setTimeout(() => {
            setIsFetching(false);
        }, 1000);
    }, [])

    return(
        <>
            <View style={{paddingBottom: 0}}>
                {/* <Pressable
                    style={{padding: 90}}
                    onPress={()=>{
                        sendVote(27, "p")
                    }}
                >
                    <Text>
                        Aaaaaaaaa
                    </Text>
                </Pressable> */}
                <PostsList
                    data={posts}
                    state={isFetching}
                    refFunc={onRefresh}
                />
            </View>
        </>
    )
}

export default Explore