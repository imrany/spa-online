import AboutSlider from "./AboutSlider";

const About=()=>{
    return(
        <div
         className="flex py-20 flex-col items-center bg-[#F3EBE1]" id="about">
            <p className="text-xl font-semibold text-[#F45858]"> About Us </p>
            <p className="text-4xl text-center mt-6 font-semibold w-[50vw]  text-[#333333]">
                Using the power of natural product for great results
            </p>

            <AboutSlider/>
        </div>
    )
}
export default About;