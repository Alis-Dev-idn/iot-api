import {MailService, PasswordService, UserService, Validate} from "../../services/index.js";
import {v4} from "uuid";
import {decryptData} from "../../utils/utils.js";

let session = {
    active: false,
    status: false,
    code: v4(),
    token: ""
}

const Create = async (req, res) => {
    try{
        let {body} = req;
        const data = decryptData(body.data)
        const {error} = await Validate.UserValidate.CreateUser.validate(data);
        if(error) return res.status(400).json({message: error.details[0].message});
        const cekBody = await CekUser(data);
        if(cekBody) return res.status(400).json({message: cekBody});
        data.password = await PasswordService.Hast(data.password);
        data.session = session;
        await UserService.Create.CreateUser(data);
        await CreateDefaultProfile(data.username);
        await MailService.SendMail(data.username, data.email, session.code);
        res.status(200).json({status: "success", message: "please cek your email to active account"});
    }catch (err){
        console.log(err);
        res.status(500).json({message: "internal error"});
    }
}

const CekUser = async (data) => {
    const cekName = await UserService.GetUser("name", data.username, false);
    if(cekName) return "Username is Used";
    const cekEmail = await UserService.GetUser("email", data.email, false);
    if(cekEmail) return "Email is Used";
    return null;
}

const CreateDefaultProfile = async (username) => {
    const {_id} = await UserService.GetUser("name", username, false);
    const default_profile = {
        _id: _id,
        img_profile: `/data/${username}/profile/default.png`,
        topic: [],
        subscribe: [],
        key: []
    }
    await UserService.Create.CreateProfile(default_profile);
    return null;
}

export default Create;