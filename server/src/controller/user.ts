import { user_model } from "../models/user_model"
import * as bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken"
import { User_login, User_register } from "../types"

async function register_user(req:User_register,res:any){
    try {
        const {last_name,first_name,email,phone_number,password}=req.body
        const check_user_exist=user_model.findOne({email})
        if(!check_user_exist){
            if(last_name&&first_name&&email&&phone_number&&password){
                const salt=await bcrypt.genSalt(10);
                const hashed_password=await bcrypt.hash(password,salt);
                const register_user=await user_model.create({
                    last_name,
                    first_name,
                    email,
                    phone_number,
                    password:hashed_password
                })
                if(register_user){
                    res.status(200).send({
                        msg:"User registered",
                        user_data:{
                            id:register_user.id,
                            last_name:register_user.last_name,
                            first_name:register_user.first_name,
                            email:register_user.email,
                            phone_number:register_user.phone_number,
                            token:generateUserToken(register_user.id)
                        }
                    })
                }else{
                    res.status(204).send({error:"User not registered"})
                }
            }else{
                res.status(401).send({error:"Enter all the required fields!"})
            }
        }else{
            res.send({error:"Cannot register this user, this user exist!!"})
        }
    } catch (error:any) {
        res.status(500).send({error:error.mess})
    }
}

async function login_user(req:User_login,res:any){
    try {
        const {email,password}=req.body
        if(email&&password){
            const user=await user_model.findOne({email});
            if(user&&(await bcrypt.compare(password,`${user.password}`))){
                res.status(200).send({
                    msg:`Welcome ${user.first_name} ${user.last_name}`,
                    data:{
                        _id:user.id,
                        first_name:user.first_name,
                        last_name:user.last_name,
                        email:user.email, 
                        phone_number:user.phone_number,
                        token:generateUserToken(user.id)
                    }
                })
            }else{
                res.status(400).send({error:'Invalid Credentials'})
            }
        }else{
            res.status(401).send({error:"Enter all the required fields!"})
        }
    } catch (error:any) {
        res.status(500).send({error:error.mess})
    }
}

//generate User token
function generateUserToken(id:string){
    return jwt.sign({id},`${process.env.JWT_SECRET}`,{
        expiresIn:'30d'
    })
};

//auth Middlerware
async function protect_user(req:any,res:any,next:any){
    let token
    if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer')){
        try{
            //get token from headers
            token=req.headers.authorization.split(' ')[1]
            //verify token
            jwt.verify(token,`${process.env.JWT_SECRET}`);
            next()
  
        }catch (error){
            res.status(401).send({error:'Not Authorised☠'})
        }
    }
    if(!token){
      res.status(401).send({error:'No Token Available☠'})
    }
};

export {
    register_user,
    login_user,
    protect_user
}