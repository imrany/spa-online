import mongoose, { Schema, model } from "mongoose";

const reserve_schema=new Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone_number:{
        type:Number,
        require:true
    },
    date_time:{
        type:String,
        require:true
    },
    sorted:{
        type:Boolean,
        default:false,
    }
},{
    timestamps:true
})
const reserve_model=model('reserve',reserve_schema)
export{
    reserve_model
}