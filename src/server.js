import app from './app.js';
import envConfig from './config/env.config.js';
import connectDB from './config/databaseConfig.js';
import http from "http";
import { Server } from "socket.io";

await connectDB();

const PORT = envConfig.PORT || 3000;

const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.set("io", io);

io.on("connection", (socket) => {
    console.log(`Cliente conectado: ${socket.id}`);

    socket.on("disconnect", () => {
        console.log(`Cliente desconectado: ${socket.id}`);
    });
});

httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});