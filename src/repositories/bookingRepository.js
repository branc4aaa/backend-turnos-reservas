import { BookingDao } from "../dao/bookingDao.js";

export default class BookingRepository {
    constructor(bookingDao = new BookingDao()) {
        this.bookingDao = bookingDao;
    }

    async getAllBookings() {
        return await this.bookingDao.getAll();
    }

    async createBooking(bookingData) {
        return await this.bookingDao.create(bookingData);
    }
}