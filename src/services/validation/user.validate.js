import joi from "joi";

const CreateUser = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    role: joi.string().allow(null),
    session: joi.object({
            active: joi.bool().default(false),
            status: joi.bool().default(false),
            token: joi.string().default(""),
        }   
    ).default(null),
});

const UserLogin = joi.object({
    password: joi.string().min(6).required(),
    email: joi.string().email().required()
});

const UserProfile = joi.object({
    img_profile: joi.string().allow(null),
    topic: joi.array().default([]),
    subscribe: joi.array().default([]),
    key: joi.array().default([])
});

const UpdateUser = joi.object({
    name: joi.string().required(),
    username: joi.string().required(),
    email: joi.string().required(),
    new_username: joi.string().default(""),
    new_email: joi.string().default("")
});


export default {
    CreateUser,
    UserLogin,
    UserProfile,
    UpdateUser
}