const {Router} = require("express");
const {Users} = require("../../controller");

const users = Router();

users.get("/:id", Users.GetUser);
users.get("/", Users.GetUser);
users.post("/", Users.CreateNewUser);

module.exports = users;