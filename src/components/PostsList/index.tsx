import React, { useState } from 'react'
import { View, Dimensions, VirtualizedList, Text, ActivityIndicator } from 'react-native';
import Post from '@components/Post';
import PostLoader from '../PostLoader';
import { sendVote } from '@src/services/Posts.services';
import { postType } from '@src/shared/interfaces/posts.type';
import { showToast } from '@src/helpers/consts';
import { AppLooks } from '@src/shared/styles/AppLooks';
import { AppColors } from '@src/shared/styles/AppResourses';
//import { format } from 'timeago.js';

function PostsList({ data, header, fixed, refFunc, state, updateFeed }: any) {

    interface item{
        item: postType
    }

    const RenderItem = ({item}: item) => {    
    
        const [iVoted, setIVoted] = useState(false)
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
                showToast("error", err.response.data.errMessage)
            })
        }
    
        return(
            <Post
                //upload_time={format(item.post.upload_time)}
                upload_time={`${item.upload_time.slice(0, 10)}`}
                i_voted={item.i_voted == 1?item.i_voted == 1:iVoted}
                votingP={()=> voting(item.post_id, "p")}
                votingN={()=> voting(item.post_id, "n")}
                upVotes={item.up_votes + myVote.up}
                downVotes={item.down_votes + myVote.down}
                profile_pic={item.profile_pic}
                userId={item.user_id}
                user_name={item.user_name}
                post_image={item.post_image}
                post_tag={item.post_tag}
                post_description={item.post_description}
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

    const LoadingComp = ()=>{
        return(
            <>
                {
                    
                true &&
                <View
                    style={
                        [
                            AppLooks.alignCenter,
                            AppLooks.contentCenter,
                            AppLooks.wFull,
                            AppLooks.paddingS,
                            AppLooks.marginMY
                        ]
                    }
                >
                    <View
                        style={
                            [
                                {
                                    backgroundColor: AppColors.gray + 95,
                                    zIndex: 999,
                                    paddingHorizontal: 13,
                                    paddingVertical: 6,
                                    borderWidth: 3,
                                    borderColor: "#f0f0f090",
                                },
                                AppLooks.rounded,
                                AppLooks.flexRow,
                                AppLooks.alignCenter,
                                AppLooks.contentCenter
                            ]
                        }
                    >
                        <Text
                            style={[
                                {
                                    paddingRight: 3,
                                },
                                AppLooks.fontXl,
                                AppLooks.textWhite,
                                AppLooks.textCenter,
                            ]}
                        >
                            Loading
                        </Text>
                        <ActivityIndicator size={"small"} color={AppColors.white}/>
                    </View>
                </View>
                }
            </>
        )
    }

    const [load, setLoad] = useState(4)

    return (
        <>
            {
                <>
                    {
                        data.length == 0
                        ?
                            <LoadPost/>
                        :
                            <>
                                <VirtualizedList
                                    initialNumToRender={4}
                                    maxToRenderPerBatch={8}
                                    data={data.slice(0, load)}
                                    onEndReached={() => {
                                        data.length > load
                                            &&
                                        setLoad(load + 4)
                                    }}
                                    onEndReachedThreshold={2.2}
                                    onRefresh={onRefresh}
                                    refreshing={state}
                                    //data={data}
                                    keyExtractor={item => item.post_id + " 1" + Date.now()}
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
                                    ListFooterComponent={<LoadingComp/>}
                                    listKey={`D${Date.now()}`}
                                    getItemCount={getCoun}
                                    getItem={getItem}
                                />
                            </>
                    }
                </>
            }
        </>
    )


}

export default PostsList