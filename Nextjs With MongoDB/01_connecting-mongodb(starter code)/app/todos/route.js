import { readFile, writeFile } from "node:fs/promises";
import todos from "../../todos";
import { db } from "@/lib/connectDB";


export async function GET() {

  const result = await db.collection('users').insertOne({ name: 'Sadia'})
  console.log(result)
  console.log('Hello')

  const todoJSONString = await readFile("./todos.json", "utf-8");
  const todos = JSON.parse(todoJSONString);
  return Response.json(todos);
}

export async function POST(request) {
  const todo = await request.json();
  const newTodo = {
    id: crypto.randomUUID(),
    text: todo.text,
    completed: false,
  };

  todos.push(newTodo);
  await writeFile("todos.json", JSON.stringify(todos, null, 2));
  return Response.json(newTodo, {
    status: 201,
  });
}
