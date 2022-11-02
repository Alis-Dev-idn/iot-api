const Validate = require("../../services/validation")
const db = require("../../services/user_service");

const DeleteUser = async (req, res) => {
    let {params} = req;
    if(!params.id) return res.status(400).json({message: "params id required!"});
    if(!Validate.ValidObjectId(params.id)) return res.status(400).json({message: "id not valid"});
    if(!await db.GetUserById(params.id)) return res.status(404).json({message: "id not found"});
    await db.DeleteUser(params.id);
    res.status(200).json({message: "delete success"});
}

module.exports = DeleteUser;