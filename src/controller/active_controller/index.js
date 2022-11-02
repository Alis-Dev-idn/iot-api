const db = require("../../services/user_service");

const ActiveAccount = async (req, res) => {
    console.log(req.header);
    const {username, code} = req.query;
    if(!username || !code) return res.status(400).json({message: "something wrong, please cek email!"});
    const getUser = await db.GetUserByName(username);
    if(!getUser) return res.status(400).json({message: `user ${username} not found!`});
    if(getUser.session.status) return res.status(400).json({message: "user is active!"});
    if(getUser.session.code !== code) return res.status(400).json({message: "code not valid!"});
    getUser.session.status = true;
    await db.UpdateUser(getUser._id, getUser);
    res.status(200).json({status: "ok", message: "account active now!"});
}

module.exports = ActiveAccount;