// @flow strict
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import ForgetPassword from "../ForgetPassword";
import { status } from "../../components/status";

function LoginSignupLayout() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/auth/login"/>}/>
            <Route path="/login" element={<Login status={status()}/>}/>
            <Route path="/register" element={<Register status={status()}/>}/>
            <Route path="/update_password" element={<ForgetPassword/>}/>
        </Routes>
    );
};

export default LoginSignupLayout;