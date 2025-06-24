const todosData = [
  { id: 1, text: "Learn Next.js 15", completed: false },
  { id: 2, text: "Master Node.js", completed: true },
  { id: 3, text: "Learn MongoDB", completed: true },
  { id: 4, text: "Learn Express.js", completed: false },
  { id: 5, text: "Learn React.js", completed: true },
  { id: 6, text: "Learn Mysql", completed: false },
];


export async function GET(req, res){
    const param= await res.params.id
    for(let i=0; i<todosData.length; i++){
        if(todosData[i].id===param){
            return new Response(JSON.stringify(todosData[Number(param)]), {
                headers: {
                    "Content-Type": "application/json",
                },
            })
        }
    }
    return Response.json({message: "Not Found"});
}