import {DeviceService, UserService} from "../../services/index.js";

const dropDataDevice = async (req, res) => {
    try{
        const id = req._id;
        await DeviceService.DropDbDevice(id);
        res.status(200).json({message: "drop db success"});
    }catch (err){
        console.log(err);
        res.status(500).json({message: "Internal Error"});
    }
}

export default dropDataDevice;