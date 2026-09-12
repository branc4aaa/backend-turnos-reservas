import ServicesService from "../services/servicesService.js";
import BookingService from "../services/bookingService.js";


const servicesService = new ServicesService();
const bookingService = new BookingService();

export const getServicesView = async (req, res) => {
    try {

        const result = await servicesService.getServices(
            req.query
        );

        res.render("services", {
            services: result.services,
            pagination: result.pagination
        });

    } catch (error) {
        res.status(500).send(error.message);
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
export const getBookingsView = async (req, res) => {
    try {
        const bookings = await bookingService.getAllBookings();
        res.render("bookings", { bookings });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getBookingByIdView2 = async (req, res) => {
    try {
        const { bid } = req.params;
        const booking = await bookingService.getBookingByIdView(bid);
        res.render("bookingDetail", { booking });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};