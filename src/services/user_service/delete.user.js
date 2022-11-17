import {MongoModel} from "../../mongodb/index.js";
import fs from "fs";

const RemoveUser = async (id, key) => {
    await MongoModel.UserSchema.deleteOne({_id: id});
    await MongoModel.UserProfile.deleteOne({_id: id});
    await MongoModel.AppSchema.deleteOne({_id: id});
    if(key && key.length !== 0)
        for (let i =0; i< key.length; i++){
            await MongoModel.SensorSchema.deleteMany({key: key[i]});
        }
    await fs.rmSync(`./data/${id}`, {recursive: true});
    return "ok";
}

export default RemoveUser;