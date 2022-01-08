import { envTypes } from "@src/shared/interfaces/env.types"

const envLocal: envTypes = {
    //authServicePort: "http://192.168.1.35:4000",
    //userServicePort: "http://192.168.1.35:4100",
    //postsServicePort: "http://192.168.1.35:4200",
    authServicePort: "http://10.0.0.22:4000",
    userServicePort: "http://10.0.0.22:4100",
    postsServicePort: "http://10.0.0.22:4200"
}

const envDev: envTypes = {
    authServicePort: "https://ritme-auth-service-ub3mx35oqq-uc.a.run.app",
    userServicePort: "https://ritme-users-service-ub3mx35oqq-nn.a.run.app"
}

const env = envLocal

export default env