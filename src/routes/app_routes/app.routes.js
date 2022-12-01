import {Router} from "express";
import {AppController} from "../../controller/index.js";
import validateToken from "../../middleware/middelware.js";

const appRoutes = Router();

appRoutes.get("/", validateToken, AppController.GetAppController);
appRoutes.get("/options", validateToken, AppController.GetAppSelect);
appRoutes.post("/", validateToken, AppController.CreateApp);
appRoutes.post("/device", validateToken, AppController.CreateDevice);
appRoutes.delete("/", validateToken, AppController.DeleteApp);
appRoutes.delete("/device", validateToken, AppController.DeleteDevice);

export default appRoutes;