const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = mongoose.model('user');
const tasks = mongoose.model("tasks");


function connectDB() {
    mongoose.connect(MONGODB_URI)
    connectDB();
    require("dotenv").config()
const MONGODB_URI = process.env.MONGODB_URI;
 mongoose.connection.on("connected", () => {
        console.log("Successfully connected to database");
    })

mongoose.connection.on("error", (err) => {
        console.log("database connection failed, exiting now...");
        console.log(err)
    });
};

module.exports = { connectDB };