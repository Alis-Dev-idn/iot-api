import express from "express";
import UserRoute from "./user_routes/user.routes.js";
import ActiveRoutes from "./active_routes/active.user.js";
import Profile from "./user_routes/profile/user.profile.js";
import appRoutes from "./app_routes/app.routes.js";
import Device from "./device_routes/device.routes.js";

const Routes = express();

Routes.use("/user", UserRoute);
Routes.use("/active", ActiveRoutes);
Routes.use("/profile", Profile);
Routes.use("/app", appRoutes);
Routes.use("/device", Device);

/* Url wrong */
Routes.use(function(req, res, next) {
    return res.status(404).json({message: "wrong url"});
});

export default Routes;