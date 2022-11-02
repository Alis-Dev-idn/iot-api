const {Router} = require("express");
const Controller = require("../../controller");

const active = Router();

active.get("/", Controller.ActiveAccount);

module.exports = active;