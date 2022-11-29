import {AppService, Validate} from "../../services/index.js";


const CreateApp = async (req, res) => {
    try{
        const data = req.body;
        const id = req._id;
        const {error} = Validate.AppValidate.AppCreate.validate(data);
        if(error) return res.status(400).json({message: error.details[0].message});
        if(!Validate.DbValidate(id)) return res.status(400).json({message: "Id not Valid"});

        const cekApp = await AppService.GetApp("id", id);
        if(!cekApp) return CreateToDatabase({_id: id, application: [`${data.application}`]}, res);

        const getArrApp = cekApp.application.find(items => items === data.application);
        if(getArrApp) return res.status(400).json({message: "Application Already Used"});

        cekApp.application.push(data.application);
        return UpdateApp(id, cekApp, res);
    }catch (err){
        console.log(err)
        res.status(500).json({message: "Internal Error"});
    }
}

const CreateToDatabase = async (data, res) => {
    await AppService.Create(data);
    res.status(200).json({message: "create success"});
}

const UpdateApp = async (id, data, res) => {
    await AppService.UpdateApp(id, data);
    res.status(200).json({message: "update success"});
}

export default CreateApp;