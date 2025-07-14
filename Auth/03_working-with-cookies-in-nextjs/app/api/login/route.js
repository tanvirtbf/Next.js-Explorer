import { connectDB } from "@/lib/connectDB";
import User from "@/models/userModel";
import { cookies } from "next/headers";

export async function POST(request) {
  await connectDB();
  const myCookie = await cookies();
  const { email, password } = await request.json();

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return Response.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    myCookie.set({
      name: 'userId',
      value: user.id,
      httpOnly: true,
      maxAge: 60,
    })

    return Response.json(user, { success: true, message: "Successfully Logged In" });

  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      return Response.json(
        { error: "Email already exists" },
        {
          status: 409,
        }
      );
    } else {
      return Response.json(
        { error: "Something went wrong" },
        {
          status: 500,
        }
      );
    }
  }
}
