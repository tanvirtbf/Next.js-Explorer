import mongoose from "mongoose";

const Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
})


export default Todo;