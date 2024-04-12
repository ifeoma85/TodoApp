const mongoose = required ('mongoose');
const tasksSchema = new mongoose.Schema({
tasks: {
    type:String,
    required:true,
    },
pending_tasks: {
    type:String,
    required:true,
},
completed_tasks: {
    type:String,
    required:true,
},
deleted_tasks: {
    type: String,
    required: true,
}
})