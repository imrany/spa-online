import express from "express";

const views=express.Router();

views.get("/",(req:any,res:any)=>{
    res.render("login",{title:"Login"})
})

views.get("/admin",(req:any,res:any)=>{
    res.render("index",{title:"Admin"})
})
export default views