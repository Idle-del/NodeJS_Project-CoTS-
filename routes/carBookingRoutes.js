import express from "express";
import { createBooking, getMyBookings, getBookingById, deleteBooking } from "../controller/carBookingController.js";
import { isLoggedIn } from "../middleware/userMiddleware.js";

const router = express.Router();

router.route("/").post(isLoggedIn, createBooking);
router.route("/myBookings").get(isLoggedIn, getMyBookings);
router.route("/:id").get(isLoggedIn, getBookingById);
router.route("/:id").delete(isLoggedIn, deleteBooking);

export default router;