import { connectDB } from "@/lib/connectDB";
import users from "@/models/userModel";

export async function POST(request, response) {
    await connectDB()

    const body = await request.json();
    const { name, email, password } = body;
    console.log('first')

    if(!name || !email || !password) {
        return new Response("Missing name, email or Password!", { status: 400 });
    }

    const user = await users.findOne({ email });
    if(user) {
        return new Response("User already exists!", { status: 400 });
    }

    const newUser = await users.create({
        name, email, password
    })

    return new Response(JSON.stringify(newUser), { status: 201, success: true });
    
}