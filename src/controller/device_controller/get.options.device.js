import {AppService} from "../../services/index.js";


const GetOptionsDevice = async (req, res) => {
    try{
        const id = req._id;
        const query = req.query;
        if(!query.application) return res.status(400).json({message: "Application is required"});
        const cekAppData = await AppService.GetApp("id", id);
        if(!cekAppData) return res.status(404).json({message: "You don't have any Application"});
        const filterData = cekAppData.device.filter((items) => items.application === query.application);
        const options = filterData.map((items) => {
            return {label: items.name.split("-")[1], value: `${items.name.split("-")[1]}|${items.application}`}
        });
        res.status(200).json({data: options});
    }catch (error){
        console.log(error);
        res.status(500).json({message: "Internal Error"});
    }
}

export default GetOptionsDevice;