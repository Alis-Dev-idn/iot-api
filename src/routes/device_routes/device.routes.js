import {Router} from "express";
import {DeviceController} from "../../controller/index.js";
import validateToken from "../../middleware/middelware.js";

const Device = Router();

Device.get("/list", validateToken, DeviceController.getListDevice);
Device.get("/count", validateToken, DeviceController.getCountDevice);
Device.get("/", validateToken, DeviceController.getDataDevice);
Device.get("/graph", validateToken, DeviceController.getGraphDevice);
Device.post("/", DeviceController.sendData);

export default Device;