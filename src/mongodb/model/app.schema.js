import mongoose from "mongoose";

const id = mongoose.Schema.Types.ObjectId;

const AppSchema = mongoose.Schema({
    _id: id,
    device: {type: Array, default: []},
    application: {type: Array, default: []}
}, {timestamps: true});

export default mongoose.model("app_data", AppSchema);

