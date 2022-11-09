import {MongoModel} from "../../mongodb/index.js"

const GetUser = async (by, data, hidden) => {
    if(by === "id") return await ById(data, hidden);
    if(by === "name") return await ByName(data, hidden);
    if(by === "email") return await ByEmail(data, hidden);
    if(by === "") return await MongoModel.UserSchema.find({}, {password: 0, session: 0, __v: 0}).limit(data.limit).skip(data.offset).sort({createdAt: -1});
}

const ById = async (id, hidden) => {
    if(hidden) return await MongoModel.UserSchema.findById({_id: id}, {password: 0, session: 0, __v: 0});
    return await MongoModel.UserSchema.findById({_id: id});
}

const ByName = async (name, hidden) => {
    if(hidden) return await MongoModel.UserSchema.findOne({username: name}, {password: 0, session: 0, __v: 0});
    return await MongoModel.UserSchema.findOne({username: name});
}

const ByEmail = async (email, hidden) => {
    if(hidden) return await MongoModel.UserSchema.findOne({email: email}, {password: 0, session: 0, __v: 0});
    return await MongoModel.UserSchema.findOne({email: email});
}

export default GetUser;
