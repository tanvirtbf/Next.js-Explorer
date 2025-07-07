import { writeFile } from "node:fs/promises";
import todosData from '../../todos.json'

export async function GET(req, res){
    return Response.json(todosData)
}

export async function POST(req, res){
    const body = await req.json()
    todosData.push(body)
    await writeFile("todos.json", JSON.stringify(todosData))
    return Response.json(todosData)
}
