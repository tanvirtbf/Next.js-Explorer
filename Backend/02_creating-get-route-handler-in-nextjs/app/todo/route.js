export function GET(req, res) {
    console.log('Running Get Rounte Handler');
    return new Response(JSON.stringify({message: "Hello from GET Route Handler"}), {
        headers: {
            // "Content-Type": "application/json",
            "Content-Type": "text/plain",

        }
    })
}

