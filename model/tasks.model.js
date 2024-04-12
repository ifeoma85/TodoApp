const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
    tasks: { type: String, default: null},
    pending_tasks: { type: String, unique: true},
    completed_tasks: { type: String},
    deleted_tasks: { type: String},
});
const tasks = mongoose.model("tasks", tasksSchema);
module.exports = tasks;