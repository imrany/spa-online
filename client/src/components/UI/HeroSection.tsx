import Slider from "react-slick";
import {motion} from "framer-motion"

const HeroSection=()=>{
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
        <Slider {...settings} className="hero_slide">
            <div className="h-[75vh] text-white lg:text-5xl lg:px-16 font-semibold flex lg:pt-[150px]" id="hero-image">
                <motion.div
                 className="w-[480px]"
                 initial={{opacity:0}}
                 animate={{opacity:1}}
                 transition={{duration:2}}
                 >
                    <p>Grab Upto 50% Off On Selected Headphone</p>
                    <button className="bg-purple-500 text-white py-[8px] mt-8 text-base px-6 rounded-[50px]">
                        Buy Now
                    </button>
                </motion.div>
            </div>

            <div className="h-[75vh] lg:pt-[150px] text-white lg:text-5xl lg:px-16 font-semibold flex items-center" id="hero-image2">
                <motion.div 
                className="w-[480px]"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2}}
                >
                    <p>Grab Upto 50% Off On Selected Laptop</p>
                    <button className="bg-purple-500 text-white py-[8px] mt-8 text-base px-6 rounded-[50px]">
                        Buy Now
                    </button>
                </motion.div>
            </div>
        </Slider>
    )
}
export default HeroSection