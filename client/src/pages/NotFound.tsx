// @flow strict

import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex flex-col h-[100vh] justify-center items-center">
            <p className="text-lg">Not found</p>
            <Link to="/" className="bg-black">Back</Link>
        </div>
    );
};

export default NotFound;