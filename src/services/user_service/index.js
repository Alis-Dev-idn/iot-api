const db = require("../mongodb");

const GetUserById = async (id) => {
    const data = await db.UserSchema.findById({_id: id}, {_id: 0, __v: 0, password: 0});
    return data;
}

const GetAllUsers = async (limit, offset) => {
    const count = await db.UserSchema.find().count();
    const data = await db.UserSchema.find().limit(limit).skip(offset).sort({createdAt: -1});
    return {count, data}
}

module.exports = {
    GetUserById,
    GetAllUsers
}