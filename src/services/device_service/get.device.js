import {dbDevice} from "./device.schema.js";


const GetDevice = async (name, limit, skip) => {
    const db = await dbDevice(name);
    const count = await db.find({name: name}).count();
    const data = await db.find({name: name}, {_id: 0, __v: 0, createdAt: 0, updatedAt: 0}).sort({createdAt: -1}).limit(limit).skip(skip);
    return {count, data: data};
}

export default GetDevice;