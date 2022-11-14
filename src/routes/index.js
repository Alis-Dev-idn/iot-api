import express from "express";
import UserRoute from "./user_routes/user.routes.js";
import ActiveRoutes from "./active_routes/active.user.js";
import Profile from "./user_routes/profile/user.profile.js";

const Routes = express();

Routes.use("/user", UserRoute);
Routes.use("/active", ActiveRoutes);
Routes.use("/profile", Profile);

/* Url wrong */
Routes.use(function(req, res, next) {
    return res.status(404).json({message: "wrong url"});
});

export default Routes;