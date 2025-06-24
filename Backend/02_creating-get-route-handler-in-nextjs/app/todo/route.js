const todosData = [
  { id: 1, text: "Learn Next.js 15", completed: false },
  { id: 2, text: "Master Node.js", completed: true },
  { id: 3, text: "Learn MongoDB", completed: true },
];


export function GET(req, res) {
    console.log('Running Get Rounte Handler');
    // return Response.json(todosData)
    return new Response(JSON.stringify(todosData), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 587,
    });
}

