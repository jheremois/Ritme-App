export interface FormPostType{
    post_description:   string
    post_image:         string | null
    post_tag:           string
}
export interface postDataType {
    upload_time: string
    userId: number
    i_voted: boolean
    profile_pic: string
    user_name: string
    post_image: string
    post_tag: string
    post_description: string
    votingP: VoidFunction
    votingN: VoidFunction
    upVotes: number
    downVotes: number
}
/*
export interface postType{
    post: {
        post_id: 24
        user_id: 8
        post_description: string
        post_image: string
        upload_time: string
        post_tag: string
        user_name: string
        profile_pic: string
    },
    iVoted: boolean,
    upVotes: {
        user_id: number
        vote_type: "p"
        post_id: number
    }[],
    downVotes: {
        user_id: number
        vote_type: "n"
        post_id: number
    }[]
}
*/

export interface postType{
    user_id: number
    user_name: string
    profile_pic: string
    post_id: number
    post_description: string
    post_image: string
    post_tag: string
    upload_time: string
    up_votes: number
    down_votes: number
    i_voted: number
}