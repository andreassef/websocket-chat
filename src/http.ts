import "reflect-metadata";
import express from 'express';
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";
import mongoose from 'mongoose';
import { container } from "tsyringe";
import { CreateUserService } from "./services/CreateUserService";

const app = express();
const server = createServer(app);

mongoose.connect("mongodb://localhost/rocketsocket", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.static(path.join(__dirname, "..", "public")));

const io = new Server(server);

io.on("connection", (socket) => {
    
    console.log("Socket", socket.id);

    // socket.on("start", async (data) => {
    //     console.log("Passou aqui?");
    //     const { email, avatar, name } = data;
    //     const createUserService = container.resolve(CreateUserService);

    //     const user = await createUserService.execute({
    //         email,
    //         avatar,
    //         name,
    //         socket_id: socket.id
    //     });
    //     console.log(user);
    // });
});


export {
    server,
    io
}
