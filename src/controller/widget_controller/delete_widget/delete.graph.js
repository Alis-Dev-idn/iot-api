import {AppService} from "../../../services/index.js";
import Validation from "../../../services/validation/index.js";


const DeleteGraph = async (req, res) => {
    try{
        const query = req.query;
        const id = req._id;
        const {error} = Validation.GraphValidation.CreateGraph.validate(query);
        if(error) return res.status(400).json({message: error.details[0].message});
        const cekAppData = await AppService.GetApp("id", id);
        if(!cekAppData) return res.status(400).json({message: "You don`t have any Application"});
        const cekApp = cekAppData.application.find(item => item === query.application);
        if(!cekApp) return res.status(404).json({message: `Application ${query.application} not found`});
        const cekDevice = cekAppData.device.find(items => items.name === `${id}-${query.device}`);
        if(!cekDevice) return res.status(404).json({message: `Device ${query.device} in ${query.application} not found`});
        /* cek widget */
        const cekWidget = cekAppData.widget.filter(items => items.widget_type === query.widget_type);
        if(cekWidget.length === 0) return res.status(400).json({message: "You don`t have widget type graph"});
        const cekData = cekWidget.find(items => items.data === query.data);
        if(!cekData) return res.status(404).json({message: `data ${query.data} not found`});

        /* delete from array */
        cekAppData.widget = cekAppData.widget.filter(items => {
            if (items.widget_type === query.widget_type && items.data === query.data) return;
            return items;
        });

        await AppService.UpdateApp(id, cekAppData);
        res.status(200).json({message: `Delete ${query.widget_type} ${query.data} success`});
    }catch (error){
        console.log(error);
        res.status(500).json({message: "Internal Error"});
    }
}

export default DeleteGraph;