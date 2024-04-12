const mongoose = require("mongoose");

const userSchema = new mongoose.model({
    fullname: { type: String, default: null},
    username: { type: String, unique: true},
    password: { type: String},
    token: { type: String},
});
const user = mongoose.model("user", userSchema);
module.exports  = user;
