import {MongoModel} from "../../mongodb/index.js";

const UpdateUser = async (type, data) => {
    if(type == "user") return await MongoModel.UserSchema.updateOne({_id: data._id}, data);
    if(type == "profile") return await MongoModel.UserProfile.updateOne({_id: data_id}, data);
}

export default UpdateUser;