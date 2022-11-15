import {UserService, Validate, PasswordService} from "../../services/index.js";
import jwt from "jsonwebtoken";
import {config} from "dotenv"
import {decryptData} from "../../utils/utils.js";
config();

const Login = async (req, res) => {
    try{
        const {body} = req;
        const data = decryptData(body.data, process.env.SECRET_KEY_DATA);
        const {error} = Validate.UserValidate.UserLogin.validate(data);
        if(error) return res.status(400).json({message: error.details[0].message});
        const cekEmail = await UserService.GetUser("email", data.email, false);
        if(!cekEmail) return res.status(400).json({message: "email not found, please register first"});
        if(!cekEmail.session || !cekEmail.session.status) return res.status(403).json({message: "account not active"});
        if(!await PasswordService.Validate(data.password, cekEmail.password)) return res.status(400).json({message: "password wrong"});
        cekEmail.session.token = await GenerateToken(cekEmail._id);
        await UserService.UpdateUser("user", cekEmail);
        res.status(200).json({
            status: "success",
            session: "1h",
            data: {
                name: cekEmail.name,
                username: cekEmail.username,
                email: cekEmail.email,
                role: cekEmail.role,
                token: cekEmail.session.token
            }
        });
    }catch (err){
        console.log(err);
        res.status(500).json({message: "internal error"});
    }
}

const GenerateToken = async (id) => {
    return await jwt.sign({
        exp: Math.floor(new Date() / 1000) + (60*60),
        data: {id: id}
    }, process.env.PRIVAT_KEY);
}

export default Login;