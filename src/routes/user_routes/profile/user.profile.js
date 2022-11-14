import {Router} from "express";
import {User} from "../../../controller/index.js"

const Profile = Router();

Profile.get("/:username", User.GetUserProfile);


export default Profile;