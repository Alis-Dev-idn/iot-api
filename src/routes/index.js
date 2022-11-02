const express = require("express");
const sensor = require("./data_sensor");
const users = require("./user_routes");
const active = require("./active_account");

const router = express();

router.use("/sensor", sensor);
router.use("/user", users);
router.use("/active", active);

//handle url missing
router.use(function(req, res, next) {
    return res.status(404).json({message: "wrong url"});
});

module.exports = router;