import User from "@/models/userModel";
import { cookies } from "next/headers";

export async function getLoggedInUser() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  const errorResponse = Response.json(
    { error: "Please Login" },
    { status: 401 }
  );

  if (!userId) {
    return errorResponse;
  }

  const user = await User.findById(userId);
  if (!user) {
    return errorResponse;
  }

  return user;
}
