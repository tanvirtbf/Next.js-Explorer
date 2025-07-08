import todos from '../../../todos.json'

export async function PATCH(req, res){
    const { id } = await req.params;
    const editableTodo = await req.json();

    return new Response(JSON.stringify({todos: 1}));
}