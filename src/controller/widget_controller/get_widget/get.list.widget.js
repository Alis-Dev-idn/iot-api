import {AppService} from "../../../services/index.js";


const GetListWidget = async (req, res) => {
    try{
        const id = req._id;
        const cekAppData = await AppService.GetApp("id", id);
        if(!cekAppData) return res.status(404).json({message: "You don't have any Application"});
        res.status(200).json({
            count: cekAppData.widget.length,
            data: cekAppData.widget
        });
    }catch (error){
        console.log(error);
        res.status(500).json({message: "Internal Error"});
    }
}

export default GetListWidget;