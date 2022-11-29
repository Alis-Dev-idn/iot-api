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
            socket.emit(data.key, status);
            socket.broadcast.emit(data.key, {...data, createdAt: Math.floor(new Date())});
        }catch (err){
            socket.emit(data.key, {error: err});
        }
    });
}

export default ListenConnection;