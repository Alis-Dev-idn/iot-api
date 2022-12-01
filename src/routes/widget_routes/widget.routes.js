import {Router} from "express";
import validateToken from "../../middleware/middelware.js";
import {WidgetController} from "../../controller/index.js";

const widget = Router();

widget.post("/create", validateToken, WidgetController.CreateWidgetChar);
widget.delete("/graph", validateToken, WidgetController.DeleteGraph);
widget.get("/graph", validateToken, WidgetController.getGraph);

export default widget;