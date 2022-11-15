import {DeviceService, Validate} from "../../services/index.js";


const AddDevice = async (req, res) => {
    try{
        const data = req.body;
        const {error} = Validate.AddDeviceData.validate(data);
        if(error) return res.status(400).json({message: error.details[0].message});
        await DeviceService.AddDataDevice( "ali", data);
        res.status(200).json({message: "ok"});
    }catch (error){
        console.log(error);
        res.status(500).json({message: "Internal Error"});
    }
}

export default AddDevice;