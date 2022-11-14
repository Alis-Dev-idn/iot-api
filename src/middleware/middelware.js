import jwt from "jsonwebtoken";
import {config} from "dotenv";
config();

const validateToken = (req, res, next) => {
    const key = req.headers.authorization.split(" ")[1];
    if(!key) return res.status(400).json({message: "token is required"});
    try{
        jwt.verify(key, process.env.PRIVAT_KEY);
        next();
    }catch (err){
        res.status(401).json({message: "token expired"});
    }
}

export default validateToken;