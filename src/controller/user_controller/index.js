import Get from "./get.user.js";
import Create from "./create.user.js";
import Delete from "./delete.user.js";
import Login from "./login.user.js";
import GetUserProfile from "./profiles/get.user.profile.js";
import UploadProfile from "./profiles/upload.user.profile.js";
import {UpdateUser, UpdatePassword} from "./update.user.js";

export default {
    Login,
    Get,
    Create,
    Delete,
    GetUserProfile,
    UploadProfile,
    UpdateUser,
    UpdatePassword
}