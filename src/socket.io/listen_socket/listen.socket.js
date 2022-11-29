import SaveDataSocket from "../save_socket/save.data.socket.js";

let connect = [];

const ListenConnection = (io) => {
    io.on("connection", socket => {
        console.log("user connected : " + socket.id);
        socket.on("disconnect", () => {
            console.log("user disconnect : " + socket.id);
            connect = connect.filter(items => items.id !== socket.id);
        });
        listenMessageNode(socket);
        sendOnlineDevice(socket);
    });
}

const listenMessageNode = (socket) => {
    socket.on("send_data", async (data) => {
        try{
            const online = connect.find(items => items.id === socket.id);
            if(!online) connect.push({id: socket.id, key: data.key});
            const status = await SaveDataSocket(data);
            socket.emit(data.key, status);
            socket.broadcast.emit(data.key, {...data, createdAt: Math.floor(new Date())});
        }catch (err){
            socket.emit(data.key, {error: err});
        }
    });
}

const sendOnlineDevice = (socket) => {
    socket.on("get_online", async () => {
        socket.emit("send_online", connect);
    });
}

export default ListenConnection;