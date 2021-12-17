import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "@src/context/userContext";
import { userPlacehold } from "@src/helpers/consts";
import { ProfileInfo } from "@src/components/ProfileInfo";

const Profile = ()=>{

    const [username, setUsername] = useState("")
    const {userData} = useContext(UserContext)

    const readHeaders = async()=>{
        try {
            const jsonValue = await AsyncStorage.getItem('user_data')
            jsonValue != null ? setUsername(JSON.parse(jsonValue).user.username) : console.log("no hay nada")
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        readHeaders()    
    })
  
    return(
        <>
            <ProfileInfo username={username} image={userPlacehold} />
        </>
    )
}

export default Profile