import express from "express"
import { login_admin, login_user, register_user, reserve } from "../controller/user"
const router=express.Router()

router.post("/auth/register",register_user)
router.post("/auth/login",login_user)
router.post("/book",reserve)

router.post("/admin/login",login_admin)
export default router