export function GET(req, res){
    return new Response(JSON.stringify({name: "Tanvir Ahmed", age:25, email: "tanvirahmed@gmail.com"}), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 200,
        statusText: "Tanvir"
    })
}