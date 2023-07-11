import image1 from "../../assets/images/Add-ons.jpg";
import image2 from "../../assets/images/whitelady-face-massage.jpg";
import image3 from "../../assets/images/whitelady-face-massage2.jpg";
import image4 from "../../assets/images/whitelady-massage.jpg";
import image5 from "../../assets/images/blackwomen-massage.jpg";
import image6 from "../../assets/images/bg-stone.jpg";


const Products=()=>{
    const products=[
        {
            title:" Natural Oil",
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur hic. Perspiciatis id reprehenderit commodi aspernatur reiciendis error necessitatibus ipsam.",
            image:image1
        },
        {
            title:" Natural Oil",
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur hic. Perspiciatis id reprehenderit commodi aspernatur reiciendis error necessitatibus ipsam.",
            image:image2
        },
        {
            title:" Natural Oil",
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur hic. Perspiciatis id reprehenderit commodi aspernatur reiciendis error necessitatibus ipsam.",
            image:image3
        },
        {
            title:" Natural Oil",
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur hic. Perspiciatis id reprehenderit commodi aspernatur reiciendis error necessitatibus ipsam.",
            image:image4
        },
        {
            title:" Natural Oil",
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur hic. Perspiciatis id reprehenderit commodi aspernatur reiciendis error necessitatibus ipsam.",
            image:image5
        },
        {
            title:" Natural Oil",
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur hic. Perspiciatis id reprehenderit commodi aspernatur reiciendis error necessitatibus ipsam.",
            image:image6
        }
    ]
    return(
        <div className="flex py-20 flex-col items-center bg-transparent" id="about">
            <p className="text-xl font-semibold text-[#F45858]"> Product </p>
            <p className="text-4xl max-sm:text-2xl text-center mt-6 w-[50vw] max-sm:w-[80vw] font-semibold text-[#333333]">
                Our best product this week, that can change your life
            </p>
            <div className="mt-10 justify-center items-center flex max-md:flex-col gap-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-7">
                {products&&products.map((i,n)=>(
                    <div className="flex flex-col w-[25vw] max-md:w-[50vw] max-sm:w-[80vw]" key={n}>
                        <a href={i.image} target="_blank" rel="noopener noreferrer" title={i.title}>
                            <img src={i.image} alt={`${i.title}`} className="max-md:h-[35vh] w-full max-h-[50vh]"/>
                        </a>
                        <p className="mt-10 text-[#333333]">
                            {i.title}
                        </p>
                        <p className="mt-2 text-[#808080]">
                            {i.body}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Products;