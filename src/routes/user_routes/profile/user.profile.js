import {Router} from "express";
import {User} from "../../../controller/index.js"
import validateToken from "../../../middleware/middelware.js";

const Profile = Router();

Profile.get("/:username", User.GetUserProfile);
Profile.put("/:username", validateToken, User.UploadProfile);

export default Profile;