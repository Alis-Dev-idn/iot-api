import {MongoModel} from "../../mongodb/index.js";


const Create = async (data) => {
    console.log(data);
    const app = await MongoModel.AppSchema(data);
    await app.save();
    return "ok";
}

export default Create;