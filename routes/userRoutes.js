import express from "express";
import { userLogin, userRegister } from "../controller/userController.js";
// import { userLogin, userRegister } from "../controller/userController.js";
import token from "../middleware/tokenHandler.js";

const router = express.Router();

// router.post('/register', userRegister);
// router.post('login',token, userLogin);

router.post("/register",userRegister);

router.post("/login", userLogin);

export default router;