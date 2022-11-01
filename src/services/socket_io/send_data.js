
const SendData = (socket /* Socket */, topic, data) => {
    socket.emit(`${topic}`, data);
}

module.exports = SendData;