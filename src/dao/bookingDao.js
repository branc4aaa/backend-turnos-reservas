import {bookingModel} from "../models/bookingModel.js";

export default class BookingDao {
    async getAll(){
        return await bookingModel.find().lean();
    }
    async create(bookingData){
        const newBooking = new bookingModel(bookingData);
        return await newBooking.save();
    }
}