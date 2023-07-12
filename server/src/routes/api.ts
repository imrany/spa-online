import express from "express"
import { login_user, register_user, reserve } from "../controller/user"
const router=express.Router()

router.post("/auth/register",register_user)
router.post("/auth/login",login_user)
router.post("/book",reserve)

export default router