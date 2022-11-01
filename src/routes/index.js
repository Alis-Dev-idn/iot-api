const express = require("express");
const sensor = require("./data_sensor");
const users = require("./user_routes");

const router = express();

router.use("/sensor", sensor);
router.use("/user", users);

//handle url missing
router.use(function(req, res, next) {
    return res.status(404).json({message: "wrong url"});
});

module.exports = router;