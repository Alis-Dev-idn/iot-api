import {MongoModel} from "../../mongodb/index.js";

const RemoveUser = async (id, key) => {
    await MongoModel.UserSchema.deleteOne({_id: id});
    await MongoModel.UserProfile.deleteOne({_id: id});
    if(key && key.length != 0)
        for (let i =0; i< key.length; i++){
            await MongoModel.SensorSchema.deleteMany({key: key[i]});
        }
    return "ok";
}

export default RemoveUser;