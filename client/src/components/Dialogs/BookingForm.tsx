// @flow strict
import { useState } from "react";
type Props={
    status:{
        value:boolean,
        text:string
    }
}

function BookingForm(props:Props) {
    const date=new Date()
    const min=date.getMinutes()<10?`0${date.getMinutes()}`:date.getMinutes()
    const date_time=`${date.getHours()}:${min} - ${date.getDate()}/${1+date.getMonth()}/${date.getFullYear()}`
    const [reserve_btn,setReserve_btn]=useState("Reserve spot")
    const [error,setError]=useState(<p className="text-center text-lg">Reserve your spot</p>)
    const dialog_close=()=>{
        const dialogElement=document.getElementById("booking-dialog") as HTMLDialogElement
        dialogElement.close()
        setError(<p className="text-center text-lg">Reserve your spot</p>)
        setReserve_btn("Reserve spot")
    };

    async function handleSubmit(e:any){
        e.preventDefault()
        try {
            setReserve_btn("Sending...")
            const username=e.target.username.value;
            const phone_number=e.target.phone_number.value;
            const email=e.target.email.value;
            const url=`https://spa-online-server.onrender.com/api/book`;
            const response=await fetch(url,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    username,
                    phone_number,
                    email,
                    date_time
                })
            })
            const parseRes=await response.json();
            if(parseRes.error){
                setError(<p className="text-center text-sm text-red-400">{parseRes.error}</p>)
                setReserve_btn("Try again later")
            }else{
                console.log(parseRes)
                e.target.reset();
                setError(<p className="text-center text-lg">Reserve your spot</p>)
                dialog_close();
            }
        } catch (error:any) {
            if(!props.status.value){
                setError(<p className="text-center text-sm text-red-400">{props.status.text}</p>)
                setReserve_btn("Try again later")
            }else{
                setError(<p className="text-center text-sm text-red-400">{error.message}</p>)
                setReserve_btn("Try again")
            }
        }
    }
    
    return (
        <dialog id="booking-dialog" className="shadow-lg rounded-md flex flex-col lg:w-[35vw] max-md:w-[80vw] max-sm:w-[75vw] h-fit text-[#808080] scale-[0.9]">
            <button  className="ml-[auto]" onClick={dialog_close}>
                <i className="ri-close-fill ri-lg hover:text-[#F45858]"></i>
            </button>
            <div className="flex flex-col w-full">
               {error}
                <form className="flex flex-col my-4" onSubmit={handleSubmit} method="dialog">
                    <label htmlFor="username" className="text-[#808080] text-sm">Name</label>
                    <input type="text" name="username" className="mt-2 border-gray-300 border-[1px] bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-sm text-sm" placeholder="John Doe" required/>
                    <label htmlFor="phone_number" className="text-[#808080] text-sm mt-4">Phone number</label>
                    <input type="tel" name="phone_number" className="mt-2 border-gray-300 border-[1px] bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-sm text-sm" placeholder="2547xxxxxxxx" required/>
                    <label htmlFor="email" className="text-[#808080] text-sm mt-4">Email</label>
                    <input type="email" name="email" className="mt-2 border-gray-300 border-[1px] bg-white rounded-lg focus:outline-1 focus:outline-[#F7B941] py-2 px-4 placeholder:text-sm text-sm" placeholder="johndoe@gmail.com" required/>
                    <button className="bg-[#f0b369] text-white mt-6 py-3 rounded-lg cursor-pointer text-sm">{reserve_btn}</button>
                </form>
            </div>
        </dialog>
    );
};

export default BookingForm;