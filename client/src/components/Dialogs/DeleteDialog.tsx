// @flow strict

import { $Dialog } from "../func";
type Props={
    message:{
        text:string
    }
}
function DeleteDialog(prop:Props) {
    const dialogElement=document.getElementById("delete-dialog") as HTMLDialogElement
    const dialog=new $Dialog(dialogElement)
    return (
        <dialog id="delete-dialog" className="shadow-lg rounded-md justify-center items-center flex flex-col lg:w-[35vw] max-md:w-[80vw] max-sm:w-[75vw] pb-6 h-fit max-sm:scale-[0.9]">
            <button onClick={dialog.close} className="ml-[auto]">
                <i className="ri-close-fill ri-lg hover:text-blue-500"></i>
            </button>
            <div className="text-center">
                <p className="text-2xl  max-sm:text-base my-2">{prop.message.text}</p>
                <div className="flex justify-center mt-4">
                    <button className="bg-red-500 text-white border-none px-4 py-2 text-xs rounded-md mr-6" >Delete</button>
                    <button className="bg-white border text-blue-500 px-4 py-2 text-xs rounded-md ml-6" onClick={dialog.close}>Cancel</button>
                </div>
            </div>
        </dialog>
    );
};

export default DeleteDialog;