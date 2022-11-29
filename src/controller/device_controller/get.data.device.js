import {AppService, DeviceService, UserService} from "../../services/index.js";


const getDataDevice = async (req, res) => {
    try{
        const data = req.query;
        const id = req._id;
        if(!data || !data.device) return res.status(400).json({message: "device is required"});
        if(!data.limit) data.limit = 5;
        if(!data.skip) data.skip = 0;
        if(data.limit > 100) res.status(400).json({message: "maximum limit is 100"});
        const user = await UserService.GetUser("id", id);
        if(!user) return res.status(400).json({message: "User Not Found"});

        const cekApp = await AppService.GetApp("id", id);
        if(!cekApp) return res.status(400).json({message: "Application Not Found"});

        const cekDevice = cekApp.device.find(items => items.name === `${id}-${data.device}`);
        if(!cekDevice) return res.status(400).json({message: "Device Not Found"});

        const result = await DeviceService.GetDevice(`${id}-${data.device}`, data.limit, data.skip);
        res.status(200).json(result);
    }catch (err){
        console.log(err)
        res.status(500).json({message: "Internal Error"});
    }
}

export default getDataDevice;