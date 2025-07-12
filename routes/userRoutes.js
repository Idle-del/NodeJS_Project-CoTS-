import express from "express";
import { userLogin, userRegister } from "../controller/userController.js";
// import { userLogin, userRegister } from "../controller/userController.js";
// import token from "../middleware/tokenHandler.js";

const router = express.Router();

// router.post('/register', userRegister);
// router.post('login', userLogin);

router.route("/register").post(userRegister);

router.route("/login").post(userLogin);

export default router;