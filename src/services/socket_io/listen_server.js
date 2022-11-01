const SendData = require("./send_data");
let data = [];

const ListenServer = (socket /* Socket */) => {
    console.log("some one Connect server!");
    data.push(socket.id);
    console.log("id : " + socket.id);
    console.log(data);
    
    socket.on("disconnect", () => {
        console.log("some one disconnect!");
        console.log("id : " + socket.id);
        const newData = data.filter(items => items !== socket.id);
        data = newData;
        console.log(newData);
    });

    socket.on("esp-01", (data) => {
        console.log(data);
        SendData(socket, data.topic, "ok data accept");
    })        
}

module.exports = ListenServer;