import {Router} from "express";
import {DeviceController} from "../../controller/index.js";

const Device = Router();

Device.post("/", DeviceController.AddDevice);

export default Device;