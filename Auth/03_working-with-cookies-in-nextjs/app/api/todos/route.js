import { connectDB } from "@/lib/connectDB";
import Todo from "@/models/todoModel";
import { cookies } from "next/headers";

export async function GET(request) {
  await connectDB();
  const cookieStore = await cookies();

  const userId = cookieStore.get("userId")?.value;

  const user = await Todo.findOne({ userId})
  if(!user){
    return Response.json(
      { error: "User not found" },
      {
        status: 404,
      }
    );
  }

  const allTodos = await Todo.findById({ userId });


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
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    return Response.json(
      { message: "User not authenticated" },
      {
        status: 401,
      }
    );
  }

  const todo = await request.json();
  const { id, text, completed } = await Todo.create({ text: todo.text, userId });

  return Response.json(
    { id, text, completed },
    {
      status: 201,
    }
  );
}
