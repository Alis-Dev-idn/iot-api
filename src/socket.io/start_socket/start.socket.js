import {Server} from "socket.io";
import ListenConnection from "../listen_socket/listen.socket.js"

const RunSocket = (server) => {
    let io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
            credentials: true,
        },
        allowEIO3: true,
        pingInterval: 10000,
        pingTimeout: 5000
    });
    console.log("Socket.io Ok");
    ListenConnection(io);
}

export default RunSocket;