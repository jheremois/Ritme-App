import React, { useState, useEffect } from "react";
import { Dimensions, View } from "react-native";
import { ProfileInfo } from "@src/components/ProfileInfo";
import { getCurrentUser, getUser } from "@src/services/User.services";
import { profileType } from "@src/shared/interfaces/user.type";
import PostsList from "@src/components/PostsList";
import ProfileLoader from "@src/components/ProfileLoader";
import { postType } from "@src/shared/interfaces/posts.type";
import { getMyFeed, getUserFeed } from "@src/services/Posts.services";
import { showToast } from "@src/helpers/consts";
import GoBack from "@src/components/GoBack";

const Profile = ({navigation, route}: any)=>{

  const [username, setUsername] = useState<profileType>(
    {
      email: "",
      profile_pic: null,
      user_description: "",
      user_id: null,
      user_name: ""
    }
  )

  const [posts, setPosts] = useState<postType[]>([])

  const [isFetching, setIsFetching] = useState(true);

  const getMe = ()=> {
    getCurrentUser().then((res)=> {
      setUsername(res?.data.response[0])
    }).catch((err)=>{
      
    })
  }

  const getUsers = (user_id: number)=>{
    getUser(user_id).then((res)=> {
      setUsername(res?.data.response[0])
    }).catch((err)=>{
      
    })
  }

  const loadPosts = async()=>{
    
    route.params
      ?
        getUserFeed(route.params.id).then((res)=>{
          setPosts(res.data)
        }).catch((err)=>{
            showToast("error", err.message)
        })
      :
        getMyFeed().then((res)=>{
            setPosts(res.data)
        }).catch((err)=>{
            showToast("error", err.message)
        })
  }

  const onRefresh = async () => {
    await setIsFetching(true);
    route.params
    ?
      await getUsers(route.params.id)
    :
      await getMe()
    await loadPosts().finally(()=>{
      setTimeout(()=>{
        setIsFetching(false);
      }, 600)
    })
    
  }

  useEffect(()=>{
    onRefresh()
  }, [])
  
    return(
        <>
          {
            route.params
            ?
              <GoBack
                title={username.user_name}
              />
            :
              null
          }
            <PostsList
              data={posts.sort((a: postType, b: postType) => b.post.post_id - a.post.post_id)}
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
                          isMe={route.params}
                          user_name={username.user_name}
                          user_description={username.user_description}
                          profile_pic={username.profile_pic}
                          action={()=> navigation.navigate("editProfile")} 
                        />
                    }
                </>
              }
            />
        </>
    )
}

export default Profile