const joi = require("joi");

const CreateUser = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    role: joi.string().allow(null),
    session: joi.object({
            active: joi.bool().allow(null),
            status: joi.bool().allow(null),
            token: joi.string().default(""),
        }   
    ).allow(null),
});

const UserLogin = joi.object({
    username: joi.string().required(),
    password: joi.string().min(6).required(),
    email: joi.string().email().required()
})

module.exports = {
    CreateUser,
    UserLogin
};