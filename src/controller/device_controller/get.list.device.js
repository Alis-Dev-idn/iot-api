import {AppService} from "../../services/index.js";

const GetListDevice = async (req, res) => {
    try{
        const name = req.query;
        const id = req._id;
        let device = [];
        if(!name.application) return res.status(400).json({message: "Name Application Required"});
        const getApp = await AppService.GetApp("id", id);
        const findlistDevice = getApp.device.filter(items => items.application === name.application);
        findlistDevice.map(items => {
            device.push(items.name);
        })
        res.status(200).json({data: device});
    }catch (err){
        console.log(err);
        res.status(500).json({message: "Internal Error"});
    }
}

export default GetListDevice;