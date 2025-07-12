export async function GET(request, response){
    
}


export async function POST(request, response){
    const body = await response.json();
    const data = JSON.parse(body)
    console.log(data);

    return Response.json(body, {
        status: 201,
    })
}