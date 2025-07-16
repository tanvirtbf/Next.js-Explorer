import User from "@/models/userModel";
import { createHmac } from "crypto";
import { cookies } from "next/headers";

export async function getLoggedInUser() {
  const cookieStore = await cookies();
  const errorResponse = Response.json(
    { error: "Please login" },
    {
      status: 401,
    }
  );
  const [userId, signatureFromCookie] = cookieStore.get("userId")?.value.split(".") || "";

  if (!userId) {
    return errorResponse;
  }

  const signature = createHmac("sha256", process.env.COOKIE_SECRET)
    .update(user.id)
    .digest("hex");

  if (signature !== signatureFromCookie) {
    return errorResponse;
  }

  const user = await User.findById(userId);

  if (!user) {
    return errorResponse;
  }

  return user;
}

export function signCookie(cookie){
  const signature = createHmac("sha256", process.env.COOKIE_SECRET)
    .update(cookie)
    .digest("hex");

  return `${cookie}.${signature}`;
}
