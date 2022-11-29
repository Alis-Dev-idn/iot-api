import {AppService} from "../../services/index.js";


const getCountDevice = async (req, res) => {
    try{
        const id = req._id;
        const getApp = await AppService.GetApp("id", id);
        if(!getApp) return res.status(200).json({count:0});
        const getCount = getApp.device.length;
        res.status(200).json({count: getCount});
    }catch (error){
        console.log(error);
        res.status(500).json({message: "Internal Error"});
    }
}

export default getCountDevice;