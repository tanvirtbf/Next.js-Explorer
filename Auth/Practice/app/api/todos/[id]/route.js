import Todo from "@/models/todoModel";
import { connectDB } from "@/lib/connectDB";

export async function GET(_, { params }) {
  await connectDB();

  const myCookie = await cookies();
  const userId = myCookie.get("userId")?.value;

  const { id } = await params;
  const todo = await Todo.findById(id);
  if (!todo) {
    return Response.json(
      { error: "Todo not found" },
      {
        status: 404,
      }
    );
  }
  return Response.json(todo);
}

export async function PUT(request, { params }) {
  await connectDB();

  const myCookie = await cookies();
  const userId = myCookie.get("userId")?.value;

  if (!userId) {
    return Response.json(
      { error: "You are not authorized to edit this todo" },
      {
        status: 401,
      }
    );
  }

  const editTodoData = await request.json();
  const { id } = await params;
  const editedTodo = await Todo.findByIdAndUpdate(id, editTodoData, {
    new: true,
  });

  return Response.json(editedTodo);
}

export async function DELETE(_, { params }) {
  await connectDB();
  const myCookie = await cookies();
  const userId = myCookie.get("userId")?.value;
  if (!userId) {
    return Response.json(
      { error: "You are not authorized to delete this todo" },
      {
        status: 401,
      }
    );
  }
  const { id } = await params;
  await Todo.findByIdAndDelete(id);
  return new Response(null, {
    status: 204,
  });
}
