const { Router } = require("express");
const {Sensor} = require("../../controller");

const sensor = Router();

sensor.get("/", Sensor.GetSensorValue);
sensor.post("/", Sensor.SendSensorValue);


module.exports = sensor;