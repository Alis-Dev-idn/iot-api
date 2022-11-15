import {dbDevice} from "./device.schema.js";

const AddDataDevice = async (name, data) => {
    console.log(data);
    const db = await dbDevice(name);
    const create = await db(data);
    await create.save();
    return "ok";
}

export default AddDataDevice;