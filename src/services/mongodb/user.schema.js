const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email: String,
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
    session: {
        type: Object({
            active: {
                type: Boolean,
                default: false  
            },
            status: {
                type: Boolean,
                default: false
            },
            token: {
                type: String,
                required: true
            }
        }),
        default: null
    }
}, {timestapms: true});

module.exports = mongoose.model("user", UserSchema);