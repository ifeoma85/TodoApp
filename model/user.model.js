const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: { type: String, default: null},
    username: { type: String, unique: true},
    password: { type: String},
    token: { type: String},
});
module.exports  = mongoose.model("user", userSchema);
