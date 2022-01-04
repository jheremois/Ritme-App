import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, Dimensions, Pressable, TextInput } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import { FlatInput } from "@src/components/FlatInput";
import { Ionicons } from "@expo/vector-icons";
import { pickImage } from "@src/helpers/ImageUplader";
import { PlaceholdImg } from "@src/helpers/consts";
import { createNewPost } from "@src/services/Posts.services";
import { postType } from "@src/shared/interfaces/posts.type";

const CreatePost = ({navigation}: any)=>{

    const [post, setPost] = useState<postType>(
        {
            post_description: "",
            post_image: "",
            post_tag: ""
        }
    )

    const [validPost, setValidPost] = useState({
        post_image: false,
        post_description: false,
        post_tag: false
    })

    const changeForm = (e: any, field: any) => {
        setPost({ ...post, [field]: e });
    };

    async function upImage() {
        const post_image = await pickImage();
    
        setPost({ ...post, post_image: post_image })
    
    }
    
    const checkImage = (img: string | any) => {

        if (img == null || img.length < 1) {
            return PlaceholdImg
        }
        return { uri: img }
    
    }

    const uploadPost = (data: postType)=>{
        //createNewPost(data)
        console.log(data);
    }
  
    return(
        <>
            <View style={[AppLooks.paddingSX, AppLooks.alignCenter, AppLooks.contentBetween, AppLooks.flexRow,AppLooks.bgGray]}>
                <Pressable
                    style={[AppLooks.paddingS]}
                    onPress={()=>{
                        navigation.goBack()
                    }}
                >
                    <Ionicons name={"close-sharp"} color={"white"} size={29}/>
                </Pressable>
                <Text
                    style={[AppLooks.textWhite, AppLooks.fontM, AppLooks.textS]}
                >
                    Create post
                </Text>
                <Pressable
                    onPress={()=>{
                        post.post_image && post.post_tag && post.post_description
                            ?
                            post.post_description.length > 1 && post.post_tag.length >= 1
                                ?
                                    uploadPost(post)
                                :
                                    setValidPost({
                                        post_image: false,
                                        post_description: post.post_description.length < 1,
                                        post_tag: post.post_tag.length < 1
                                    })
                            :
                                setValidPost({
                                    post_image: false,
                                    post_description: post.post_description.length < 1,
                                    post_tag: post.post_tag.length < 1
                                })
                    }}
                    style={[AppLooks.paddingS]}
                >
                    <Ionicons name={"checkmark"} color={"white"} size={29}/>
                </Pressable>
            </View>
            <View
                style={[AppLooks.alignCenter]}
            >
                <View style={[AppLooks.alignCenter]}>
                    <FlatInput
                        maxLength={100}
                        value={post.post_description}
                        validator={validPost.post_description}
                        errMsg={"post description is too short"}
                        onchangetext={(e: any) => changeForm(e, "post_description")}
                        label="Description"
                        placeHolder="Description"
                        textarea={true}
                    />
                    <FlatInput
                        maxLength={20}
                        value={post.post_tag}
                        validator={validPost.post_tag}
                        errMsg={"Every post must have a topic"}
                        onchangetext={(e: any) => changeForm(e, "post_tag")}
                        label="Topic"
                        placeHolder="Art, music, tech..."
                        textarea={false}
                    />
                </View>
                <Pressable
                    style={[{marginTop: 40}]}
                    onPress={()=>{
                        upImage()
                    }}
                >
                    <Image
                        style={[
                            AppLooks.roundedS,
                            {
                                height: Dimensions.get("screen").width / 1.3,
                                width: Dimensions.get("screen").width / 1.3,
                            }
                        ]}
                        source={checkImage(post.post_image)}
                        resizeMode="cover"
                    />
                </Pressable>
            </View>
        </>
    )
}

export default CreatePost