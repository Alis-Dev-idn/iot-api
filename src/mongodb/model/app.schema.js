import mongoose from "mongoose";

const id = mongoose.Schema.Types.ObjectId;

const AppSchema = mongoose.Schema({
    _id: id,
    device: {
        type: Array({
            _id: false,
            name: String,
            application: String
        }), default: []
    },
    application: {type: Array, default: []},
    widget: {
        type: Array({
            _id: false,
            widget_type: String,
            data: String,
            application: String,
            device: String
        }), default: []
    }
}, {timestamps: true});

export default mongoose.model("app_data", AppSchema);

