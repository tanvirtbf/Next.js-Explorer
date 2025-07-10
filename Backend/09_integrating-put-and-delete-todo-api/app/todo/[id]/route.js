import todosData from '../../../todos.json'
import { readFile, writeFile } from "node:fs/promises";

export async function DELETE(request, response){
    const {id} = await response.params; 
    const todo = todosData.find((todoItem) => todoItem.id===id)
    if(!todo){
        return Response.json(
            {error: "Todo not found"},
            {
                status: 404,
            }
        )
    }

    todosData.splice(todosData.indexOf(todo), 1)
    await writeFile('todos.json', JSON.stringify(todosData, null, 2))

    return new Response(null, {
        status: 204,
    })
}