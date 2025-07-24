import Session from "@/models/sessionModel";
import { cookies } from "next/headers"


export const POST = async (req, res) => {
    const myCookies = await cookies();
    const { email } = await req.json();

    myCookies.delete("userId")

    return new Response(JSON.stringify({status: 200, message: "Logged out"}))
}