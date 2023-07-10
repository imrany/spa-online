// @flow strict

import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex flex-col h-[100vh] justify-center items-center">
            <p className="text-xl">Oops! this page isn't available.</p>
            <Link to="/" className="bg-black text-white px-8 py-2 rounded-[50px] mt-4">Back</Link>
        </div>
    );
};

export default NotFound;