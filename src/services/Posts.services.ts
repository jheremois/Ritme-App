import { posts } from "./services";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { postType } from "@src/shared/interfaces/posts.type";

export const getPosts = async ()=>{
    const jsonValue = await AsyncStorage.getItem('user_data')
    if(jsonValue != null){
        return posts.get("/posts", {
            headers: {
                "user_token": JSON.parse(jsonValue).user_token
            }
        })
    }

    return posts.get("/posts", {
        headers: {
            "user_token": ""
        }
    })

}

export const createNewPost = async (data: postType)=>{
    const jsonValue = await AsyncStorage.getItem('user_data')
    if(jsonValue != null){
        return posts.patch("/post", data,{
            headers: {
                "user_token": JSON.parse(jsonValue).user_token
            }
        })
    }
}
