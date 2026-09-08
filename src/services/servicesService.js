import ServicesRepository from "../repositories/servicesRepository.js";

export default class ServicesService {
    constructor(service = new ServicesRepository()) {
        this.service = service;
    }

    async getServices() {
        const services = await this.service.getServices();
        if (!services || services.length === 0) {
            throw new Error("Servicios no encontrados...");
        }
        return services;
    }

    async getServiceById(id) {
        if (!id) {
            throw new Error("Por favor ingrese un id...");
        }
        const service = await this.service.getServiceById(id);
        if (!service) {
            throw new Error("No se encuentra el servicio...");
        }
        return service;
    }

    async createService(nuevoServicio) {
        const { nombre, turnos, precio } = nuevoServicio;
        if (!nombre || !turnos || !precio) {
            throw new Error("Faltan datos, completar..."); 
        }
        return await this.service.createService({ nombre, turnos, precio });
    }

    async updateService(id, serviceUpdate) {
        if (!id) {
            throw new Error("Por favor ingrese un id...");
        }
        
        const service = await this.service.getServiceById(id);
        if (!service) {
            throw new Error("No se encuentra el servicio...");
        }

        return await this.service.updateService(id, serviceUpdate);
    }

    async deleteService(id) {
        if (!id) {
            throw new Error("Por favor ingrese un id...");
        }

        const service = await this.service.getServiceById(id);
        if (!service) {
            throw new Error("No se encuentra el servicio...");
        }
        
        return await this.service.deleteService(id);
    }
}