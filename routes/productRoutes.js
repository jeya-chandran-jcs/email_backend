import express from "express"
import productModel from "../model/product.js"

const router=express.Router()

router.post("/product-add",async(req,res)=>{
    try{
        const item=await productModel(req.body)
    await item.save()
    res.send({message:"item added successfully"})
    }
    catch(err){
        console.log("error in adding item",err)
        res.send({message:"item not added "})
    }

})

router.get("/get-product",async(req,res)=>{
    try{const item= await productModel.find(req.body)

        res.send(item)
    }
    catch(err){
        console.log("error in get item",err)
        res.status(404).send({message:"cant find  items"})
    }


})

export default router
