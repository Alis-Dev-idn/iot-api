import {AppService} from "../../services/index.js";


const GetAppSelect = async (req, res) => {
    try{
        const id = req._id;
        const cekAppData = await AppService.GetApp("id", id);
        if(!cekAppData) return res.status(404).json({message: "You don't have any Application"});
        const options = cekAppData.application.map((item, idx) => {
            return {label: `${item}`, value: `${item}|${idx}`}
        });
        res.status(200).json({data: options});
    }catch (error){
        console.log(error);
        res.status(500).json({message: "Internal Error"});
    }
}

export default GetAppSelect;