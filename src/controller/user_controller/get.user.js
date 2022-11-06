import {UserService, Validate} from "../../services/index.js"

const Get = async (req, res) => {
    let {params, query} = req;
    let {limit, offset} = query;
    if(!limit) limit = 5;
    if(!offset) offset = 0;
    if(limit > 50) return res.status(400).json({message: "max limit is 50!"});
    if(!params.id) return await GetAll(res, limit, offset);
    if(!Validate.DbValidate(params.id)) return res.status(400).json({message: "id not valid"});
    return await GetById(res, params.id);
}

const GetById = async (res, id) => {
    try{
        const user = await UserService.GetUser("id", id, true);
        if(!user) return res.status(404).json({message: "user not found"});
        return res.status(200).json({status: "ok", data: user});
    }catch (err){
        console.log(err);
        return res.status(500).json({message: "internal error"});
    }

}

const GetAll = async (res, limit, offset) => {
    try{
        const allUser = await UserService.GetUser("", {limit: limit, offset: offset});
        return res.status(200).json({status: "ok", data: allUser});
    }catch (err){
        console.log(err);
        return res.status(500).json({message: "internal error"});
    }

}

export default Get;