import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import servicesRouter from './routes/servicesRoutes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
//funcionalidades de express

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
//routes
app.use('/api/services', servicesRouter);
export default app;
