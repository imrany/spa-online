import { useState } from "react"

type Props={
    status:{
        value:boolean,
        text:string
    }
}
const SearchForm=(props:Props)=>{
    const [error,setError]=useState(<></>)
    const dialog_close=()=>{
        const dialogElement=document.getElementById("search-dialog") as HTMLDialogElement
        dialogElement.close()
    };
    async function handleSearch(e:any) {
        e.preventDefault()
        try {
            const search=e.target.search.value;
           

            e.target.reset();
            dialog_close();
        } catch (error:any) {
            if(!props.status.value){
                setError(<p className="text-center text-sm text-red-400">{props.status.text}</p>)
            }else{
                setError(<p className="text-center text-sm text-red-400">{error.message}</p>)
            }  
        }
    }
    return(
        <dialog id="search-dialog" className="shadow-lg rounded-md flex flex-col lg:w-[35vw] max-md:w-[80vw] max-sm:w-[75vw] h-fit text-[#808080] max-sm:scale-[0.5]">
            <button onClick={dialog_close} className="ml-[auto]">
                <i className="ri-close-fill ri-lg hover:text-[#F45858]"></i>
            </button>
            {error}
            <form onSubmit={handleSearch} className="flex justify-center mt-2 items-center border-gray-300 py-2 px-4 border-[1px] rounded-lg">
               <input autoComplete="false" type="text" name="search" id="search" className="bg-white w-full  focus:outline-1 focus:outline-none  placeholder:text-sm text-sm" placeholder="Search" required/>
               <button>
                    <i className="ri-search-line"></i>
               </button>
            </form>
        </dialog>
    )
}
export default SearchForm;