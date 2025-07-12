import express from "express";
import { addCar, getAllCars } from "../controller/carController.js";
import { isAdmin, isLoggedIn } from "../middleware/userMiddleware.js";

const router = express.Router();

router.route("/").get(getAllCars);
router.route("/addCar").post(isLoggedIn, isAdmin, addCar);

export default router;