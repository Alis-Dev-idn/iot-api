import express from "express";
import UserRoute from "./user_routes/user.routes.js";

const Routes = express();

Routes.use("/user", UserRoute);

/* Url wrong */
Routes.use(function(req, res, next) {
    return res.status(404).json({message: "wrong url"});
});

export default Routes;