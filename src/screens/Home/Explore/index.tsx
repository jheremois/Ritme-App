import React, { useState, useEffect, useContext } from "react";
import InnerNav from "@src/components/InnerNav";
import { View, Text, FlatList } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import { UserContext } from "@src/context/userContext";
import PostsList from "@src/components/PostsList";
import { postType } from "@src/shared/interfaces/posts.type";
import { getPosts } from "@src/services/Posts.services";

const Explore = ()=>{

    const [isFetching, setIsFetching] = useState(false);
    const [posts, setPosts] = useState<postType[]>([
        {
            post_description: "La para 01",
            post_image: "https://lh3.googleusercontent.com/pXGlOyBba25bIdBx6IyETSZvu0u5F4oW-vRC41RuF270L_sX7rxnlgDjeCy3saY-Q_euVweABXs8T8RQIkcd3Jlia0p0m9DbcM9W5h6mwwHtoUT9nbEgb-7ayuPU1ak41ciPI5M5YWZfJD5NL9f04DuNUEbCNJzDD7VnMbbt_xhG29TEMgjThvDXfTyptfM4A0V8io8-5AyGdnvFm-p6pI88fRofwqs3aRiG-qYMLzYhhMsT5Wzq2gEkwesSJotz5fmwO08TY1V9IxxuDgCto_fPmGJ7JqtErillRK7ejLk5MZ9i-bXnyCrjjPLXRu9dvj3KeZa3-4njRAgbopDnM03kTEy5TKne8n0SNjtSN736ok8fHjMN7Ezc0cCrUBhwoxYYdM9s4vJLFQeNTOaYktls4BJbestW03k51MFJ3HF9DK0Rghsvoz2Lb_MTF8A5fQbsNLYqeHZJMyQsE2mWX1zCfUQwELRhAjL8PC81mkLwgDDyukXhy3J2EvBOYZWN99axJN6yTGiVdI_lP7XfuNHPNhX-xkANVPPT5oPZ0UdrK1wuBJos4PpXKFGJSZuaJg4eMsKA8ciu-0orbM7FqNJn70NA9ycyld9mTONsdzeJvSyRt1RUXQMASAd3mUx5eYPxU3JvwA2qb2e6O-MRqD7Yih35O0_wXdPRx_lj26Kchw5qN7F7A_UhwIPxowjOxW_hwhs2Ow5-iS5ilQ=w1050-h882-no?authuser=0",
            post_tag: "video",
            upload_time: "2022-01-02T20:49:09.000Z",
            user_id: 1,
        }
    ])

    const onRefresh = async () => {
        await setIsFetching(true);
        setTimeout(() => {
            setIsFetching(false);
        }, 3000);
    };

    const loadPosts = async()=>{
        getPosts().then((res)=>{
            console.log(res.data);
            //setPosts(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        loadPosts()
    }, [])

    return(
        <>
            {/* <InnerNav/>  */}
            <View style={{paddingBottom: 0}}>
                <PostsList
                    data={posts}
                    state={isFetching}
                    refFunc={onRefresh}
                    /* 
                    actions={{}}
                    TopHead={{}}
                    atScroll={{}}
                    messageEmpy={{}}
                    */
                />
            </View>
        </>
    )
}

export default Explore