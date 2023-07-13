import mongoose, { Schema, model } from "mongoose";

const user_schema=new Schema({
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone_number:{
        type:Number,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    }
},{
    timestamps:true
})
const user_model=model('user',user_schema)
export{
    user_model
}