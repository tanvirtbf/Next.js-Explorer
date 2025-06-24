const todosData = [
  { id: 1, text: "Learn Next.js 15", completed: false },
  { id: 2, text: "Master Node.js", completed: true },
  { id: 3, text: "Learn MongoDB", completed: true },
  { id: 4, text: "Learn Express.js", completed: false },
  { id: 5, text: "Learn React.js", completed: true },
  { id: 6, text: "Learn Mysql", completed: false },
];


export function GET(req, res){
    return new Response(JSON.stringify(todosData), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 200,
        statusText: "Tanvir"
    })
}