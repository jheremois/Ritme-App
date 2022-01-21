import React, { useState, useEffect } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import { ProfileInfo } from "@src/components/ProfileInfo";
import { getCurrentUser } from "@src/services/User.services";
import { profileType } from "@src/shared/interfaces/user.type";
import PostsList from "@src/components/PostsList";
import ProfileLoader from "@src/components/ProfileLoader";
import { postType } from "@src/shared/interfaces/posts.type";
import { getMyPosts } from "@src/services/Posts.services";
import { showToast } from "@src/helpers/consts";

const Profile = ({navigation}: any)=>{

  const [username, setUsername] = useState<profileType>(
    {
      email: "",
      profile_pic: null,
      user_description: "",
      user_id: null,
      user_name: ""
    }
  )

  const [posts, setPosts] = useState<postType[]>([
    {
        post_description: "",
        post_image: "h",
        post_tag: ".",
        upload_time: "2022-01-02T20:49:09.000Z",
        user_id: 1,
    }
])

  const [isFetching, setIsFetching] = useState(true);

  const getMe = ()=> {
    getCurrentUser().then((res)=> {
      setUsername(res?.data.response[0])
    }).catch((err)=>{
      console.log("user err ->", err)
    })
  }

  const loadPosts = async()=>{
    getMyPosts().then((res)=>{
        setPosts(res.data)
    }).catch((err)=>{
        showToast("error", err.message)
    })
  }

  const onRefresh = async () => {
    await setIsFetching(true);
    await getMe()
    await loadPosts()
    await setTimeout(()=>{
      setIsFetching(false);
    }, 600)
  }

  useEffect(()=>{
    onRefresh()
  }, [])
  
    return(
        <>
          {
            <PostsList
              data={posts}
              state={isFetching}
              refFunc={onRefresh}
              header={
                <>
                  {
                    isFetching
                      ?
                        <View>
                            <View style={{alignItems: "center", width: "100%"}}>
                                <View style={{maxWidth: Dimensions.get("screen").width, overflow: "hidden"}}>
                                    <ProfileLoader/>
                                </View>
                            </View>
                        </View>
                      :
                        <ProfileInfo 
                          user_name={username.user_name}
                          user_description={username.user_description}
                          profile_pic={username.profile_pic}
                          action={()=> navigation.navigate("settings")} 
                        />
                    }
                </>
              }
            />
          }
        </>
    )
}

export default Profile