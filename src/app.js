import express from 'express';



const app = express();
//funcionalidades de express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

export default app;
