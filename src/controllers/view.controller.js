import ServicesService from "../services/servicesService.js";

const servicesService = new ServicesService();

export const getServicesView = async (req, res) => {
    try {
        const services = await servicesService.getServices();
        res.render("services", { services });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getServiceByIdView = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await servicesService.getServiceById(id);
        res.render("serviceDetail", { service });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};