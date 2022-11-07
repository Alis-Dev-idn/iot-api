import {UserService} from "../../services/index.js"

const Active = async (req, res) => {
    try{
        const {username, code} = req.query;
        if(!username || !code) return res.status(400).json({message: "cek your email"});
        const cekUser = await UserService.GetUser("name", username, false);
        if(!cekUser) return res.status(400).json({message: "user not found"});
        if(code !== cekUser.$session.code) return res.status(400).json({message: "code wrong"});
        if(cekUser.session.active) return res.status(400).json({message: "user is active!"});
        cekUser.session.active = true; 
        await UserService.UpdateUser("user", cekUser);
        res.status(200).json({status: "success", message: `account ${cekUser.username} is active now`});
    }catch(err){
        console.log(err);
        res.status(500).json({message: "internal error"});
    }
}

export default Active;