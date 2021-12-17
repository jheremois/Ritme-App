export interface UserType{
    user_id?:   number | string,
    email?:     string,
    password?:  string,
    username?:  string
}
export interface formUserType{
    email:      string,
    password:   string,
    username:   string
}
export interface loginUserType{
    email:      string,
    password:   string
}