import coconut from "../../assets/images/coconut.jpg";
import image2 from "../../assets/images/Add-ons.jpg";
import soap from "../../assets/images/soap.jpg";
import image4 from "../../assets/images/whitelady-massage.jpg";
import image5 from "../../assets/images/blackwomen-massage.jpg";
import image6 from "../../assets/images/brushes.jpg";

const Products=()=>{
    const products=[
        {
            title:"Coconut Oil",
            body:"Coconut oil helps to hydrate skin and reinforce its natural defensive barrier to better retain moisture which means coconut oil for dry skin is fantastic. Purchase this product via our store or online.",
            image:coconut
        },
        {
            title:"Palm Oil",
            body:"Palm Oil restores hydration to dry skin, preventing further dryness by sealing in moisture. Suitable for use on sensitive skin, it effectively nourishes areas afflicted by eczema, psoriasis, and stretch marks.",
            image:image2
        },
        {
            title:"Soaps",
            body:"We use variety of soaps created on different recipe. Purchase this item here.",
            image:soap
        },
        {
            title:"Spa stones",
            body:"Hot stone therapy is a specialist massage that uses smooth, flat, heated basalt stones that are positioned along your spine, in the palms of your hands, along your legs and between the toes.",
            image:image4
        },
        {
            title:"Lotions",
            body:"Our Sensual Body Lotion blends the essential oils of nature's most potent aphrodisiacs with a collection of intense botanical moisturisers.",
            image:image5
        },
        {
            title:"Brushes",
            body:"Our brushes helps for exfoliation, the coarse bristles can brush away dry, dead cells from the skin. This can leave your skin more smooth and soft.",
            image:image6
        }
    ]
    return(
        <div className="flex py-20 flex-col items-center bg-transparent" id="product">
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