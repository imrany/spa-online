import { useState } from "react"

type Props={
    message:any
}
const ErrorDialog=(props:Props)=>{
    const dialog_close=()=>{
        const dialogElement=document.getElementById("error-dialog") as HTMLDialogElement
        dialogElement.close()
    };
    setTimeout(()=>{
        const dialogElement=document.getElementById("error-dialog") as HTMLDialogElement
        dialogElement.close()
    },8000)
    return(
        <dialog id="error-dialog" className="shadow-lg rounded-md flex flex-col lg:w-[35vw] max-md:w-[80vw] max-sm:w-[75vw] h-fit text-[#808080] max-sm:scale-[0.5]">
            {/* <button onClick={dialog_close} className="ml-[auto]">
                <i className="ri-close-fill ri-lg hover:text-[#F45858]"></i>
            </button> */}
            {props.message}
        </dialog>
    )
}
export default ErrorDialog;