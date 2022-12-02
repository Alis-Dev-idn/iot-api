import Validation from "../../../services/validation/index.js";
import {AppService} from "../../../services/index.js";


const CreateWidgetChar = async (req, res) => {
    try{
        const body = req.body;
        const id = req._id;
        const {error} = await Validation.GraphValidation.CreateGraph.validate(body);
        if(error) return res.status(400).json({message: error.details[0].message});
        const cekAppData = await AppService.GetApp("id", id);
        if(!cekAppData) return res.status(400).json({message: "You don`t have any Application"});
        const cekApp = cekAppData.application.find(item => item === body.application);
        if(!cekApp) return res.status(404).json({message: `Application ${body.application} not found`});
        const cekDevice = cekAppData.device.find(items => items.name === `${id}-${body.device}`);
        if(!cekDevice) return res.status(404).json({message: `Device ${body.device} not found`});
        // console.log(cekAppData);
        /* cek graph */
        if(cekAppData.widget.length !== 0){
            const cekGraph = cekAppData.widget.find(items => items.data === body.data);
            if(cekGraph) return res.status(400).json({message: `graph ${body.data} in device ${body.device} is ready!`});
            cekAppData.widget.push(body);
        }
        if(cekAppData.widget.length === 0){
            cekAppData.widget = [body];
        }

        await AppService.UpdateApp(id, cekAppData);
        res.status(200).json({message: `success create widget graph ${body.device}`});
    }catch (error){
        console.log(error);
        res.status(500).json({message: "Internal Error"});
    }
}

export default CreateWidgetChar;