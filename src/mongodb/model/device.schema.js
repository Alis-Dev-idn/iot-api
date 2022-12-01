import mongoose from "mongoose";

const DeviceSchema = new mongoose.Schema({
    key: {type: String, required: true},
    data: {type: Object(), required: true},
    expireAt: {
        type: Date,
        default: Date.now(),
        index: {expires: '3d'}
    }
}, {timestamps: { createdAt: true, updatedAt: false }});

// DeviceSchema.index({"expireAt": 1}, {expireAfterSeconds: 604800})

export default DeviceSchema;