// @flow strict

import { useEffect, useState } from "react";
import { $Dialog } from "../func";
type Props={
    message:string
}
function AccessLocation(prop:Props) {
    const dialogElement=document.getElementById("location-access-dialog") as HTMLDialogElement
    const dialog=new $Dialog(dialogElement)

    const [status,setStatus]=useState("")
    const location={
        successCallback(position:any){
            const {latitude, longitude}= position.coords;
            console.log(latitude,longitude)
        },
        errorCallback(error:any){
            setStatus(error.message);
        }
    }
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(location.successCallback, location.errorCallback);
    },[])
    const allow=()=>{
        navigator.geolocation.getCurrentPosition(location.successCallback, location.errorCallback);
        dialog.close()
    }
    return (
        <dialog id="location-access-dialog" className="shadow-lg rounded-md justify-center items-center flex flex-col lg:w-[35vw] max-md:w-[80vw] max-sm:w-[75vw] pb-6 h-fit max-sm:scale-[0.9]">
            <button onClick={dialog.close} className="ml-[auto]">
                <i className="ri-close-fill ri-lg hover:text-blue-500"></i>
            </button>
            <div className="text-center">
                <p className="text-2xl  max-sm:text-base my-2">{prop.message}</p>
                <p className="text-sm max-sm:text-xs text-gray-400 lg:w-[300px]">
                    {status}
                </p>
                <div className="flex justify-center mt-4">
                    <button className="bg-blue-500 text-white border-none px-4 py-2 text-xs rounded-md mr-6" onClick={allow}>Allow</button>
                    <button className="bg-white border text-blue-500 px-4 py-2 text-xs rounded-md ml-6" onClick={dialog.close}>Block</button>
                </div>
            </div>
        </dialog>
    );
};

export default AccessLocation;