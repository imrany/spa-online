import {motion} from "framer-motion"
import { Link } from "react-router-dom"

const Hero=()=>{
    function dialog_open(){
        const dialogElement=document.getElementById("booking-dialog") as HTMLDialogElement
        dialogElement.showModal()
    }
    return(
            <div className="md:mt-10 h-[75vh] text-white  text-5xl lg:px-16 font-semibold flex items-center max-lg:justify-center max-lg:text-center" id="hero-image1">
                <motion.div 
                className="lg:w-[550px] max-lg:flex max-lg:flex-col  max-lg:text-center max-lg:items-center"
                initial={{y:1000}}
                animate={{y:1}}
                transition={{duration:2}}
                >
                    <p className="max-sm:text-3xl">Grow up your skin, relax your joints with massage and natural products.</p>
                    <p className="mt-4 text-base w-[400px] text-[#FFFCF8] max-sm:w-[70vw]">
                        We use premium products for a more natural result.
                    </p>
                    <button onClick={dialog_open} className="bg-[#f0b369] hover:bg-[#F7B941] text-white py-[8px] mt-8 text-base px-6 rounded-[50px]">
                        Get started
                    </button>
                </motion.div>
            </div>
    )
}
export default Hero