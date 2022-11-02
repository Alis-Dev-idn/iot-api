const {Router} = require("express");
const {Users} = require("../../controller");

const users = Router();

users.get("/:id", Users.GetUser);
users.get("/", Users.GetUser);
users.post("/", Users.CreateNewUser);
users.delete("/", Users.DeleteUser);
users.delete("/:id", Users.DeleteUser);

module.exports = users;