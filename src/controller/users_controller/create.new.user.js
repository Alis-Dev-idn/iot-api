const Validate = require("../../services/joi_service");
const User = require("../../services/user_service");
const {HastPassword} = require("../../services/password_hast");
const {v4} = require("uuid");
const SendMail = require("../../services/email_service");

const CreateNewUser = async (req, res) => {
    try{
        let {body} = req;
        let session = {
            active: false,
            status: false,
            code: v4(),
            token: ""
        }
        const {error} = await Validate.CreateUser.validate(body);
        if(error) return res.status(400).json({message: error.details[0].message});
        const value = await CekDataBase(body);
        if(value) return res.status(400).json({message: value});
        body.password = await HastPassword(body.password);
        body.session = session;
        await User.CreateUser(body);
        await SendMail(body.username, body.email, session.code);
        res.status(200).json({status: "success", message: "please cek your email to actived account!"});
    }catch(err){
        console.log(err);
        res.status(500).json({message: "internal Error"});
    }
}

const CekDataBase = async (data) => {
    const cekUsername = await User.GetUserByName(data.username);
    if(cekUsername) return "Username is Used";
    const cekEmail = await User.GetUserByEmail(data.email);
    if(cekEmail) return "Email is Used";
    return null;
}

module.exports = CreateNewUser;