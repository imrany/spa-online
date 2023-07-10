import { createContext } from "react";
import { User_content } from "./types/type";

export const Usercontext=createContext<User_content>({
    id:"",
    last_name:"",
    first_name:"",
    phone_number:0,
    email:"",
    token:""
})