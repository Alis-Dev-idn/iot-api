import express from "express";
import cors from "cors";
import morgan from "morgan";
import https from "https";
import http from "http";
import fs from "fs";
import fileUpload from "express-fileupload";
import Routes from "../routes/index.js";
import {StartMongoDb} from "../mongodb/index.js";
import {RunSocket} from "../socket.io/index.js"

const Run = () => {
   let server;

   const host = process.env.MOGNO_HOST;
   const port = process.env.MOGNO_PORT;
   const username = process.env.MONGO_USER;
   const password = process.env.MONGO_PWD;
   const db = process.env.MONGO_DB;

   const app = express();

   app.use(cors());
   app.use(morgan("dev"));
   app.use(express.json({limit: "10MB"}));
   app.use(express.urlencoded({extended: false}));
   app.use(fileUpload({limit: {fileSize: 50 *1024 * 1024}}));

   if(process.env.SSL && process.env.SSL === "true") {
      const config = {
         key: fs.readFileSync(process.env.KEY),
         cert: fs.readFileSync(process.env.CERT) 
      }
      server = https.createServer(config, app);
   }

   app.use("/", Routes);

   if(process.env.SSL && process.env.SSL === "false" || !process.env.SSL) server = http.createServer(app);

   server.listen(process.env.PORT_HOST , () => {
      RunSocket(server);
      StartMongoDb(host, port, db, username, password);
      console.log(`server is runing in port ${process.env.PORT_HOST}`);
   }); 
}

 export default Run;