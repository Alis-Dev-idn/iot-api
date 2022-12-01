import mongoose from "mongoose";

const DeviceSchema = new mongoose.Schema({
    key: {type: String, required: true},
    data: {type: Object(), required: true}
}, {timestamps: true});

DeviceSchema.index({"expireAt": 1}, {expireAfterSeconds: 604800})

export default DeviceSchema;