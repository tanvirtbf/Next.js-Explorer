import User from "@/models/userModel";
import { cookies } from "next/headers";

export async function getLoggedInUser(){
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;
    const user = await User.findById(userId);
    if(!user){
        return Response.json(
            {error: 'Please Login'},
            {status: 401}
        )
    }
}