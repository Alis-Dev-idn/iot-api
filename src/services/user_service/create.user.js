import {MongoModel} from "../../mongodb/index.js";

const CreateUser = async (user, profile) => {
    const create_user = MongoModel.UserSchema(user);
    await create_user.save();
    return "ok";
}

const CreateProfile = async (profile) => {
    const create_profile = MongoModel.UserProfile(profile);
    await create_profile.save();
    return "ok";
}

export default {
    CreateUser,
    CreateProfile
};