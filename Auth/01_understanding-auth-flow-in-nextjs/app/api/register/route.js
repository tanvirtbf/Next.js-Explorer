export async function POST(request, response) {
    const body = await request.json();
    const { name, email, password } = body;
    
}