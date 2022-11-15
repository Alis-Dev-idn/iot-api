import {AppService, UserService, Validate} from "../../services/index.js";


const CreateApp = async (req, res) => {
    try{
        const data = req.body;
        const {error} = Validate.AppValidate.AppCreate.validate(data);
        if(error) return res.status(400).json({message: error.details[0].message});
        if(!Validate.DbValidate(data._id)) return res.status(400).json({message: "Id not Valid"});

        await AppService.Create(data);
        res.status(200).json({message: "create success"});
    }catch (err){
        console.log(err)
        res.status(500).json({message: "Internal Error"});
    }
}

export default CreateApp;