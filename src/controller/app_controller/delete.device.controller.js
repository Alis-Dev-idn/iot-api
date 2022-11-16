import {AppService, DeviceService, Validate} from "../../services/index.js";


const DeleteDevice = async (req, res) => {
    try{
        const data = req.body;
        const id = req._id;
        const {error} = Validate.AppValidate.AddDevice.validate(data);
        if(error) return res.status(400).json({message: error.details[0].message});
        const getApp = await AppService.GetApp("id", id);
        if(!getApp) res.status(404).json({message: "Application not Found"});

        const cekNameApp = getApp.application.find(item => item === data.application);
        if(!cekNameApp) return res.status(400).json({message: "Application Not Found"});

        const cekNameDevice = getApp.device.find(items => items.name === data.name);
        if(!cekNameDevice) return res.status(400).json({message: "Device not found"});

        getApp.device = getApp.device.filter(item => item.name !== data.name);
        await AppService.UpdateApp(id, getApp);
        await DeviceService.DropDbDevice(data.name);
        res.status(200).json({message: "success delete one Device"});
    }catch (error){
        console.log(error);
        res.status(500).json({message: "Internal Error"});
    }
}

export default DeleteDevice;