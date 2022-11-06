import {Router} from "express";
import {User} from "../../controller/index.js"

const UserRoute = Router();

UserRoute.get("/:id", User.Get);
UserRoute.get("/", User.Get);
UserRoute.post("/", User.Create);
UserRoute.post("/login", User.Login);
UserRoute.delete("/:id", User.Delete);

export default UserRoute;