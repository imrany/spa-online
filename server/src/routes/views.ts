import express from "express";

const views=express.Router();
views.get("/",(req:any,res:any)=>{
    res.render("index",{title:"Admin"})
})

views.get("/login",(req:any,res:any)=>{
    res.render("login",{title:"Login"})
})
export default views