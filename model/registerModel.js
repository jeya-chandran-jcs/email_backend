import mongoos from "mongoose";

const registerSchema = new mongoos.Schema(
   {
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}, 
    verified:{type:Boolean,required:true},
    otp:{type:String}
   },{
        timestamps:true
    }
)

const registerModel = mongoos.model("register",registerSchema)

export default registerModel