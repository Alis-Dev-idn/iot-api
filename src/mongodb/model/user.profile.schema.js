import mongoose from "mongoose";

const id = mongoose.Schema.Types.ObjectId;

const UserProfile = mongoose.Schema({
    _id: id,
    img_profile: String,
    topic: Array,
    subscribe: Array,
    key: Array
}, {timestamps: true});

export default mongoose.model("user_profile", UserProfile);