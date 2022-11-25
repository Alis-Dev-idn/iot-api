import {AppService, Validate} from "../../services/index.js";


const CreateDevice = async (req, res) => {
    try{
        const data = req.body;
        const id = req._id;
        const {error} = Validate.AppValidate.AddDevice.validate(data);
        if(error) return res.status(400).json({message: error.details[0].message});
        if(!Validate.DbValidate(id)) return res.status(400).json({message: "Id not Valid"});

        if(data.name === "testing") return res.status(400).json({message: "name not allowed"});

        const cekApp = await AppService.GetApp("id", id);
        const cekNameApp = cekApp.application.find(items => items === data.application);
        if(!cekNameApp) return res.status(400).json({message: "Application Not Found"});

        const cekNameDevice = cekApp.device.find(items => items.name === data.name);
        if(cekNameDevice) return res.status(400).json({message: "Device Already Used"});

        if(cekApp.device.length === 0) {
            cekApp.device = [data]
        }else{
            cekApp.device.push(data)
        }

        await AppService.UpdateApp(id, cekApp);
        res.status(200).json({message: "update success"});
    }catch (err){
        console.log(err)
        res.status(500).json({message: "Internal Error"});
    }
}

export default CreateDevice;