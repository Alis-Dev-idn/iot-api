import {Router} from "express";
import {AppController} from "../../controller/index.js";

const appRoutes = Router();

appRoutes.post("/", AppController.CreateApp);

export default appRoutes;