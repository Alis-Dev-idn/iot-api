const {Server} = require("socket.io");
let io;

const CreateServerIo = (server) => {
    io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
            credentials: true,
        },
        allowEIO3: true
    });
    console.log("Io is open");
    io.on("connection", (socket) => {
        console.log("some one Connect server!");
        socket.on("disconnect", () => {
            console.log("some one disconnect!");
        });
        socket.on("testing", (data) => {
            console.log(data);
        })
    });
}

module.exports = {
    CreateServerIo
}