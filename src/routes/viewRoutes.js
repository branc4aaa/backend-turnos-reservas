import { Router } from "express";
import { getServicesView, getServiceByIdView } from "../controllers/view.controller.js";

const viewRouter = Router();

viewRouter.get("/", getServicesView);
viewRouter.get("/:id", getServiceByIdView);
export default viewRouter;