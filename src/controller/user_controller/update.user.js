import {UserService, Validate} from "../../services/index.js";

const UpdateUser = async (req, res) => {
    try{
        const data = req.body;
        const id = req._id;
        const {error} = Validate.UserValidate.UpdateUser.validate(data);
        if(error) return res.status(400).json({message: error.details[0].message});
        const user = await UserService.GetUser("id", id, false);
        if(!user) return res.status(404).json({message: "User not Found"});
        const {username, name, email} = data;
        user.name = name;
        if(username !== user.username){
            const cekUsername = await UserService.GetUser("name", username, false);
            if(cekUsername) return res.status(400).json({message: "User is Used"});
            user.username = username;
        }
        if(email !== user.email){
            const cekEmail = await UserService.GetUser("email", email, false);
            if(cekEmail) return res.status(400).json({message: "Email is Used"});
            user.email = email;
        }
        await UserService.UpdateUser("user", user);
        res.status(200).json({message: "Success Change name"});
    }catch (err){
        console.log(err);
        res.status(500).json({message: "Internal Error"});
    }
}

export default UpdateUser;