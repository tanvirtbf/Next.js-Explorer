import { readFile, writeFile } from "node:fs/promises";
import todos from "../../todos";
import { connectDB } from "@/lib/connectDB";
import Todo from "@/models/todoModel";

export async function GET() {
  await connectDB();
  // const result = await Todo.find();

  const newTodo = await Todo.create({ 
    text: "Learn Next.js" 
  });

  console.log(newTodo);

  const todoJSONString = await readFile("./todos.json", "utf-8");
  const todos = JSON.parse(todoJSONString);
  return Response.json(newTodo);
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
