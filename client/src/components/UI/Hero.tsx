import {motion} from "framer-motion"
import { Link } from "react-router-dom"

const Hero=()=>{
    return(
            <div className="h-[75vh]  text-white lg:text-5xl lg:px-16 font-semibold flex items-center" id="hero-image1">
                <motion.div 
                className="lg:w-[550px]"
                initial={{y:1000}}
                animate={{y:1}}
                transition={{duration:2}}
                >
                    <p>Shopping And Department Store.</p>
                    <p className="mt-4 text-lg w-[400px]">
                        Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance
                    </p>
                    <Link to="/auth" className="bg-purple-500 text-white py-[8px] mt-8 text-base px-6 rounded-[50px]">
                        Get started
                    </Link>
                </motion.div>
            </div>
    )
}
export default Hero