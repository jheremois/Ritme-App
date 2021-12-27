import { Api } from "./Api";
import { AxiosRequestHeaders } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUsers = (token: AxiosRequestHeaders)=>{
    return Api.get("/users", {
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
            return Api.get("/user", {
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