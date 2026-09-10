import BookingModel from "../models/bookingModel.js";

export class BookingDao {

    async getAll() {
        return await BookingModel
            .find()
            .populate("services.service")
            .lean();
    }

    async getById(id) {
        return await BookingModel
            .findById(id)
            .populate("services.service");
    }

    async create(bookingData) {
        return await BookingModel.create(bookingData);
    }

    async update(id, bookingData) {
        return await BookingModel.findByIdAndUpdate(
            id,
            bookingData,
            {
                new: true,
                runValidators: true
            }
        );
    }
}