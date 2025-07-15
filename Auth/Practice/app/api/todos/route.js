import { connectDB } from "@/lib/connectDB";
import Todo from "@/models/todoModel";
import { cookies } from "next/headers";

export async function GET() {
  await connectDB();
  const myCookie = await cookies();
  const userId = myCookie.get("userId")?.value;

  if(!userId){
    return Response.json({message:"User not authenticated"},{ error: 'User created successfully', status:401 })
  }

  const allTodos = await Todo.find({ userId });

  return Response.json(
    allTodos.map(({ id, text, completed }) => ({ id, text, completed }))
  );
}

export async function POST(request) {
  await connectDB();
  const myCookie = await cookies();
  const userId = myCookie.get("userId")?.value;
  if(!userId){
    return Response.json({message:"User not authenticated"},{ error: 'User created successfully', status:401 })
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
