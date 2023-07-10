import { $Dialog, operations } from "../func";

// @flow strict
type Props={
    message:string
}
function ErrorDialog(prop:Props) {
    const dialogElement=document.getElementById("delete-dialog") as HTMLDialogElement
    const dialog=new $Dialog(dialogElement)
    return (
        <dialog id="error-dialog" className="shadow-lg rounded-md justify-center items-center flex flex-col lg:w-[35vw] max-md:w-[80vw] max-sm:w-[75vw] pb-6 h-fit max-sm:scale-[0.9]">
            <button onClick={dialog.close} className="ml-[auto]">
                <i className="ri-close-fill ri-lg hover:text-blue-500"></i>
            </button>
            <div className="text-center">
                <p className="text-2xl  max-sm:text-lg my-2">An error has occurred</p>
                <p className="text-sm max-sm:text-xs text-gray-400 lg:w-[300px]">
                    {prop.message}
                </p>
                <div className="flex justify-center mt-4">
                    <button className="bg-blue-500 text-white border-none px-4 py-2 text-xs rounded-md mr-6" onClick={operations.reload}>Reload</button>
                    <button className="bg-white border text-blue-500 px-4 py-2 text-xs rounded-md ml-6" onClick={dialog.close}>Close</button>
                </div>
            </div>
        </dialog>
    );
};

export default ErrorDialog;