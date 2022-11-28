import {AppService, DeviceService} from "../../services/index.js";

const SaveDataSocket = async (items) => {
    if(!items.name) throw("name required!");
    if(!items.data) throw("data is required!");
    const cekDevice = await AppService.GetApp("device", items.name);
    if(!cekDevice) throw ({error: "Device Not Found"});
    await DeviceService.SendDataDevice(items.name, items);
    return {status: "ok"}
}

export default SaveDataSocket;