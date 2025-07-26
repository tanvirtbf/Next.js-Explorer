import { getUserSessionId } from "@/lib/auth";
import Session from "@/models/sessionModel";
import { cookies } from "next/headers"


export const POST = async (req, res) => {
    const cookieStore = await cookies()
    const sessionId = await getUserSessionId()
    await Session.findByIdAndDelete(sessionId)
    cookieStore.delete('userId')

    return Response.json({ status: 200, sessionId })
}