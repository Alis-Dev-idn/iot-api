import { Router } from "express";
import { Active } from "../../controller/index.js";

const ActiveRoutes = Router();

ActiveRoutes.get("/", Active);

export default ActiveRoutes;