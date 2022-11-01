const {Router} = require("express");
const {Users} = require("../../controller");

const users = Router();

users.get("/:id", Users.GetUser);
users.get("/", Users.GetUser);

module.exports = users;