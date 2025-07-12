import express from "express";
import { addCar, getAllCars, getCar, updateCar, deleteCar } from "../controller/carController.js";
import { isAdmin, isLoggedIn } from "../middleware/userMiddleware.js";

const router = express.Router();

router.route("/").get(getAllCars);
router.route("/addCar").post(isLoggedIn, isAdmin, addCar);
router.route("/:id").get(getCar);
router.route("/:id").put(isLoggedIn, isAdmin, updateCar);
router.route("/:id").delete(isLoggedIn, isAdmin, deleteCar);

export default router;