import { connectDB } from "@/lib/connectDB";
import Todo from "@/models/todoModel";
import { cookies } from "next/headers";

export async function GET(request) {
  await connectDB();
  const allTodos = await Todo.find();

  const myCookie = await cookies();
  myCookie.set('class', 'nextjs', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax'
  });
  console.log(myCookie.get('age'));

  // console.log(request.headers.get('cookie'))

  return new Response(JSON.stringify(allTodos.map(({ id, text, completed }) => ({ id, text, completed }))), {
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': 'age=tanvir'
    }
  });

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
