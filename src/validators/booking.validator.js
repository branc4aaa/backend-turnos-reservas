import { z } from "zod";

export const createBookingSchema = z.object({
    clientName: z
        .string()
        .min(1, "El nombre es obligatorio"),

    clientEmail: z
        .string()
        .email("Email inválido"),

    date: z
        .string()
        .min(1, "La fecha es obligatoria"),

    time: z
        .string()
        .min(1, "La hora es obligatoria"),

    status: z
        .enum([
            "pending",
            "confirmed",
            "cancelled"
        ])
        .optional()
});