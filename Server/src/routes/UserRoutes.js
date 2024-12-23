import express from "express";
import { forgotPassword, Login, resetPassword, Signup, verifyOtp } from "../Controllers/UserController.js";

const router = express.Router();


router.post('/signup', Signup);
router.post('/Login', Login);
router.post('/Forgetpassword', forgotPassword);
router.post('/verifyOtp', verifyOtp);
router.post('/resetPassword', resetPassword);



export default router