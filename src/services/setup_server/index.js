const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const http = require("http");
const {CreateServerIo} = require("../socket_io");
const router = require("../../routes");


const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "2MB" }));
app.use(express.urlencoded({ extended: false }));

app.use("/", router);
const server = http.createServer(app);

const Run = () => {
 server.listen(process.env.PORT_HOST , () => {
    CreateServerIo(server);
    console.log(`server is runing in port ${process.env.PORT_HOST}`);
 });   
}



module.exports = {Run};