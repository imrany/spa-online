import { Link } from "react-router-dom";
import {motion} from "framer-motion"

const variants = {
    open: { 
        x: 1
    },
    closed: { 
        x:-1000,
        duration:0.8
    },
}

const ForgetPassword=()=>{
    const isOpen=true;
    async function handleSubmit(e:any) {
        try {
            
        } catch (error:any) {
            console.log(e.message)
        }
    }

    return(
        <div className="w-[50vw] text-[#333333] flex flex-col items-center justify-center max-[1000px]:w-[100vw]">
        <motion.div 
            initial={{x:1000}}
            transition={{ duration: 0.8 }}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            className="mx-8"
        >
            <div className="my-4 mb-10">
                <p className="text-4xl max-sm:text-xl font-semibold">Forgot your password</p>
                <p className="text-lg text-[#808080] max-md:text-base">Your updated password will be sent to your registered email.</p>
            </div>

            <form className="flex flex-col w-[35vw] max-md:w-[90vw] mb-7" onSubmit={handleSubmit}>
                <label htmlFor="email" className="text-[#808080] font-semibold text-lg max-md:text-base">Email  <span className="ml-2 text-sm font-normal text-red-500 max-sm:text-xs">(must be associated to a register account)</span></label>
                <input type="email" name="email" className="mt-2 border-gray-300 border-[1px] bg-white focus:bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-base text-base" placeholder="Enter your account email address" required/>
                <label htmlFor="email" className="flex justify-between mt-4">
                    <span className="text-[#808080] font-semibold text-lg max-md:text-base">New Password</span>
                </label>
                <input type="password" minLength={8} name="password" className="mt-2 border-gray-300 border-[1px] bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-base text-base" placeholder="Enter new password" required/>
                <button className="bg-[#f0b369] text-white mt-6 py-3 rounded-lg cursor-pointer text-base font-semibold">Update password</button>
            </form>
            
            <Link to="/" className="text-[#F45858]">
                <i className='ri-arrow-left-line mr-1'></i>
                Not now
            </Link>
        </motion.div>
    </div>
    )
}
export default ForgetPassword;