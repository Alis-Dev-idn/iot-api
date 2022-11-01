const {config} = require("dotenv");
config({path: "./src/.env"});
const {StartServer} = require("./services");


//Run the server
StartServer.Run();