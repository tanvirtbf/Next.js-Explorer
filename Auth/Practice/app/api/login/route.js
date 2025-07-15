import User from "@/models/userModel";
import { cookies } from "next/headers";

export async function POST(req, res) {
    const myCookies = await cookies();
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response("Email and password are required", { status: 400 });
    }

    const user = await User.findOne({ email, password });

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    myCookies.set({
        name: 'userId',
        value: user._id,
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
    })

    return new Response(JSON.stringify({ message: "Login Successfull" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to login", { status: 500 });
  }
}
