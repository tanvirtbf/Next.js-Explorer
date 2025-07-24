export const POST = async (req, res) => {
    const {email} = await req.json()

    console.log(email);

    return new Response(JSON.stringify({status: 200, message: "Logged out"}))
}