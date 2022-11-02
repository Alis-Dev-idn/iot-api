const db = require("../../services/user_service");
const joi = require("../../services/joi_service");
const jwt = require('jsonwebtoken');
const pwd = require("../../services/password_hast");

const UserLogin = async (req, res) => {
    try{
        const {body} = req;
        const {error} = joi.UserLogin.validate(body);
        if(error) return res.status(400).json({message: error.details[0].message});
        const cekUser = await db.GetUserByName(body.username);
        if(!cekUser) return res.status(404).json({message: "username not found!"});
        if(!await pwd.ComparePassword(body.password, cekUser.password)) return res.status(400).json({message: "password wrong"});
        if(!cekUser.session || !cekUser.session.status) return res.status(403).json({message: "akun not actived!"});
        cekUser.session.token = await GenerateToken(cekUser._id);
        await db.UpdateUser(cekUser.id, cekUser);
        res.status(200).json({
            status: "Login Ok",
            session: "1 hours",
            data: {
                username: cekUser.username,
                email: cekUser.email,
                role: cekUser.role,
            }
        });
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Internal Error"});
    }
}

const GenerateDate = async () => {
    let date = new Date();
    return date = date.setDate(date.getHours + 7);
}

const GenerateToken = async (id) => {
    const date = await GenerateDate();
    return await jwt.sign({
        exp: Math.floor(Date(date) / 1000) + (60*60),
        data: {id: id}
    }, process.env.PRIVAT_KEY)
}

module.exports = UserLogin;