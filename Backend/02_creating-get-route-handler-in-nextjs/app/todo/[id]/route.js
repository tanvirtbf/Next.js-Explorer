const todosData = [
  { id: 1, text: "Learn Next.js 15", completed: false },
  { id: 2, text: "Master Node.js", completed: true },
  { id: 3, text: "Learn MongoDB", completed: true },
];


export async function GET(req, res){
    const {id} = await res.params;
    const todo = todosData.find((todos) => todos.id === Number(id))
    return Response.json(todo)
}