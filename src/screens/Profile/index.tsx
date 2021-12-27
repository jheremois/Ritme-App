import React, { useState, useEffect, useContext } from "react";
import { Pressable, Text } from "react-native";
import { userPlacehold } from "@src/helpers/consts";
import { ProfileInfo } from "@src/components/ProfileInfo";
import { getCurrentUser } from "@src/services/User.services";
import { profileType } from "@src/shared/interfaces/user.type";

const Profile = ({navigation}: any)=>{

  const [username, setUsername] = useState<profileType>(
    {
      email: "",
      profile_pic: userPlacehold,
      user_description: "",
      user_id: null,
      user_name: ""
    }
  )

  const getMe = ()=> getCurrentUser().then((res)=> {
      console.log("res user-> ", res?.data.response[0])
      setUsername(res?.data.response[0])
    }).catch((err)=>{
      console.log("user err ->", err)
    })

  useEffect(()=>{
    getMe()
  }, [])
  
    return(
        <>
          <ProfileInfo 
            user_name={username.user_name}
            user_description={username.user_description}
            profile_pic={userPlacehold}
            action={()=> navigation.navigate("settings")} 
          />
        </>
    )
}

export default Profile