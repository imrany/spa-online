// @flow strict
import {motion} from "framer-motion"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loader } from "../components/func"
import ErrorDialog from "../components/Dialogs/ErrorDialog"
type Props={
    status:{
        value:boolean,
        text:string
    }
}

function Register(props:Props) {
    const navigate=useNavigate()
    const [error,setError]=useState(<></>)
    const [location,setLocation]=useState("")
    
    function checkLocation() {
        setLocation(`${localStorage.getItem("location")}`)
    }
    const handleSubmit=async(e:any)=>{
        e.preventDefault()
        try {
            const phone_number=e.target.phone_number.value;
            const first_name=e.target.first_name.value;
            const last_name=e.target.last_name.value;
            const email=e.target.email.value;
            const password=e.target.password.value;
            const confirm_password=e.target.confirm_password.value;
            if(password===confirm_password){
                loader.on()
                setError(<></>)
                let url=`http://localhost:8000/api/auth/register`
                const response=await fetch(url,{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify({
                        first_name,
                        last_name,
                        email,
                        phone_number,
                        password:confirm_password,
                        location
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
                    setTimeout(()=>{
                        navigate(parseRes.next)
                    },10000)
                }
            }else{
                setError(<span className="text-center text-sm text-red-400 font-normal max-md:text-xs">Doesn't match with password!</span>)
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
    const next=()=>{
        const form=document.querySelector("form") as HTMLFormElement;
        const phone_number=form.phone_number.value;
        const first_name=form.first_name.value;
        const last_name=form.last_name.value;
        if (phone_number&&first_name&&last_name) {
            const step_1=document.getElementById("step1") as HTMLDivElement
            const step_2=document.getElementById("step2") as HTMLDivElement
            step_1.style.display="none"
            step_2.style.display="flex"
        } else {
            setError(<p className="text-center text-sm text-red-400">Enter all the required field</p>)
            const dialogElement=document.getElementById("error-dialog") as HTMLDialogElement
            dialogElement.showModal()
        }

    }
    return (
        <div className="w-[50vw] flex flex-col items-center text-[#333333] max-[1000px]:w-[100vw] justify-center max-sm:mb-4">
            <motion.form 
                className="w-[35vw] max-md:w-[90vw]" onSubmit={handleSubmit}
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                exit={{ x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="my-4 mb-8">
                    <p className="text-4xl max-sm:text-xl font-semibold">Create an account</p>
                    <p className="text-lg text-gray-400 max-md:text-base">Sign up and get started.</p>
                </div>
                <div className="flex flex-col" id="step1">
                    <label htmlFor="first_name" className="text-[#808080] font-semibold text-lg max-md:text-base">First name</label>
                    <input type="text" name="first_name" className="mt-2 border-gray-300 border-[1px] bg-white focus:bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-base text-base" placeholder="Enter your first name" required/>
                    <label htmlFor="last_name" className="text-[#808080] font-semibold text-lg max-md:text-base mt-4">Last name</label>
                    <input type="text" name="last_name" className="mt-2 border-gray-300 border-[1px] bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-base text-base" placeholder="Enter your last name" required/>
                    <label htmlFor="phone_number" className="text-[#808080] font-semibold text-lg max-md:text-base mt-4">Phone number</label>
                    <input type="number" name="phone_number" className="mt-2 border-gray-300 border-[1px] bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-base text-base" placeholder="257xxxxxxxxx" required/>
                    <button type="button" className="bg-[#f0b369] text-white mt-6 py-3 rounded-lg cursor-pointer text-base font-semibold" onClick={next}>Next step</button>
                </div>
                <div className="flex flex-col" id="step2">
                    <label htmlFor="email" className="text-[#808080] font-semibold text-lg max-md:text-base">Email</label>
                    <input type="email" name="email" className="mt-2 border-gray-300 border-[1px] bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-base text-base" placeholder="Enter email address" required/>
                    <label htmlFor="password" className="text-[#808080] font-semibold text-lg max-md:text-base mt-4">Password</label>
                    <input type="password" minLength={8}  name="password" className="mt-2 border-gray-300 border-[1px] bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-base text-base" placeholder="Enter password" required/>
                    <label htmlFor="confirm_password" className="text-[#808080] text-lg max-md:text-base mt-4 flex justify-between">
                        <span className="font-semibold">confirm password</span>
                        {error}
                    </label>
                    <input type="password" minLength={8} name="confirm_password" className="mt-2 border-gray-300 border-[1px] bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-base text-base" placeholder="confirm password" required/>
                    <label htmlFor="location_checkbox" className="text-[#808080] text-base mt-4 flex">
                        <input type="checkbox" name="location" id="location_checkbox" onClick={checkLocation}/>
                        <span className="ml-2">Turn on location</span>
                    </label>
                    <button className="bg-[#f0b369] text-white mt-6 py-3 rounded-lg cursor-pointer text-base font-semibold">Create account</button>
                </div>

                <div className="flex my-6">
                    <p className="text-[#808080] text-base max-md:text-sm">Have an account already?</p>
                    <Link to="/auth/login" className="text-[#b18121] ml-4 max-md:text-sm cursor-pointer">Sign in</Link>
                </div>

                <Link to="/" className="text-[#F45858]">
                    <i className='ri-arrow-left-line mr-1'></i>
                    Not now
                </Link>
                <ErrorDialog message={error}/>
            </motion.form>
        </div>
    );
};

export default Register;