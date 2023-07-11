// @flow strict

import { Route, Routes, Navigate, Link } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";

function LoginSignupLayout() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/auth/login"/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    );
};

export default LoginSignupLayout;