import { connectDB } from "@/lib/connectDB";
import Todo from "@/models/todoModel";

export async function GET(request) {
  await connectDB();
  const allTodos = await Todo.find();

  console.log(request.headers.get('cookie'));

  const response = new Response(JSON.stringify(allTodos.map(({ id, text, completed }) => ({ id, text, completed }))), {
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": "name=tanvir"
    }
  })

  return response;


}

export async function POST(request) {
  await connectDB();

  const todo = await request.json();
  const { id, text, completed } = await Todo.create({ text: todo.text });

  return Response.json(
    { id, text, completed },
    {
      status: 201,
    }
  );
}
