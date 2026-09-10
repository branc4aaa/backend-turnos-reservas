import ServiceModel from "../models/serviceModel.js";  

class ServicesDao {
    constructor() {
        this.serviceModel = ServiceModel;
    }

    async createService(serviceData) {
        const service = new this.serviceModel(serviceData);
        return await service.save();
    }

    async getServices() {
        return await this.serviceModel.find().lean();
    }

    async getServiceById(id) {
        return await this.serviceModel.findById(id).lean();
    }

    async updateService(id, serviceData) {
        return await this.serviceModel.findByIdAndUpdate(id, serviceData, { new: true });
    }

    async deleteService(id) {
        return await this.serviceModel.findByIdAndDelete(id);
    }
}

export default ServicesDao;