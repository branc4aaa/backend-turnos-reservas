import { Schema, model } from "mongoose";

const servicesSchema = new Schema({
        
        name: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        duration: {
            type: Number,
            required: true,
            min: 1,
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        category: {
            type: String,
            required: true,
            trim: true,
        },

        available: {
            type: String,
            enum: ["yes", "no"],
            default: "yes",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ServiceModel = model("Service", servicesSchema);

export default ServiceModel;