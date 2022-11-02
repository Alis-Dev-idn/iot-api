const db = require("../mongodb");

const GetUserByName = async (name, hidden) => {
    if(!hidden) return await db.UserSchema.findOne({username: name}, { __v: 0});
    return await db.UserSchema.findOne({username: name}, { __v: 0, password: 0});
}

const GetUserByEmail = async (email) => {
    return await db.UserSchema.findOne({email: email}, {password: 0, __v: 0});
}

const GetUserById = async (id) => {
    const data = await db.UserSchema.findById({_id: id}, {_id: 0, __v: 0, password: 0});
    return data;
}

const GetAllUsers = async (limit, offset) => {
    const count = await db.UserSchema.find().count();
    const data = await db.UserSchema.find({}, {__v: 0, password: 0}).limit(limit).skip(offset).sort({createdAt: -1});
    return {count, data}
}

const CreateUser = async (data) => {
    return await db.UserSchema.create(data);
}

const UpdateUser = async (id, data) => {
    return await db.UserSchema.updateOne({_id: id}, data);
}

const DeleteUser = async (id) => {
    return await db.UserSchema.deleteOne({_id: id});
}

module.exports = {
    GetUserByName,
    GetUserByEmail,
    GetUserById,
    GetAllUsers,
    CreateUser,
    DeleteUser,
    UpdateUser
}