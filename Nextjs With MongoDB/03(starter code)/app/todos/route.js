import { readFile, writeFile } from "node:fs/promises";
import todos from "../../todos";
import { connectDB } from "@/lib/connectDB";
import Todo from "@/models/todoModel";
import { LucideHash } from "lucide-react";

export async function GET() {
  await connectDB();

  const allTodo = await Todo.find()

  return Response.json(allTodo.map(({ id, text, completed }) => ({ id, text, completed })));
}

export async function POST(request) {
  await connectDB();

  const todo = await request.json();
  const { id, text, completed } = await Todo.create({ text: todo.text });


  return Response.json({ id, text, completed }, {
    status: 201,
  });
}
