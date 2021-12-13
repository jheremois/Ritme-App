import axios from "axios";
import env from "@src/config/env";
import { formUserType, loginUserType } from "@src/shared/interfaces/user.type";

export const RegisterUser = (data: formUserType)=>{
    return axios.post(`${env.baseUrl}/api/register`, data)
}

export const loginUser = (data: loginUserType)=>{
    return axios.post(`${env.baseUrl}/api/login`, data)
}