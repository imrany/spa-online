import { user_model } from "../models/user_model"
import * as bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken"
import { User_login, User_register } from "../types"
import { reserve_model } from "../models/reserve_model"
import { createTransport } from "nodemailer"

async function register_user(req:User_register,res:any){
    try {
        const {last_name,first_name,email,phone_number,password,location}=req.body
        if(last_name&&first_name&&email&&phone_number&&password){
            const salt=await bcrypt.genSalt(10);
            const hashed_password=await bcrypt.hash(password,salt);
            const register_user=await user_model.create({
                last_name,
                first_name,
                email,
                phone_number,
                password:hashed_password,
                location
            })
            if(register_user){
                res.status(201).send({
                    msg:"Successfull registration\nRedirecting to profile page soon...",
                    data:{
                        id:register_user.id,
                        last_name:register_user.last_name,
                        first_name:register_user.first_name,
                        email:register_user.email,
                        phone_number:register_user.phone_number,
                        location:register_user.location,
                        token:generateUserToken(register_user.id)
                    },
                    next:"/"
                })
            }else{
                res.status(401).send({error:"User not registered"})
            }
        }else{
            res.status(400).send({error:"Enter all the required fields!"})
        }
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
}

async function login_user(req:User_login,res:any){
    try {
        const {email,password}=req.body
        if(email&&password){
            const user=await user_model.findOne({email});
            if(user&&(await bcrypt.compare(password,`${user.password}`))){
                res.status(200).send({
                    msg:`Welcome ${user.first_name} ${user.last_name}\nRedirecting to profile page soon...`,
                    data:{
                        _id:user.id,
                        first_name:user.first_name,
                        last_name:user.last_name,
                        email:user.email, 
                        phone_number:user.phone_number,
                        location:user.location,
                        token:generateUserToken(user.id)
                    },
                    next:"/"
                })
            }else{
                res.status(400).send({error:'Invalid Credentials'})
            }
        }else{
            res.status(401).send({error:"Enter all the required fields!"})
        }
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
}

async function reserve (req:any,res:any) {
    try {
        const {email,phone_number,username,date_time}=req.body
        const book=await reserve_model.create({
            email,phone_number,username,date_time
        })

        let mailTranporter=createTransport({
            service:'gmail',
            auth:{
                user:process.env.TRANSPORTER,
                pass:process.env.PASSWORD
            }
        });
        let details={
            from:process.env.TRANSPORTER,
            to:email,
            subject:`You've just reserve a spot on Spa online`,
            text:`Hello ${username},\n\nYou have just book a spot on Spa online,\nour customer service will contact you shortly via a phone call for more details. \nOr call +254734720752`
        }
        mailTranporter.sendMail(details,(error:any)=>{
            if(error){
                res.send({error:`Got an error sending email to client, retrying shortly!`});
            }else{
                if(!book){
                    res.status(501).send({error:"You cannot reserve a spot now, try again later!"})
                }
            }
        })
    } catch (error:any) {
        res.status(500).send({error:error.message})
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
    protect_user,
    reserve
}