import { connectDB } from "@/lib/connectDB";
import Todo from "@/models/todoModel";
import { cookies } from "next/headers";

export async function GET(request) {
  await connectDB();
  const cookieStore = await cookies();
  const allTodos = await Todo.find();

  const userId =  cookieStore.get("userId")?.value;
  if (!userId) {
    return Response.json(
      { message: "User not authenticated" },
      {
        status: 401,
      }
    );
  }

  return Response.json(
    allTodos.map(({ id, text, completed }) => ({ id, text, completed }))
  );
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
