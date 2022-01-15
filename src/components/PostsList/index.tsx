import React, { useEffect, useState } from 'react'
import { Text, FlatList, View, Dimensions } from 'react-native';
import Post from '@components/Post';
import PostLoader from '../PostLoader';
import { Getvotes, sendVote } from '@src/services/Posts.services';

const RenderItem = ({ item }: any) => {
    const [upVote, setUpvote] = useState([])
    const [iVoted, setIVoted] = useState(false)
    const [downVote, setDownvote] = useState([])

    const getVotes = (vote: number)=>{
        Getvotes(vote).then((res)=>{
            setUpvote(res.data.upVotes)
            setIVoted(res.data.iVoted)
            setDownvote(res.data.downVotes)
            console.log("Yo vote?: ", res.data.iVoted);
        }).catch((err)=>{
            setUpvote([])
        })
        
    }

    const voting = (vote: number, voteType: string)=>{
        sendVote(vote, voteType).then((res)=>{
            console.log("Respuesta al enviar voto: ", res)
            getVotes(vote)
        }).catch((err)=>{
            alert(err.response.data.errMessage);
            console.log(err)
        })
    }

    useEffect(()=>{
        getVotes(item.post_id)
    }, [])

    return(
        <Post
            iVoted={iVoted}
            votingP={()=> voting(item.post_id, "p")}
            votingN={()=> voting(item.post_id, "n")}
            upVotes={upVote}
            downVotes={downVote}
            profile_pic={item.profile_pic}
            vote={item.post_id}
            user_name={item.user_name}
            post_image={item.post_image}
            post_tag={item.post_tag}
            post_description={item.post_description}
        />
    )
}

function PostsList({ data, header, fixed, refFunc, state }: any) {
    
    const getUpvotes = (vote: number)=>{
        Getvotes(vote).then((res)=>{
            console.log(res.data.upVotes)
        }).catch((err)=>{
            console.log([0])
        })
    }

    useEffect(()=>{
        getUpvotes(2)
    }, [])

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
            {
                    <FlatList
                        initialNumToRender={4}
                        onRefresh={refFunc}
                        refreshing={state}
                        data={data.slice(0, load)}
                        onEndReached={() => {
                            data.length > load
                            ?
                                setLoad(load + 4)
                            :
                                console.log("Final")
                        }}
                        onEndReachedThreshold={0.3}
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
                    />
            }
        </>
    )


}

export default PostsList