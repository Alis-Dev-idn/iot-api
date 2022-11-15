import {Router} from "express";
import {User} from "../../controller/index.js"
import validateToken from "../../middleware/middelware.js";

const UserRoute = Router();

UserRoute.get("/:id", User.Get);
UserRoute.get("/", User.Get);
UserRoute.post("/", User.Create);
UserRoute.post("/login", User.Login);
UserRoute.put("/", validateToken, User.UpdateUser);
UserRoute.put("/password", validateToken, User.UpdatePassword);
UserRoute.delete("/:id", validateToken, User.Delete);

export default UserRoute;