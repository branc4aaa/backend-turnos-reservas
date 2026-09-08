import ServicesService from "../services/servicesService.js";

const servicesService = new ServicesService();

export const getServices = async (req, res) => {
    try {
        const services = await servicesService.getServices();
        res.json(services);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const getServiceById = async (req, res) => {
    const { id } = req.params;
    try {
        const service = await servicesService.getServiceById(id);
        res.json(service);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const createService = async (req, res) => {
    const nuevoServicio = req.body;
    try {
        const createdService = await servicesService.createService(nuevoServicio);
        res.status(201).json(createdService);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateService = async (req, res) => {
    const { id } = req.params;
    const serviceUpdate = req.body;
    try {
        const updatedService = await servicesService.updateService(id, serviceUpdate);
        res.json(updatedService);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const deleteService = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedService = await servicesService.deleteService(id);
        res.json(deletedService);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};