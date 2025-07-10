import todosData from '../../todos.json'

import { readFile, writeFile } from "node:fs/promises";

export async function GET(request, response){
    const todoJSONString = await readFile('./todos.json', 'utf-8')
    const todos = JSON.parse(todoJSONString);
    return Response.json(todos)
}

export async function POST(request, response){
    const body = await request.json();

    const newTodo = {
        id: crypto.randomUUID(),
        text: body.text,
        completed: false,
    }

    todosData.push(newTodo)
    await writeFile('todos.json', JSON.stringify(todosData, null, 2))

    return Response.json(newTodo, {
        status: 201,
    })
}