const mongoose = require("mongoose");
const id = mongoose.Schema.Types.ObjectId;
// const any = mongoose.Schema.Types.Mixed;

const DataSchema = mongoose.Schema({
    id: id,
    key: {
        type: String,
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model("data", DataSchema);
