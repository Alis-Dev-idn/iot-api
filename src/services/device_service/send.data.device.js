import {dbDevice} from "./device.schema.js";

const SendDataDevice = async (id, data) => {
    const db = await dbDevice(id);
    const create = await db(data);
    await create.save();
    return "ok";
}

export default SendDataDevice;