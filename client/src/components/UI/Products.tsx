import image1 from "../../assets/images/blackwomen-massage.jpg";
import image2 from "../../assets/images/whitelady-face-massage.jpg";

const Products=()=>{
    return(
        <div className="flex py-20 flex-col items-center bg-transparent" id="about">
            <p className="text-xl font-semibold text-[#F45858]"> Product </p>
            <p className="text-4xl max-sm:text-2xl text-center mt-6 w-[50vw] max-sm:w-[80vw] font-semibold text-[#333333]">
                Our best product this week, that can change your life
            </p>
            <div className="mt-10 justify-center items-center flex max-md:flex-col gap-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-5">
                <div className="flex flex-col w-[30vw] max-md:w-[50vw] max-sm:w-[80vw]">
                    <img src={image1} alt="product images" className="max-md:h-[30vh]"/>
                    <p className="mt-10 text-[#333333]">
                        Natural Oil
                    </p>
                    <p className="mt-2 text-[#808080]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur hic. Perspiciatis id reprehenderit commodi aspernatur reiciendis error necessitatibus ipsam.
                    </p>
                </div>

                <div className="flex flex-col w-[30vw] max-md:w-[50vw] max-sm:w-[80vw]">
                    <img src={image2} alt="product images" className="max-md:h-[30vh]"/>
                    <p className="mt-10 text-[#333333]">
                        Natural Oil
                    </p>
                    <p className="mt-2 text-[#808080]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur hic. Perspiciatis id reprehenderit commodi aspernatur reiciendis error necessitatibus ipsam.
                    </p>
                </div>

                <div className="flex flex-col w-[30vw] max-md:w-[50vw] max-sm:w-[80vw]">
                    <img src={image1} alt="product images" className="max-md:h-[30vh]"/>
                    <p className="mt-10 text-[#333333]">
                        Natural Oil
                    </p>
                    <p className="mt-2 text-[#808080]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur hic. Perspiciatis id reprehenderit commodi aspernatur reiciendis error necessitatibus ipsam.
                    </p>
                </div>

                <div className="flex flex-col w-[30vw] max-md:w-[50vw] max-sm:w-[80vw]">
                    <img src={image1} alt="product images" className="max-md:h-[30vh]"/>
                    <p className="mt-10 text-[#333333]">
                        Natural Oil
                    </p>
                    <p className="mt-2 text-[#808080]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur hic. Perspiciatis id reprehenderit commodi aspernatur reiciendis error necessitatibus ipsam.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Products;