import {UserService, Validate} from "../../services/index.js";

const UpdateUser = async (req, res) => {
    try{
        const data = req.body;
        // console.log(req._id);
        const {error} = Validate.UserValidate.UpdateUser.validate(data);
        if(error) return res.status(400).json({message: error.details[0].message});
        const {name, username, new_username, email, new_email} = data;
        const user = await UserService.GetUser("email", email, false);
        if(!user) return res.status(404).json({message: "User not found"});

        if(new_username !== ""){
            const cekUsername = await UserService.GetUser("name", new_username, false);
            if(cekUsername) return res.status(400).json({message: "Username is Used"});
            user.username = new_username;
        }
        if(new_email !== ""){
            const cekEmail = await UserService.GetUser("email", new_email, false);
            if(cekEmail) return res.status(400).json({message: "Email Username is Used"});
            user.email = new_email;
        }
        user.name = name;

        await UserService.UpdateUser("user", user);
        res.status(200).json({message: "Success Change name"});
    }catch (err){
        console.log(err);
        res.status(500).json({message: "Internal Error"});
    }
}

export default UpdateUser;