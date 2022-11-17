import {UserService} from "../../../services/index.js";
import fs from "fs";


const UploadProfile = async (req, res) => {
    try{
        const {username} = req.params;
        const {file} = req.files;
        if(!file) return res.status(400).json({message: "file image required"});
        const user = await UserService.GetUser("name", username, false);
        if(!user) return res.status(404).json({message: "User not Found"});

        const name = file.name.split(".");
        if(name[name.length-1] !== "png" && name[name.length-1] !== "jpeg") return res.status(400).json({message: "png / jpeg only"});

        const profile = await UserService.GetUser("profile", user._id, false);
        if(!profile) return res.status(404).json({message: "Profile User not found"});

        profile.img_profile = await executeFile(profile, user._id, file);

        await UserService.UpdateUser("profile", profile);
        res.status(200).json({message: "ok"});
    }catch (err){
        console.log(err);
        res.status(500).json({message: "Internal Error"});
    }
}

const executeFile = async (data, id, file) => {
    const path = `./data/${id}/profile/`
    if(data.img_profile !== "./data/default/profile/default.png") {
        await fs.rmSync(data.img_profile, {recursive: true});
    }

    // if(!fs.existsSync(data.img_profile)) {
        fs.mkdirSync(path, {recursive: true});
    // }

    await file.mv(`${path}` + `profile_${id}.png`, async function(err){
        if(err) throw err;
    });
    return `${path}profile_${id}.png`;
}

export default UploadProfile;