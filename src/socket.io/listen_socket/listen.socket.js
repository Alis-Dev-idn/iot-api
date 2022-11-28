import SaveDataSocket from "../save_socket/save.data.socket.js";

const ListenConnection = (io) => {
    io.on("connection", socket => {
        console.log("user connected : " + socket.id);
        socket.on("disconnect", () => {
            console.log("user disconnect : " + socket.id);
        });
        listenMessageNode(socket);
    });
}

const listenMessageNode = (socket) => {
    socket.on("send_data", async (data) => {
        try{
            const status = await SaveDataSocket(data);
            socket.emit("send_data", status);
            socket.broadcast.emit(`accept_${data.name}`, {...data, createdAt: Math.floor(new Date())});
        }catch (err){
            socket.emit("send_data", err);
        }
    });
}

export default ListenConnection;