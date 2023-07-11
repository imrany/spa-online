import { Link } from "react-router-dom";

 
 const JoinUs=()=>{
    return(
        <div className="h-[75vh] flex flex-col items-center justify-center" id="join-us">
            <p className="text-4xl text-center mt-6 font-semibold w-[50vw]  text-[#333333]">
                Join us and get all the service we provide
            </p>

            <p className="mt-8 text-base w-[400px] text-[#808080] text-center">
                Follow us to get more attractive vouchers. We usually update events on Friday morns.
            </p>
            <Link to="/" className="bg-[#f0b369] hover:bg-[#F7B941] text-white py-[8px] mt-8 text-base px-6 rounded-[50px]">
                Learn more
            </Link>
        </div>
    )
 }
 export default JoinUs;