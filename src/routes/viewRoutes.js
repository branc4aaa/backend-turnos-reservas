import { Router } from "express";
import { getServicesView, getServiceByIdView } from "../controllers/view.controller.js";
import { getBookings, getBookingById, createBooking, addServiceToBooking } from "../controllers/booking.controller.js";

const viewRouter = Router();

viewRouter.get("/bookings", getBookings);
viewRouter.get("/bookings/:bid", getBookingById);
viewRouter.post("/bookings", createBooking);
viewRouter.post("/bookings/:bid/services/:sid", addServiceToBooking);
viewRouter.get("/", getServicesView);
viewRouter.get("/:id", getServiceByIdView);
export default viewRouter;