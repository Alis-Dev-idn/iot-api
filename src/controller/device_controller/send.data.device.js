import {AppService, DeviceService, Validate} from "../../services/index.js";


const sendData = async (req, res) => {
    try{
        const data = req.body;
        const {error} = Validate.AddDeviceData.validate(data);
        if(error) return res.status(400).json({message: error.details[0].message});
        const cekDevice = await AppService.GetApp("device", data.device);
        if(!cekDevice) return res.status(400).json({message: "Device Not Found"});
        await DeviceService.SendDataDevice(data.device, data);
        res.status(200).json({message: "ok"});
    }catch (error){
        console.log(error);
        res.status(500).json({message: "Internal Error"});
    }
}

export default sendData;