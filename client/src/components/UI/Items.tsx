import Select from "react-select";
import { Link, useLocation } from "react-router-dom";

// @flow strict
type Props={
    details:{
        title:string,
        data:{
            image:string,
            name:string,
            brand?:string,
            price?:number,
            url:string
        }[]
    }
}

const options=[
    {
        label:"High price",
        value:2
    },
    {
        label:"Medium price",
        value:2
    },
    {
        label:"Low price",
        value:2
    }
]

function Items(props:Props) {
    const url=useLocation()
    console.log(url.pathname)
    return (
        <div className="mt-28">
            <div className="flex mb-4">
                    <div className="bg-gray-200 text-gray-700 w-28 rounded-[50px] text-center py-2 cursor-pointer">
                        Popular
                    </div>
                    <div className="bg-gray-200 text-gray-700 rounded-[50px] w-28 text-center py-2 ml-3 cursor-pointer">
                        New arrivals
                    </div>
                    <div className="bg-gray-200 text-gray-700 rounded-[50px] w-28 text-center py-2 ml-3 cursor-pointer">
                        Top sales
                    </div>
                    <div className="bg-gray-200 rounded-[50px] w-28 text-center text-gray-700 py-2 ml-3 cursor-pointer">
                        Laptops
                    </div>
                    <Select 
                    placeholder="Sort by"
                    className="outline-gray-400 rounded-lg ml-auto w-fit"
                    options={options}
                    />
            </div>
            <p className="text-lg lg:text-2xl  font-semibold mb-10">{props.details.title}</p>
            <div className="max-md:flex grid gap-y-4 grid-x-4 lg:grid-cols-4 md:grid-cols-2 max-md:flex-col max-md:items-center justify-between">
                {url.pathname==="/item"?props.details.data.map(i=>(
                    <Link to={`/item`} className="w-[20vw] h-fit hover:shadow-xl hover:rounded-lg">
                        <img src={i.image} alt={i.name} className="h-[200px] w-full rounded-t-lg"/>
                        <div className="py-4 px-4">
                            <div className="flex mb-2">
                                <p className="font-semibold">{i.name}</p>
                                <p className="ml-auto text-purple-700 font-semibold">Ksh {i.price}</p>
                            </div>
                            <p className="text-gray-500">{i.brand}</p>
                            <button className="hover:bg-purple-500 border-gray-400 hover:text-white border-[1px] hover:border-none py-[8px] mt-8 text-base px-6 rounded-[50px]">
                                Add to cart
                            </button>
                        </div>
                    </Link>
                )):props.details.data.map(i=>(
                    <Link to={i.url} className="w-[20vw] h-fit hover:shadow-xl hover:rounded-lg">
                        <img src={i.image} alt={i.name} className="h-[230px] w-full rounded-lg"/>
                        <p className="font-bold text-xl text-center text-white -mt-[140px] mb-28">{i.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Items;