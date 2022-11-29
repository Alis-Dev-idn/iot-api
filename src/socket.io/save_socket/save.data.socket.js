import {AppService, DeviceService, UserService, Validate} from "../../services/index.js";

const SaveDataSocket = async (items) => {
    if(!items.key) throw("name required!");
    if(!items.data) throw("data is required!");
    const key = items.key.split("-");
    const cekId = Validate.DbValidate(key[0]);
    if(!cekId) throw("Key Not Valid");
    const cekUser = await UserService.GetUser("id", key[0]);
    if(!cekUser) throw("Please Cek Your Key, Key Not Match");
    const cekDevice = await AppService.GetApp("device", items.key);
    if(!cekDevice) throw ({error: "Device Not Found"});
    await DeviceService.SendDataDevice(items.key, items);
    return {status: "ok"}
}

export default SaveDataSocket;