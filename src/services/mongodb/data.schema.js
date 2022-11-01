const mongoose = require("mongoose");
const id = mongoose.Schema.Types.ObjectId;
const any = mongoose.Schema.Types.Mixed;

const DataSchema = mongoose.Schema({
    key: {
        type: id,
        required: true
    },
    variable: {
        type: Array(),
        required: true
    },
    data: {
        type: any,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("data", DataSchema);
