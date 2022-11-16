import mongoose from "mongoose";
import {MongoModel} from "../../mongodb/index.js";


export const dbDevice = async (id) => {
    return await mongoose.model(`z_${id}`, MongoModel.DeviceSchema);
}

export const dropDb = async (id) => {
    await mongoose.connection.db.dropCollection(`z_${id}`, function (err, result){
        if(err) return err;
        return result;
    });
}