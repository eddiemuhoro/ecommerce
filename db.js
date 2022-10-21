import {mongoose} from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connect = (url = process.env.dbURL, opt = {})=>{
    return mongoose.connect(
        url,
        {...opt, useNewUrlParser: true}
    )
}
