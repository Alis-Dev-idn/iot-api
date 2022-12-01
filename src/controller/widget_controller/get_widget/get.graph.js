import {AppService, DeviceService, Validate} from "../../../services/index.js";


const GetGraph = async (req, res) => {
    try{
        const query = req.query;
        const id = req._id;
        const {error} = Validate.GraphValidation.CreateGraph.validate(query);
        if(error) return  res.status(400).json({message: error.details[0].message});
        const cekAppData = await AppService.GetApp("id", id);
        if(!cekAppData) return res.status(404).json({message: "You don`t have any Application"});

        /* cek application */
        const cekApp = cekAppData.application.find(item => item === query.application);
        if(!cekApp) return res.status(404).json({message: `Application ${query.application} not found`});

        /* cek device */
        const cekDevice = cekAppData.device.find(items => items.name === `${id}-${query.device}`);
        if(!cekDevice) return res.status(404).json({message: `Device ${query.device} in ${query.application} not found`});

        /* cek widget */
        if(cekAppData.widget.length === 0) return res.status(404).json({message: "You don`t have any widget"});
        const filterWidgetType = cekAppData.widget.filter(items => items.widget_type === query.widget_type);
        if(filterWidgetType.length === 0) return res.status(400).json({message: `You don't have widget type ${query.widget_type}`});
        const findNameGraph = filterWidgetType.find(items => items.data === query.data);
        if(!findNameGraph) return res.status(404).json({message: `Widget by data ${query.data} not found`});

        const dataNode = await DeviceService.GetDevice(`${id}-${query.device}`, 20, 0);

        const result = executeGraphData(dataNode.data, query.data);
        res.status(200).json({count: dataNode.count, data: result});
    }catch (error){
        console.log(error);
        res.status(500).json({message: "Internal Error"});
    }
}

const executeGraphData = (value, data) => {
    value = value.reverse();
    let newData = [];
    for (let i = 0; i < value.length; i++) {
        if(value[i].data[data])
            newData.push({yAxis: value[i].data[data], xAxis: Math.floor(new Date(`${value[i].expireAt}`))})
    }
    return newData;
}

export default GetGraph;