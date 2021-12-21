import { Api } from "./Api";
import { formUserType, loginUserType } from "@src/shared/interfaces/user.type";
import { AxiosRequestHeaders } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const readHeaders = async()=>{
    try {
        const jsonValue = await AsyncStorage.getItem('user_data')
        //jsonValue != null ? setUsername(JSON.parse(jsonValue).user.user_name) : console.log("no hay nada")
    } catch(e) {
        console.log(e)
    }
}

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
            console.log("un loged");
            return null
        }
    } catch(e) {
        console.log("un loged");
        return null
    }
}