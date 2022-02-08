import { users } from "./services";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getCurrentUser = async ()=>{
    try {
        const jsonValue = await AsyncStorage.getItem('user_data')
        if(jsonValue != null){
            return users.get("/user", {
                headers: {
                    "user_token": JSON.parse(jsonValue).user_token
                }
            })
        }else{
            return null
        }
    } catch(e) {
        
        return null
    }
}

export const getUsers = async ()=>{
  try {
      const jsonValue = await AsyncStorage.getItem('user_data')
      if(jsonValue != null){
          return users.get(`/users`, {
              headers: {
                  "user_token": JSON.parse(jsonValue).user_token
              }
          })
      }else{
          return null
      }
  } catch(e) {
      
      return null
  }
}

export const getUser = async (user_id: number)=>{
  try {
      const jsonValue = await AsyncStorage.getItem('user_data')
      if(jsonValue != null){
          return users.get(`/user/${user_id}`, {
              headers: {
                  "user_token": JSON.parse(jsonValue).user_token
              }
          })
      }else{
          return null
      }
  } catch(e) {
      
      return null
  }
}

interface updateMe{
    user_description: string,
    user_name: string,
    profile_pic: string | null
}

export const updateMe = async (data: updateMe)=>{
  try {
    const jsonValue = await AsyncStorage.getItem('user_data')
    if(jsonValue != null){
      return users.patch("/user", data, {
        headers: {
          "user_token": JSON.parse(jsonValue).user_token
        }
      })
    }else{
      return null
    }
  } catch(e) {
    
    return e
  }

}