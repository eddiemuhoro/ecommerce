import express from 'express'

import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()
import {connect} from './db.js'
import itemRouter from './Item/item.router.js'
import cors from 'cors'



const app = express()
app.disable("x-powered-by")


app.use(express.json())
app.use(morgan("dev"))

app.use(
    cors({
        origin: 'localhost:3000',
    })
)


app.get('/', (req,res)=>{
    res.send("This is the main page")
})

app.use('/item', itemRouter)

export const start= async ()=>{
    await connect()
    app.listen(process.env.PORT, ()=>{
        console.log("server is running in port 5000");
    })
}
