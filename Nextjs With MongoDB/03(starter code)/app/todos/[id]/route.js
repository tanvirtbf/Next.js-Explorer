import Todo from "@/models/todoModel";


export async function GET(_, { params }) {
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
  const editTodoData = await request.json();
  const { id } = await params;
  const todoIndex = todos.findIndex((todo) => id === todo.id);
  const todo = todos[todoIndex];

  if (editTodoData.id) {
    return Response.json(
      { error: "Changing ID is not allow." },
      {
        status: 403,
      }
    );
  }

  const editedTodo = { ...todo, ...editTodoData };
  todos[todoIndex] = editedTodo;

  await writeFile("todos.json", JSON.stringify(todos, null, 2));
  return Response.json(editedTodo);
}

export async function DELETE(_, { params }) {
  const { id } = await params;
  const todoIndex = await Todo.findByIdAndDelete(id);
  return new Response(null, {
    status: 204,
  });
}
