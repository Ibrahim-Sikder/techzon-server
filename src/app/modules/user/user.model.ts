import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./user.interface";


const userSchema = new Schema<TUser, UserModel>({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
}) 


userSchema.statics.isUserExistByCustomId = async function(id:string){
    return await User.findOne({id}) 
}


export const User = model<TUser,UserModel>('User', userSchema)