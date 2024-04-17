const mongoose = require("mongoose");
require("dotenv").config()

const MONGODB_URI = process.env.MONGODB_URI;

function connectDB() {
    mongoose.connect(MONGODB_URI)

 mongoose.connection.on("connected", () => {
        console.log("Successfully connected to database");
    })

mongoose.connection.on("error", (err) => {
       console.log(err)
        console.log("database connection failed, exiting now...");
        
    });
};

module.exports = { connectDB };