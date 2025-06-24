export async function GET(req, res){
    console.log(await res.params.id);
    return new Response("Hello, Next.js!");
}