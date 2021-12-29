import { auth } from "./services";
import { formUserType, loginUserType } from "@src/shared/interfaces/user.type";

export const RegisterUser = (data: formUserType)=>{
    return auth.post("/register", data)
}

export const loginUser = (data: loginUserType)=>{
    return auth.post("/login", data)
}