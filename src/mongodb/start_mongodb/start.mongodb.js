import mongoose from "mongoose";

const StartMongoDb = (host, port, db, username, password) => {
    const uri = `mongodb://${username}:${password}@${host}:${port}/${db}`
    mongoose.connect(uri)
        .then(() => {
            console.log("mongodb Ok");
        })
        .catch((err) => {
            console.log(err);
        })
}

export default StartMongoDb;