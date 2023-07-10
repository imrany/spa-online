import Slider from "react-slick";
import {motion} from "framer-motion"

const About=()=>{
    const settings = {
        // fade: true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
    };
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

            <div className="">
                <Slider {...settings} className="hero_slider">
                <div className="h-[75vh]" id="hero-image2">
                    <p></p>
                </div>
                </Slider>
            </div>
        </motion.div>
    )
}
export default About;