import * as dotenv from 'dotenv'

export const getEnv = () => {
    if(process.env.ENV) {
        dotenv.config({
            override: true,
            path: `src/env/.env.${process.env.ENV}`
        })
    } else {
        throw new Error("No environment specified. Specify the env in the run command")
    }
}