import {MongoModel} from "../../mongodb/index.js";

const UpdateApp = async (id, data) => {
    return await MongoModel.AppSchema.updateOne({_id: id}, data);
}

export default UpdateApp;