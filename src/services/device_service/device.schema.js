import mongoose from "mongoose";
import {MongoModel} from "../../mongodb/index.js";


export const dbDevice = async (name) => {
    console.log(MongoModel.UserSchema);
    return await mongoose.model(`${name}_sensor`, MongoModel.DeviceSchema);
}