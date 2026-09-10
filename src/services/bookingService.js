import BookingRepository from "../repositories/bookingRepository.js";
import ServicesRepository from "../repositories/servicesRepository.js";

export default class BookingService {

    constructor() {
        this.bookingRepository = new BookingRepository();
        this.servicesRepository = new ServicesRepository();
    }

    async getAllBookings() {
        return await this.bookingRepository.getAllBookings();
    }

    async getBookingById(id) {
        const booking = await this.bookingRepository.getBookingById(id);

        if (!booking) {
            throw new Error("Reserva no encontrada");
        }

        return booking;
    }

    async getBookingByIdView(id) {
        const booking = await this.bookingRepository.getBookingByIdView(id);

        if (!booking) {
            throw new Error("Reserva no encontrada");
        }

        return booking;
    }

    async createBooking(bookingData) {
        return await this.bookingRepository.createBooking(bookingData);
    }

    async addServiceToBooking(bookingId, serviceId) {

        const booking = await this.bookingRepository.getBookingById(bookingId);

        if (!booking) {
            throw new Error("Reserva no encontrada");
        }

        const service = await this.servicesRepository.getServiceById(serviceId);

        if (!service) {
            throw new Error("Servicio no encontrado");
        }

        const existingService = booking.services.find(
            item => item.service._id.toString() === serviceId
        );

        if (existingService) {
            existingService.quantity += 1;
        } else {
            booking.services.push({
                service: serviceId,
                quantity: 1
            });
        }

        await booking.save();

        return booking;
    }
}