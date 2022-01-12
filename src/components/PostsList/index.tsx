import { AppLooks } from '@src/shared/styles/AppLooks';
import React, { useState } from 'react'
import { Text, FlatList, View, Dimensions } from 'react-native';
import Post from '@components/Post';
import PostLoader from '../PostLoader';

function PostsList({ data, header, fixed, actions, TopHead, atScroll, messageEmpy, refFunc, state }: any) {

    const renderItem = ({ item }: any) => (
        <Post
            profile_pic={item.profile_pic}
            vote={item.post_id}
            user_name={item.user_name}
            post_image={item.post_image}
            post_tag={item.post_tag}
            post_description={item.post_description}
        />
    )

    const LoadPost = ()=>{
        return(
            <View>
                <View style={{alignItems: "center", width: "100%"}}>
                    <View style={{maxWidth: Dimensions.get("screen").width / 1.1, overflow: "hidden", paddingVertical: 20}}>
                        <PostLoader/>
                    </View>
                </View>
            </View>
        )
    }

    const [load, setLoad] = useState(4)

    return (
        <>
            {TopHead}
            {
                //data.length > 0?
                    <FlatList
                        initialNumToRender={4}
                        onRefresh={refFunc}
                        refreshing={state}
                        data={data.slice(0, load)}
                        onEndReached={() => {
                            setLoad(load + 2)
                            console.log("end")
                        }}
                        onEndReachedThreshold={0.3}
                        keyExtractor={item => Math.random() + " 1" + Date.now()}
                        renderItem={
                            state
                            ?
                                LoadPost
                            :
                                renderItem
                        }
                        showsVerticalScrollIndicator={false}
                        stickyHeaderIndices={fixed ?? []}
                        ListHeaderComponent={header}
                        listKey={`D${Date.now()}`}
                    />
                /*:
                    <View>
                        <Text>
                            Nothing here
                        </Text>
                    </View>
                */
            }
        </>
    )


}

export default PostsList