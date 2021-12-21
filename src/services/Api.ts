import env from "@src/config/env"
import axios from "axios";

export const Api =  axios.create({
    baseURL: `${env.baseUrl}/api/`
})
