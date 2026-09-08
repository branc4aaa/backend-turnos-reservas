import { Schema, model }from "mongoose";

const bookingServiceSchema = new Schema(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      default: 1,
      min: 1,
    },
  },
  {
    _id: false,
  }
);

const bookingSchema = new Schema(
  {
    clientName: {
      type: String,
      required: true,
      trim: true,
    },

    clientEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    date: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      required: true,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },

    services: {
      type: [bookingServiceSchema],
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BookingModel = model("Booking", bookingSchema);

export default BookingModel
;