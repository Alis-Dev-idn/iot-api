const SendData = require("./send_data");

const ListenServer = (socket /* Socket */) => {  
    console.log("some one Connect server!");
        
    socket.on("disconnect", () => {
        console.log("some one disconnect!");
    });

    socket.on("testing", (data) => {
        console.log(data);
        SendData(socket, "event", "ok data accept");
    })        
}

module.exports = ListenServer;