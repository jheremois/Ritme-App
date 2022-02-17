import { posts } from "./services";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FormPostType } from "@src/shared/interfaces/posts.type";

// Api v2:

export const getFeed = async () => {
    const jsonValue = await AsyncStorage.getItem('user_data')

    return posts.get(`/feed`, {
        headers: {
          "user_token": JSON.parse(jsonValue!).user_token
        }
    })
}

export const getMyFeed = async () => {
    const jsonValue = await AsyncStorage.getItem('user_data')

    return posts.get("/profile", {
        headers: {
          "user_token": JSON.parse(jsonValue!).user_token
        }
    })
}

export const getUserFeed = async (id: number) => {
    const jsonValue = await AsyncStorage.getItem('user_data')

    return posts.get(`/profile/${id}`, {
        headers: {
          "user_token": JSON.parse(jsonValue!).user_token
        }
    })
}

export const getPostsByTag = async (tag: string) => {
    const jsonValue = await AsyncStorage.getItem('user_data')

    return posts.get(`/feed/${tag}`, {
        headers: {
          "user_token": JSON.parse(jsonValue!).user_token
        }
    })
}

export const getTags = async () => {
    const jsonValue = await AsyncStorage.getItem('user_data')

    return posts.get(`/tags`, {
        headers: {
          "user_token": JSON.parse(jsonValue!).user_token
        }
    })
}

export const createNewPost = async (data: FormPostType)=>{
    const jsonValue = await AsyncStorage.getItem('user_data')
    if(jsonValue != null){
        return posts.post("/post", data,{
            headers: {
                "user_token": JSON.parse(jsonValue).user_token
            }
        })
    }
}

export const Getvotes = async (post_id: number | string) => {
    const jsonValue = await AsyncStorage.getItem('user_data')

    return posts.get(`/votes/${post_id}`, {
        headers: {
          "user_token": JSON.parse(jsonValue!).user_token
        }
    })
}

export const sendVote = async (post_id: number, vote_type: string) => {
    const jsonValue = await AsyncStorage.getItem('user_data')

    return posts.post(`/vote/${post_id}/${vote_type}`, {}, {
        headers: {
          "user_token": JSON.parse(jsonValue!).user_token
        }
    })
}