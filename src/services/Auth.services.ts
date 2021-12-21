import { Api } from "./Api";
import { formUserType, loginUserType } from "@src/shared/interfaces/user.type";

export const RegisterUser = (data: formUserType)=>{
    return Api.post("/register", data)
}

export const loginUser = (data: loginUserType)=>{
    return Api.post("/login", data)
}