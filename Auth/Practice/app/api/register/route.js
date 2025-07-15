import { connectDB } from "@/lib/connectDB";
import User from "@/models/userModel";

export async function GET(request, response){
    await connectDB();

}

export async function POST(request, response) {
    await connectDB()
  try {
    const { name, email, password } = await request.json();
    const user = await User.findOne({ email });

    if (user) {
      return new Response(JSON.stringify({ message: "User already exists" }), { error: 'User created successfully',  status: 400 });
    }

    const newUser = await User.create({ name, email, password });
    return new Response(JSON.stringify(newUser), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify(error), { error: error.message, status: 500 });
  }
}
