import ServiceModel from "../models/serviceModel.js";  

class ServicesDao {
    constructor() {
        this.serviceModel = ServiceModel;
    }

    async createService(serviceData) {
        const service = new this.serviceModel(serviceData);
        return await service.save();
    }

    async getServices(filter = {}, options = {}) {

        const {
            page = 1,
            limit = 10,
            sort = "createdAt",
            order = -1
        } = options;

        const skip = (page - 1) * limit;

        const [services, total] = await Promise.all([
            ServiceModel
                .find(filter)
                .sort({ [sort]: order })
                .skip(skip)
                .limit(limit)
                .lean(),

            ServiceModel.countDocuments(filter)
        ]);

        return {
            services,
            total
        };
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