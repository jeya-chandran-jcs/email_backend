import mongoos from "mongoose";

const productSchema = new mongoos.Schema(
   {
    name:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true}, 
    details:{type:String,required:true}
   },{
        timestamps:true
    }
)

const productModel = mongoos.model("product",productSchema)

export default productModel