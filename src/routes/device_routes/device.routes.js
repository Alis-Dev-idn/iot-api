import {Router} from "express";
import {DeviceController} from "../../controller/index.js";
import validateToken from "../../middleware/middelware.js";

const Device = Router();

Device.get("/", validateToken, DeviceController.getDataDevice);
Device.get("/count", validateToken, DeviceController.getCountDevice);
Device.post("/", DeviceController.sendData);

export default Device;