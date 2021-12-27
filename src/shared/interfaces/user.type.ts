export interface UserType{
    user_id?:   number | string
    email?:     string
    password?:  string
    user_name?:  string
}

export interface profileType{
    email: string
    profile_pic: string
    user_description: string
    user_id: number | string | null
    user_name: string
}
export interface formUserType{
    email:      string
    password:   string
    user_name:   string
}
export interface loginUserType{
    email:      string
    password:   string
}