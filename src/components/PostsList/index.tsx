import React, { useEffect, useState } from 'react'
import { Text, FlatList, View, Dimensions, VirtualizedList } from 'react-native';
import Post from '@components/Post';
import PostLoader from '../PostLoader';
import { sendVote } from '@src/services/Posts.services';
import { postType } from '@src/shared/interfaces/posts.type';
//import { format } from 'timeago.js';

function PostsList({ data, header, fixed, refFunc, state, updateFeed }: any) {

    interface item{
        item: postType
    }

    const RenderItem = ({item}: item) => {    
    
        const [iVoted, setIVoted] = useState(false)
        const [load, setLoad] = useState(4)
        const [myVote, setMyVote] = useState({
            up: 0,
            down: 0
        })

        const voting = (vote: number, voteType: string)=>{
            sendVote(vote, voteType).then((res)=>{
                voteType == 'p'
                ?
                    setMyVote({...myVote, up: 1})
                :
                    setMyVote({...myVote, down: 1})
                setIVoted(true)

                setTimeout(() => {
                    updateFeed()
                }, 600)
            }).catch((err)=>{
                alert(err.response.data.errMessage)
            })
        }
    
        return(
            <Post
                //upload_time={format(item.post.upload_time)}
                upload_time={`${item.post.upload_time.slice(0, 10)}`}
                iVoted={item.iVoted?item.iVoted:iVoted}
                votingP={()=> voting(item.post.post_id, "p")}
                votingN={()=> voting(item.post.post_id, "n")}
                upVotes={item.upVotes.length + myVote.up}
                downVotes={item.downVotes.length + myVote.down}
                profile_pic={item.post.profile_pic}
                //vote={item.post.post_id}
                userId={item.post.user_id}
                user_name={item.post.user_name}
                post_image={item.post.post_image}
                post_tag={item.post.post_tag}
                post_description={item.post.post_description}
            />
        )
    }

    const onRefresh = ()=>{
        refFunc()
    }

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
    const getItem = (data: postType[], index: number) => (
        data[index]
    )

    const getCoun = (data: postType[]) => data.length

    return (
        <>
            {
                <>
                    {
                        data.length == 0
                        ?
                            <LoadPost/>
                        :
                            <VirtualizedList
                                initialNumToRender={6}
                                onRefresh={onRefresh}
                                refreshing={state}
                                data={data}
                                keyExtractor={item => item.post.post_id + " 1" + Date.now()}
                                renderItem={({ item }) => (
                                    state
                                    ?
                                        <LoadPost/>
                                    :
                                        <RenderItem
                                            item={item}
                                        />
                                )}
                                showsVerticalScrollIndicator={false}
                                stickyHeaderIndices={fixed ?? []}
                                ListHeaderComponent={header}
                                listKey={`D${Date.now()}`}
                                getItemCount={getCoun}
                                getItem={getItem}
                            />
                    }
                    {/* 
                    <FlatList
                        initialNumToRender={4}
                        onRefresh={onRefresh}
                        refreshing={state}
                        data={data.slice(0, load)}
                        onEndReached={() => {

                            console.log("carga");

                            data.length > load
                            ?
                                setLoad(load + 4)
                            :
                                null
                        }}
                        onEndReachedThreshold={4}
                        keyExtractor={item => Math.random() + " 1" + Date.now()}
                        renderItem={({ item }) => (
                            state
                            ?
                                <LoadPost/>
                            :
                                <RenderItem
                                    item={item}
                                />
                        )}
                        showsVerticalScrollIndicator={false}
                        stickyHeaderIndices={fixed ?? []}
                        ListHeaderComponent={header}
                        listKey={`D${Date.now()}`}
                    />  */}
                </>
            }
        </>
    )


}

export default PostsList