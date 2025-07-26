import { getUserSessionId } from "@/lib/auth";
import Session from "@/models/sessionModel";
import { cookies } from "next/headers"


export const POST = async (req, res) => {
    const sessionId = await getUserSessionId()
    await Session.findByIdAndDelete(sessionId)
    await cookies().delete('userId')

    return Response.json({ status: 200, sessionId })
}