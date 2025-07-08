import { writeFile } from "node:fs/promises";
import todos from '../../../todos.json'

export async function PUT(req, res){
    const editableTodo = await req.json();
    const {id} = await res.params;

    const todoIndex = todos.findIndex((todo) => todo.id === id);

    const todo = todos[todoIndex]

    todos[todoIndex] = editableTodo;
    await writeFile('./todos.json', JSON.stringify(todos));

    return new Response(JSON.stringify(todo));
}