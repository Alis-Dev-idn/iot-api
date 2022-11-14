import jwt from "jsonwebtoken";
import {config} from "dotenv";
config();

const validateToken = (req, res, next) => {
    let key = req.headers.authorization;
    if(!key) return res.status(400).json({message: "token is required"});
    try{
        key = key.split(" ");
        jwt.verify(key[1], process.env.PRIVAT_KEY);
        const decode = jwt.decode(key[1]);
        req._id = decode.data.id;
        next();
    }catch (err){
        res.status(401).json({message: "token expired"});
    }
}

export default validateToken;