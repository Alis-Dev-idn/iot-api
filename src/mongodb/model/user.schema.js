import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {type: String, default: ""},
    email: {type: String, required: true},
    username: {type:String, required: true},
    password: {type: String, required: true},
    role: {type: String, default: "user"},
    session: {
        type: Object({
            active: {type: Boolean, default: false},
            status: {type: Boolean, default: false},
            code: {type: String, default: ""},
            token: {type: String, default: ""}
        }),
        default: null
    }
}, {timestamps: true});

export default mongoose.model("user", UserSchema);