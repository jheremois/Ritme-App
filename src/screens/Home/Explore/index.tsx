import React, { useState, useEffect, useContext } from "react";
import InnerNav from "@src/components/InnerNav";
import { View, Text, FlatList } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "@src/context/userContext";
import Post from "@src/components/Post";

const Explore = ()=>{

    const [username, setUsername] = useState("")
    const {userData} = useContext(UserContext)

    const readHeaders = async()=>{
        try {
            const jsonValue = await AsyncStorage.getItem('user_data')
            jsonValue != null ? setUsername(JSON.parse(jsonValue).user.username) : Error
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        readHeaders()
    })
  
    return(
        <>
            <InnerNav/> 
            <View style={{paddingBottom: 42}}>
                <FlatList
                    data={[2,1]}
                    keyExtractor={item => Math.random() + " 1" + Date.now()}
                    renderItem={Post}
                />
            </View>
        </>
    )
}

export default Explore