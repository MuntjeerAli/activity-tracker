import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "name value must be provided"],
        trim: true,
        maxlength: [20, "name value must not exceeds 20 characters"]
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

const Tasks = mongoose.model("Task", TaskSchema);

export default Tasks