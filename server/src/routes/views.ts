import express from "express";
import { connection } from "mongoose";

const views=express.Router();

views.get("/",(req:any,res:any)=>{
    res.render("login",{title:"Login"})
})

views.get("/admin",async(req:any,res:any)=>{
    const collection=await Object.keys(connection.collections);
    res.render("index",{title:"Admin",collections:collection})
})
export default views