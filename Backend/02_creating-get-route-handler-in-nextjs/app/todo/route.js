import todosData from "../../todos.json";

export async function GET(req, res) {
    console.log('Running Get Handler!');
    return Response.json(todosData);
    // return new Response(JSON.stringify(todosData), {
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     status: 200,
    //     statusText: "Hello World!"
    // })
}