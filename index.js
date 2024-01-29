import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import * as dotenv from "dotenv"
import nodemailer from "nodemailer"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import userRouter from "./routes/userRoutes.js"

const app = express()
dotenv.config()
app.use(cors())

app.use(express.json())

const Port=process.env.PORT

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/user",userRouter)
// app.listen(Port,()=>console.log(`server is running on port ${Port}`))
mongoose.connect(process.env.Mongo_Url)
.then(()=>{
    console.log("database connected")
    app.listen(Port,()=>console.log(`server is running on port ${Port}`))
})
.catch((err)=>console.log("mongoose is not connected",err))