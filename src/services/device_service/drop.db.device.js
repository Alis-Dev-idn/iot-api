import {dropDb} from "./device.schema.js"

const DropDbDevice = async (id) => {
    await dropDb(id);
    return "ok";
}

export default DropDbDevice;