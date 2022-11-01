const {config} = require("dotenv");
config();
const {StartServer} = require("./services");


//Run the server
StartServer.Run();