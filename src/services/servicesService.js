import ServicesRepository from "../repositories/servicesRepository.js";

export default class ServicesService {
    constructor(service = new ServicesRepository()) {
        this.service = service;
    }

    async getServices(query = {}) {
        const page = Math.max(
            Number(query.page) || 1,
            1
        );

        const limit = Math.min(
            Math.max(Number(query.limit) || 10, 1),
            100
        );

        const filter = {};

        if (query.category) {
            filter.category = query.category;
        }
        if (query.available !== undefined) {
            if (
                query.available !== "true" &&
                query.available !== "false"
            ) {
                throw new Error(
                    "available debe ser true o false"
                );
            }

            filter.available =
                query.available === "true";
        }
        const allowedSortFields = [
            "name",
            "price",
            "duration",
            "category",
            "createdAt"
        ];

        const sort =
            allowedSortFields.includes(query.sort)
                ? query.sort
                : "createdAt";

        const order =
            query.order === "asc"
                ? 1
                : -1;

        const result =
            await this.service.getServices(
                filter,
                {
                    page,
                    limit,
                    sort,
                    order
                }
            );

        const totalPages = Math.ceil(
            result.total / limit
        );

        return {
            services: result.services,

            pagination: {
                total: result.total,
                page,
                limit,
                totalPages,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1
            }
        };
    }

    async getServiceById(id) {
        if (!id) {
            throw new Error(
                "Por favor ingrese un id..."
            );
        }

        const service =
            await this.service.getServiceById(id);

        if (!service) {
            throw new Error(
                "No se encuentra el servicio..."
            );
        }

        return service;
    }

    async createService(nuevoServicio) {
        return await this.service.createService(
            nuevoServicio
        );
    }

    async updateService(id, serviceUpdate) {
        if (!id) {
            throw new Error(
                "Por favor ingrese un id..."
            );
        }

        const service =
            await this.service.getServiceById(id);

        if (!service) {
            throw new Error(
                "No se encuentra el servicio..."
            );
        }

        return await this.service.updateService(
            id,
            serviceUpdate
        );
    }

    async deleteService(id) {
        if (!id) {
            throw new Error(
                "Por favor ingrese un id..."
            );
        }

        const service =
            await this.service.getServiceById(id);

        if (!service) {
            throw new Error(
                "No se encuentra el servicio..."
            );
        }

        return await this.service.deleteService(id);
    }
}