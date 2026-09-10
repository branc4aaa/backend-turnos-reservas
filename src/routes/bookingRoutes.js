import { Router } from "express";

import {
    getBookings,
    getBookingById,
    createBooking,
    addServiceToBooking
} from "../controllers/booking.controller.js";

const router = Router();

router.get("/", getBookings);

router.get("/:bid", getBookingById);

router.post("/", createBooking);

router.post(
    "/:bid/services/:sid",
    addServiceToBooking
);

export default router;