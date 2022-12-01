import mongoose from "mongoose";

const DeviceSchema = new mongoose.Schema({
    key: {type: String, required: true},
    data: {type: Object(), required: true},
    expireAt: {
        type: Date,
        default: Date.now(),
        index: {expires: new Date().setDate(new Date().getDate()+5)}
    }
}, {timestamps: { createdAt: true, updatedAt: false }});

// DeviceSchema.index({"expireAt": 1}, {expireAfterSeconds: 604800})

export default DeviceSchema;