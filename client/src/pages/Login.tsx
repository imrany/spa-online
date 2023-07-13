// @flow strict

import { Link, useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"
import { useState } from 'react';
import { loader } from '../components/func';
import ErrorDialog from '../components/Dialogs/ErrorDialog';
type Props={
    status:{
        value:boolean,
        text:string
    }
}
const variants = {
    open: { 
        x: 1
    },
    closed: { 
        x:-1000,
        duration:0.8
    },
}

function Login(props:Props) {
    const navigate=useNavigate()
    const [isOpen, setIsOpen] = useState(true)
    const [error,setError]=useState(<></>)
    const handleSubmit=async(e:any)=>{
        e.preventDefault()
        loader.on()
        try {
            let url=`https://spa-online-server.onrender.com/api/auth/login`
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
            loader.off()
            const parseRes=await response.json()
            if(parseRes.error){
                setError(<p className="text-center text-sm text-red-400">{parseRes.error}</p>)
                const dialogElement=document.getElementById("error-dialog") as HTMLDialogElement
                dialogElement.showModal()
            }else{
                console.log(parseRes.data)
                setError(<p className="text-center text-sm text-green-400">{parseRes.msg}</p>)
                const dialogElement=document.getElementById("error-dialog") as HTMLDialogElement
                dialogElement.showModal()
                setTimeout(()=>{
                    navigate(parseRes.next)
                },10000)
            }
        } catch (error:any) {
            loader.off()
            if(!props.status.value){
                setError(<p className="text-center text-sm text-red-400">{props.status.text}</p>)
                const dialogElement=document.getElementById("error-dialog") as HTMLDialogElement
                dialogElement.showModal()
            }else{
                setError(<p className="text-center text-sm text-red-400">{error.message}</p>)
                const dialogElement=document.getElementById("error-dialog") as HTMLDialogElement
                dialogElement.showModal()
            }
        }
    }
    const to_register=()=>{
        setIsOpen(isOpen => !isOpen)
        navigate("/auth/register")
    }
    return (
        <div className="w-[50vw] text-[#333333] flex flex-col items-center justify-center max-[1000px]:w-[100vw]">
            <motion.div 
                initial={{x:1000}}
                transition={{ duration: 0.8 }}
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                className="mx-8"
            >
                <div className="my-4 mb-10">
                    <p className="text-4xl max-sm:text-xl font-semibold">Welcome Back!</p>
                    <p className="text-lg text-[#808080] max-md:text-base">Login and get personal experience.</p>
                </div>

                <form className="flex flex-col w-[35vw] max-md:w-[90vw]" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="text-[#808080] font-semibold text-lg max-md:text-base">Email</label>
                    <input type="email" name="email" className="mt-2 border-gray-300 border-[1px] bg-white focus:bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-base text-base" placeholder="Enter email address" required/>
                    <label htmlFor="email" className="flex justify-between mt-4">
                        <span className="text-[#808080] font-semibold text-lg max-md:text-base">Password</span>
                        <Link className="text-[#b18121] max-md:text-sm" to="/auth/update_password">Forgot your password?</Link>
                    </label>
                    <input type="password" minLength={8} name="password" className="mt-2 border-gray-300 border-[1px] bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-base text-base" placeholder="Enter password" required/>
                    <button className="bg-[#f0b369] text-white mt-6 py-3 rounded-lg cursor-pointer text-base font-semibold">Sign in</button>
                </form>
                <div className="flex my-6">
                    <p className="text-[#808080] text-base max-md:text-sm">Don't have an account yet?</p>
                    <p className="text-[#b18121] ml-4 max-md:text-sm cursor-pointer" onClick={to_register}>Create an account</p>
                </div>
                <Link to="/" className="text-[#F45858]">
                    <i className='ri-arrow-left-line mr-1'></i>
                    Not now
                </Link>
                <ErrorDialog message={error}/>
            </motion.div>
        </div>
    );
};

export default Login;