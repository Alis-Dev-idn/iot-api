const mongoose = require("mongoose");

const SensorSchema = mongoose.Schema({
    key: String,
    data: {
        suhu: Number,
        humidity: Number
    }

}, {timestamps: true});

module.exports = mongoose.model("sensor_data", SensorSchema);