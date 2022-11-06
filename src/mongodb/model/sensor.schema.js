import mongoose from "mongoose";

const SensorSchema = mongoose.Schema({
    key: String,
    data: {
        suhu: Number,
        humidity: Number
    }
}, {timestamps: true});

export default mongoose.model("sensor_data", SensorSchema);

