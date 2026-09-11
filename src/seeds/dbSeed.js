import mongoose from "mongoose";
import dotenv from "dotenv";

import ServiceModel from "../models/serviceModel.js";

dotenv.config();

const services = [
    {
        name: "Corte clásico",
        description: "Corte de cabello tradicional",
        duration: 30,
        price: 12000,
        category: "Peluquería",
        available: true
    },
    {
        name: "Corte premium",
        description: "Corte con lavado y terminación",
        duration: 45,
        price: 18000,
        category: "Peluquería",
        available: true
    },
    {
        name: "Barba",
        description: "Perfilado y arreglo de barba",
        duration: 25,
        price: 9000,
        category: "Peluquería",
        available: true
    },
    {
        name: "Coloración",
        description: "Coloración completa",
        duration: 90,
        price: 35000,
        category: "Peluquería",
        available: false
    },
    {
        name: "Masaje relajante",
        description: "Masaje corporal relajante",
        duration: 60,
        price: 25000,
        category: "Masajes",
        available: true
    },
    {
        name: "Masaje descontracturante",
        description: "Masaje para contracturas musculares",
        duration: 60,
        price: 28000,
        category: "Masajes",
        available: true
    },
    {
        name: "Masaje express",
        description: "Sesión corta de masaje",
        duration: 30,
        price: 15000,
        category: "Masajes",
        available: false
    },
    {
        name: "Kinesiología inicial",
        description: "Primera sesión de evaluación",
        duration: 60,
        price: 22000,
        category: "Kine",
        available: true
    },
    {
        name: "Kinesiología",
        description: "Sesión de rehabilitación",
        duration: 45,
        price: 20000,
        category: "Kine",
        available: true
    },
    {
        name: "Kinesiología deportiva",
        description: "Rehabilitación para lesiones deportivas",
        duration: 60,
        price: 26000,
        category: "Kine",
        available: true
    },
    {
        name: "Reeducación postural",
        description: "Sesión de reeducación postural",
        duration: 50,
        price: 24000,
        category: "Kine",
        available: false
    },
    {
        name: "Limpieza facial",
        description: "Limpieza profunda de rostro",
        duration: 50,
        price: 22000,
        category: "Estética",
        available: true
    },
    {
        name: "Hidratación facial",
        description: "Tratamiento hidratante facial",
        duration: 40,
        price: 19000,
        category: "Estética",
        available: true
    },
    {
        name: "Peeling facial",
        description: "Tratamiento de renovación facial",
        duration: 45,
        price: 27000,
        category: "Estética",
        available: false
    },
    {
        name: "Manicura",
        description: "Tratamiento completo de uñas",
        duration: 45,
        price: 16000,
        category: "Estética",
        available: true
    },
    {
        name: "Pedicura",
        description: "Tratamiento completo de pies",
        duration: 60,
        price: 18000,
        category: "Estética",
        available: true
    },
    {
        name: "Consulta nutricional",
        description: "Evaluación nutricional inicial",
        duration: 60,
        price: 30000,
        category: "Nutrición",
        available: true
    },
    {
        name: "Control nutricional",
        description: "Seguimiento del plan alimenticio",
        duration: 30,
        price: 18000,
        category: "Nutrición",
        available: true
    },
    {
        name: "Entrenamiento funcional",
        description: "Sesión individual de entrenamiento",
        duration: 60,
        price: 20000,
        category: "Fitness",
        available: true
    },
    {
        name: "Entrenamiento personalizado",
        description: "Rutina personalizada uno a uno",
        duration: 75,
        price: 30000,
        category: "Fitness",
        available: false
    },
    {
        name: "Yoga",
        description: "Clase individual de yoga",
        duration: 60,
        price: 17000,
        category: "Fitness",
        available: true
    },
    {
        name: "Pilates",
        description: "Clase individual de pilates",
        duration: 60,
        price: 19000,
        category: "Fitness",
        available: true
    },
    {
        name: "Reflexología",
        description: "Sesión de reflexología",
        duration: 45,
        price: 21000,
        category: "Bienestar",
        available: true
    },
    {
        name: "Reiki",
        description: "Sesión de relajación y energía",
        duration: 50,
        price: 18000,
        category: "Bienestar",
        available: false
    },
    {
        name: "Acupuntura",
        description: "Sesión de acupuntura",
        duration: 45,
        price: 26000,
        category: "Bienestar",
        available: true
    }
];
const seed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB conectado");

        await ServiceModel.deleteMany();

        await ServiceModel.insertMany(services);

        console.log("Servicios cargados correctamente");

        await mongoose.disconnect();

        process.exit(0);

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seed();