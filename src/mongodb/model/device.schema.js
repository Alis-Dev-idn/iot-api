import mongoose from "mongoose";

const DeviceSchema = new mongoose.Schema({
    key: {type: String, required: true},
    data: {type: Object(), required: true}
}, {timestamps: true});

export default DeviceSchema;