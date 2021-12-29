import { users } from "./services";
import { AxiosRequestHeaders } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUsers = (token: AxiosRequestHeaders)=>{
    return users.get("/users", {
        headers: token
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
}

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
        console.log("un loged");
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
    console.log("un loged");
    return e
  }

}