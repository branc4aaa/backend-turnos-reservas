import BookingService from "../services/bookingService.js";

const bookingService = new BookingService();

export const getBookings = async (req, res) => {
    try {
        const bookings = await bookingService.getAllBookings();

        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

export const getBookingById = async (req, res) => {
    try {
        const booking = await bookingService.getBookingById(req.params.bid);

        res.status(200).json(booking);
    } catch (error) {
        res.status(404).json({
            error: error.message
        });
    }
};

export const createBooking = async (req, res) => {
    try {
        const booking = await bookingService.createBooking(req.body);

        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

export const addServiceToBooking = async (req, res) => {
    try {
        const { bid, sid } = req.params;

        const booking = await bookingService.addServiceToBooking(
            bid,
            sid
        );

        res.status(200).json(booking);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};