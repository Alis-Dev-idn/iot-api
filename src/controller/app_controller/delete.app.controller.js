import {AppService, DeviceService, Validate} from "../../services/index.js";


const DeleteApp = async (req, res) => {
    try{
        const data = req.query;
        const id = req._id;
        if(!data.application) return res.status(400).json({message: "Application is required"});
        const getApp = await AppService.GetApp("id", id);
        if(!getApp) res.status(404).json({message: "Application not Found"});

        const cekApp = getApp.application.find(items => items === data.application);
        if(!cekApp) return res.status(400).json({message: "Application not found"});

        const deleteDevice = getApp.device.find(item => item.application === data.application);
        if(deleteDevice) {
            getApp.device = getApp.device.filter(item => item.application !== data.application);
            await DeviceService.DropDbDevice(deleteDevice.name);
        }

        getApp.application = getApp.application.filter(item => item !== data.application);
        await AppService.UpdateApp(id, getApp);
        res.status(200).json({message: "success delete one Application"});
    }catch (err){
        console.log(err);
        res.status(400).json({message: "Internal Error"});
    }
}

export default DeleteApp;