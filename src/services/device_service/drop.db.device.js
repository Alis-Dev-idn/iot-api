import {dropDb} from "./device.schema.js"

const DropDbDevice = async (id) => {
    console.log(id);
    await dropDb(id);
    return "ok";
}

export default DropDbDevice;