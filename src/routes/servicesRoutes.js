import { Router } from "express";
import {getServices, getServiceById, createService, updateService, deleteService} from "../controllers/service.controller.js";
const servicesRouter = Router();

servicesRouter.get('/', getServices );
servicesRouter.get('/:id', getServiceById );
servicesRouter.post('/', createService );
servicesRouter.put('/:id', updateService );
servicesRouter.delete('/:id', deleteService );
; 

export default servicesRouter;