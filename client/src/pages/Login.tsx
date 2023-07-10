// @flow strict

import { Link, useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"
import { useState } from 'react';

const variants = {
    open: { 
        x: 1
    },
    closed: { 
        x:-1000,
        duration:0.8
    },
}

function Login() {
    const navigate=useNavigate()
    const [isOpen, setIsOpen] = useState(true)

    const handleSubmit=async(e:any)=>{
        e.preventDefault()
        try {
            let url=`http://localhost:8000/api/auth/login`
            const response=await fetch(url,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    email:e.target.email.value,
                    password:e.target.password.value
                })
            })
            const parseRes=await response.json()
            if(parseRes.error){
                console.log(parseRes.error)
            }else{
                console.log(parseRes)
            }
        } catch (error:any) {
            console.log(e.message)
        }
    }
    const to_register=()=>{
        setIsOpen(isOpen => !isOpen)
        navigate("/auth/register")
    }
    return (
        <div className="w-[50vw] flex flex-col items-center justify-center bg-slate-100 max-[1000px]:w-[100vw]">
            <motion.div 
                initial={{x:1000}}
                transition={{ duration: 0.8 }}
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                className="mx-8"
            >
                <div className="my-4 mb-10 max-md:mb-14">
                    <p className="text-4xl font-semibold">Welcome Back!</p>
                    <p className="text-lg text-gray-400 max-md:text-base">Login and get personal experience.</p>
                </div>

                <form className="flex flex-col w-[35vw] max-md:w-[90vw]" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="text-gray-500 font-semibold text-lg max-md:text-base">Email</label>
                    <input type="email" name="email" className="mt-2 border-gray-300 border-[1px] bg-white focus:bg-white rounded-lg focus:outline-1 focus:outline-purple-500 py-2 px-4 placeholder:text-base text-base" placeholder="Enter email address" required/>
                    <label htmlFor="email" className="flex justify-between mt-4">
                        <span className="text-gray-500 font-semibold text-lg max-md:text-base">Password</span>
                        <Link className="text-purple-900 max-md:text-sm" to="/">Forget your password?</Link>
                    </label>
                    <input type="password" name="password" className="mt-2 border-gray-300 border-[1px] bg-white rounded-lg focus:outline-1 focus:outline-purple-500 py-2 px-4 placeholder:text-base text-base" placeholder="Enter password" required/>
                    <button className="bg-purple-500 text-white mt-6 py-3 rounded-lg cursor-pointer text-base font-semibold">Sign in</button>
                </form>
                <div className="flex mt-6">
                    <p className="text-gray-500 text-base max-md:text-sm">Don't have an account yet?</p>
                    <p className="text-purple-900 ml-4 max-md:text-sm cursor-pointer" onClick={to_register}>Create an account</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;