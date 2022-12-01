import {AppService, DeviceService} from "../../services/index.js";


const GetGraphDevice = async (req, res) => {
    try{
        const query = req.body;
        const id = req._id;
        if(!query.application) return res.status(400).json({message: "Application diperlukan"});
        if(!query.device) return res.status(400).json({message: "Device diperlukan"});
        if(!query.data) return res.status(400).json({message: "Data diperlukan"});
        const cekDevice = await AppService.GetApp("id", id);
        if(!cekDevice) return res.status(404).json({message: "Data Application Not Found"});
        const filterDevice = cekDevice.device.filter(items => items.application === query.application);
        if(filterDevice.length === 0) return res.status(404).json({message: `Application ${query.application} Not Found`});
        const findDevice = filterDevice.find(items => items.name === `${id}-${query.device}`);
        if(!findDevice) return res.status(404).json({message: `Device ${query.device} in ${query.application} Not Found`});

        const result = await DeviceService.GetDevice(`${id}-${query.device}`, 20, 0);
        const value = await executeResultData(result, query.data);
        res.status(200).json({count: result.count, data: value});
    }catch (error){
        console.log(error);
        res.status(500).json({message: "Internal Error"});
    }
}


const executeResultData = async (value, yAxis) => {
    let newData = [];
    for (let i = 0; i < value.data.length; i++) {
        if(value.data[i].data[yAxis])
            newData.push({yAxis: value.data[i].data[yAxis], xAxis: Math.floor(new Date(`${value.data[i].expireAt}`))})
    }
    return newData;
}

export default GetGraphDevice;