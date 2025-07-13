import mongoose from "mongoose";

const Todo = mongoose.model("Todo", {
    text: String,
    completed: Boolean,
})


export default Todo;