import {motion} from "framer-motion"
import AboutSlider from "./AboutSlider";

const About=()=>{
    return(
        <motion.div 
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:5}} 
         className="flex pt-20 pb-2 flex-col items-center bg-[#F3EBE1]" id="about">
            <p className="text-xl font-semibold text-[#F45858]"> About Us </p>
            <p className="text-4xl text-center mt-6 w-[50vw]  text-[#333333]">
                Using the power of natural product for great results
            </p>

            <AboutSlider/>
        </motion.div>
    )
}
export default About;