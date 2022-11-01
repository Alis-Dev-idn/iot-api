const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
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