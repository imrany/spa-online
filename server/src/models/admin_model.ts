import mongoose, { Schema, model } from "mongoose";

const admin_schema=new Schema({
    user_id:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    last_login:{
        type:String,
    },
    password:{
        type:String,
        require:true
    }
},{
    timestamps:true
})
const admin_model=model('admin',admin_schema)
export{
    admin_model
}