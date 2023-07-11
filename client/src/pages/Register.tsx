// @flow strict
import {motion} from "framer-motion"
import { Link } from "react-router-dom"

function Register() {
    const handleSubmit=async(e:any)=>{
        e.preventDefault()
        try {
            let url=``
            const response=await fetch(url,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({

                })
            })
            const parseRes=await response.json()
            if(parseRes.error){
                console.log(parseRes.error)
            }else{
                console.log(parseRes)
            }
        } catch (error:any) {
            console.log(error.message)
        }
    }
    const next=()=>{
        const step_1=document.getElementById("step1") as HTMLDivElement
        const step_2=document.getElementById("step2") as HTMLDivElement
        step_1.style.display="none"
        step_2.style.display="flex"
    }
    return (
        <div className="w-[50vw] flex flex-col items-center text-[#333333] max-[1000px]:w-[100vw] justify-center">
            <motion.form 
                className="w-[35vw] max-md:w-[90vw]" onSubmit={handleSubmit}
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                exit={{ x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="my-4 mb-8 max-md:mb-12">
                    <p className="text-4xl font-semibold">Create an account</p>
                    <p className="text-lg text-gray-400 max-md:text-base">Sign up and get started.</p>
                </div>
                <div className="flex flex-col" id="step1">
                    <label htmlFor="first_name" className="text-[#808080] font-semibold text-lg max-md:text-base">First name</label>
                    <input type="text" name="first_name" className="mt-2 border-gray-300 border-[1px] bg-white focus:bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-base text-base" placeholder="Enter your first name" required/>
                    <label htmlFor="last_name" className="text-[#808080] font-semibold text-lg max-md:text-base mt-4">Last name</label>
                    <input type="text" name="last_name" className="mt-2 border-gray-300 border-[1px] bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-base text-base" placeholder="Enter your last name" required/>
                    <label htmlFor="phone_number" className="text-[#808080] font-semibold text-lg max-md:text-base mt-4">Phone number</label>
                    <input type="tel" name="phone_number" className="mt-2 border-gray-300 border-[1px] bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-base text-base" placeholder="257xxxxxxxxx" required/>
                    <button type="button" className="bg-[#f0b369] text-white mt-6 py-3 rounded-lg cursor-pointer text-base font-semibold" onClick={next}>Next step</button>
                </div>
                <div className="flex flex-col" id="step2">
                    <label htmlFor="email" className="text-[#808080] font-semibold text-lg max-md:text-base">Email</label>
                    <input type="email" name="email" className="mt-2 border-gray-300 border-[1px] bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-base text-base" placeholder="Enter email address" required/>
                    <label htmlFor="password" className="text-[#808080] font-semibold text-lg max-md:text-base mt-4">Password</label>
                    <input type="password" name="password" className="mt-2 border-gray-300 border-[1px] bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-base text-base" placeholder="Enter password" required/>
                    <label htmlFor="confirm_password" className="text-[#808080] font-semibold text-lg max-md:text-base mt-4">confirm password</label>
                    <input type="password" name="confirm_password" className="mt-2 border-gray-300 border-[1px] bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-base text-base" placeholder="confirm password" required/>
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
            </motion.form>
        </div>
    );
};

export default Register;