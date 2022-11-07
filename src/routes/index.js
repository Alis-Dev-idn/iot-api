import express from "express";
import UserRoute from "./user_routes/user.routes.js";
import ActiveRoutes from "./active_routes/active.user.js";

const Routes = express();

Routes.use("/user", UserRoute);
Routes.use("/active", ActiveRoutes);

/* Url wrong */
Routes.use(function(req, res, next) {
    return res.status(404).json({message: "wrong url"});
});

export default Routes;