import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import * as dotenv from "dotenv"
import userRouter from "./routes/userRoutes.js"
import productRouter from "./routes/productRoutes.js"

const app = express()
dotenv.config()
app.use(cors())

app.use(express.json())

const Port=process.env.PORT

app.get("/",(req,res)=>{
    res.send("hello world   user/register   /login  /forget-password    /reset-password   product/product-add  /get-product")
})

app.use("/user",userRouter)
app.use("/product",productRouter)

mongoose.connect(process.env.Mongo_Url)
.then(()=>{
    console.log("database connected")
    app.listen(Port,()=>console.log(`server is running on port ${Port}`))
})
.catch((err)=>console.log("mongoose is not connected",err))