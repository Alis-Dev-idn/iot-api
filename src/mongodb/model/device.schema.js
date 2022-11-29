import mongoose from "mongoose";

const DeviceSchema = new mongoose.Schema({
    name: {type: String, required: true},
    data: {type: Object(), required: true}
}, {timestamps: true, _id: false});

export default DeviceSchema;