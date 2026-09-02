import fs from 'fs/promises';

class ServiceManager {
    constructor() {
        this.path = './src/data/services.json';
    }

    async getServices() {
        try {
        const data = await fs.readFile(this.path, 'utf-8');
        return JSON.parse(data);
        } catch (error) {
        console.error('Error reading services.json:', error);
        return [];
        }
    }
    async getServiceById(id) {
        const services = await this.getServices();
        return services.find(service => service.id === id);
    }

    async updateService(id, updatedService) {
        const services = await this.getServices();
        const index = services.findIndex(service => service.id === id);
        if (index !== -1) {
            services[index] = { ...services[index], ...updatedService };
            await fs.writeFile(this.path, JSON.stringify(services));
            return services[index];
        }
        return null;
    }

    async deleteService(id) {
        const services = await this.getServices();
        const updatedServices = services.filter(service => service.id !== id);
        await fs.writeFile(this.path, JSON.stringify(updatedServices));
    }


    async addService(service) {
        const services = await this.getServices();
        services.push(service);
        await fs.writeFile(this.path, JSON.stringify(services));
    }
}
export default ServiceManager;