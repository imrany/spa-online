// @flow strict

import { Link } from "react-router-dom";

function UserLogin() {
    function dialog_close(){
        const dialogElement=document.getElementById("user-dialog") as HTMLDialogElement
        dialogElement.close()
    }

    
    return (
        <dialog id="user-dialog" className="shadow-lg rounded-md flex flex-col lg:w-[35vw] max-md:w-[80vw] max-sm:w-[75vw] h-fit text-[#808080] max-sm:scale-[0.5]">
            <button onClick={dialog_close} className="ml-[auto]">
                <i className="ri-close-fill ri-lg hover:text-[#F45858]"></i>
            </button>
            <div className="flex flex-col w-full">
                <Link onClick={dialog_close} to="/auth/register" className="text-center hover:text-[#F45858] py-2  text-xl  max-sm:text-base">
                    <i className="ri-add-circle-fill mr-2"></i>
                    Create account
                </Link>
                <Link onClick={dialog_close} to="/auth" className="text-center text-xl hover:text-[#F45858] py-2 max-sm:text-base ">
                    <i className="ri-account-circle-fill mr-2"></i>
                    Sign in
                </Link>
            </div>
        </dialog>
    );
};

export default UserLogin;