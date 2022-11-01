const mongoose = require("mongoose");

const host = process.env.MOGNO_HOST;
const port = process.env.MOGNO_PORT;
const username = process.env.MONGO_USER;
const password = process.env.MONGO_PWD;
const db = process.env.MONGO_DB
const uri = `mongodb://${username}:${password}@${host}:${port}/${db}`

const StartMongoDb = () => {
    mongoose.connect(uri)
        .then(() => {
            console.log("mongodb Ok");
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = StartMongoDb;