import {UserService} from "../../../services/index.js";


const GetUserProfile = async (req, res) => {
    try{
        const {username} = req.params;
        const user = await UserService.GetUser("name", username, false);
        if(!user) return res.status(404).json({message: "user not found"});
        const profile = await UserService.GetUser("profile", user._id);
        if(!profile) return res.status(404).json({message: "profile user not found"});
        console.log(profile);
        res.status(200).json({message: "ok"});
    }catch (err){
        console.log(err);
        res.status(500).json({message: "Internal Error"});
    }
}



export default GetUserProfile;