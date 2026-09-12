import { Router } from "express";

import {
    getBookings,
    getBookingById,
    createBooking,
    addServiceToBooking
} from "../controllers/booking.controller.js";

import { validateBody } from "../middlewares/validate.middleware.js";
import { createBookingSchema } from "../validators/booking.validator.js";


const bookingsRouter = Router();

bookingsRouter.get("/", getBookings);

bookingsRouter.get("/:bid", getBookingById);

bookingsRouter.post("/", validateBody(createBookingSchema), createBooking);

bookingsRouter.post(
    "/:bid/services/:sid", addServiceToBooking
);

export default bookingsRouter;