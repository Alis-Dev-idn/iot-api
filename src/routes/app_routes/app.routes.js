import {Router} from "express";
import {AppController} from "../../controller/index.js";
import validateToken from "../../middleware/middelware.js";

const appRoutes = Router();

appRoutes.post("/", validateToken, AppController.CreateApp);
appRoutes.delete("/", validateToken, AppController.DeleteApp);

export default appRoutes;