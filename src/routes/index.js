import express from "express";
import UserRoute from "./user_routes/user.routes.js";

const Routes = express();

Routes.use("/user", UserRoute);

export default Routes;