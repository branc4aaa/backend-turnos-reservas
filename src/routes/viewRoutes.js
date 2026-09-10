import { Router } from "express";
import { getServicesView, getServiceByIdView } from "../controllers/view.controller.js";
import { getBookingsView, getBookingByIdView2 } from "../controllers/view.controller.js";

const viewRouter = Router();

viewRouter.get("/bookings", getBookingsView);
viewRouter.get("/bookings/:bid", getBookingByIdView2);
viewRouter.get("/", getServicesView);
viewRouter.get("/:id", getServiceByIdView);
export default viewRouter;