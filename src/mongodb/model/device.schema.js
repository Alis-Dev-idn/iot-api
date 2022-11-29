import mongoose from "mongoose";

const DeviceSchema = new mongoose.Schema({
    name: {type: String, required: true},
    data: {type: {_id: false}, required: true}
}, {timestamps: true});

export default DeviceSchema;