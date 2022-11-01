const express = require("express");
const sensor = require("./data_sensor");

const router = express();

router.use("/sensor", sensor);

//handle url missing
router.use(function(req, res, next) {
    return res.status(404).json({message: "wrong url"});
});

module.exports = router;