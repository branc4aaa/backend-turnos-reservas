import ServicesDao from "../dao/servicesDao.js";

export default class ServicesRepository {
    constructor(services = new ServicesDao()) {
        this.services = services;
    }

    async createService(serviceData) {
        return await this.services.createService(serviceData);
    }

    async getServices() {
        return await this.services.getServices();
    }

    async getServiceById(id) {
        return await this.services.getServiceById(id);
    }

    async updateService(id, serviceData) {
        return await this.services.updateService(id, serviceData);
    }

    async deleteService(id) {
        return await this.services.deleteService(id);
    }
}