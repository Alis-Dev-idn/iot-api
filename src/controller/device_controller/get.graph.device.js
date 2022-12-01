import {AppService, DeviceService} from "../../services/index.js";


const GetGraphDevice = async (req, res) => {
    try{
        const query = req.query;
        const id = req._id;
        if(!query.application) return res.status(400).json({message: "Application diperlukan"});
        if(!query.device) return res.status(400).json({message: "Device diperlukan"});
        const cekDevice = await AppService.GetApp("id", id);
        if(!cekDevice) return res.status(404).json({message: "Data Application Not Found"});
        const filterDevice = cekDevice.device.filter(items => items.application === query.application);
        if(filterDevice.length === 0) return res.status(404).json({message: `Application ${query.application} Not Found`});
        const findDevice = filterDevice.find(items => items.name === `${id}-${query.device}`);
        if(!findDevice) return res.status(404).json({message: `Device ${query.device} in ${query.application} Not Found`});

        const data = await DeviceService.GetDevice(`${id}-${query.device}`, 100);

        res.status(200).json(data);
    }catch (error){
        console.log(error);
        res.status(500).json({message: "Internal Error"});
    }
}

export default GetGraphDevice;