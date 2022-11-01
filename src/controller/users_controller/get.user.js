const Validate = require("../../services/validation");
const Users = require("../../services/user_service");

const GetUser = async (req, res) => {
    let {params, query} = req;
    let {limit, offset} = query
    if(!limit) limit = 5;
    if(!offset) offset = 0;
    if(limit > 50) return res.status(400).json({message: "max limit is 50!"})
    if(!params.id) return GetAllData(res, limit, offset);
    return GetUserById(res, params.id, limit, offset);
    
}

const GetUserById = async (res, id) => {
    if(!Validate.ValidObjectId(id)) return res.status(200).json({message: "Id Not Valid!"});
    const data = await Users.GetUserById(id);
    if(!data) return res.status(404).json({message: "id not found!"})
    res.status(200).json(data);
}

const GetAllData = async (res, limit, offset) => {
    const data = await Users.GetAllUsers(limit, offset);
    res.status(200).json(data);
}


module.exports = GetUser;