type Props={
    message:any
}
const ErrorDialog=(props:Props)=>{
    setTimeout(()=>{
        const dialogElement=document.getElementById("error-dialog") as HTMLDialogElement
        dialogElement.close()
    },8000)
    return(
        <dialog id="error-dialog" className="shadow-lg rounded-md flex flex-col lg:w-[35vw] max-md:w-[80vw] max-sm:w-[75vw] h-fit text-[#808080] max-sm:scale-[0.5]">
            {props.message}
        </dialog>
    )
}
export default ErrorDialog;