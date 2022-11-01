const {Server} = require("socket.io");
const ListenServer = require("./listen_server");
let io;

const CreateServerIo = (server) => {
    io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
            credentials: true,
        },
        allowEIO3: true,
        pingInterval: 10000,
        pingTimeout: 5000,
    });

    io.on("connection", (socket) => {
        ListenServer(socket);
    });

    console.log("Io is open");
}

module.exports = {
    CreateServerIo
}