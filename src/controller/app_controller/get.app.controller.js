import {AppService} from "../../services/index.js";


const GetAppController = async (req, res) => {
    try{
        const id = req._id;
        const getApp = await AppService.GetApp("id", id);
        res.status(200).json({
            data: getApp.application
        });
    }catch (err){
        console.log(err);
        res.status(500).json({message: "Internal Error"});
    }
}

export default GetAppController;