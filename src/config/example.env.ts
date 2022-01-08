import { envTypes } from "@src/shared/interfaces/env.types"

const envLocal: envTypes = {
    authServicePort: "http://port:4000",
    userServicePort: "http://port:4100",
    postsServicePort: "http://port:4200"
}

const envDev: envTypes = {
    authServicePort: "https://port.com",
    userServicePort: "https://port.com",
    postsServicePort: "https://port.com"
}

const env = envLocal

export default env