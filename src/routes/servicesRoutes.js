import { Router } from "express";
import {getServices, getServiceById, createService, updateService, deleteService} from "../controllers/service.controller.js";
import { validateBody } from "../middlewares/validate.middleware.js";

import {
    createServiceSchema,
    updateServiceSchema
} from "../validators/service.validator.js";

const servicesRouter = Router();

servicesRouter.get('/', getServices );
servicesRouter.get('/:id', getServiceById );
servicesRouter.post('/', validateBody(createServiceSchema), createService );
servicesRouter.put('/:id', validateBody(updateServiceSchema), updateService );
servicesRouter.delete('/:id', deleteService );
; 

export default servicesRouter;