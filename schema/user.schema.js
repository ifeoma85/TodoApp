const mongoose = required ('mongoose');
const userSchema = new mongoose.Schema({
    fullname: {
        type:String,
        required:[true, "Fullname is Mandatory"]
    },
    username: {
    type:String,
    required:[true, "Username is Mandatory"]
},
password: {
    type:String,
    required:[true, "Password is Mandatory"]
},
token: {
    type: String,
    required: true,
}
});