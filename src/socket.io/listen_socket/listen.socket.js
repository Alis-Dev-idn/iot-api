const ListenConnection = (io) => {
    io.on("connection", socket => {
        console.log("user connected : " + socket.id);
        socket.on("disconnect", () => {
            console.log("user disconnect : " + socket.id);
        });

        socket.on("online", (data) => {
            
        });

        socket.on("device", (data) => {

        });

        socket.on("sensor", (data) => {

        });
    });
}

export default ListenConnection;