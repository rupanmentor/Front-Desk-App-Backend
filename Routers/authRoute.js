import express from "express";
import { getUser, loginUser, registerUser } from "../Controllers/authController.js";
import { adminMiddleware } from "../Middleware/adminMiddleware.js";




const router = express.Router();

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/getdata",adminMiddleware,getUser)


export default router;