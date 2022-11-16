import {MongoModel} from "../../mongodb/index.js";


const GetApp = async (by, id, name) => {
    if(by === "id") return await MongoModel.AppSchema.findOne({_id: id});
    if(by === "id-application") return await MongoModel.AppSchema.findOne({_id: id, "device": name}, {});
    if(by === "device") return await MongoModel.AppSchema.findOne({"device.name": id}, {});
}

export default GetApp;