import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import servicesRouter from './routes/servicesRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';
import { configureHandlebars } from './config/handlebars.js';
import viewRouter from './routes/viewRoutes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
//funcionalidades de express 

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
//hbs 
configureHandlebars(app);
//routes
app.use('/api/services', servicesRouter);
app.use('/api/bookings', bookingRouter);
app.use('/', viewRouter);

export default app;
