import {Validate, UserService} from "../../services/index.js";

const Delete = async (req, res) => {
    let {params} = req;
    if(!params.id) return res.status(400).json({message: "params id is required"});
    if(!Validate.DbValidate(params.id)) return res.status(400).json({message: "id not valid"});
    const cekUser = await UserService.GetUser("id", params.id, false);
    if(!cekUser) return res.status(404).json({message: "user not found"});
    await UserService.RemoveUser(params.id, cekUser.session.key, cekUser.username);
    res.status(200).json({message: "delete success"});
}

export default Delete;