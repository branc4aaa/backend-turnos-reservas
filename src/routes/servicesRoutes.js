import { Router } from "express";

const servicesRouter = Router();

servicesRouter.get('/', async (req, res) => {
    const response = await serviceManager.getServices();
    res.json(response);
});


export default servicesRouter;