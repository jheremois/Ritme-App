export interface FormPostType{
    post_description:   string
    post_image:         string | null
    post_tag:           string
}
export interface postDataType {
    upload_time: string
    userId: number
    iVoted: boolean
    profile_pic?: string
    user_name: string
    post_image: string
    post_tag: string
    post_description: string
    votingP: VoidFunction
    votingN: VoidFunction
    upVotes: number
    downVotes: number
}
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
