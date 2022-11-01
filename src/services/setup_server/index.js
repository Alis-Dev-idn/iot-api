const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const https = require("https");
const http = require("http");
const fs = require("fs");
const {CreateServerIo} = require("../socket_io");
const {StartMongoDb} = require("../mongodb");
const router = require("../../routes");

let server;


const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "2MB" }));
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

if(process.env.SSL && process.env.SSL == "true") {
   const config = {
      key: fs.readFileSync(process.env.KEY),
      cert: fs.readFileSync(process.env.CERT) 
   }
   server = https.createServer(config, app);
}
if(process.env.SSL && process.env.SSL == "false" || !process.env.SSL) server = http.createServer(app);

const Run = () => {

 server.listen(process.env.PORT_HOST , () => {
    CreateServerIo(server);
    StartMongoDb();
    console.log(`server is runing in port ${process.env.PORT_HOST}`);
 });   
 
}

module.exports = {Run};