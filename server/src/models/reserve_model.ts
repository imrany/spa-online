import mongoose, { Schema, model } from "mongoose";

const reserve_schema=new Schema({
    username:{
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
        require:true
    },
    date_time:{
        type:String,
        require:true
    }
},{
    timestamps:true
})
const reserve_model=model('reserve',reserve_schema)
export{
    reserve_model
}