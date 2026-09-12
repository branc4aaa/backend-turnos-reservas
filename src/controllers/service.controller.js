import ServicesService from "../services/servicesService.js";

const servicesService = new ServicesService();

export const getServices = async (req, res) => {
    try {
        const result =
            await servicesService.getServices(
                req.query
            );

        res.status(200).json(result);

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
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
    try {
        const service = await servicesService.createService(req.body);

        const io = req.app.get("io");

        io.emit("serviceCreated", service);

        res.status(201).json(service);

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

export const updateService = async (req, res) => {
    try {
        const service = await servicesService.updateService(
            req.params.id,
            req.body
        );

        const io = req.app.get("io");

        io.emit("serviceUpdated", service);

        res.status(200).json(service);

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

export const deleteService = async (req, res) => {
    try {
        const service = await servicesService.deleteService(
            req.params.id
        );

        const io = req.app.get("io");

        io.emit("serviceDeleted", {
            id: req.params.id
        });

        res.status(200).json({
            message: "Servicio eliminado"
        });

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};